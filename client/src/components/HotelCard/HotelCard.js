import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink, CardHeader, CardFooter, Button
} from 'reactstrap';
import {Divider, Typography} from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';
import {Link} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";


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



 const HotelCard = (props) =>{
     const classes = useStyles();
     const [hotelCardObject, setHotelCardObject] = useState();
     let history = useHistory();

     function link(){
         history.push({
             pathname: `rooms/${props.index}`,
             state: props.id
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
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>
                {props.rating? "Rating :" + props.rating : ""}
            </CardSubtitle>
            {/*{props.description} */}
            {props.id}
        </CardBody>
        <CardFooter style={{justifyContent:"space-between",borderRadius:'25px'}}>
            <div style={{display:"flex"}}>
            <RoomIcon color='disabled'/>
              <div style={{padding:' 3px 5px 5px 5px',color:'grey'}}>
            {" "  + props.cityName}
                </div>
            </div>
            {props.price + " " + props.currency  }
        </CardFooter>
    </Card>
    );
}
export default HotelCard