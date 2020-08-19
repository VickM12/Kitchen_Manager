const React = require('react');

class Index extends React.Component {
    render () {
        const {inventory}= this.props;
        return(
            <div>
                <nav>
                    <a href="/menu/new">Add New Menu</a>
                    <a href='/inventory'>Inventory Manager</a>
                    <a href='/recipes'>Recipe Manager</a>
                </nav>
            <h1>Menu Manager</h1>
            </div>
        )
    }
}
module.exports = Index;