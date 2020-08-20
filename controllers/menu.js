const express = require('express');
const router = express.Router();
const Menu = require('../models/menu.js');

// add routes
// Index
router.get('/', (req, res) => {
    // Use menu model to get all menu
    Menu.find({}, (error, allMenu) => {
        ///FILE PATH
        res.render('menu/Index', {
            menu: allMenu
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('menu/New');
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Menu.findByIdAndRemove(req.params.id, (err, menu) => {
        res.redirect('/menu');
    });
});

// Put
router.put('/:id', (req, res) => {
    req.body.isGlutenFree = req.body.favorite === "on" ? true : false;
    
    // Update the menu document using our model
    Menu.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/menu');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.isGlutenFree === "on") {
        req.body.isGlutenFree = true;
    } else {
        req.body.isGlutenFree = false;
    }
    // Use Model to create menu Document
    Menu.create(req.body, (error, createdMenu) => {
        // Once created - respond to client
        res.redirect('/menu');
        console.log(error)
        console.log(createdMenu)
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Menu.findById(req.params.id, (err, foundMenu) => {
        // render the edit view and pass it the found menu
        res.render('menu/Edit', {
            menu: foundMenu
        })
    });
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Menu.findById(req.params.id, (error, foundMenu) => {
        // render the Show route and pass it the foundmenu
        res.render('menu/Show', {
            menu: foundMenu
        });
    });
});

// export router
module.exports = router;