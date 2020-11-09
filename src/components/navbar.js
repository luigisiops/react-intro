import React, {Component} from 'react'
import '../styles/navbar.css'


class Navbar extends Component{

    render () {
        return (
            <div className = "navbar-container">
                <p className = "nav-logo">HighOnCoding</p>
                <div className = "nav-links-container">
                    <p className = "nav-links">Home</p>
                    <p className = "nav-links">Categories</p>
                </div>
            </div>
        )
    }
}

export default Navbar