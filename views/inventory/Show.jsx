const React = require('react');

class Show extends React.Component {
    render() {
        
        const { name, packType, packSize, packUnit, packPrice, amntOnHand, totalCost, favorite } = this.props.inventory;
        return (
            <div>
                <h1>Product</h1>
            Name: {name}<br/>
            Pack Type: {packType}<br/>
            Pack Size: {packSize}{packUnit}<br/>
            Pack Price: ${packPrice}<br/>
            Amount on Hand: {amntOnHand} packs<br/>
            Total Cost: ${totalCost}<br/>
            {favorite ? `Favorite, keep on hand` : `Don't keep on hand`}
            </div>
        )
    }
}

module.exports = Show;