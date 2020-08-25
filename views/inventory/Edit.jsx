const React = require('react');
const Forms= require('../components/Forms.jsx')
class Edit extends React.Component{
    render(){
        const { inventory } = this.props;
        return (
            <Forms>
            <div>
                <div class="header">
                <h1>Edit Inventory</h1>
                <a href='/inventory'>Return</a>
                </div>
            <form class="form" action={`/inventory/${inventory._id}/?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={inventory.name}/><br/>
            Pack Type: <input type="text" name="packType" defaultValue={inventory.packType}/><br/>
            Pack Size:<input type="number" name="packSize" defaultValue={inventory.packSize}/><br/>
            Pack Unit:<input type="text" name="packUnit" defaultValue={inventory.packUnit}/><br/>
            Pack Price $: <input type="Number" name="packPrice" defaultValue={inventory.packPrice}/><br/>
            Amount on Hand:<input type="number" name="amntOnHand" defaultValue={inventory.amntOnHand}/><br/>
            Total Cost: <input type="Number" name="totalCost" defaultValue={inventory.totalCost}/><br/>
            Favorite: <input type="checkbox" name="favorite" checked={inventory.favorite}/> <br/>
            <input type="submit" name='' value="Add to Inventory"/>
        
        </form>
        </div>
        </Forms>
        )}
}
module.exports= Edit