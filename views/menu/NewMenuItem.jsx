const React = require("react");
class NewMenuItem extends React.Component {
  render() {
    const { menu} = this.props;
    const {recipes} = this.props;
    return (
      <div>
        <h1>Add New Dish</h1>
        {/* {recipes.map((recipe, i)=>{
                return( */}
        <form id="form" action={`/menu/${menu._id}/newMenuItem/?_method=PUT`} method="POST">
             Dish Name <input name="dishName"
                        datalist id="recipes"
                        option value={menu.dishName} />
                        <br/>
            section: <input type="text" name="section"/><br/>
            Food Cost: <input type="number" /*defaultValue={recipes.foodCost}*/name="foodCost" step="any"/><br/>
            Menu Price: $<input type="number" /*defaultValue={recipes.menuPrice} */name="menuPrice"/><br/>
            station: <input type="text" name="station"/><br/>
            Is Gluten Free: <input type="checkbox" name="isGlutenFree" default={false}/><br/>
            Recipe Id: <input type="Text" /*defaultValue={recipes._id} */name="id"/>
            <input id="submit" type="submit" name="" value="Submit Menu"/> 
            </form>
         {/* )})}   */}
                        
        </div>
    );
  }
}
module.exports = NewMenuItem;
