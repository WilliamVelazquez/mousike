// DEBUG=app:* node scripts/mongo/seedSongs.js

const chalk = require('chalk');
const debug = require('debug')('app:scripts:songs');
const MongoLib = require('../../lib/mongo');
const { songsMock } = require('../../utils/mocks/songs');

async function seedSongs() {
  try {
    const mongoDB = new MongoLib();
    const promises = songsMock.map(async song => {
      await mongoDB.create('songs', song);
    });


    await Promise.all(promises);
    debug(chalk.green(`${promises.length} songs have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

seedSongs();
