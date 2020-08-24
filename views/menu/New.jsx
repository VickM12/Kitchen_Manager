const React = require('react');
// const addItem= require('../components/MenuItem.jsx')
const Default= require('../components/Forms.jsx')
const Recipes= require('../../models/recipes.js')
//

class New extends React.Component{
    
render (){
     const {recipes} =this.props
    //  console.log(recipe)
    
    return (
        
            
            
        <Default>
            
        <div>
            <div className='header'>
            <h1>Create New Menu</h1>
            <a href="/menu">return</a>
            </div> 

        {recipes.map((recipe, i)=>{
                return(
            <form id="form" action='/menu' method='POST' value="menu">
        
             Season: <input type="text" name="season"/><br/>
            Dish Name <input name="dishName"
                        datalist id="recipes"
                        option value={recipes[i].dishName} />
                        <br/>
            section: <input type="text" name="section"/><br/>
            Food Cost: <input type="number" name="foodCost" step="any"/><br/>
            Menu Price: $<input type="number" name="menuPrice"/><br/>
            station: <input type="text" name="station"/><br/>
            Is Gluten Free: <input type="checkbox" name="isGlutenFree" default={false}/><br/>
            <input id="submit" type="submit" name="" value="Submit Menu"/> 
            </form>
        )})} 
                        
        </div>

        </Default>
       

        )
    }
}
module.exports = New