const React = require('react');
const Default = require('../components/Default.jsx')
class Index extends React.Component {
    render () {
        const {inventory}= this.props;
        return(
            <Default>
            <div>
                <div className="header">
                <h1>Inventory Manager</h1>
                <nav>
                    <a href="/inventory/new">Add New Item</a>
                    <a href='/menu'>Menu Manager</a>
                    <a href='/recipes'>Recipe Manager</a>
                </nav>
                </div>
            <ul>
            {inventory.map((inventory, i)=>{
                return (
                    <li>
                        <a href={`/inventory/${inventory._id}`}><h2>{inventory.name}</h2></a>
                        Purchase price: ${inventory.packPrice}<br/>
                        Amount on Hand: {inventory.amntOnHand}<br/>
                        <a href={`/inventory/${inventory._id}/edit`}>Edit Inventory</a>
                        <form action={`/inventory/${inventory._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                        </form>

                    </li>
                )
            }
            )}
            </ul>
            
            </div>
            </Default>
        )
    }
}
module.exports = Index;