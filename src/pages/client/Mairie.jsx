import React from 'react'
import { useEffect, useState } from 'react'
import Nav from "../../components/client/Nav"
import MairiePhotos from "../../components/client/MairieModal"
import api from "../../service/api"
import SideNavBar from "../../components/client/SidNavBar"
import AffterNav from "../../components/client/affterNav"

const Mairie = () => {

    const [cerimonyPhotos, SetprepaPhotos] = useState([])

    const TakeCerimonyPhotos = async () => {
        try {
            const response = await api.get(`/application/profileClient/${31}`);

            const array = response.data.filter((elem) => {
                return elem.moment === "cerimonie"
            })


            SetprepaPhotos(array)

        } catch (error) {
            return console.log(error)

        }
    }


    useEffect(() => {

        return TakeCerimonyPhotos()

    }, [])

    //Photo cliquer 
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


            <MairiePhotos cerimonyPhotos={cerimonyPhotos} SetselectImg={SetselectImg} close={hadleClose} />

        </div>
    )
}

export default Mairie; 
