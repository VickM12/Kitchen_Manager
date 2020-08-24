const React = require('react');

class Show extends React.Component {
    render() {
        
        const { menu } = this.props
        // const menuItems=menu.keys(menuItems)
        return (
            <div>
                <a href="/menu">Return</a>
                <h1>{menu.season}</h1>
                <div class="nav">
                    <a href={`/menu/${menu._id}/newdish`}>Add New Menu Item</a>
                </div>
                <ul>{ 
                menu.menuItem.map((menuItem, i)=>{
                        return(               
                    <li key={menu.menuItem[i].dishName}>
                        Name: {menu.menuItem[i].dishName}<br/>
                        Section:{menu.menuItem[i].section}<br/>
                        Station:{menu.menuItem[i].station}<br/>
                        Food Cost: ${menu.menuItem[i].foodCost}<br/>
                        Menu Price: ${menu.menuItem[i].menuPrice}<br/>
                        {menu.menuItem[i].isGlutenFree? "Gluten Free" :''}
                        <a href="/recipes">Recipe</a>

                    </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

module.exports= Show