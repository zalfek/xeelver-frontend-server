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
    ches:{
        justifyContent:'center',
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
                        <Typography className={classes.heading}>{props.airLine}</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>{props.duration}</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.ThirdHeading}>{props.price}</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    {/* <div className={classes.column} /> */}
                    <div className={classes.column}>
                        <Typography variant="h4">
                            13:05
                            <br />
                        </Typography>
                        <Typography variant ="caption">

                            Cologne
                        </Typography>
                    </div>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="h4">
                            15:25
                            <br/>
                        </Typography>
                        <Typography variant="caption" >
                            Saint-Petersbourg
                        </Typography>
                    </div>
                    <div className={clsx(classes.column, classes.helper)}>
                        <AccordionActions className={classes.ches}>
                            {/*<Typography variant="h5">*/}
                            {/*    300€*/}
                            {/*    <br/>*/}
                            {/*</Typography>*/}
                            <Button variant="outlined" size="large" color="primary" >
                                Check
                            </Button>
                        </AccordionActions>
                    </div>
                </AccordionDetails>
                <Divider />
            </Accordion>
        </div>
    );
}



