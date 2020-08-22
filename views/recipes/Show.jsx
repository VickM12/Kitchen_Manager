const React = require('react');
class Show extends React.Component{
    render () {
            const {recipe}= this.props
            
            console.log(recipe.ingredient)
            return(
            
            // const ingredient= recipe.keys.ingredient.map(ingredient)
            
            
                <div>
                <h1>show page</h1>
                <a href="/recipes">Return</a> 
                <a href={`/recipes/${recipe._id}/newingredient`}>Add New Ingredient</a>
                <h2>{recipe.dishName}</h2>
                <h3>{recipe.isGlutenFree? `gluten free` : ``}</h3>
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
                 <article>{recipe.methodOfPrep}</article>
            </div>
        ) 
    } 
}
module.exports= Show