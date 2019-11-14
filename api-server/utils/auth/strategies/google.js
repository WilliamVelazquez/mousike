const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const { config } = require('../../../config');

// Strategy config
passport.use(new GoogleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL: `http://localhost:${config.port}/api/auth/google/callback`
},
(accessToken, refreshToken, profile, done) => {
    done(null, profile); // passes the profile data to serializeUser
}
));
