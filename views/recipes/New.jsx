const React= require('react');
// const Recipe= require('../models/recipes.js')
// import Inventory from '../controllers/inventory.js'
const Forms= require('../components/Forms.jsx')
class New extends React.Component{
    render () {
        const ingredientPush = ()=>{
            createdRecipe.ingredient.push(name, amount, unit, yieldPercent, purchasePrice)
            console.log('Ive been called')
        }
        return (
       <Forms>
        <div>
                 <div class="header">
                     <h1>New Recipe</h1>
                     <a href="/recipes">Return</a>
                 </div>
    
            <form id="newRecipeForm" action="/recipes" method="POST">
            Dish Name: <input type="text" name="dishName"/><br/>
            Ingredients:<br/>
            Name: <input type='text' name="name"/><br/>
            Amount: <input type="number"  name="amount"/><br/>
            Unit: <input type="text" name="unit"/><br/>
            Yield %: <input type="number" name="yieldPercent" step="any"/>% <br/>
            Purchase Price: $<input type="number" name="purchasePrice" step="any"/> / oz.<br/>
            Food Cost: $ <input type="number" name="foodCost" step="any"/><br/>
            
            Total Cost: $<input type="number" name="totalCost" step="any"/><br/>
             Menu Price: $<input type="number" name="menuPrice" step="any"/><br/>
            Gluten Free<input type="checkbox" name="isGlutenFree"/><br/>
            Method of Prep:<br/><textarea label="Method of Prep" id="mop"  name="methodOfPrep" rows="5" cols="50"/><br/>
            <input id="submit" type="submit" name="" value="Submit New Recipe" /><br/>    
            </form>
        </div>
     </Forms>

        )
    }
}
module.exports= New

/////////////////////////////////////////////////////
/////Tried to make the input a table to mimic a real
/////Recip card but it wasn't user friendly
////////////////////////////////////////////////////

/*//             <form id="newRecipeForm" action="/recipes" method="POST">
    //             <table>
    //             <tr>
    //                  <th>Ingredient</th>
    //                  <th>Amount</th>
    //                  <th>Unit</th> 
    //                  <th>Yield %</th>
    //                  <th>Purchase Price/ oz</th>
    //                 <th>Food Cost Price</th>
    //                 <th>Total Cost</th>
    //                 <th>Suggested Menu Price</th>
    //             </tr>
                        
    //             <tr>
    //                 <td><input type='text' name="name"/></td>
    //                 <td><input type="number"  name="amount"/></td>
    //                 <td><input type="text" name="unit"/></td>
    //                 <td><input type="number" name="yieldPercent" step="any"/>%</td>
    //                 <td>$<input type="number" name="purchasePrice" step="any"/></td>
    //                 <td>$ <input type="number" name="foodCost" step="any"/></td>
    //                 <td>$<input type="number" name="totalCost" step="any"/></td>
    //                 <td>$<input type="number" name="menuPrice" step="any"/></td>

    //             </tr>               
    //              </table>
                 </form>*/