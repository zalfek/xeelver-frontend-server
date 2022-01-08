import {createContext, useContext} from 'react'



export const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})

function noop() {}
