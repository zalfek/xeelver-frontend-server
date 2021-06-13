import {useCallback, useState} from 'react'
import UserService from "../services/UserService";

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'POST', body = null, headers = {}) => {
        setLoading(true)
        if (UserService.isLoggedIn()) {
            UserService.updateToken()
            return await sendRequest(url, body, headers, method)
        } else {
            return await sendRequest(url, body, headers, method)
        }
    }, [])


    async function sendRequest(url, body, headers, method) {
        try {
            if (body) {
                headers['Content-Type'] = 'application/json'
                if (UserService.isLoggedIn()) {
                    headers['Authorization'] = `Bearer ${UserService.getToken()}`
                }
            }
            let response = await fetch(url, {method, body, headers})
            if (!response.ok) {
                throw new Error('Something went wrong!Response status:' + response.status)
            }
            const data = await response.json() //.json()
            setLoading(false)
            console.log(data)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }


    const clearError = useCallback(() => setError(null), [])

    return {loading, request, error, clearError}
}

