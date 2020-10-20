import React from "react"
import Login from "./pages/admin/loigin/Login"
import CompteAdmin from "./pages/admin/CompteAdmin"



import User from './components/User';



//Routes for Admin 
import Dashboard from "./pages/admin/dashboard/index"

import CreateClient from "./pages/admin/clients/CreateClient"
import AddPhoto from "./pages/admin/clients/addPhoto"
import ListeClient from "./pages/admin/clients/ListeClient"
import ListePhotos from "./pages/admin/clients/ListePhotos"
import ProfileClient from "./pages/admin/clients/profilClient"
import UpdatePhoto from "./pages/admin/clients/UpdatePhoto"
import DeleClient from "./pages/admin/clients/deleteClient"
import DelePhoto from "./pages/admin/clients/deletePhoto"



//Routes for Client
import Home from "./pages/client/panel/index"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";


const Routes = (props) => {
    return (
        <Router>

            <div >
                <Switch>


                    <Router exact path="/profileClient/:id" >  <ProfileClient />   </Router>
                    <Router exact path="/nosotros/:id">  <User />      </Router>

                    <Router exact path="/dashboard"> <Dashboard />  </Router>
                    <Router exact path="/createClient"> <CreateClient />  </Router>
                    <Router exact path="/addPhotos"> <AddPhoto />  </Router>
                    <Router exact path="/listeClients"> <ListeClient />  </Router>
                    <Route exact path="/listePhotos/:id"> <ListePhotos />  </Route>
                    <Router exact path="/profileClient"> <ProfileClient />  </Router>
                    <Router exact path="/updatePhoto"> <UpdatePhoto />  </Router>
                    <Router exact path="/deleteClient"> <DeleClient />  </Router>
                    <Router exact path="/deletePhoto">  <DelePhoto />      </Router>
                    <Router exact path="/compteAdmin">  <CompteAdmin />      </Router>


                    //Clients
                    <Router path="/home"> <Home />  </Router>


                    //Général
                    <Router exact path="/"> <Login />  </Router>

                </Switch>

            </div>
        </Router>

    );
}

export default Routes;