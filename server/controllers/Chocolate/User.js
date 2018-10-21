const { User } = require('../../models')

const REST = require('../REST')
module.exports = class USER extends REST {
  constructor (router) {
    super(router, User)
  }
}
