const React = require('react');
// const addItem= require('../components/MenuItem.jsx')
const Form= require('../components/Forms.jsx')
const Recipes= require('../../models/recipes.js')

class ChooseDish extends React.Component{
    
render (){
     const {recipe} =this.props
    
    
    //  console.log(recipe)

    return (
            
        <Form>      
        
            <form className="form" label="form" id={recipe.dishName} action='/menu' method='POST' value="menu">
        
             Season: <input type="text" name="season"/><br/>
            Dish Name:<input type="text" name="dishName" defaultValue={recipe.dishName}/><br/>
            section: <input type="text" name="section"/><br/>
            Food Cost: <input type="number" defaultValue={recipe.totalCost} name="foodCost" step="any"/><br/>
            Menu Price: $<input type="number" defaultValue={recipe.menuPrice} name="menuPrice"/><br/>
            station: <input type="text" name="station"/><br/>
            Is Gluten Free: <input type="checkbox" name="isGlutenFree" default={false}/><br/>
            Recipe Id: <input type="Text" defaultValue={recipe._id} name="id"/>
            <input label="form" id="submit" type="submit" name="" value="Submit Menu"/>
             
                </form>
        </Form>
       

        )   

    }
}
module.exports = ChooseDish