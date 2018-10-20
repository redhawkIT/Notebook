import restify from 'express-restify-mongoose'

export default class Restify {
  constructor (router, model) {
    this.model = model
    this.config = {
      prefix: '/api',
      version: '/v1',
      name: this.model.modelName.toLowerCase(),
      access: (req) => 'private'
    }
    restify.serve(router, this.model, this.config)
    console.log(`REST: Instantiated controller: ${this.config.name}`)
  }
}
