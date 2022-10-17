const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component{
    render(){
        const {title, entry,shipIsBroken, _id} = this.props.log;
        const capName = title[0].toUpperCase()+ title.substring(1)
        return(
            <>
                <nav>
                <a href="/logs/new">Create New Log</a>
                <a href="/logs">Index Page</a>
                </nav>
                <p>{title}</p><br/>
                <p>{entry}</p><br/>
                <p>{shipIsBroken? 'Ship is not broken' : 'Ship is broken!'}</p>
            </>
        )
    }
}
module.exports = Show