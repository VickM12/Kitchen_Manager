const React = require('react');
const Recipecard = require('../components/Recipecard')
class Show extends React.Component{
    render () {
            const {recipe}= this.props
            let i;
            
            
            console.log(recipe.ingredient)
            return(            
            <Recipecard>                
                <div>
                    <div className="header">
                <h1>{recipe.dishName}</h1>
                
                <a href="/recipes">Return</a> 
                <a href={`/recipes/${recipe._id}/newingredient`}>Add New Ingredient</a>
                </div>
                <h2>{recipe.isGlutenFree? `gluten free` : ``}</h2>
                 <table>
                 <tr>
                     <th>Ingredient</th>
                     <th>Amount</th>
                     <th>Unit</th> 
                     <th>Yield %</th>
                     <th>Purchase Price/ oz</th>
                    <th>Food Cost Price</th>
                    <th>Total Cost</th>
                    <th>Suggested Menu Price</th>
                </tr>
                {
                    recipe.ingredient.map((ingredient, i)=>{
                        return(
                         
                <tr>
                    <td>{recipe.ingredient[i].name}</td>
                    <td>{recipe.ingredient[i].amount}</td>
                    <td>{recipe.ingredient[i].unit}</td>
                    <td>{recipe.ingredient[i].yieldPercent}</td>
                    <td>{recipe.ingredient[i].purchasePrice}</td>
                    <td>{recipe.ingredient[i].foodCost}</td>
                </tr>
                        )
                    })
                }
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${recipe.totalCost}</td>
                    <td>${recipe.menuPrice}</td>
                    </tr>                
                 </table>
                 <h3>Method of Prep</h3>
                 <article>
                     <p>{recipe.methodOfPrep} </p>
                     {/* <p>Recipe ID:{recipe._id}</p> */}
                     </article>
            </div>
            </Recipecard>
        ) 
    } 
}
module.exports= Show