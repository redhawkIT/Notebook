const mongoose = require('mongoose')
// import autoref from 'mongoose-autorefs'
const { ObjectId } = mongoose.Schema.Types

/*
USER SCHEMA:
*/
const Schema = new mongoose.Schema({
  name: { type: String, default: '' },
  preferredTastingNotes: [{ type: ObjectId, ref: 'TastingNote' }],
  preferredChocolateType: [{ type: ObjectId, ref: 'ChocolateType' }]
})

const Model = mongoose.model('User', Schema)

module.exports = Model
