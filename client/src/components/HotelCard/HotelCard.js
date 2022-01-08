import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink, CardHeader, CardFooter, Button
} from 'reactstrap';
import {Divider, Grid, Typography} from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';
import {Link} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {DatePicker} from "mui-rff";
import DateFnsUtils from "@date-io/date-fns";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import TvIcon from "@material-ui/icons/Tv";
// import CardActionArea from '@material-ui/core/CardActionArea';
import hotelPhoto from '../../assets/img/hotel.jpeg'
const useStyles = makeStyles((theme) => ({



}));


 const HotelCard = (props) =>{
     const classes = useStyles();
     let history = useHistory();

     function link(){
         history.push({
             pathname: `rooms/${props.index}`,
             state: props.id
         });
     }

     useEffect(() => {
     }, [])

     return(
         <>
             {/*<CardActionArea onClick={link}>*/}
    <Card className="main-card mb-3 ches" style={{borderRadius:'15px',width:"100%"}} onClick={link}>
        <CardImg top width="100%"
                 src={hotelPhoto}
                 alt="Hotel image "/>
        <Divider/>
        <CardBody style={{maxHeight:'160px'}}>
            <CardTitle style={{fontSize:'13px',maxHeight:'30px'}}>{props.name}</CardTitle>
            <CardSubtitle>
                {props.rating =='1'? <div><StarIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/></div>
                    :props.rating =='2'? <div><StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/></div>
                        :props.rating =='3'? <div><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/></div>
                            :props.rating =='4'? <div><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/></div>
                                :props.rating =='5'? <div><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
                                    : "Rating: N/A"}
            </CardSubtitle>
            <Grid container alignItems="flex-start" >
                <Grid item xs={6}>
                    <WifiIcon/> {props.wiFi} <br/>
                    <LocalParkingIcon/> {props.parking} <br/>
                    <RestaurantMenuIcon/> {props.restaurant} <br/>
                </Grid>
                <Grid item xs={6}>
                    <LocalBarIcon/> {props.miniBar} <br/>
                    <FitnessCenterIcon/>  {props.fitness} <br/>
                    <TvIcon/> {props.television}
                </Grid>
            </Grid>
        </CardBody>
        <CardFooter style={{justifyContent:"space-between",borderRadius:'25px'}}>
            <div style={{display:"flex"}}>
            <RoomIcon color='disabled'/>
              <div style={{padding:' 3px 5px 5px 5px',color:'grey'}}>
            {" "  + props.cityName}
                </div>
            </div>
            {"From: " +props.price + " " + props.currency  }
        </CardFooter>
    </Card>
             {/*</CardActionArea>*/}
         </>
    );
}
export default HotelCard