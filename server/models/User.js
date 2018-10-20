const mongoose = require('mongoose')
// import autoref from 'mongoose-autorefs'

/*
USER SCHEMA:
*/
const Schema = new mongoose.Schema({
  name: { type: String, default: '' }
})

const Model = mongoose.model('User', Schema)

module.exports = Model
