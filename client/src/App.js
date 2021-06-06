import React from 'react';
import './assets/base.css';
import configureStore from './config/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import Main from "./pages/Main";



const store = configureStore();

function App() {
    return (
            <Provider store={store}>
                <Router>
                    <Main/>
                </Router>
            </Provider>
    );
};

export default App