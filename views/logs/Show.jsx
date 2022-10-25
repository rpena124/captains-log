const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component{
    render(){
        const {title, entry,shipIsBroken, _id} = this.props.log;
        const capName = title[0].toUpperCase()+ title.substring(1)
        return(
            <Default title={`${capName} Show Page`}>
                <p>{capName}</p><br/>
                <p>{entry}</p><br/>
                <p>{shipIsBroken? 'Ship is broken!' : 'Ship is not broken' }</p>
            </Default>
        )
    }
}
module.exports = Show