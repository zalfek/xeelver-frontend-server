import React from 'react';
import './assets/base.css';
import configureStore from './config/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import AppWrapper from "./pages/AppWrapper/AppWrapper";



const store = configureStore();

function App() {
    return (
            <Provider store={store}>
                <Router>
                    <AppWrapper/>
                </Router>
            </Provider>
    );
};

export default App