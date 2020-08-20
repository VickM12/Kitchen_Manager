const React= require('react');
class Edit extends React.Component{
    render () {
        return (
            <div>
<h1>New Recipe</h1>
<div>
<form action="/recipes" method="POST">
    Dish Name: <input type="text" name="dishName" defaultValue={dishName}/><br/>
    Ingredients:<br/>
    Name: <input type="text" name="name"/><br/>
    Amount: <input type="number"  name="amount"/><br/>
    Unit: <input type="text" name="unit"/><br/>
    Yield %: <input type="number" name="yield" step="any"/>% <br/>
    Purchase Price: $<input type="number" name="purchasePrice" step="any"/> / oz.<br/>
    Food Cost: $ <input type="number" name="foodCost" step="any"/><br/>
    Method of Prep:<input type="text area" name="methodOfPrep"/><br/>
    Total Cost: $<input type="number" name="totalCost" step="any"/><br/>
    Menu Price: $<input type="number" name="menuPrice" step="any"/><br/>
    Gluten Free<input type="checkbox" name="isGlutenFree"/><br/>
    <input type="submit" name="" value="Submit New Recipe"/><br/>
  
</form>
</div>
</div>
        )
    }
}
module.exports= Edit