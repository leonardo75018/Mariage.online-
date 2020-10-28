import React from 'react'
import Nav from "../../components/client/Nav"
import { useEffect, useState } from 'react'
import ParcPhotos from "../../components/client/ParcPhotos"
import ParcModal from "../../components/client/ParcModal"
import SideNavBar from "../../components/client/SidNavBar"
import AffterNav from "../../components/client/affterNav"


import api from "../../service/api"

const Parc = () => {

    const [parcPhotos, SetparcPhotos] = useState([])

    const TakeParcPhotos = async () => {
        try {
            const response = await api.get(`/application/profileClient/${31}`);

            const array = response.data.filter((elem) => {
                return elem.moment === "parc"
            })


            SetparcPhotos(array)

        } catch (error) {
            return console.log(error)

        }
    }


    useEffect(() => {

        return TakeParcPhotos()

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

            <ParcPhotos parcPhotos={parcPhotos} SetselectImg={SetselectImg} close={hadleClose} />

            {selectImg && <ParcModal selectImg={selectImg} SetselectImg={SetselectImg} />}


        </div>
    )
}

export default Parc; 
