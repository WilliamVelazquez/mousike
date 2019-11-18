require('dotenv').config();
const Spotify = require('node-spotify-api')
const { config } = require('../config/index')

const SONG_PREVIEW_TIME = 30000;

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
      item.artists.map(artist => {
        artists = !artists ? artists = artist.name : `${artists  }, ${artist.name}`
        return artists;
      })
      return {
        name: item.name,
        preview: item.preview_url,
        artist: artists
      };
    })

    // eslint-disable-next-line consistent-return
    return obj;
  }

  // async getArtist() {
    
  // }

  async getDiscover() {
    const response = await this.spotify.request('https://api.spotify.com/v1/playlists/37i9dQZF1DX68aCfKW9xMy')
    
    const obj = response.tracks.items.map(item => {
      let artists;
      // let albums;
      // console.log (item);
      item.track.artists.map(artist => {
        artists = !artists ? artists = artist.name : `${artists  }, ${artist.name}`;
        return artists;
    })
      // item.track.album.map(album => albums = !albums ? albums = album.name : `${albums  }, ${album.name}`)
      // item.track.artists.map(artist => artists = !artists ? artists = artist.name : `${artists  }, ${artist.name}`)
      // item.track.artists.map(artist => artists = !artists ? artists = artist.name : `${artists  }, ${artist.name}`)
      const getStringFromMs=(ms)=>{

        const SECONDS_TO_MS=1000;
        const MINUTES_TO_MS=SECONDS_TO_MS*60;
        const HOURS_TO_MS=MINUTES_TO_MS*60;

        let hours = Math.floor(ms/HOURS_TO_MS);
        hours= hours>=10 ? hours: `0${hours}`; 
        let minutes = Math.floor(ms%HOURS_TO_MS/MINUTES_TO_MS);
        minutes= minutes>=10 ? minutes: `0${minutes}`; 
        let seconds = Math.floor(ms%HOURS_TO_MS%MINUTES_TO_MS/SECONDS_TO_MS);
        seconds= seconds>=10 ? seconds: `0${seconds}`; 

        

        // eslint-disable-next-line radix
        return parseInt(hours) ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
      }
        return {
          _id:item.track.href,
          artist: artists,
          name: item.track.name,
          preview: item.track.preview_url,
          images:item.track.album.images,
          album:item.track.album.name,
          durationMs:SONG_PREVIEW_TIME,
          durationStr:getStringFromMs(SONG_PREVIEW_TIME),
        };
            
    })

    return obj;
  }

  async getPlaylist() {
    const response = await this.spotify.request('https://api.spotify.com/v1/playlists/37i9dQZF1DX68aCfKW9xMy')
    
    const obj = response.tracks.items.map(item => {
      let artists;
      item.artists.map(artist => {
        artists = !artists ? artists = artist.name : `${artists  }, ${artist.name}`
        return artists;
      })
      return {
        name: item.name,
        preview: item.preview_url,
        artist: artists
      };
    })

    return obj;
  }

  // async getAlbums() {

  // }
}

module.exports = SpotifyService;