const React = require ('react');
class Index extends React.Component{
    render(){
        return (
        <html>
            <head>
                <link rel="stylesheet" href="/css/home.css"/>
                <title>Kitchen Manager</title>
            </head>
            <body>
            <div class="header">
                <h1>Welcome Chef</h1>
                <div id="navbar">
                <a href="/inventory">Inventory Manager</a>
                <a href="/recipes">Recipe Manager</a>
                <a href="/menu">Menu Manager</a>
                </div>
            </div>
            <div class="inspiration">
                <article>
                <h2>Quote of The Day</h2>
                <p>Remember to breathe. Murder isn't legal</p>
                <img src='../../Media/iceberg.jpg'/>
                </article>
            </div>
            </body>
        </html>
        )
    }
}

module.exports= Index