const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const menuSchema = new Schema({
    season: {type: String, required: true},
    menuItem:[
        {
        dishName: { type: String, required: true },
        section: {type: String, required: true},
        foodCost:{type: Number, required: true},
        menuPrice: {type:Number, required: true},
        station: {type: String, required: false},
        isGlutenFree: {type: Boolean, required: false, default:false}
        }
    ]
}, { timestamps: true });

//  Create Model from our Schema
const Menu= mongoose.model('Menu', menuSchema);

// Export Fruit Model
module.exports = Menu;