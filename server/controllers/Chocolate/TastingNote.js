const { TastingNote } = require('../../models')

const REST = require('../REST')
module.exports = class TASTING_NOTE extends REST {
  constructor (router) {
    super(router, TastingNote)
  }
}
