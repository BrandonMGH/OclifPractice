const {Command, flags} = require('@oclif/command')

class MynewcliCommand extends Command {
  async run() {
    const {flags} = this.parse(MynewcliCommand)
    const title = flags.title || 'world'
    this.log(`hello ${title} from .\\src\\index.js`)
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
}

module.exports = MynewcliCommand
