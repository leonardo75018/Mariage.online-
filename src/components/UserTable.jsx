import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import api from "../service/api"
import { useForm } from 'react-hook-form'
import "../style/index.css"
import { Link, useParams } from "react-router-dom"
import Moment from 'react-moment';
import 'moment-timezone';







const UserTable = (props) => {

    let { id } = useParams();







    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    const [state, setState] = useState([]);


    const takeClient = (id) => {
        const client = props.clients;

        const clientFilter = client.filter(function (client) {
            if (client.id === id) {
                return true;

            } else {
                return false;

            }

        })
        const clientMap = clientFilter.map(ite => {
            setState(ite)
        })
    }



    const { register, errors, handleSubmit } = useForm({
        // defaultValues: state
    });


    const onSubmit = async (data) => {
        const id = state.id;
        const response = await api.put(`/application/actualiserClient/${id}`, data);


    }

    const [idProfile, setIdprofile] = useState()

    const TakeIdProfile = (id) => {


    }






    return (
        <div>



            < table >
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Role</th>
                        <th>Date de création</th>
                        <th>Actions</th>


                    </tr>
                </thead>
                <tbody>
                    {props.clients.length > 0 ? (
                        props.clients.map(item => (

                            <tr key={item.id}>
                                <div className="avatar">
                                    <Link to={`listePhotos/` + item.id} target="_blank" >
                                        <img onClick={() => TakeIdProfile(item.id)} src={item.profile} alt="Avatar"></img>
                                    </Link>
                                </div>

                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.telephone}</td>
                                <td>{item.role}</td>
                                <td>
                                    < Moment date={item.createdAt} />

                                </td>


                                <td>
                                    <button
                                        className="button muted-button"
                                        onClick={() => {
                                            takeClient(item.id);
                                            toggle();

                                        }}

                                    >Modifier
                                </button>
                                    <button
                                        className="button muted-button"
                                        onClick={() => {
                                            props.deleClient(item.id)

                                        }}
                                    >Effacer</button>

                                </td>
                            </tr>
                        ))
                    ) : (
                            <span class="badge badge-info"> Aucun client dans la base des données </span>

                        )}

                </tbody>
            </table >


            {/* Modal Mofifier Client */}
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>

                <ModalBody>

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label htmlFor="">Role</label>
                        <input
                            name="role"
                            type="text"
                            defaultValue={state.role}
                            ref={register}

                        />

                        <label htmlFor="">Photo de profile</label>
                        <input
                            type="text"
                            name="profile"
                            defaultValue={state.profile}
                            ref={
                                register()
                            }

                        />

                        <label htmlFor="">Nom</label>
                        <input
                            type="text"
                            name="firstName"
                            defaultValue={state.firstName}
                            ref={
                                register
                            }

                        />

                        <label htmlFor="">Prénom</label>
                        <input
                            type="text"
                            name="lastName"
                            defaultValue={state.lastName}
                            ref={
                                register()
                            }

                        />

                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            name="email"
                            defaultValue={state.email}
                            ref={
                                register()
                            }

                        />

                        <label htmlFor="">Téléphone</label>
                        <input
                            type="text"
                            name="telephone"
                            defaultValue={state.telephone}
                            ref={
                                register()
                            }

                        />

                        <button type="submit" onClick={() => {
                            props.alllClient(idProfile)

                            toggle();

                        }}>Modifier</button>
                    </form>


                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>


        </div>





    );
}

export default UserTable;