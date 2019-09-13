require('dotenv').config()
const {Command, flags} = require('@oclif/command')
const axios = require("axios");

const apiKey = process.env.OMDB_API_KEY

// const spotTest = require("./spotifyAPI");
// // console.log(spotTest);


function test(postNumber){
  axios.get(`http://www.omdbapi.com/?t=${postNumber}&y=&plot=short&apikey=${apiKey}`)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

class MynewcliCommand extends Command {
  async run() {
    const {flags} = this.parse(MynewcliCommand)
    const title = flags.title || 'world'
    const spotify = flags.spotify
    test(spotify)
    // this.log(`${spotify} from .\\src\\index.js`)
  }
}

MynewcliCommand.description = `Describe the command here
...
Extra documentation goes here
`

MynewcliCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
  title: flags.string({char: 'n', description: 'name to print'}),
  spotify: flags.string({char: 'n', description: 'name to print'})
}

module.exports = MynewcliCommand

