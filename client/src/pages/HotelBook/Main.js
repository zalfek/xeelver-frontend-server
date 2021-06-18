import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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