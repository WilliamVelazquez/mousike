/* eslint-disable consistent-return */
/* eslint-disable func-names */
const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const cookieSession = require('cookie-session');
const ApiKeysService = require('../services/apiKeys');
const UsersService = require('../services/users');
const validationHandler = require('../utils/middleware/validationHandler');
const { config } = require('../config');

const {
  createUserSchema,
  createProviderUserSchema
} = require('../utils/schemas/users');

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send('You must login!');
  }
}

// Basic strategy
require('../utils/auth/strategies/basic');

// Google strategy
require('../utils/auth/strategies/google');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);

  const apiKeysService = new ApiKeysService();
  const usersService = new UsersService();

  // cookieSession config
  app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: ['randomstringhere']
  }));

  app.use(passport.initialize()); // Used to initialize passport
  app.use(passport.session()); // Used to persist login sessions

  // Used to stuff a piece of information into a cookie
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Used to decode the received cookie and persist session
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  // Acces by /api/auth/sign-in/google
  router.get('/sign-in/google', passport.authenticate('google', {
    scope: ['profile'] // Used to specify the required data
  }))

  // Acces by /api/auth/google/callback
  // The middleware receives the data from Google and runs the function on Strategy config
  router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/api/auth/home');
  });

  // Secret route
  router.get('/home', isUserAuthenticated, (req, res) => {
    res.send('You have reached the secret route');
  });

  router.post('/sign-in', async function (req, res, next) {
    const { apiKeyToken } = req.body;

    if (!apiKeyToken) {
      next(boom.unauthorized('apiKeyToken is required'));
    }

    passport.authenticate('basic', function (error, user) {
      try {
        if (error || !user) {
          next(boom.unauthorized());
        }

        req.login(user, { session: false }, async function (err) {
          if (err) {
            next(err);
          }

          const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken });

          if (!apiKey) {
            next(boom.unauthorized());
          }

          const { _id: id, name, email } = user;

          const payload = {
            sub: id,
            name,
            email,
            scopes: apiKey.scopes
          };

          const token = jwt.sign(payload, config.authJwtSecret, {
            expiresIn: '15m'
          });

          return res.status(200).json({ token, user: { id, name, email } });
        });
      } catch (err) {
        next(err);
      }
    })(req, res, next);
  });

  router.post('/sign-up', validationHandler(createUserSchema), async function (
    req,
    res,
    next
  ) {
    const { body: user } = req;

    try {
      const createdUserId = await usersService.createUser({ user });

      res.status(201).json({
        data: createdUserId,
        message: 'user created'
      });
    } catch (error) {
      next(error);
    }
  });

  router.post(
    '/sign-provider',
    validationHandler(createProviderUserSchema),
    async function (req, res, next) {
      const { body } = req;

      const { apiKeyToken, ...user } = body;

      if (!apiKeyToken) {
        next(boom.unauthorized('apiKeyToken is required'));
      }

      try {
        const queriedUser = await usersService.getOrCreateUser({ user });
        const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken });

        if (!apiKey) {
          next(boom.unauthorized());
        }

        const { _id: id, name, email } = queriedUser;

        const payload = {
          sub: id,
          name,
          email,
          scopes: apiKey.scopes
        };

        const token = jwt.sign(payload, config.authJwtSecret, {
          expiresIn: '15m'
        });

        return res.status(200).json({ token, user: { id, name, email } });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = authApi;
