require('dotenv').config()


// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//Heroku Port access///
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));


// mongoose connection
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})

// Controller
const inventoryController = require('./controllers/inventory.js');
app.use('/inventory', inventoryController);

const menuController = require('./controllers/menu.js');
app.use('/menu', menuController);

const recipesController = require('./controllers/recipes.js');
app.use('/recipes', recipesController);


// listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});
