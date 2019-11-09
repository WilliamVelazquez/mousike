require('dotenv').config();
const axios = require('axios')
const Spotify = require('node-spotify-api')
const { spotifySearchURL } = require('./constant/secrets')

const spotify = new Spotify({
    id: process.env.SPOTIFY_CLIENT_ID,
    secret: process.env.SPOTIFY_CLIENT_SECRET
})



const getTrack = async (query, limit = 1) => {
    if (!query) return;
    const response = await spotify.search({ type: 'track', query, limit })

    const obj = response.tracks.items.map(item => {
        let artists;
        item.artists.map(artist => artists = !artists ? artists = artist.name : artists + `, ${artist.name}`)
        return {
            name: item.name,
            preview: item.preview_url,
            artist: artists
        };
    })

    return obj;
}

/*
Auth Token Requiered.


const getAuthToken = () => {
  
}


const getArtist = (query = '', authToken = '') => {
  let artists;
  axios.get(`${spotifySearchURL}${query}&type=artist&access_token=${authToken}`)
    .then(response => {
      artists = response.data.artists;
      console.log(artists)
    })
    .catch(error => {
      console.log("Error trying to get artist "+error)
    })
}
module.exports.getArtist = getArtist;
*/

module.exports.getTrack = getTrack;