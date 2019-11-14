require('dotenv').config();
const Spotify = require('node-spotify-api')
const { config } = require('../config/index')

class SpotifyService {
  constructor() {
    this.spotify = new Spotify({
      id: config.spotifyClientID,
      secret: config.spotifyClientSecret
    })
  }

  async getTrack(query, limit = 1) {
    if (!query) return;
    const response = await this.spotify.search({ type: 'track', query, limit })

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

  async getArtist() {
    
  }

  async getDiscover() {
    const response = await this.spotify.request('https://api.spotify.com/v1/playlists/37i9dQZF1DX68aCfKW9xMy')
    
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

  async getPlaylist() {
    const response = await this.spotify.request('https://api.spotify.com/v1/playlists/37i9dQZF1DX68aCfKW9xMy')
    
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

  async getAlbums() {

  }
}

module.exports = SpotifyService;