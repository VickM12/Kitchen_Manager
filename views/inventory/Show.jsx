const React = require('react');
const Default = require('../components/Default.jsx')
class Show extends React.Component {
    render() {
        
        const inventory  = this.props.inventory;
        return (
        <Default>
            <div>
                <div class="header">
                <h1>{inventory.name}</h1>
                <a href="/inventory">Return</a>
                </div>
                <ul>
                    <li>
                    Name: {this.props.inventory.name}<br/>
                    Pack Type: {inventory.packType}<br/>
                    Pack Size: {inventory.packSize}{inventory.packUnit}<br/>
                    Pack Price: ${inventory.packPrice}<br/>
                    Amount on Hand: {inventory.amntOnHand} pack(s)<br/>
                    Total Cost: ${inventory.totalCost}<br/>
                    {inventory.favorite ? `Favorite, keep on hand` : `Don't keep on hand`}
                    </li>
            </ul>
            </div>
        </Default>
        )
    }
}

module.exports = Show;