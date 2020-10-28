import React from 'react'

const AffterNav = ({ close }) => {
    return (

        <div className="home-space" onClick={close}>

            <div className="download-container">
                <button class="btn"><i class="fa fa-download"></i> Tout télécharger</button>

            </div>


        </div>
    )
}



export default AffterNav; 
