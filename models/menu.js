const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const menuSchema = new Schema({
    dishName: { type: String, required: true },
    season: {type: String, required: true},
    section: {type: String, required: true},
    foodCost:{type: Number, required: true},
    totalCost:  {type: Number, required: true},
    menuPrice: {type:Number, required: true},
    station: {type: Number, required: false},
    isGlutenFree: {type: Boolean, required: false, default:false}
}, { timestamps: true });

//  Create Model from our Schema
const Inventory = mongoose.model('Inventory', inventorySchema);

// Export Fruit Model
module.exports = Inventory;