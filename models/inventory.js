const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const inventorySchema = new Schema({
    name: { type: String, required: true },
    packType: { type: String, required: true },
    packSize:  {type: Number, required: true},
    packUnit: {type: Number, required: true},
    packPrice:  {type: Number, required: true},
    amntOnHand: {type: Number, required: true},
    totalCost:  {type: Number, required: true},
    favorite: {type: Boolean, required: false, default:false}
}, { timestamps: true });

//  Create Model from our Schema
const Inventory = mongoose.model('Inventory', inventorySchema);

// Export Fruit Model
module.exports = Inventory;