import React, {useCallback, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import HotelCard from "../../components/HotelCard/HotelCard"
import {Button, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircleLoader from "react-spinners/CircleLoader";
import {css} from "@emotion/react";
import HotelRoomCard from "../../components/HotelRoomCard/HotelRoomCard";
import {Grid} from '@material-ui/core'

export const HotelRooms = (props) => {
    const location = useLocation()
    const state = location.state
    const {request, loading} = useHttp()
    const [data,setData] = useState([])
    const [visible,setVisible] = useState(10)

    const override = css`
          display: block;
          margin: 0 auto;
          // border-color: red;
        `;
    // const classes = useStyles();


    const loadMore = () =>{
        setVisible((prevValue) => prevValue + 10);
    };

    let fetched
    const
        fetchData = useCallback(async () => {
            fetched = await request(`http://34.89.58.148/api/v1/search/hotels/specific?hotelId=${state}`, 'GET');
            setData(fetched.offers)
            // console.log(fetched.offers)
            console.log(data)


        }, [request])


    useEffect(() => {
        fetchData()
    }, [])


    return(
        <>
            {loading ?
                <div style={{alignItems:'center',marginTop:"200px",textAlign:'center'}}>
                    <CircleLoader
                        color={'#010FEE'}
                        loading={loading}
                        css={override}
                        size={350} />
                </div>
                :
                <Paper elevation='6' style={{backgroundColor: 'whitesmoke',padding:'30px'}} >
                    {data.slice(0,visible).map((room, index) => (
                        <HotelRoomCard
                            index = {index + 1}
                            description = {room.room.description.text}
                            price = {room.price.total}
                            currency = {room.price.currency}
                            category = {room.room.typeEstimated.category}
                            beds = {room.room.typeEstimated.beds}
                            bedType = {room.room.typeEstimated.bedType}
                            adults = {room.guests.adults}
                        />
                    ))}
                    <Typography align='center' style={{padding:'15px'}} >
                        <Button variant="outlinedPrimary" size="large"  fullWidth onClick={loadMore}>
                            Show more
                        </Button>
                    </Typography>
                </Paper>
            }
        </>
    );
}