const mongoose = require('mongoose')
// import autoref from 'mongoose-autorefs'
// const { ObjectId } = mongoose.Schema.Types

/*
TASTINGNOTE SCHEMA:
*/
const Schema = new mongoose.Schema({
  group: { type: String, default: 'Other' },
  tastingNoteName: { type: String, default: '' }
})

const Model = mongoose.model('TastingNote', Schema)

module.exports = Model
