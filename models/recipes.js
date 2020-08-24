const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// // Create Ingredient Schema
// const ingredientSchema = new Schema({

//     name: {type: String, required: true},
//     amount:{ type: Number, required: true},
//     unit:{type: String, require: true},
//     yieldPercent:{type: Number, required: true},
//     purchasePrice:{type: Number, required: true},
//     foodCost:{type: Number, required: true}
//     }, { timestamps: true });

//     //  Create Model from our Schema
//     const Ingredient= mongoose.model('Ingredient', ingredientSchema);
    

// Create Schema
const recipesSchema = new Schema({
    dishName: { type: String, required: true },
    ingredient:[
        // {
        // name: {type: String, required: true},
        // amount:{ type: Number, required: true},
        // unit:{type: String, require: true},
        // yieldPercent:{type: Number, required: true},
        // purchasePrice:{type: Number, required: true},
        // foodCost:{type: Number, required: true}
        // }
    ],
    methodOfPrep: {type: String, required: true},
    totalCost:  {type: Number, required: true},
    menuPrice: {type:Number, required: true},
    isGlutenFree: {type: Boolean, required: false, default:false}
}, { timestamps: true });

//  Create Model from our Schema
const Recipes= mongoose.model('Recipes', recipesSchema);

// Export Fruit Model
module.exports = Recipes;