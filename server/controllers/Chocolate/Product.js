const { Product } = require('../../models')

const REST = require('../REST')
module.exports = class PRODUCT extends REST {
  constructor (router) {
    super(router, Product)
  }
}
