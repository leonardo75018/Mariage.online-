import React from 'react'
import "../../style/nav-bar.scss"

const Nav = ({ Open }) => {

    return (
        <nav className="nav-bar">

            <div className="nav-icon" onClick={Open}>
                <i className="material-icons">menu</i>
            </div>

            <div className="nav-logo">Logo</div>
            <di className="nav-space" />
            <div className="nav-items">

                <ul>
                    <li>Préparation</li>
                    <li>Mairie</li>
                    <li>Parc</li>
                    <li>Soirée</li>
                    <li>Invités</li>
                </ul>
                <img src="https://images.unsplash.com/photo-1527255389201-3d03c5d92a60?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="Avatar" class="avatar"></img>
                <i className="material-icons">  arrow_drop_down</i>
            </div>

        </nav>






    )
}

export default Nav; 
