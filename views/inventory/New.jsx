const React = require('react');
class New extends React.Component{
    render(){
        return (
            <div>
                <h1>New Inventroy</h1>
            <form action="/inventory" method="POST">
            Name: <input type="text" name="name"/><br/>
            Pack Type: <input type="text" name="packType"/><br/>
            Pack Size:<input type="number" name="packSize"/><br/>
            Pack Unit:<input type="text" name="packUnit"/><br/>
            Pack Price $: <input type="Number" name="packPrice"/><br/>
            Amount on Hand:<input type="number" name="amntOnHand"/><br/>
            Total Cost: <input type="Number" name="totalCost"/><br/>
            Favorite: <input type="checkbox" name="favorite"/> <br/>
            <input type="submit" name='' value="Add to Inventory"/>
        
        </form>
        </div>
        )}
}
module.exports= New