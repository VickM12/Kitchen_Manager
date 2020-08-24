const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ingredientSchema = new Schema({

    name: {type: String, required: true},
    amount:{ type: Number, required: true},
    unit:{type: String, require: true},
    yieldPercent:{type: Number, required: true},
    purchasePrice:{type: Number, required: true},
    foodCost:{type: Number, required: true}
    }, { timestamps: true });

    //  Create Model from our Schema
    const Ingredient= mongoose.model('Ingredient', ingredientSchema);
    
    // Export Fruit Model
    module.exports = Ingredient;