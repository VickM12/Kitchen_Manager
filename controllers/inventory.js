const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory.js');

// add routes
// Index
router.get('/', (req, res) => {
    // Use inventory model to get all inventory
    Inventory.find({}, (error, allInventory) => {
        ///FILE PATH
        res.render('inventory/Index', {
            inventory: allInventory
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('inventory/New');
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Inventory.findByIdAndRemove(req.params.id, (err, inventory) => {
        res.redirect('/inventory');
    });
});

// Put
router.put('/:id', (req, res) => {
    req.body.favorite = req.body.favorite === "on" ? true : false;
    
    // Update the fruit document using our model
    Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/inventory');
    });
});

// // Create

router.post('/', (req, res)=> {
    if (req.body.favorite === "on"){
        req.body.favorite = true;
    }else{
        req.body.favorite = false;
    }
    
    Inventory.create(req.body, (error, createdInventory)=>{
        res.redirect('/inventory');
        console.log(error)
        console.log(createdInventory)
    });
});
// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Inventory.findById(req.params.id, (err, foundInventory) => {
        // render the edit view and pass it the found fruit
        res.render('inventory/Edit', {
            inventroy: foundInventory
        })
    });
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Inventory.findById(req.params.id, (error, foundInventory) => {
        // render the Show route and pass it the foundFruit
        res.render('inventory/Show', {
            inventory: foundInventory
        });
    });
});

// export router
module.exports = router;
