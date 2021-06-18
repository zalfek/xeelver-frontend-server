import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink, CardHeader, CardFooter,
} from 'reactstrap';
import {Divider, Typography, Button} from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';
import {Link} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import KingBedIcon from '@material-ui/icons/KingBed';
import PeopleIcon from '@material-ui/icons/People';


const useStyles = makeStyles((theme) => ({

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
        // setHotelCardObject(props.hotelCardObject)
    }, [])




    return(
        <Card className="main-card mb-3" style={{borderRadius:'15px',width:"70%",margin:"auto" }} onClick={link}>
            <CardImg top width="50%" className={classes.image}
                     src= 'https://i.imgur.com/Dc5agDi.jpg'
                     alt="Card image cap"/>
            <Divider/>
            <CardBody>
                <CardTitle>{props.category}</CardTitle>
                <CardSubtitle>
                    {props.beds  + " "}
                    <KingBedIcon />
                    <br/>
                    {props.bedType + " SIZE" }
                </CardSubtitle>
                {props.description}
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