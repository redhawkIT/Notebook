const mongoose = require('mongoose');
// import autoref from 'mongoose-autorefs'
const { ObjectID } = mongoose.Scheme.Types;

/*
PRODUCT SCHEMA:
*/
const Schema = new mongoose.Schema({
    isBar:  { type: Boolean, default: false },
    productName: { type: String, default: '' },
    producer: { type: String, default: 'None' },
    tastingNotes: [{ type: ObjectID, ref: 'TastingNotes' }],
    productText: { type: String, default: '' },
    cacaoPercentage: { type: Number, default: 0 },
    chocolateType: { Object: ObjectID, ref: 'ChocolateTypes'}
})

const Model = mongoose.model('Product', Schema)

module.exports = Model