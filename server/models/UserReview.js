const mongoose = require('mongoose')
// import autoref from 'mongoose-autorefs'
const { ObjectId } = mongoose.Schema.Types

/*
USERREVIEW SCHEMA:
*/
const Schema = new mongoose.Schema({
  authorId: { type: ObjectId, default: 'User' },
  reviewText: { type: String, default: '' },
  tastingNotes: [{ type: ObjectId, ref: 'TastingNote' }],
  productText: { type: String, default: '' },
  rating: { type: Number, default: 0 }
})

const Model = mongoose.model('UserReview', Schema)

module.exports = Model
