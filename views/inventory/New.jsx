const React = require('react');
const Default= require('../components/Forms.jsx')
class New extends React.Component{
    render(){
        return (
            <Default>
            <div>
                <div class="header">
                <h1>New Inventroy</h1>
                <a id="return" href='/inventory'>Return</a>
                </div>
            <form class="form" action="/inventory" method="POST">
            Name: <input type="text" name="name"/><br/>
            Pack Type: <input type="text" name="packType"/><br/>
            Pack Size:<input type="number" name="packSize"/><br/>
            Pack Unit:<input type="text" name="packUnit"/><br/>
            Pack Price $: <input type="Number" name="packPrice"/><br/>
            Amount on Hand:<input type="number" name="amntOnHand"/><br/>
            Total Cost: <input type="Number" name="totalCost"/><br/>
            Favorite: <input type="checkbox" name="favorite"/> <br/>
            <input id="submit" type="submit" name='' value="Add to Inventory"/>
        
        </form>
        </div>
        </Default>
        )}
}
module.exports= New