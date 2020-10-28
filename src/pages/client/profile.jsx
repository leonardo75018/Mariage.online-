import React from "react"
import Nav from "../../components/client/Nav"
import ClientProfile from "../../components/client/ClienProfile"
import { useState } from "react";
import api from "../../service/api"

const Profile = () => {


    return (
        <div>
            <Nav />
            <ClientProfile />



        </div>
    );
}

export default Profile;