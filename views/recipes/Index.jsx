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
                    <li key={recipe.dishName}><a href={`recipes/${recipe._id}`}><h2>{recipe.dishName}</h2></a>
                   <a href={`recipes/${recipe._id}/edit/`}>Edit this Recipe</a>
                    {// Delete method
                    }
                    <form action={`/recipes/${recipe._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="delete"/>
                    </form>
                    </li>

                    )
                })
                }
            </ul>
            </div>
            
        )
    }
}
module.exports = Index;