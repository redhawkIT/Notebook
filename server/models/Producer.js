const mongoose = require('mongoose')
// import autoref from 'mongoose-autorefs'
// const { ObjectId } = mongoose.Schema.Types

/*
Producer SCHEMA:
*/
const Schema = new mongoose.Schema({
  producerName: { type: Boolean, default: false },
  producerDescription: { type: String, default: '' },
  producerIsClaimed: { type: Boolean, default: false },
  producerUsername: { type: String, ref: 'User' }
})

const Model = mongoose.model('Producer', Schema)

module.exports = Model
