const React = require('react');
// const addItem= require('../components/MenuItem.jsx')
const Form= require('../components/Forms.jsx')
const Recipes= require('../../models/recipes.js')

class New extends React.Component{
    
render (){
     const {recipes} =this.props
    
     let i;
     for (i of recipes){
             for (i=0 ; i< recipes.length; i++){
    //  console.log(recipe)

    return (
            
        <Form>
            
        <div>
            <div className='header'>
            <h1>Create New Menu</h1>
            <a href="/menu">return</a>
            </div> 
            
           <form class='form' action={`/menu/choosedish`} method="POST">
            Dish Name < input list="recipes" name="dishName"/>
                <datalist id="recipes">

                        {recipes.map((recipe, i)=>{
                        return(
                        <option value={recipe.dishName}></option>
                        )
                        })}
                        </datalist>
                        <input id="submit" type="submit" name="" value="Submit Menu"/>
             </form>
       {recipes.map((recipe, i)=>{
           return(
       
        
            <form className="invisible form" label="form" id={recipe.dishName} action='/menu' method='POST' value="menu">
        
             Season: <input type="text" name="season"/><br/>
            
        
                        <br/>
            section: <input type="text" name="section"/><br/>
            Food Cost: <input type="number" defaultValue={recipes[i].foodCost} name="foodCost" step="any"/><br/>
            Menu Price: $<input type="number" defaultValue={recipes[i].menuPrice} name="menuPrice"/><br/>
            station: <input type="text" name="station"/><br/>
            Is Gluten Free: <input type="checkbox" name="isGlutenFree" default={false}/><br/>
            Recipe Id: <input type="Text" defaultValue={recipes[i]._id} name="id"/>
            <input label="form" id="submit" type="submit" name="" value="Submit Menu"/>
             
                </form>
            )})
            }     
        </div>

        </Form>
       

        )
    }}
    

    }
}
module.exports = New