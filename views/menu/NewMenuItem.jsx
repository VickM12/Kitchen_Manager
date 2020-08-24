const React = require("react");
class NewMenuItem extends React.Component {
  render() {
    const { menu} = this.props;
    return (
      <div>
        <h1>Add New Dish</h1>

        <form id="form" action={`/menu/${menu._id}/newMenuItem/?_method=PUT`} method="POST">
            Dish Name <input type="text"name="dishName"/>
                        <br/>
            Section: <input type="text" name="section"/><br/>
            Food Cost: <input type="number" name="foodCost" step="any"/><br/>
            Menu Price: $<input type="number" name="menuPrice" step="any"/><br/>
            Station: <input type="text" name="station"/><br/>
            Is Gluten Free: <input type="checkbox" name="isGlutenFree" default={false}/><br/>
            <input id="submit" type="submit" name="" value="Submit Menu"/> 
            </form>
      </div>
    );
  }
}
module.exports = NewMenuItem;
