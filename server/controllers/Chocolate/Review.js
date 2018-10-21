const { Review } = require('../../models')

const REST = require('../REST')
module.exports = class REVIEW extends REST {
  constructor (router) {
    super(router, Review)
  }
}
