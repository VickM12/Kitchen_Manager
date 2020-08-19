const React = require('react');

class Index extends React.Component {
    render () {
        const {inventory}= this.props;
        return(
            <div>
                <nav>
                    <a href="/recipes/new">Add New Recipe</a>
                    <a href='/inventory'>Inventory Manager</a>
                    <a href='/menu'>Menu Manager</a>
                </nav>
            <h1>Recipe Manager</h1>
            </div>
        )
    }
}
module.exports = Index;