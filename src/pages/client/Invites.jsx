import React from 'react'
import Nav from "../../components/client/Nav"
import api from "../../service/api"
import { useEffect, useState } from 'react'
import InvitesPhoto from "../../components/client/InvitesPhotos"
import InvitesModal from "../../components/client/InvitesModal"
import SideNavBar from "../../components/client/SidNavBar"
import AffterNav from "../../components/client/affterNav"

const Invites = () => {

    const [InvitesPhotos, SetInvitesPhotos] = useState([])


    const TakeInvitesPhotos = async () => {
        try {
            const response = await api.get(`/application/profileClient/${31}`);

            const array = response.data.filter((elem) => {
                return elem.moment === "invites"
            })


            SetInvitesPhotos(array)

        } catch (error) {
            return console.log(error)

        }
    }


    useEffect(() => {

        return TakeInvitesPhotos()

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

            <InvitesPhoto InvitesPhotos={InvitesPhotos} SetselectImg={SetselectImg} close={hadleClose} />
            {selectImg && <InvitesModal selectImg={selectImg} SetselectImg={SetselectImg} />}





        </div>
    )
}

export default Invites; 
