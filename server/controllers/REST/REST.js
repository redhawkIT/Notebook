const restify = require('express-restify-mongoose')

module.exports = class Restify {
  constructor (router, model) {
    this.model = model
    this.config = {
      prefix: '',
      version: '',
      name: this.model.modelName.toLowerCase(),
      allowRegex: true,
      runValidators: false,
      private: [],
      protected: [],
      access: this.access,
      findOneAndUpdate: true,
      findOneAndRemove: true,
      preMiddleware: this.preMiddleware,
      preCreate: this.preCreate,
      preRead: this.preRead,
      preUpdate: this.preUpdate,
      preDelete: this.preDelete,
      postCreate: this.preCreate,
      postRead: this.preRead,
      postUpdate: this.preUpdate,
      postDelete: this.preDelete,
      postProcess: this.postProcess,
      outputFn: this.outputFn,
      onError: this.onError
    }
    restify.serve(router, this.model, this.config)
    console.log(`REST: Instantiated controller: .../${this.config.name}`)
  }
  // PERMISSIONS
  access (req) { return 'public' }
  // PRE MIDDLEWARE
  preMiddleware (req, res, next) { next() }
  preCreate (req, res, next) { next() }
  preRead (req, res, next) { next() }
  preUpdate (req, res, next) { next() }
  preDelete (req, res, next) { next() }
  // POST MIDDLEWARE
  postCreate (req, res, next) { next() }
  postRead (req, res, next) { next() }
  postUpdate (req, res, next) { next() }
  postDelete (req, res, next) { next() }
  // FORMATTING
  postProcess (req, res) { return undefined }
  outputFn (req, res) {
    const { result, statusCode } = req.erm
    res.status(statusCode).json(result)
  }
  onError (err, req, res, next) {
    const { statusCode } = req.erm
    res.status(statusCode).json({ message: err.message })
  }
}
