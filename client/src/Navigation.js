import React from "react"
import {Link} from "react-router-dom"

const Navigation = (props) => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/movielist">Movie List</Link>
            <Link to="/movie/2">Movie 2</Link>
        </header>
    )
}


export default Navigation