const { User } = require('../../models')

const REST = require('./REST')
module.exports = class CVE extends REST {
  constructor (router) {
    super(router, User)
  }
}
