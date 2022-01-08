import React, {useCallback, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import HotelCard from "../../components/HotelCard/HotelCard"
import {Button, Paper, Grid} from "@material-ui/core";
// import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircleLoader from "react-spinners/CircleLoader";
import {css} from "@emotion/react";
import {makeStyles} from "@material-ui/core/styles";

export const HotelList = (props) => {
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

    const loadMore = (hotel) =>{
        setVisible((prevValue) => prevValue + 10);
        console.log(hotel.hotel)
    };

    let fetched
    const
        fetchData = useCallback(async () => {
            fetched = await request(`http://34.89.58.148/api/v1/search/hotels?cityCode=${state.cityCode}&checkinDate=${state.checkinDate}&checkoutDate=${state.checkoutDate}&currency=EUR`, 'GET');
            setData(fetched.data)
        }, [request])

    useEffect(() => {
        fetchData()
    }, [])


    function FacilitiesRender(hotel,facilities){
        if(hotel.hotel.amenities){
            if(hotel.hotel.amenities.indexOf(facilities) > -1 ){
                return  facilities.replace('_',' ')
            } else {
                return     <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> {facilities.replace('_',' ')} </span>
            }
        } else {
            return  <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> {facilities.replace('_',' ')} </span>
        }
    }


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
                <Grid container alignItems="flex-start" spacing={2}>

            {data.slice(0,visible).map((hotel, index) => (
                <Grid item xs={4} >
               <HotelCard

                   hotelCardObject = {hotel}
                   index = {index + 1}
                   miniBar = {FacilitiesRender(hotel,'MINIBAR')}
                   wiFi = {FacilitiesRender(hotel,'WIFI')}
                   parking = {FacilitiesRender(hotel,'PARKING')}
                   restaurant = {FacilitiesRender(hotel, "RESTAURANT")}
                   television = {FacilitiesRender(hotel,"TELEVISION")}
                   fitness = {FacilitiesRender(hotel,'FITNESS_CENTER')}
                   id = {hotel.hotel.hotelId}
                   rating = {hotel.hotel.rating}
                   name = {hotel.hotel.name}
                   price = {hotel.offers[0].price.total}
                   currency = {hotel.offers[0].price.currency}
                   cityName = {hotel.hotel.address.cityName}
               />
                </Grid>
            ))}
                </Grid>
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