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


//Routes for client 
import PhotoHome from "./components/client/Photos"
import Preparation from "./pages/client/preparation"
import Mairie from "./pages/client/Mairie"
import Parc from "./pages/client/Parc"
import Soir from "./pages/client/Soir"
import Invites from "./pages/client/Invites"
import Profile from "./pages/client/profile"



//Routes for Client
import Home from "./pages/client/HomeClient"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import HomeClient from "./pages/client/HomeClient";


const Routes = (props) => {
    return (
        <Router>

            <div >
                <Switch>


                    <Route exact path="/profileClient/:id" >  <ProfileClient />   </Route>
                    <Route exact path="/nosotros/:id">  <User />      </Route>

                    <Route exact path="/dashboard"> <Dashboard />  </Route>
                    <Route exact path="/createClient"> <CreateClient />  </Route>
                    <Route exact path="/addPhotos"> <AddPhoto />  </Route>
                    <Route exact path="/listeClients"> <ListeClient />  </Route>
                    <Route exact path="/listePhotos/:id"> <ListePhotos />  </Route>
                    <Route exact path="/profileClient"> <ProfileClient />  </Route>
                    <Route exact path="/updatePhoto"> <UpdatePhoto />  </Route>
                    <Route exact path="/deleteClient"> <DeleClient />  </Route>
                    <Route exact path="/deletePhoto">  <DelePhoto />      </Route>
                    <Route exact path="/compteAdmin">  <CompteAdmin />      </Route>



                    <Route exact path="/mariage.online/home"> <HomeClient />  </Route>
                    <Route exact path="/mariage.online/preparation"> <Preparation />  </Route>
                    <Route exact path="/mariage.online/mairie"> <Mairie />  </Route>
                    <Route exact path="/mariage.online/parc"> <Parc />  </Route>
                    <Route exact path="/mariage.online/soir"> <Soir />  </Route>
                    <Route exact path="/mariage.online/invites"> <Invites />  </Route>
                    <Route exact path="/mariage.online/profile"> <Profile />  </Route>


                    <Router path="/home"> <Home />  </Router>

                    //Général
                    <Router exact path="/"> <Login />  </Router>

                </Switch>

            </div>
        </Router>

    );
}

export default Routes;