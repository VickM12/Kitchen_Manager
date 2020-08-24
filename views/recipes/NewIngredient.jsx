const React = require('react')
class NewIngredient extends React.Component{
    render(){
        const {recipe}=this.props
        return(
            <div>
            <h1>Add New Ingredient</h1>
            
            <form action={`/recipes/${recipe._id}/newingredient/?_method=PUT`} method="POST">
            Dish Name: <input type="text" name="dishName" defaultValue={recipe.dishName}/><br/><br/>

{//New data to input
}
            New Ingredient:<br/>
            Name: <input type="text" name="name"/><br/>
            Amount: <input type="number"  name="amount" step="any" /><br/>
            Unit: <input type="text" name="unit" d/><br/>
            Yield %: <input type="number" name="yieldPercent" step="any"/>% <br/>
            Purchase Price: $<input type="number" name="purchasePrice" step="any" /> / oz.<br/>
            Food Cost: $ <input type="number" name="foodCost" step="any" />( (purchase price / Yield) x Amount)<br/><br/>
            <input type="submit" name="" defaultValue="Submit Changes"/><br/>
            </form>
            
            </div>
        )
    }
}
module.exports= NewIngredient