const {Command, flags} = require('@oclif/command')
const spotTest = require("./spotifyAPI");
console.log(spotTest);

class MynewcliCommand extends Command {
  async run() {
    const {flags} = this.parse(MynewcliCommand)
    const title = flags.title || 'world'
    const spotify = flags.spotify
    this.log(`hello ${spotify} from .\\src\\index.js`)
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
  spotify: flags.string(spotTest())
}

module.exports = MynewcliCommand
