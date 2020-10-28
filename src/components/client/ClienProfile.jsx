import React, { useState } from 'react'
import { useEffect } from 'react'
import api from "../../service/api"
import { useForm } from 'react-hook-form'





const ClienProfile = () => {



    // const user = JSON.parse(localStorage.getItem('user'));

    const [client, SetClient] = useState([])


    const GetClient = async () => {
        try {
            const response = await api.post(`/application/oneClient/${31}`);
            SetClient(response.data)


        } catch (error) {

        }

    }

    useEffect(() => {
        return GetClient()

    }, [])



    const { register, errors, handleSubmit } = useForm({
        // defaultValues: state
    });


    const onSubmit = async (data) => {

        const response = await api.put(`/application/actualiserClient/${31}`, data);
        GetClient()

    }






    return (

        <div id="profile-container">

            <div className="photo-admin">
                {
                    client.map(client =>
                        <img src={client.profile} alt="" />

                    )
                }

            </div>
            <div>
                {client.map(client =>
                    <div className="admin-id">
                        <p>{client.firstName}</p> -
                        <p>{client.lastName}</p>
                    </div>
                )}
            </div>


            <form onSubmit={handleSubmit(onSubmit)} >
                {client.map(client =>
                    <div >
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Votre nom" name="lastName" defaultValue={client.lastName} ref={register()} />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Votre prénom" name="firstName" defaultValue={client.firstName} ref={register()} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Votre email" name="email" defaultValue={client.email} ref={register()} />
                            </div>
                            <div class="col">
                                <input class="form-control" placeholder="Mot de passe" name="password" />
                            </div>
                        </div>
                    </div>
                )}


                <button type="submit" class="btn btn-primary mb-2">Modifier</button>
            </form>
        </div>
    )






}

export default ClienProfile; 
