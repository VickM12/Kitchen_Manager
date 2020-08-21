const React = require('react');

class Index extends React.Component {
    render () {
        const {menu}= this.props;
        return(
            <div>
                <nav>
                    <a href="/menu/new">Add New Menu</a>
                    <a href='/inventory'>Inventory Manager</a>
                    <a href='/recipes'>Recipe Manager</a>
                </nav>
            <h1>Menu Manager</h1>
            <ul>
            {menu.map((menu, i)=>{
                return (
                    <li>
                        <a href={`/menu/${menu._id}`}><h2>{menu.season}</h2></a>
                        Menu price: ${menu.menuPrice}<br/> 
                        Season: {menu.season}<br/>
                        <a href={`/menu/${menu._id}/edit`}>Edit Menu</a>
                        <form action={`/menu/${menu._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                        </form>

                    </li>
                )
            }
            )}
            </ul>
            </div>
        )
    }
}
module.exports = Index;