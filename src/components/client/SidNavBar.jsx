import React from 'react'
import "../../style/nav-bar.scss"

const SidNavBar = ({ close, sideBarOpen }) => {

    let classes = "side-nav-bar"

    if (sideBarOpen) {
        classes = "side-nav-bar open"
    }


    return (
        <nav className={classes}>

            <div className="client-profile">
                <div className="photo-container">
                    <img src="https://images.unsplash.com/photo-1527255389201-3d03c5d92a60?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="Avatar" class="avatar"></img>
                </div>
                <span>Ana Maria</span>
                <span>Role</span>


                <div className="client-option">
                    <ul>
                        {/* <li onClick={close}> <i className="material-icons">close</i></li> */}
                        <li> <i className="material-icons">camera_alt</i> Préparation</li>
                        <li>   <i className="material-icons">camera_alt</i> Mairie</li>
                        <li>   <i className="material-icons">camera_alt</i> Parc</li>
                        <li>   <i className="material-icons">camera_alt</i> Soirée</li>
                        <li>   <i className="material-icons">camera_alt</i> Invités</li>
                    </ul>
                </div>
            </div>



        </nav>
    )
}
export default SidNavBar; 
