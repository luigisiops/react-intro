import React, {Component} from 'react'

class Name extends Component {
    render() {
        return ( 
            <div>
                <p>{this.props.lastname} - {this.props.firstname}</p>
            </div>
        )
    }
}
export default Name