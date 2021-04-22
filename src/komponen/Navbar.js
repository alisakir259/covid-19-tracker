import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

//Tampilan Website
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#f1f1f1',
    },
    title: {
        flexGrow: 1,
        height: '150px',
        //backgroundColor: '#0F6177',
    },
}));

//Function
export default function Navbar() {
    const  classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='static'>
            <Toolbar style={{ backgroundColor: '#0F6177' }}>
            <Typography variant='h4' className={classes.title} style={{ marginTop: 20 }}>
            KAWAL CORONA <br/>
            Data Perkembangan Penyebaran <br/>
            Covid-19 
            </Typography>
            </Toolbar>
            </AppBar>
        </div>
    );
}