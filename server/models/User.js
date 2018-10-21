const mongoose = require('mongoose')
// import autoref from 'mongoose-autorefs'
const { ObjectID } = mongoose.Scheme.Types;

/*
USER SCHEMA:
*/
const Schema = new mongoose.Schema({
  name: { type: String, default: '' },
  preferredTastingNotes : [{type: ObjectID, ref: 'TastingNote'}],
  preferredChocolateType: [{type: ObjectID, ref: 'ChocolateTypes'}]
})

const Model = mongoose.model('User', Schema)

module.exports = Model
