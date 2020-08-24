const React = require("react");
class NewIngredient extends React.Component {
  render() {
    const { recipe } = this.props;
    return (
      <div>
        <h1>Add New Ingredient</h1>

        <form
          action={`/recipes/${recipe._id}/newingredient?_method=PUT`}
          method="POST"
        >
          Dish Name:{" "}
          <input type="text" name="dishName" defaultValue={recipe.dishName} />
          <br />
          <br />
          {
            //New data to input
          }
          New Ingredient:
          <br />
          Name: <input type="text" name="name" />
          <br />
          Amount: <input type="number" name="amount" step="any" />
          <br />
          Unit: <input type="text" name="unit" d />
          <br />
          Yield %: <input type="number" name="yieldPercent" step="any" />%{" "}
          <br />
          Purchase Price: $
          <input type="number" name="purchasePrice" step="any" /> / oz.
          <br />
          Food Cost: $ <input type="number" name="foodCost" step="any" />(
          (purchase price / Yield) x Amount)
          <br />
          <br />
          {
            //Original Data to Keep
          }
          {/* Name: <input type="text" name="name" defaultValue={recipe.ingredient[i].name}/><br/>
            Amount: <input type="number"  name="amount" defultValue={recipe.ingredient[i].amount}/><br/>
            Unit: <input type="text" name="unit" defaultValue={recipe.ingredient[i].unit}/><br/>
            Yield %: <input type="number" name="yieldPercent" step="any" defaultValue={recipe.ingredient.yieldPercent}/>% <br/>
            Purchase Price: $<input type="number" name="purchasePrice" step="any" defaultValue={recipe.ingredient.purchasePrice}/> / oz.<br/>
             Food Cost: $ <input type="number" name="foodCost" step="any" defaultValue={recipe.ingredient.foodCost}/>( (purchase price / Yield) x Amount)<br/>
            Total Cost: $<input type="number" name="totalCost" step="any" defaultValue={recipe.totalCost}/><br/>
            Menu Price: $<input type="number" name="menuPrice" step="any" defaultValue={recipe.menuPrice}/>(Total Cost /33%)<br/>
            Method of Prep:<input type="text area" name="methodOfPrep" defaultValue={recipe.methodOfPrep}/><br/>
            Gluten Free<input type="checkbox" name="isGlutenFree" defaultValue={recipe.isGlutenFree}/><br/> */}
          <input type="submit" name="" defaultValue="Submit Changes" />
          <br />
        </form>
      </div>
    );
  }
}
module.exports = NewIngredient;
