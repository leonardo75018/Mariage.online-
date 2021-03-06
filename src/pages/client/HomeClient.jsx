import React, { useEffect, useState } from 'react'
import PhotoHome from "../../components/client/Photos"
import Modal from "../../components/client/Modal"
import Nav from "../../components/client/Nav"
import SideNavBar from "../../components/client/SidNavBar"
import AffterNav from "../../components/client/affterNav"
import api from "../../service/api"
import "../../style/nav-bar.scss"







const HomeClient = () => {


    const [photos, SetPhotos] = useState([])


    const TakePhoto = async () => {
        try {
            const response = await api.get(`/application/profileClient/${31}`);

            const array = response.data.filter((elem) => {
                return elem.moment === "cerimonie"
            })


            SetPhotos(array)

        } catch (error) {
            return console.log(error)

        }
    }




    useEffect(() => {
        TakePhoto()

    }, [])

    const [selectImg, SetselectImg] = useState(null)


    const [sideOpen, SideClose] = useState(false)

    const hadleOpen = () => {
        SideClose(true)
    }

    const hadleClose = () => {
        SideClose(false)
    }



    return (
        <div>
            <Nav Open={hadleOpen} close={hadleClose} />
            <AffterNav close={hadleClose} />

            {sideOpen ? (
                <div>
                    <SideNavBar close={hadleClose} sideBarOpen={sideOpen} />

                </div>) : null}


            <PhotoHome photos={photos} SetselectImg={SetselectImg} close={hadleClose} />

            { selectImg && <Modal selectImg={selectImg} SetselectImg={SetselectImg} />}






        </div>
    )
}



export default HomeClient;
