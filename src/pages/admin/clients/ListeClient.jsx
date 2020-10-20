import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from "../../../components/menu-admin"
import Footer from "../../../components/footer.admin"
import ModalAdd from "../../../components/ModalAdd"






//For table 
import UserTable from '../../../components/UserTable';
import api from "../../../service/api"
import AddUserForm from '../../../components/AddUserForm';




export default function Dashboard() {
    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },

        title: {
            flexGrow: 1,
        },

        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },

    }));

    const classes = useStyles();


    //Find client
    const [clients, setClients] = React.useState([])

    const alllClient = async () => {
        try {
            const response = await api.get("/application/find/client");

            const listeClient = response.data.allClients;
            // console.log(listeClient)

            setClients(listeClient)


        } catch (error) {

        }

    }

    useEffect(() => {
        return alllClient()

    }, [])



    //Delete Client
    const deleclient = async (id) => {
        try {
            const response = await api.post(`/application/deleteClient/${id}`);
            const clientFiltrado = clients.filter(client => client.id !== id);
            setClients(clientFiltrado)

        } catch (error) {
            return console.log(error)

        }
    }



    //Add client
    const ModalExample = (props) => {
        const {
            buttonLabel,
            className
        } = props;

        const [modal, setModal] = useState(false);
        const toggle = () => setModal(!modal);
    }





    return (
        <div className={classes.root}>
            <MenuAdmin />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <ModalAdd alllClient={alllClient} />

                    <Grid container spacing={3}>

                        <UserTable clients={clients} deleClient={deleclient} alllClient={alllClient} />

                    </Grid>
                    <Box pt={4}>
                        <Footer />
                    </Box>
                </Container>
            </main>

        </div >
    );
}