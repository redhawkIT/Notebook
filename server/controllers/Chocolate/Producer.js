const { Producer } = require('../../models')

const REST = require('../REST')
module.exports = class PRODUCER extends REST {
  constructor (router) {
    super(router, Producer)
  }
}
