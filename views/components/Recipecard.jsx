const React = require('react')
class Recipecard extends React.Component{
    render(){
        return(
            <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="/css/recipe.css"/>
                {this.props.children}
                <title>Recipe Card</title>
            </head>
            <body>
                
            </body>
            </html>
        )
    }
};
module.exports= Recipecard