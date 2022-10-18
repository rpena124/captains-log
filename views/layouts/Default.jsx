const React = require('react')

class Default extends React.Component{
    render(){
        const {log, title} = this.props
        return(
            <html>
                <head>
                    {/* //To Do: add in the style sheet in the link */}
                    <link rel="stylesheet" href="/css/app.css"></link>
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/logs">Home</a>
                        <a href="/logs/new">New Log</a>
                        {log? <a href={`/logs/${log._id}/edit`}>{log.title} Edit Page</a> :""}
                        {log? <a href={`/logs/${log._id}`}>{log.title}Show Page</a>:""}
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default