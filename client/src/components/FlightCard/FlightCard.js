import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import clsx from "clsx";
import AccordionActions from "@material-ui/core/AccordionActions";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '75%',
        borderRadius:'10%',
        marginLeft :125,
        marginBottom:75,
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(),
        color: theme.palette.text.secondary,
        marginRight:theme.typography.pxToRem(0),
    },
    ThirdHeading:{
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    checkButton:{
        justifyContent:'flex-end',
        marginLeft: 100,
    },
    details: {
        alignItems: 'center',
        textAlign:'center',
        marginLeft : 20,
    },
    column: {
        flexBasis: '33%',

    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(0,0 ),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));


export const FlightCard = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={clsx(classes.ThirdHeading,classes.checkButton)}>
                            <Button variant="outlined" size="medium" color="primary" >
                                Check {" " + props.price}
                            </Button>
                        </Typography>
                    </div>
                </AccordionSummary>

                <Divider />
                <AccordionDetails className={classes.details}>
                     <div className={classes.column} >
                        <Typography variant="caption"  className={classes.secondaryHeading}>
                            {props.airLine }
                            <br/>
                            {props.duration.slice(2,5).toLowerCase() + " " + props.duration.slice(5).toLowerCase()}
                            <br/>
                            {props.stops + " stops"}
                        </Typography>
                    </div>
                    <div className={clsx(classes.column,classes.helper)}>
                        <Typography variant="h4">
                            {props.departureTime.slice(11,16)}
                            <br />
                        </Typography>
                        <Typography variant ="caption">
                            {props.departureAirport}
                        </Typography>
                    </div>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="h4">
                            {props.arrivalTime.slice(11,16)}
                            <br/>
                        </Typography>
                        <Typography variant="caption" >
                            {props.arrivalAirport}
                        </Typography>
                    </div>
                </AccordionDetails>
                <Divider />
                <AccordionDetails className={classes.details}>
                    <div className={classes.column} >
                        <Typography variant="caption"  className={classes.secondaryHeading}>
                            {props.returnAirline}
                            <br/>
                            {props.returnDuration.slice(2,5).toLowerCase() + " " + props.duration.slice(5).toLowerCase()}
                            <br/>
                            {props.stops + " stops"}
                        </Typography>
                    </div>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="h4">
                            {props.returnDepartureTime.slice(11,16)}
                            <br />
                        </Typography>
                        <Typography variant ="caption">
                            {props.returnDepartureAirport}
                        </Typography>
                    </div>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="h4">
                            {props.returnArrivalTime.slice(11,16)}
                            <br/>
                        </Typography>
                        <Typography variant="caption" >
                            {props.returnArrivalAirport}
                        </Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}



