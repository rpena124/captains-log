const React = require('react')

class New extends React.Component{
    render(){
        return(
            <>
                <form method="POST" action="/logs">
                    Title<input type='text' name='title' placeholder='Entry Title'></input><br/>
                    Entry<input type='text' name='entry' placeholder='Log entry'></input><br/>
                    Ship is broken: <input type="checkbox" name="shipIsBroken"></input><br/>
                    <input type="submit" value="Submit Log"></input>
                </form>
            </>
        )
    }
}

module.exports = New