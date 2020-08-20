const React= require('react');
class Edit extends React.Component{
    render () {
        const {recipe}= this.props
        const ingredient = this.props.recipe.ingredient
        return (
            
            <div>
<h1>Edit Recipe</h1>
<div>
<form action={`/recipes/`} method="PUT">
    Dish Name: <input type="text" name="dishName" defaultValue={recipe.dishName}/><br/>
    Ingredients:<br/>
    Name: <input type="text" name="name" defaultValue={recipe.ingredient.name}/><br/>
    Amount: <input type="number"  name="amount" defultValue={ingredient.amount}/><br/>
    Unit: <input type="text" name="unit" defaultValue={ingredient.unit}/><br/>
    Yield %: <input type="number" name="yieldPercent" step="any" defaultValue={ingredient.yieldPercent}/>% <br/>
    Purchase Price: $<input type="number" name="purchasePrice" step="any" defaultValue={ingredient.purchasePrice}/> / oz.<br/>
    Food Cost: $ <input type="number" name="foodCost" step="any" defaultValue={ingredient.foodCost}/><br/>
     
    Method of Prep:<input type="text area" name="methodOfPrep" defaultValue={recipe.methodOfPrep}/><br/>
    Total Cost: $<input type="number" name="totalCost" step="any" defaultValue={recipe.totalCost}/><br/>
    Menu Price: $<input type="number" name="menuPrice" step="any" defaultValue={recipe.menuPrice}/><br/>
    Gluten Free<input type="checkbox" name="isGlutenFree" defaultValue={recipe.isGlutenFree}/><br/>
    <input type="submit" name="" defaultValue="Submit Changes"/><br/>
  
</form>
</div>
</div>
        )
    }
}
module.exports= Edit