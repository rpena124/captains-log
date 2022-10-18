const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component{
    render(){
        const {title, _id, entry,shipIsBroken} = this.props.log
        return(
            <Default title={`${title} Edit Page`} log={this.props.log}>
                <form method="POST" action={`/fruits/${_id}?_method=PUT`}>
                    Title:<input type="text" name="title" defaultValue={title}></input><br/>
                    Entry:<input type="text" name="entry" defaultValue={entry}></input><br/>
                    Is Ship Broken:<input type="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken}></input><br/>
                    <input type="submit" value="Submit Log"></input>
                </form>

            </Default>
        )
    }
}

module.exports = Edit