const express = require('express');
const passport = require('passport');
const SpotifyService = require('../services/spotify');


//const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

const cacheResponse = require('../utils/cacheResponse');
const FIVE_MINUTES_IN_SECONDS = 1000 * 60 * 5;

// JWT strategy
require('../utils/auth/strategies/jwt');

function musicApi(app) {
    const router = express.Router();
    app.use('/api/music', router);

    const spotifyService = new SpotifyService();

    // GET /api/music/tracks
    router.get(
        '/tracks',
        //passport.authenticate('jwt', { session: false }),
        //scopesValidationHandler(['read:movies']),
        async function (req, res, next) {
            //cacheResponse(res, FIVE_MINUTES_IN_SECONDS);

            try {
                const tracks = await spotifyService.getDiscover();

                res.status(200).json({
                    data: tracks,
                    message: 'tracks listed'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    // GET /api/music/track
    router.get(
        '/track',
        //passport.authenticate('jwt', { session: false }),
        //scopesValidationHandler(['read:movies']),
        async function (req, res, next) {
            //cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
            const { name, collections } = req.body;

            try {
                const track = await spotifyService.getTrack(name, collections);

                res.status(200).json({
                    data: track,
                    message: 'track listed'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.get(
        '/playlist',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['read:movies']),
        async function (req, res, next) {
            cacheResponse(res, FIVE_MINUTES_IN_SECONDS);

            try {
                const playList = await spotifyService.getPlaylists();

                res.status(200).json({
                    data: playList,
                    message: 'playList listed'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.get(
        '/albums',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['read:movies']),
        async function (req, res, next) {
            cacheResponse(res, FIVE_MINUTES_IN_SECONDS);

            try {
                const albums = await spotifyService.getAlbums();

                res.status(200).json({
                    data: albums,
                    message: 'albums listed'
                });
            } catch (err) {
                next(err);
            }
        }
    );
}

module.exports = musicApi;
