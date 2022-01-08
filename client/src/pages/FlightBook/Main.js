import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {FlightCardInfo} from "../../components/FlightCardInfo/FlightCardInfo";
import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import UserService from "../../services/UserService";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    duration : {
      marginLeft:30,
    },


}));


export default function Main(props) {
    const classes = useStyles();
    const state = props.state
    let history = useHistory();
    function Link(){
        history.push({
            pathname: '/flights/order',
            state: state.cardObject
        });

    }
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
                <Button variant="contained" size="large" color="primary" fullWidth onClick={Link}>
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