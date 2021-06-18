import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './MarkDown';
import { Card } from 'semantic-ui-react'
import CardContent from "@material-ui/core/CardContent";
import {Row} from "reactstrap";
import {useLocation} from "react-router-dom";
import {FlightCardInfo} from "../../components/FlightCardInfo/FlightCardInfo";
import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import UserService from "../../services/UserService";

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    duration : {
      marginLeft:30,
    },


}));


function logIn(){
    UserService.doLogin()


}


export default function Main(props) {
    const classes = useStyles();
    const state = props.state
    console.log(state)
    return (
        <Grid item xs={12} md={8}>
            <Paper elevation='6' style={{backgroundColor: 'whitesmoke'}} >
                <br/>
            <Typography variant="h6" gutterBottom align='center'>
                Departure
                <Typography align='center' color='textSecondary' variant='subtitle2'>
               Total duration : {state.cardObject.itineraries[0].duration.slice(2,5).toLowerCase() + " " + state.cardObject.itineraries[0].duration.slice(5).toLowerCase() }
                </Typography>
            </Typography>
            {state.cardObject.itineraries[0].segments.map((segment, index) => (
                <FlightCardInfo
            state = {segment}
            />
            ))}
            <br/>
            <Typography variant="h6" gutterBottom align='center'>
                Return
                <Typography align='center' color='textSecondary' variant='subtitle2'>
                    Total duration : {state.cardObject.itineraries[state.cardObject.itineraries.length - 1].duration.slice(2,5).toLowerCase() + " " + state.cardObject.itineraries[[state.cardObject.itineraries.length - 1]].duration.slice(5).toLowerCase() }
                </Typography>
            </Typography>
            {state.cardObject.itineraries[state.cardObject.itineraries.length -1].segments.map((segment, index) => (
            <FlightCardInfo
                state = {segment}
            />
            ))}
                <Typography align='center' style={{padding:'15px'}} >
                <Button variant="contained" size="large" color="primary" fullWidth onClick={logIn}>
                    Order {state.cardObject.price.total + " "}€
                </Button>
                </Typography>
            </Paper>
        </Grid>

    );
}

Main.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
};