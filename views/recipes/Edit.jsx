const React= require('react');
const Forms= require('../components/Forms.jsx')
class Edit extends React.Component{
    render () {
        const {recipe}= this.props
        // const ingredient = recipe.keys(ingredient.map(ingredient))
        return (
          <Forms> 
        <div>
            
        <h1>Edit Recipe</h1>
        <div class="nav">
            <a href="/recipes">Return</a>
        </div>
        <div>
        {recipe.ingredient.map((ingredient, i)=>{
         return( 
        <form class="form" action={`/recipes/${recipe._id}/?_method=PUT`} method="POST">
    
        Dish Name: <input type="text" name="dishName" defaultValue={recipe.dishName}/><br/>
        Ingredients:<br/>
    
        Name: <input id='edit'type="text" name="name" defaultValue={recipe.ingredient[i].name}/><br/>
        Amount: <input type="number"  name="amount" defultValue={recipe.ingredient[i].amount} step="any"/><br/>
        Unit: <input type="text" name="unit" defaultValue={recipe.ingredient[i].unit}/><br/>
        Yield %: <input type="number" name="yieldPercent" step="any" defaultValue={recipe.ingredient[i].yieldPercent}/>% <br/>
        Purchase Price: $<input type="number" name="purchasePrice" step="any" defaultValue={recipe.ingredient.purchasePrice}/> / oz.<br/>
        Food Cost: $ <input type="number" name="foodCost" step="any" defaultValue={recipe.ingredient.foodCost}/>( (purchase price / Yield) x Amount)<br/>
        
        Method of Prep:<input type="text area" name="methodOfPrep" defaultValue={recipe.methodOfPrep}/><br/>
        Total Cost: $<input type="number" name="totalCost" step="any" defaultValue={recipe.totalCost}/><br/>
        Menu Price: $<input type="number" name="menuPrice" step="any" defaultValue={recipe.menuPrice}/>(Total Cost /33%)<br/>
        Gluten Free<input type="checkbox" name="isGlutenFree" defaultValue={recipe.isGlutenFree}/><br/>
        <br/><input type="submit" name="" defaultValue="Submit Changes"/>
        </form>
        )})} 


</div>
</div>
</Forms> 
        )
    }
}
module.exports= Edit