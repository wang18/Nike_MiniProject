import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import FlashMessagesList from './components/flash/flashMessagesList';

class App extends Component {
    render() {
        return (
            <div className="container">
                <NavBar/>
                <FlashMessagesList/>
            </div>
        );
    }
}

export default App;
