import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink, CardHeader, CardFooter,
} from 'reactstrap';
import {Divider, Typography, Button, Grid} from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';
import {Link} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import KingBedIcon from '@material-ui/icons/KingBed';
import PeopleIcon from '@material-ui/icons/People';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WifiIcon from '@material-ui/icons/Wifi';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import TvIcon from '@material-ui/icons/Tv';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import hotelRoomPhoto from '../../assets/img/hotleRoom.jpeg'


const useStyles = makeStyles((theme) => ({

    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
//     image: {
//     "&:hover, &:focus":{
//     position:'relative',
//     top:'-25px',
//     left:'35px',
//     width:'500px',
//     height:'auto',
//     display:'block',
//     // z-index:'999',
// }
//     },

}));



const HotelRoomCard = (props) =>{
    const classes = useStyles();
    const [hotelCardObject, setHotelCardObject] = useState();
    let history = useHistory();

    function link(){
        history.push({
            pathname: `book/${props.index}`,
            // state:
        });
    }

    useEffect(() => {
    }, [])




    return(
        <Card className="main-card mb-3" style={{borderRadius:'15px',width:"70%",margin:"auto" }} onClick={link}>
            <CardImg top width="50%" className={classes.image}
                     src= {hotelRoomPhoto}
                     alt="Card image cap"/>
            <Divider/>
            <CardBody>
                <CardTitle>{props.category}</CardTitle>
                <CardSubtitle>
                    {props.beds  + " "}
                    <KingBedIcon />
                    {/*<br/>*/}
                    {" " + props.bedType + " SIZE" }
                </CardSubtitle>
            </CardBody>
            <CardFooter style={{justifyContent:"space-between",borderRadius:'25px'}}>
                <div style={{display:"flex"}}>
                    <PeopleIcon/>
                    <div style={{padding:' 3px 5px 5px 5px',color:'grey'}}>
                        {props.adults + " adults"}
                    </div>
                </div>
                {props.price + " " + props.currency  }
            </CardFooter>
            <Typography align='center' style={{padding:'15px'}} >
                <Button variant="outlined" size="large" color="primary" fullWidth >
                    Order
                </Button>
            </Typography>
        </Card>
    );
}
export default HotelRoomCard