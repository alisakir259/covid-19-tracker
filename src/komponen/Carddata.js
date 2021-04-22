//import package
import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//styling component
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        color: 'white',
        height: '70px',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(8),
        backgroundColor: '#01579b',
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    card: {
        maxHeight: '200%',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '300px',
        marginLeft: '13.5px',
        marginRight: '13.5px',
        float: 'right',
        width: '100px',
        position: 'center',
        borderRadius: '7px',
        justifyContent: 'space-evenly',
        boxSizing: 'border-box',
    },
    cardMedia: {
        paddingTop: '6.25%',
        paddingBottom: '6.25%',
        //backgroundColor: '#16A086',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export default function Cards() {
    const classes = useStyles();
    const [stats, handleStats] = useState([]);

    const AmbilData = async () => {
        const data = await fetch('https://corona.lmao.ninja/v2/all');
        const stats = await data.json()
        console.log(stats)
        handleStats(stats)
    }

    useEffect(() => {
        AmbilData()
    }, [])

    const dataformat = new Intl.NumberFormat('en')

    return (

        <React.Fragment>
            <CssBaseline/>
            <main>
                <Container className={classes.cardGrid} maxWidth="600px" >
                <br/><br/>
                <Grid container spacing={0} justify="space-evenly">
                    <Card className={classes.Card} variant="outlined" elevation={3}>
                    <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.cardMedia} align="center">
                    <Typography color="secondary" style={{ fontSize: 25 }}>
                                    TOTAL POSITIF
                    </Typography>
                    <Divider/>
                    <Typography color="primary" style={{ fontSize: 40, color: '#0F6177' }}>
                        {dataformat.format(stats.cases)}
                    </Typography>
                    </CardMedia>
                    </CardContent>
                    </Card>

                    <Card className={classes.Card} variant="outlined">
                    <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.cardMedia} align="center">
                    <Typography color="secondary" style={{ fontSize: 25 }}>
                                    TOTAL MENINGGAL
                    </Typography>
                    <Divider/>
                    <Typography color="primary" style={{ fontSize: 40, color: '#0F6177' }}>
                        {dataformat.format(stats.deaths)}
                    </Typography>
                    </CardMedia>
                    </CardContent>
                    </Card>

                    <Card className={classes.Card} variant="outlined">
                    <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.cardMedia} align="center">
                    <Typography color="secondary" style={{ fontSize: 25 }}>
                                    TOTAL SEMBUH
                    </Typography>
                    <Divider/>
                    <Typography color="primary" style={{ fontSize: 40, color: '#0F6177' }}>
                        {dataformat.format(stats.recovered)}
                    </Typography>
                    </CardMedia>
                    </CardContent>
                    </Card>
                </Grid> <br/>
                </Container>
            </main>
        </React.Fragment>
    );
}