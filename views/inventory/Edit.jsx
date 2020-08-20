const React = require('react');
class Edit extends React.Component{
    render(){
        const { name, packType, packSize, packUnit, packPrice, amntOnHand, totalCost} = this.props.inventory;
        return (
            <div>
                <h1>New Inventroy</h1>
            <form action="/inventory" method="PUT">
            Name: <input type="text" name="name" defaultValue={name}/><br/>
            Pack Type: <input type="text" name="packType" defaultValue={packType}/><br/>
            Pack Size:<input type="number" name="packSize" defaultValue={packSize}/><br/>
            Pack Unit:<input type="text" name="packUnit" defaultValue={packUnit}/><br/>
            Pack Price $: <input type="Number" name="packPrice" defaultValue={packPrice}/><br/>
            Amount on Hand:<input type="number" name="amntOnHand" defaultValue={amntOnHand}/><br/>
            Total Cost: <input type="Number" name="totalCost" defaultValue={totalCost}/><br/>
            Favorite: <input type="checkbox" name="favorite" checked={favorite}/> <br/>
            <input type="submit" name='' value="Add to Inventory"/>
        
        </form>
        </div>
        )}
}
module.exports= Edit