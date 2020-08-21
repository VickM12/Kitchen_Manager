const React = require('react');

class Show extends React.Component {
    render() {
        
        const inventory  = this.props.inventory;
        return (
            <div>
                <h1>Product</h1>
                <a href="/inventory">Return</a><br/>
            Name: {this.props.inventory.name}<br/>
            Pack Type: {inventory.packType}<br/>
            Pack Size: {inventory.packSize}{inventory.packUnit}<br/>
            Pack Price: ${inventory.packPrice}<br/>
            Amount on Hand: {inventory.amntOnHand} pack(s)<br/>
            Total Cost: ${inventory.totalCost}<br/>
            {inventory.favorite ? `Favorite, keep on hand` : `Don't keep on hand`}
            </div>
        )
    }
}

module.exports = Show;