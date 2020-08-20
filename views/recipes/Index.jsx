const React = require('react');

class Index extends React.Component {
    render () {
        const {recipes}= this.props;
        return(
            <div>
                <nav>
                    <a href="/recipes/new">Add New Recipe</a>
                    <a href='/inventory'>Inventory Manager</a>
                    <a href='/menu'>Menu Manager</a>
                </nav>
            <h1>Recipe Manager</h1>
            <ul>
                {recipes.map((recipe, i)=>{
                    return(
                    <li><a href={`recipes/${recipe._id}`}><h2>{recipe.dishName}</h2></a></li>
                    )
                })
                }
            </ul>
            </div>
            
        )
    }
}
module.exports = Index;