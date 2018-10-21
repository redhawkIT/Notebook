const mongoose = require('mongoose')
// import autoref from 'mongoose-autorefs'
const { ObjectId } = mongoose.Schema.Types

/*
PRODUCT SCHEMA:
*/
const Schema = new mongoose.Schema({
  isBar: { type: Boolean, default: false },
  productName: { type: String, default: '' },
  producer: { type: String, default: 'None' },
  tastingNotes: [{ type: ObjectId, ref: 'TastingNote' }],
  productText: { type: String, default: '' },
  cacaoPercentage: { type: Number, default: 0 },
  chocolateType: { type: ObjectId, ref: 'ChocolateType' }
})

const Model = mongoose.model('Product', Schema)

module.exports = Model
