import React from 'react'
import Nav from "../../components/client/Nav"
import SoirPhotos from "../../components/client/SoirPhotos"
import SoirModal from "../../components/client/SoirModal"
import api from "../../service/api"
import { useEffect, useState } from 'react'
import SideNavBar from "../../components/client/SidNavBar"
import AffterNav from "../../components/client/affterNav"



const Soir = () => {

    const [soirPhotos, SetSoirPhotos] = useState([])


    const TakeSoirPhotos = async () => {
        try {
            const response = await api.get(`/application/profileClient/${31}`);

            const array = response.data.filter((elem) => {
                return elem.moment === "soir"
            })


            SetSoirPhotos(array)

        } catch (error) {
            return console.log(error)

        }
    }


    useEffect(() => {

        return TakeSoirPhotos()

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

            <SoirPhotos soirPhotos={soirPhotos} SetselectImg={SetselectImg} close={hadleClose} />
            {selectImg && <SoirModal selectImg={selectImg} SetselectImg={SetselectImg} />}
        </div>
    )
}

export default Soir; 
