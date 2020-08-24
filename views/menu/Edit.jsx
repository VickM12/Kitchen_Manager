const React = require('react');

class Edit extends React.Component{
render (){
    const {menu} = this.props
    return (
         
            menu.menuItem.map((menuItem, i)=>{
            return(
        <div>
        <div>
            <div class="nav">
                <a href='/menu'>return</a>
            </div>
            <form id="edit" action={`/menu/${menu._id}/?_method=PUT`} method="POST">
            Dish Name <input type="text" name="dishName" defaultValue={menu.menuItem[i].dishName}/><br/>
            Season: <input type="text" name="season" defaultValue={menu.season}/><br/>
            Section: <input type="text" name="section" defaultValue={menu.menuItem[i].section}/><br/>
            Food Cost: <input type="number" name="foodCost" defaultValue={menu.menuItem[i].foodCost}/><br/>
            Menu Price: $<input type="number" name="menuPrice" defaultValue={menu.menuItem[i].menuPrice}/><br/>
            Station: <input type="text" name="station" defaultValue={menu.menuItem[i].station}/><br/>
            Is Gluten Free: <input type="checkbox" name="isGlutenFree" defaultValue={menu.menuItem[i].isGlutenFree}/><br/>
            <input type="submit" name="" value="Submit Menu"/>
            </form>
            </div>
            
        </div>
            )})
        )
    }
}
module.exports = Edit