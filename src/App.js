import React, {useRef} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation, BrowserRouter,
} from "react-router-dom";
import NavMenu from './NavMenu';
import Routes from './Routes';
import './App.scss';

function App() {
    const contentWrapperRef = useRef(null)
    return (
        <div className="App">
            <BrowserRouter>
                <NavMenu/>
                <Routes />
            </BrowserRouter>
        </div>
    );
}



export default App;
