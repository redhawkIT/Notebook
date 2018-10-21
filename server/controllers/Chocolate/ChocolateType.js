const { ChocolateType } = require('../../models')

const REST = require('../REST')
module.exports = class CHOCOLATE_TYPE extends REST {
  constructor (router) {
    super(router, ChocolateType)
  }
}
