import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import api from "../service/api"
import style from "../style/addClient.scss"



const ModalExample = (props) => {


    const [errAdd, SeterrAdd] = useState([])
    const [password, Setpassword] = useState([])
    console.log(password.length)


    const Allclient = () => {
        props.alllClient()
    }


    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);



    //Ajouter client
    const [newClient, setNewClient] = useState({

    })

    const handleInputChange = (event) => {
        setNewClient({
            ...newClient,
            [event.target.name]: event.target.value
        })

    }

    const sendDatas = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post("/application/create/client", newClient);
            Setpassword(response.data.pass)

        } catch (error) {
            SeterrAdd(error.response.data)

        }


    }

    const FindProfile = () => {
        props.alllClient()
    }



    return (
        <div className="add-client">
            <Button color="danger" onClick={toggle}>{buttonLabel} Ajouter client</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>



                <ModalBody>
                    <form onSubmit={sendDatas}>
                        <label htmlFor="">Role</label>
                        <input
                            name="role"
                            type="text"
                            onChange={handleInputChange}


                        />



                        <label htmlFor="">Photo de profile</label>
                        <input
                            type="text"
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


                        {
                            password.length > 0 ? (
                                <span class="badge badge-success" >le mot de passe pour ce client est {password}</span>

                            ) : (
                                    <span></span>
                                )
                        }



                        <span class="badge badge-danger">{errAdd}</span> <br />


                        <button type="submit" onClick={() => {
                            FindProfile();
                            // toggle();
                        }}>Ajouter</button>
                    </form>

                </ModalBody>
            </Modal>


        </div>
    );
}

export default ModalExample;