const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component{
    render(){
        const{logs} = this.props
        return(
            <Default title="Log Index Page">
            
                <ul>
                    {
                        logs.map((log)=>{
                            const{title,entry,shipIsBroken} = log
                            return(

                                <li key={log._id}>
                                    <a href={`/logs/${log._id}`}>{title}</a><br/>
                                    {shipIsBroken?  'It\'s broken': 'It\'s not broken'}<br/>
                                    <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete${title}`}></input>
                                    </form>
                                    {/* <form method="POST" action={`/logs/${log._id}/edit`}>
                                        <input type="submit" value="Edit"></input>
                                    </form> */}
                                    <a href={`/logs/${log._id}/edit`}>
                                        <input type="submit" value="Edit"></input>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>

        )
    }
}

module.exports = Index