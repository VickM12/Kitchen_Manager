const React = require('react');

class Show extends React.Component {
    render() {
        
        const { menu } = this.props
        // const menuItems=menu.keys(menuItems)
        return (
            <div>
                <a href="/menu">Return</a>
                <h1>{menu.season}</h1>
                <ul>                
                    <li>
                        Name: {menu.dishName}<br/>
                        Section:{menu.section}<br/>
                        Station:{menu.station}<br/>
                        Food Cost: ${menu.foodCost}<br/>
                        Menu Price: ${menu.menuPrice}<br/>
                        {menu.isGlutenFree? "Gluten Free" :''}
                        <a href="/recipes">Recipe</a>

                </li>
                
                
            </ul>
            </div>
        )
    }
}

module.exports= Show