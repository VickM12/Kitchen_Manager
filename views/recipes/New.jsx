const React= require('react');
// const Recipe= require('../models/recipes.js')
// import Inventory from '../controllers/inventory.js'
class New extends React.Component{
    render () {
        const ingredientPush = ()=>{
            createdRecipe.ingredient.push(name, amount, unit, yieldPercent, purchasePrice)
            console.log('Ive been called')
        }
        return (
            <div>
<h1>New Recipe</h1>
<a href="/recipes">Return</a>
<div>
<form action="/recipes" method="POST"
>
    Dish Name: <input type="text" name="dishName"/><br/>
    Ingredients:<br/>
    Name: <input type='text' name="name"/><br/>
    Amount: <input type="number"  name="amount"/><br/>
    Unit: <input type="text" name="unit"/><br/>
    Yield %: <input type="number" name="yieldPercent" step="any"/>% <br/>
    Purchase Price: $<input type="number" name="purchasePrice" step="any"/> / oz.<br/>
    Food Cost: $ <input type="number" name="foodCost" step="any"/><br/>
    Method of Prep:<input type="text area" name="methodOfPrep"/><br/>
    Total Cost: $<input type="number" name="totalCost" step="any"/><br/>
    Menu Price: $<input type="number" name="menuPrice" step="any"/><br/>
    Gluten Free<input type="checkbox" name="isGlutenFree"/><br/>
    <input id="recipeSubmit" type="submit" name="" value="Submit New Recipe" /><br/>
    
    
</form>
</div>
</div>
        )
    }
}
module.exports= New