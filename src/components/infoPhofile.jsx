import React, { useState, useEffect } from 'react'
import "../style/infosClient.scss"
import { Link, useParams } from "react-router-dom"

import api from "../service/api"

const InfoPhofile = () => {
    const { id } = useParams();


    const [infos, SetInfos] = useState([])



    const findClient = async () => {
        const response = await api.post(`/application/oneClient/${id}`);
        const data = response.data;
        SetInfos(data)

    }

    useEffect(() => {
        return findClient()
    }, [])



    return (
        <div className="ee">

            {
                infos.map(client =>


                    <div className="client-infos" >

                        <div className="client-photo"> <img src={client.profile} alt="" /> </div>
                        <div className="indentite">
                            <p>{client.firstName}</p> -
                            <p>{client.lastName}</p>
                        </div>




                    </div>
                )
            }


        </div>
    )
}


export default InfoPhofile