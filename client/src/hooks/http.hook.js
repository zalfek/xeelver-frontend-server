import {useState, useCallback, useContext} from 'react'
import {AuthContext} from '../context/AuthContext'


export const useHttp = () => {
    const [loading, setLoading, setToken] = useState(false)
    const [error, setError] = useState(null)
    let {token} = useContext(AuthContext)
    const auth = useContext(AuthContext)
    const refreshToken = useCallback((jwtToken) => {
        setToken(jwtToken)

    }, [])


    const request = useCallback(async (url, method = 'POST', body = null, headers = {}) => {


        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            let response = await fetch(url, {method, body, headers})
            if ((response.status === 401) || (response.status === 403)) {
                var details = {
                    'grant_type': 'client_credentials',
                    'client_id': 'istio',
                    'client_secret': '8732bbd7-9d55-45ac-b753-961566d540fa'
                };
                var formBody = [];
                for (var property in details) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(details[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");

                const authResponse = fetch('http://35.242.190.130:8080/auth/realms/istio/protocol/openid-connect/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: formBody
                }).then(function (response) {
                    return response.json();
                }).then(async function (data) {
                        console.log(data.access_token)
                        auth.login(data.token)
                        console.log(token)
                            console.log(headers)
                        response = await fetch(url, {method, body, headers})
                    }
                )


            }
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            console.log(response)
            const data = await response.json()
            setLoading(false)
            console.log(data)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return {loading, request, error, clearError}
}

