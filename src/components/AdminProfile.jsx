import React, { useState, useEffect } from 'react'
import api from "../service/api"
import style from "../style/profileAdmin.scss"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form'




const AdminProfile = () => {



    const [admin, SetAdmin] = useState([])

    const user = JSON.parse(localStorage.getItem('user'));



    const getAdmin = async () => {
        try {
            const response = await api.get(`/application/oneAdmin/${user.id}`);
            SetAdmin(response.data)
        } catch (error) {

        }

    }

    useEffect(() => {
        return getAdmin()

    }, [])


    const { register, errors, handleSubmit } = useForm({
        // defaultValues: state
    });


    const onSubmit = async (data) => {

        const response = await api.put(`/application/actualiserAdmin/${user.id}`, data);
        getAdmin()


    }













    return (

        <div id="profile-container">

            <div className="photo-admin">
                {
                    admin.map(admin =>
                        <img src={admin.profile} alt="" />

                    )
                }

            </div>
            <div>
                {admin.map(admin =>
                    <div className="admin-id">
                        <p>{admin.firstName}</p> -
                        <p>{admin.lastName}</p>
                    </div>
                )}
            </div>


            <form onSubmit={handleSubmit(onSubmit)} >
                {admin.map(admin =>
                    <div >
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Votre nom" name="lastName" defaultValue={admin.lastName} ref={register()} />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Votre prénom" name="firstName" defaultValue={admin.firstName} ref={register()} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Votre email" name="email" defaultValue={admin.email} ref={register()} />
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


export default AdminProfile;