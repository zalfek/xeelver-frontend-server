import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import {unregister} from './registerServiceWorker';
import {AuthContext} from './context/AuthContext'
import './assets/base.css';
import configureStore from './config/configureStore';
import {Provider} from 'react-redux';
import {useAuth} from './hooks/auth.hook'
import {useRoutes} from './routes'
import {BrowserRouter as Router} from 'react-router-dom'
import Main from "./pages/Main";

const store = configureStore();
const rootElement = document.getElementById('root');

function App() {
    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)


    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Provider store={store}>
                <Router>
                    {isAuthenticated}
                    {routes}
                </Router>
            </Provider>
        </AuthContext.Provider>
    );
};

export default App
// unregister();