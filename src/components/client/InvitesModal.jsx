import React from 'react'
import "../../style/HomeClient.scss"


const Modal = ({ selectImg, SetselectImg }) => {
    console.log(selectImg)

    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop"))
            SetselectImg(null)

    }



    return (
        <div className="backdrop" onClick={handleClick} >

            <img src={selectImg} alt="" />

        </div>
    )
}

export default Modal; 