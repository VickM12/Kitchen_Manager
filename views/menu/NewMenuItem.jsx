const React = require("react");
const Form= require('../components/Forms.jsx')
class NewMenuItem extends React.Component {
  render() {
    const { menu} = this.props;
    const {recipes} = this.props;
    console.log(menu)
    return (
      <Form>
      <div>
        <div class='header'>
        <h1>Add New Dish</h1>
        <a href={`/menu/${menu._id}`}>Return to Menu</a>
        <a href={`/menu`}>Return to Menu Manager</a>
        </div>

         {/* {recipes.map((recipe, i)=>{
                return(   */}

        <form class="form" action={`/menu/${menu._id}/newMenuItem/?_method=PUT`} method="POST">
             Dish Name <input name="dishName"
                        datalist id="recipes"
                        option /*value={recipe[i].dishName}*/ />
                        <br/>
            section: <input type="text" name="section"/><br/>
            Food Cost: <input type="number" /*defaultValue={recipe[i].foodCost} */name="foodCost" step="any"/><br/>
            Menu Price: $<input type="number" /*defaultValue={recipe[i].menuPrice}*/ name="menuPrice"/><br/>
            station: <input type="text" name="station"/><br/>
            Is Gluten Free: <input type="checkbox" name="isGlutenFree" default={false}/><br/>
            Recipe Id: <input type="Text" /*defaultValue={recipes._id} */name="id"/>
            <input id="submit" type="submit" name="" value="Submit Menu"/> 
            </form>
          {/* )})}     */}
                        
        </div>
        </Form>
    );
  }
}
module.exports = NewMenuItem;
