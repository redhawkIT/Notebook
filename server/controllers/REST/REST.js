const restify = require('express-restify-mongoose')

module.exports = class Restify {
  constructor (router, model) {
    this.model = model
    this.config = {
      prefix: '',
      version: '',
      name: this.model.modelName.toLowerCase(),
      access: (req) => 'private'
    }
    restify.serve(router, this.model, this.config)
    console.log(`REST: Instantiated controller: .../${this.config.name}`)
  }
}
