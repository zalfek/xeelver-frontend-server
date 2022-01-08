import UserService from "../../services/UserService";
import {useCallback, useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";



 const FlightOrder = () =>{
    const location = useLocation()
    const state = location.state
    let history = useHistory();
    const [data,setData] = useState([])
     const {request, loading} = useHttp()



     let fetched
    const
        fetchData = useCallback(async () => {
            fetched = await request(`http://34.89.58.148:80/api/v1/payment/klarna`, 'POST',
                {
                    "purchase_country": "DE",
                    "purchase_currency": "EUR",
                    "locale": "de-DE",
                    "order_amount": 50000,
                    "order_tax_amount": 4545,
                    "order_lines": [
                        {
                            "type": "physical",
                            "reference": "19-402-USA",
                            "name": "Flight offer",
                            "quantity": 1,
                            "quantity_unit": "pcs",
                            "unit_price": `${state.price.total}`,
                            "tax_rate": 0,
                            "total_amount": `${state.price.total}`,
                            "total_discount_amount": 0,
                            "total_tax_amount": 0
                        }
                    ],
                    "merchant_urls": {
                        "terms": "https://www.example.com/terms.html",
                        "checkout": "https://www.example.com/checkout.html",
                        "confirmation": "https://www.example.com/confirmation.html",
                        "push": "https://www.example.com/api/push"
                    }
                });

            setData(fetched.data)
        },[request])

     useEffect(() => {
         fetchData()
         console.log(fetched)
     }, [])

    return(
      <>
          {/*{!UserService.isLoggedIn()? UserService.doLogin()*/}
          {/*:*/}
          {/*  data.htmlSnippet*/}


          {/*}*/}


          <div>xuy</div>
          {console.log(fetched)}

      </>



    );



}
export default FlightOrder;