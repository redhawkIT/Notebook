const mongoose = require('mongoose');
// import autoref from 'mongoose-autorefs'
const { ObjectID } = mongoose.Scheme.Types;

/*
Producer SCHEMA:
*/
const Schema = new mongoose.Schema({
  producerName:  { type: Boolean, default: false },
  producerDescription: { type: String, default: '' },
  producerIsClaimed : { type: Boolean, default: false },
  producerUsername: { type: String, ref: '' }
})

const Model = mongoose.model('Producer', Schema)

module.exports = Model