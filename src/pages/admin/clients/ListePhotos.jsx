import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from "../../../components/menu-admin"
import Footer from "../../../components/footer.admin"
import { useParams } from "react-router-dom";








//For photos
import CrudPhotos from "../../../components/crudPhotos"
import InfosClient from "../../../components/infoPhofile"





export default function Dashboard() {


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




    // const response = await api.get("/application/find/client");


    // let { id } = useParams();
    // console.log(id)



    return (

        <div className={classes.root}>
            <MenuAdmin />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>



                    <Grid container spacing={3} >
                        < InfosClient />
                        <CrudPhotos />
                    </Grid>
                    <Box pt={4}>
                        <Footer />
                    </Box>
                </Container>
            </main>

        </div >
    );
}