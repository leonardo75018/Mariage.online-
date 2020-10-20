import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from 'react-hook-form'
import api from "../service/api"
import { ColorizeSharp } from '@material-ui/icons';


//Teste
import Usertable from "../components/UserTable"

const ModalExample = (props) => {
    console.log(props)
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);



    //Ajouter client
    const [newClient, setNewClient] = useState({
        // role: "",
        // nom: "",
        // prenom: "",

    })

    const handleInputChange = (event) => {
        //1 console.log("funciona")
        // console.log(event.target.value)
        setNewClient({
            ...newClient,
            [event.target.name]: event.target.value
        })

    }

    const sendDatas = async (event) => {
        event.preventDefault();


        const response = await api.post("/application/create/client", newClient);
        // const response = await api.post("/application/create/client", newClient);
        // console.log(response)

    }



    return (
        <div>

            <Button color="danger" onClick={toggle}>{buttonLabel} Update Client</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>

                <ModalBody>

                    <form onSubmit={sendDatas}>
                        <label htmlFor="">Role</label>
                        <input
                            name="role"
                            type="file"
                            onChange={handleInputChange}
                        />

                        <label htmlFor="">Photo de profile</label>
                        <input
                            type="file"
                            name="profile"
                            onChange={handleInputChange}
                        />

                        <label htmlFor="">Nom</label>
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleInputChange}
                        />

                        <label htmlFor="">Prénom</label>
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleInputChange}
                        />

                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            name="email"
                            onChange={handleInputChange}
                        />

                        <label htmlFor="">Téléphone</label>
                        <input
                            type="text"
                            name="telephone"
                            onChange={handleInputChange}
                        />


                        <label htmlFor="">Password</label>
                        <input
                            type="text"
                            name="password"
                            onChange={handleInputChange}
                        />


                        <button type="submit" onClick={toggle}>Ajouter</button>
                    </form>






                    {/* <form onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="">Role</label>
                        <input type="text" name="role" ref={
                            register({
                                required: { value: true, message: "champ obligatoire" }

                            })
                        } />
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.role?.message}
                        </span>

                        <label htmlFor="">Nom</label>
                        <input type="text" name="nom" ref={register({ required: { value: true, message: "champ obligatoire" } })} />
                        <span className="text-danger text-small d-block mb-2">{errors?.nom?.message}</span>

                        <label htmlFor="">Prénom</label>
                        <input type="text" name="prenom" ref={register({ required: { value: true, message: "champ obligatoire" } })} />
                        <span className="text-danger text-small d-block mb-2">{errors?.prenom?.message} </span>

                        <label htmlFor="">Email</label>
                        <input type="text" name="email" ref={register({ required: { value: true, message: "champ obligatoire" } })} />
                        <span className="text-danger text-small d-block mb-2"> {errors?.email?.message}</span>

                        <label htmlFor="">Téléphone</label>
                        <input type="text" name="telephone" ref={register({ required: { value: true, message: "champ obligatoire" } })} />
                        <span className="text-danger text-small d-block mb-2">{errors?.telephone?.message}</span>

                        <label htmlFor="">Password</label><input type="text" name="password" ref={register({ required: { value: true, message: "champ obligatoire" } })} />
                        <span className="text-danger text-small d-block mb-2"> {errors?.password?.message} </span>

                        <Button type="submit" color="primary" >Ajouter</Button>{' '}
                    </form> */}

                </ModalBody>
                <ModalFooter>

                    <Button color="secondary" onClick={toggle}>annuler </Button>
                    <span>Dans le futur le password aléatoire vas seras ici</span>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;