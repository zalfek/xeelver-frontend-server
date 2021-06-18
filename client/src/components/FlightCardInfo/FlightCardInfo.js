import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Row} from "reactstrap";
import {Card} from "semantic-ui-react";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    duration : {
        // marginLeft:300,
    },


}));


export  const FlightCardInfo = (props)=> {
    const classes = useStyles();
    const segments = props.state
    console.log(segments)
    return(
    <Card style={{margin:'5px 20px',borderRadius : '15px'}}>
        <CardContent>
            <Typography  align = "center" color="textSecondary">
            </Typography>
                <div style={{display:'flex',flexDirection : 'column'}}>
                    <Typography variant="h5" component="h2" style={{textAlign:'center'}}>
                        ◦ {segments.departure.at.slice(11,16)} {segments.departure.iataCode} <span style={{color:'lightgray'}}>━━━━━━━</span> {segments.arrival.at.slice(11,16)} {segments.arrival.iataCode} ◦
                        <Typography color='textSecondary' >
                                    {segments.duration.slice(2).toLowerCase()}
                        </Typography>
                    </Typography>
                    </div>
        </CardContent>
    </Card>

    );
}