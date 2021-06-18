import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

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
        marginLeft: 30,
    },
    details: {
        alignItems: 'center',
        textAlign:'center',
        // marginLeft : 20,
        display:"flex",
        justifyContent:"center",
    },
    column: {
        flexBasis: '33%',
    },
    columnChecked: {
        flexBasis: '33%',
        display:'flex',
        justifyContent:'flex-end'
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
    const [cardObject, setCardObject] = useState();


    function ReturnFlight(){
        const classes = useStyles();
        if(props.oneWay > 1){
            return(
                <AccordionDetails className={classes.details}>
                    <div style={{display:'flex',flexDirection : 'column'}}>
                        <Typography color='textSecondary' align='center' >
                            {props.returnStops + " stops"}<br/>
                            {props.returnAirline}
                        </Typography>
                        <Typography variant="h5" component="h2" style={{textAlign:'center'}}>
                            ◦ {props.returnDepartureTime.slice(11,16)} {props.returnDepartureAirport} <span style={{color:'lightgray'}}>━━━━━━━</span> {props.returnArrivalTime.slice(11,16)} {props.returnArrivalAirport} ◦
                            <Typography color='textSecondary' >
                                {props.returnDuration.slice(2,5).toLowerCase() + " " + props.returnDuration.slice(5).toLowerCase()}
                            </Typography>
                        </Typography>
                    </div>
                </AccordionDetails>
            );
        } else {
            return null
        }
    }

    useEffect(() => {
        setCardObject(props.cardObject)
    }, [])

    return (
        <div className={classes.root}>
            <Accordion defaultExpanded style={{borderRadius:'20px'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column} >
                        <Typography color='textSecondary' variant='subtitle2'>
                            Thank you for choosing our company!
                        </Typography>
                    </div>

                    <div className={classes.column}/>

                    <div className={classes.columnChecked}>
                        <Link
                            to={{
                                pathname: `book/${props.id}`,
                                state: {cardObject}
                            }}
                        >
                        <Typography className={clsx(classes.ThirdHeading,classes.checkButton)}>
                            <Button variant="outlined" size="medium" color="primary" >
                                Check {" " + props.price}
                            </Button>
                        </Typography>
                        </Link>
                    </div>
                </AccordionSummary>

                <Divider />
                <AccordionDetails className={classes.details}>
                            <div style={{display:'flex',flexDirection : 'column'}}>
                                <Typography color='textSecondary' align='center' >
                                    {props.stops + " stops"}<br/>
                                    {props.airLine}
                                </Typography>
                                <Typography variant="h5" component="h2" style={{textAlign:'center'}}>
                                    ◦ {props.departureTime.slice(11,16)} {props.departureAirport} <span style={{color:'lightgray'}}>━━━━━━━</span> {props.arrivalTime.slice(11,16)} {props.arrivalAirport} ◦
                                    <Typography color='textSecondary' >
                                        {props.duration.slice(2,5).toLowerCase() + " " + props.duration.slice(5).toLowerCase()}
                                    </Typography>
                                </Typography>
                            </div>
                </AccordionDetails>
                <Divider />
                <ReturnFlight/>
            </Accordion>
        </div>
    );
}



