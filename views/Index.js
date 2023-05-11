const React = require('react')

class Index extends React.Component{
    render(){
        const {flight} = this.props;
        return(
            <div>
                <h1> This is the flight page</h1>
            </div>
        )
    }
}
module.exports = Index;
