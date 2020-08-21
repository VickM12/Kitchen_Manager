const React = require('react');

class New extends React.Component{
render (){
    const {menu} = this.props
    return (
        <div>
            <form action='/menu' method='PUT'>
            Dish Name <input type="text" name="dishName" defaultValue={menu.dishName}/><br/>
            Season: <input type="text" name="season" defaultValue={menu.season}/><br/>
            section: <input type="text" name="section" defaultValue={menu.section}/><br/>
            Food Cost: <input type="number" name="foodCost" defaultValue={menu.foodCost}/><br/>
            Menu Price: $<input type="number" name="menuPrice" defaultValue={menu.menuPrice}/><br/>
            station: <input type="text" name="station"/><br/>
            Is Gluten Free: <input type="checkbox" name="isGlutenFree" defaultValue={menu.isGlutenFree}/><br/>
            <input type="submit" name="" value="Submit Menu"/>
            </form>
        </div>
        )
    }
}
module.exports = New