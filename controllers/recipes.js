const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes.js');

// add routes
// Index
router.get('/', (req, res) => {
    // Use recipes model to get all recipes
    Recipes.find({}, (error, allRecipes) => {
        ///FILE PATH
        // console.log(error)
        // console.log(allRecipes)
        res.render('recipes/Index', {
            recipes: allRecipes
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('recipes/New');
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Recipes.findByIdAndRemove(req.params.id, (err, recipes) => {
        res.redirect('/recipes');
    });
});

// Put
router.put('/:id', (req, res) => {
    req.body.isGlutenFree = req.body.isGlutenFree === "on" ? true : false;
    const ingredient = {
        name: req.body.name,
        amount: req.body.amount,
        unit: req.body.unit,
        yieldPercent: req.body.yieldPercent,
        purchasePrice: req.body.purchasePrice,
        foodCost: req.body.foodCost
    }
    const recipe = {
        dishName: req.body.dishName,
        ingredient:[],
        methodOfPrep: req.body.methodOfPrep,
        totalCost: req.body.totalCost,
        menuPrice: req.body.menuPrice,
        isGlutenFree: req.body.isGlutenFree
    }
    recipe.ingredient.push(ingredient)
    // Update the recipes document using our model
    Recipes.findByIdAndUpdate(req.params.id, recipe, { new: true }, (err, updatedModel) => {
        console.log(err)
        console.log(updatedModel)
        res.redirect('/recipes');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.isGlutenFree === "on") {
        req.body.isGlutenFree = true;
    } else {
        req.body.isGlutenFree = false;
    }
    // console.log(req.body)
    const ingredient = {
        name: req.body.name,
        amount: req.body.amount,
        unit: req.body.unit,
        yieldPercent: req.body.yieldPercent,
        purchasePrice: req.body.purchasePrice,
        foodCost: req.body.foodCost
    }
    const recipe = {
        dishName: req.body.dishName,
        ingredient:[],
        methodOfPrep: req.body.methodOfPrep,
        totalCost: req.body.totalCost,
        menuPrice: req.body.menuPrice,
        isGlutenFree: req.body.isGlutenFree
    }
    recipe.ingredient.push(ingredient)
    // Use Model to create recipes Document
    Recipes.create(recipe, (error, createdRecipes) => {
        // Once created - respond to client
        console.log(error)
        console.log(createdRecipes)
        res.redirect('/recipes');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Recipes.findById(req.params.id, (err, foundRecipe) => {
        // render the edit view and pass it the found recipes
        res.render('recipes/Edit', {
            recipe: foundRecipe
        })
    });
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Recipes.findById(req.params.id, (error, foundRecipe) => {
        // render the Show route and pass it the foundrecipes
        // console.log(error)
        // console.log(foundRecipe)
        res.render('recipes/Show', {
            recipe: foundRecipe
        });
    });
});

// export router
module.exports = router;