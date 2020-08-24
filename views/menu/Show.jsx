const React = require('react');
const Default = require('../components/Default.jsx')
class Show extends React.Component {
    render() {
        
        const { menu } = this.props
        // const menuItems=menu.keys(menuItems)
        return (
            <Default>
            <div>
                <div class='header'>
                <h1>{menu.season}</h1>
                    <div class="nav">
                    <a href="/menu">Return</a>
                    <a href={`/menu/${menu._id}/newdish`}>Add New Menu Item</a>
                    <a href="/recipes">Recipe</a>
                    </div>
                </div>
                <ul>{ 
                menu.menuItem.map((menuItem, i)=>{
                        return(               
                    <li key={menu.menuItem[i].dishName}>
                        Name: {menu.menuItem[i].dishName}<br/>
                        Section: {menu.menuItem[i].section}<br/>
                        Station: {menu.menuItem[i].station}<br/>
                        Food Cost: ${menu.menuItem[i].foodCost}<br/>
                        Menu Price: ${menu.menuItem[i].menuPrice}<br/>
                        {menu.menuItem[i].isGlutenFree? "Gluten Free" :''}
                        

                    </li>
                        )
                    })
                }
                </ul>
            </div>
            </Default>
        )
    }
}

module.exports= Show