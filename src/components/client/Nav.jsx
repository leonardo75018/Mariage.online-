import React from 'react'
import "../../style/nav-bar.scss"

import {
    Link,
    NavLink
} from "react-router-dom";




const Nav = ({ Open, close }) => {

    return (
        <nav className="nav-bar">

            <div className="nav-icon" onClick={Open}>
                <i className="material-icons">menu</i>
            </div>

            <div className="nav-logo">Logo</div>
            <di className="nav-space" />
            <div className="nav-items">

                <ul>
                    <li>  <a href="http://localhost:3000/mariage.online/preparation">Préparation</a>  </li>
                    <li>Mairie</li>
                    <li>Parc</li>
                    <li>Soirée</li>
                    <li>Invités</li>
                </ul>

                <Link to={"/"}>
                    <img src="https://images.unsplash.com/photo-1527255389201-3d03c5d92a60?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="Avatar" class="avatar"></img>
                </Link>


                <i className="material-icons">  arrow_drop_down</i>
            </div>


        </nav>






    )
}

export default Nav; 
