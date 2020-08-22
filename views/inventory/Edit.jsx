const React = require('react');
class Edit extends React.Component{
    render(){
        const { inventory } = this.props;
        return (
            <div>
                <h1>New Inventroy</h1>
            <form action={`/inventory/${inventory._id}/?_method=PUT`} method="POST">
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
        )}
}
module.exports= Edit