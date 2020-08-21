const React = require('react');

class New extends React.Component{
render (){
    return (
        <div>
            <form id="menuItem" action='/menu' method='POST'>
            Season: <input type="text" name="season"/><br/>
            Dish Name <input type="text" name="dishName"/><br/>
            section: <input type="text" name="section"/><br/>
            Food Cost: <input type="number" name="foodCost"/><br/>
            Menu Price: $<input type="number" name="menuPrice"/><br/>
            station: <input type="text" name="station"/><br/>
            Is Gluten Free: <input type="checkbox" name="isGlutenFree" default={false}/><br/>
            <input type="submit" name="" value="Submit Menu"/>
            <div id="newItem"></div>
            </form><button id="addNewItem">Add New Item</button>
        </div>
        )
    }
}
module.exports = New