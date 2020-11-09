import React, {Component} from 'react'

class Customer extends Component{

    render(){
        let names = this.props.names
        let list = names.map((name, index) => {
            return (
                <li key = {index}> {name}</li>
            )
            
        })


        return(
                list
        )

    }
}

export default Customer