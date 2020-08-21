const React = require('react');
// const addItem= require('../components/MenuItem.jsx')
const Default= require('../components/Forms.jsx')

class New extends React.Component{
render (){
    return (
        <Default>
        <div>
            <div className='header'>
            <h1>Create New Menu</h1>
            <a href="/menu">return</a>
            </div>
            <form id="form" action='/menu' method='POST'>
            Season: <input type="text" name="season"/><br/>
            Dish Name <input type="text" name="dishName"/><br/>
            section: <input type="text" name="section"/><br/>
            Food Cost: <input type="number" name="foodCost"/><br/>
            Menu Price: $<input type="number" name="menuPrice"/><br/>
            station: <input type="text" name="station"/><br/>
            Is Gluten Free: <input type="checkbox" name="isGlutenFree" default={false}/><br/>
            <input id="submit" type="submit" name="" value="Submit Menu"/>
            <div id="newItem"></div>
            </form><button /*onclick={addItem()}*/id="addNewItem">Add New Item</button>
            <div class="footer"></div>
        </div>

        </Default>
        )
    }
}
module.exports = New