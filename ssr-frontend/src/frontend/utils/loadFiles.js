const mockSongs = require('./mocks/songs');

function loadFiles(songs, cb) {
  const files = [];
  // eslint-disable-next-line array-callback-return
  Object.keys(songs).map((key) => {
    const src = apiUrl + songs[key].url;
    console.log(src);
    files.push(src);
    cb(null, files);
  });

}
loadFiles(mockSongs.songs, () => {});

export default loadFiles;
