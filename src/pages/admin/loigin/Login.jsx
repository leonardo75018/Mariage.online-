import React, { Fragment, useState } from "react"
import '../../../style/App.scss';
import api from "../../../service/api"
import history from "../../../functions/history"

import { useForm } from 'react-hook-form'
import UserTable from "../../../components/UserTable";


const Login = () => {


    const [datas, setdatas] = useState({
        email: "",
        password: "",

    })

    const [err, SetErr] = useState({})




    const inputChange = (event) => {
        // console.log(event.target.value)
        setdatas({
            ...datas,
            [event.target.name]: event.target.value,
        })

    }


    const Login = async (event) => {
        event.preventDefault();
        const userData = datas;

        try {
            const response = await api.post("/application/admin/login", userData);
            console.log(response.status)
            const token = response.data.token;
            const user = response.data.user
            const status = response.status;
            if (token) {
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                api.defaults.headers.common['Authorization'] = token;
            }

            if (status === 200) {
                window.location.href = "/dashboard"
            }
        } catch (err) {
            SetErr(err.response.data.error)

        }


    }
    var val = localStorage.getItem('user');
    console.log(val)



    return (
        <Fragment >

            <div id="page">
                <div id="login-container">
                    <div className="form-container  ">
                        <div className="acroche"><h2 className="animate__animated animate__bounce"> <div>Connectez-vous à  Mariage.oneline</div></h2></div>

                        <form onSubmit={Login}>
                            <div>
                                < input
                                    placeholder="votre email"
                                    name="email"
                                    type="email"
                                    onChange={inputChange}
                                    className="form-input"
                                />
                            </div>
                            {
                                err === "User not found" ? (<span className="error">Compte Mariage.online introuvable</span>) : (<span></span>)
                            }

                            <div>
                                < input
                                    placeholder="votre mot de passe"
                                    name="password"
                                    type="password"
                                    onChange={inputChange}

                                />
                            </div>
                            {
                                err === "Invalid password" ? (<span className="error"> Mot de passe incorrect</span>) : (<span></span>)
                            }

                            <div className="mt-3"> <button type="submit" className="form-submit " >Login</button></div>

                        </form>
                    </div>

                    <div className="photo-container"> </div>

                </div>

            </div>

        </Fragment>
    );
}

export default Login;