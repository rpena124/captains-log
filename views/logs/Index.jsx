const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component{
    render(){
        const{logs} = this.props
        return(
            <>
                <a href="/logs/new">Create New Log</a>
                <ul>
                    {
                        logs.map((log)=>{
                            const{title,entry,shipIsBroken} = log
                            return(

                                <li key={log._id}>
                                    <a href={`/logs/${log._id}`}>{title}</a><br/>
                                    {shipIsBroken? 'It\'s not broken': 'It\'s broken'}<br/>
                                    {/* <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete${title}`}></input>
                                    </form> */}
                                </li>
                            )
                        })
                    }
                </ul>
            </>

        )
    }
}

module.exports = Index