const React = require('react');
const Default = require('../components/Default.jsx')
class Index extends React.Component {
    render () {
        const {recipes}= this.props;
        return(
            <Default>
            <div className='header'>
                <h1>Recipe Manager</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/recipes/new">Add New Recipe</a>
                    <a href='/inventory'>Inventory Manager</a>
                    <a href='/menu'>Menu Manager</a>
                </nav>
            </div>
            <ul>
                {recipes.map((recipe, i)=>{
                    return(
                    <li key={recipe.dishName}><a href={`recipes/${recipe._id}`}><h2>{recipe.dishName}</h2></a>
                   {/* <a href={`recipes/${recipe._id}/edit/`}>Edit this Recipe</a> */}
                    {// Delete method
                    }
                    {/* <form action={`/recipes/${recipe._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="delete"/>
                    </form> */}
                    </li>

                    )
                })
                }
            </ul>
            
            </Default>
            
        )
    }
}
module.exports = Index;