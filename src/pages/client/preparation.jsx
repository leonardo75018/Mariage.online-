import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Nav from "../../components/client/Nav"
import SideNav from "../../components/client/SidNavBar"
import PrepaPhotos from "../../components/client/PrepaPhotos"
import PrepaModal from "../../components/client/PrepaModal"
import api from "../../service/api"
import SideNavBar from "../../components/client/SidNavBar"
import AffterNav from "../../components/client/affterNav"


const Preparation = () => {

    const [prepaPhotos, SetprepaPhotos] = useState([])

    const TakePrepaPhotos = async () => {
        try {
            const response = await api.get(`/application/profileClient/${31}`);

            const array = response.data.filter((elem) => {
                return elem.moment === "prepa"
            })


            SetprepaPhotos(array)

        } catch (error) {
            return console.log(error)

        }
    }


    useEffect(() => {

        return TakePrepaPhotos()

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

            <PrepaPhotos prepaPhotos={prepaPhotos} SetselectImg={SetselectImg} close={hadleClose} />

            { selectImg && <PrepaModal selectImg={selectImg} SetselectImg={SetselectImg} />}






        </div>
    )
}

export default Preparation; 
