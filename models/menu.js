const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuItemSchema= new Schema (
    {
    dishName: { type: String, required: true },
    section: {type: String, required: true},
    foodCost:{type: Number, required: true},
    menuPrice: {type:Number, required: true},
    station: {type: String, required: false},
    id: {type: String, required:false}, 
    isGlutenFree: {type: Boolean, required: false, default:false}
    }
    );

// Create Schema
const menuSchema = new Schema({
    season: {type: String, required: true},
    menuItem:[menuItemSchema]
}, { timestamps: true });

//  Create Model from our Schema
const Menu= mongoose.model('Menu', menuSchema);

// Export Fruit Model
module.exports = Menu;