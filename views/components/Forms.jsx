const React = require ('react')
class Forms extends React.Component {
    render() {
        
        return(
            
            <html>
                <head>
                    {this.props.children}
                    <link rel="stylesheet" href="/css/main.css"/>
                </head>
                <body>
                    <script src="/components/menuItem.js"></script>
                </body>
            </html>
        )
    }
}
module.exports = Forms