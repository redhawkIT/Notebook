const mongoose = require('mongoose')
// import autoref from 'mongoose-autorefs'
// const { ObjectId } = mongoose.Schema.Types

/*
USER SCHEMA:
*/
const Schema = new mongoose.Schema({
  chocolateType: { type: String, enum: ['White', 'Milk', 'Dark', 'Dark Milk'] }
})

const Model = mongoose.model('ChocolateType', Schema)

module.exports = Model
