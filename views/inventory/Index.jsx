const React = require('react');

class Index extends React.Component {
    render () {
        const {inventory}= this.props;
        return(
            <div>
                <nav>
                    <a href="/inventory/new">Add New Item</a>
                    <a href='/menu'>Menu Manager</a>
                    <a href='/recipes'>Recipe Manager</a>
                </nav>
            <h1>Inventory Manager</h1>
            </div>
        )
    }
}
module.exports = Index;