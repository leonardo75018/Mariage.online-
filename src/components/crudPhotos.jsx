import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import api from "../service/api"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";

const CrudPhotos = (props) => {


    const { id } = useParams();


    const dataform = {
        idClient: "",
        moment: "",
        urlPhoto: ""
    }

    const [newPhoto, SetNewPhoto] = useState(dataform)



    //For modal 
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);


    const toggle = () => setModal(!modal);
    const toggle2 = () => setModal2(!modal2);




    //For photo data 
    const [photos, Setphotos] = useState([])


    const getPhotos = async () => {
        const response = await api.get(`/application/profileClient/${id}`);
        const photos = response.data;
        Setphotos(photos)
    }

    useEffect(async () => {
        return getPhotos()

    }, [])



    const { register, errors, handleSubmit } = useForm({

    })




    const handleInputeChange = async (event) => {

        SetNewPhoto({
            ...newPhoto,
            [event.target.name]: event.target.value

        })
        // console.log(event.target.value)

    }




    const onSubmit = async (data) => {
        const response = await api.post(`/application/create/image`, data);

        getPhotos()
    }

    // const [idUp, SetIdUp] = useState()
    // console.log(idUp)

    const onSubmit2 = async (data, id) => {
        const response = await api.put(`/application/actualiseImage/`, data);
        // console.log(response)
        // getPhotos()
    }

    const delelePhoto = async (id) => {
        const response = await api.post(`/application/deleteImage/${id}`);
        getPhotos()

    }




    return (
        <div >

            <div>
                <div className="add-photo">  <Button color="danger" onClick={toggle}>{buttonLabel}Ajouter Photo</Button> </div>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <label>IdClient</label>
                            <input
                                type="text"
                                name="idClient"
                                defaultValue={id}
                                ref={register}
                                onChange={handleInputeChange}
                                ref={register}
                            />

                            <label>Moment</label>
                            <input type="text"
                                name="moment" ref={register}
                                onChange={handleInputeChange}


                            />

                            <label>Url Photo</label>
                            <input
                                type="text" name="urlPhoto"
                                onChange={handleInputeChange}
                                ref={register} />
                            <Button type="submit" color="primary" onClick={toggle}>Ajouter Photo</Button>{' '}
                        </form>
                    </ModalBody>
                </Modal>

                {/* Modal modify */}
                <div>
                    <Modal isOpen={modal2} toggle={toggle2} className={className}>
                        <ModalHeader toggle={toggle2}>Modal title</ModalHeader>
                        <ModalBody>
                            <form onSubmit={handleSubmit(onSubmit2)} >
                                <label>IdClient</label>
                                <input
                                    type="text"
                                    name="idClient"
                                    defaultValue="24" ref={register}
                                    onChange={handleInputeChange}
                                    ref={register}
                                />

                                <label>Moment</label>
                                <input type="text"
                                    name="moment" ref={register}
                                    onChange={handleInputeChange}


                                />

                                <label>Url Photo</label>
                                <input
                                    type="text" name="urlPhoto"
                                    onChange={handleInputeChange}
                                    ref={register} />
                                <Button type="submit" color="primary" onClick={toggle2}>Modifier</Button>{' '}
                            </form>
                        </ModalBody>
                    </Modal>
                </div>
            </div>


            <table class="table table-hover table-fixed">
                <thead>
                    <tr>
                        <th >Photo ID</th>
                        <th>Moment</th>
                        <th>photo</th>
                        <th>Date d'ajoute</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        photos.length > 0 ? (


                            photos.map(photo =>

                                <tr key={photo.id}>

                                    <td>{photo.id}</td>
                                    <td>{photo.moment}</td>
                                    <td>{photo.urlPhoto}</td>
                                    <td>{photo.createdAt}</td>
                                    <td>
                                        <button onClick={() => {
                                            toggle2();
                                        }} className="button muted-button">Modifier</button>
                                        <button className="button muted-button"
                                            onClick={() => delelePhoto(photo.id)}
                                        >Supprimer</button>
                                    </td>
                                </tr>
                            )



                        ) : (
                                <span class="badge badge-info">Cette utilisateur n'a pas encore de photo. Ajoutez les</span>
                            )

                    }


                </tbody>
            </table>
        </div>
    )
}


export default CrudPhotos;


