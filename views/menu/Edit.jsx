const React = require('react');
const Form= require('../components/Forms.jsx')
class Edit extends React.Component{
render (){
    const {menu} = this.props
    let i;
  for (i of menu.menuItem){
          for (i = 0; i<=menu.menuItem.length; i++){         
    return (
         
            // menu.menuItem.map((menuItem, i)=>{
            // return(
                
    <Form>
        <div>
        <div>
            <div class="nav">
                <a href='/menu'>return</a>
            </div>
            <form class="form" id="edit" action={`/menu/${menu._id}/?_method=PUT`} method="POST">
            Dish Name <input type="text" defaultValue={menu.menuItem[i].dishName} name="dishName"
                         /><br/>
            Season: <input type="text" name="season" defaultValue={menu.season}/><br/>
            Section: <input type="text" name="section" defaultValue={menu.menuItem[i].section}/><br/>
            Food Cost: <input type="number" name="foodCost" defaultValue={menu.menuItem[i].foodCost}/><br/>
            Menu Price: $<input type="number" name="menuPrice" defaultValue={menu.menuItem[i].menuPrice}/><br/>
            Station: <input type="text" name="station" defaultValue={menu.menuItem[i].station}/><br/>
            Recipe ID:<input type="text" name="id" defaultValue={menu.menuItem[i].id}/> <br/>
            Is Gluten Free: <input type="checkbox" name="isGlutenFree" defaultValue={menu.menuItem[i].isGlutenFree}/><br/>
            <input type="submit" name="" value="Submit Menu"/>
            </form>
            </div>
            
        </div>
    </Form>
                 
            // )})
        ) 
    }}
    }
}
module.exports = Edit