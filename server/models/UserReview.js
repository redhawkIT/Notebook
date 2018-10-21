const mongoose = require('mongoose');
// import autoref from 'mongoose-autorefs'
const { ObjectID } = mongoose.Scheme.Types;

/*
USERREVIEW SCHEMA:
*/
const Schema = new mongoose.Schema({
    authorId:  { type: ObjectID, default: 'User' },
    reviewText: { type: String, default: '' },
    tastingNotes: [{ type: ObjectID, ref: 'TastingNotes' }],
    productText: { type: String, default: '' },
    rating: { type: Number, default: 0 }
})

const Model = mongoose.model('UserReview', Schema)

module.exports = Model