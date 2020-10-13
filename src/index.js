import React from 'react';
import ReactDOM from 'react-dom';

// import App from './numbers-app.js';
import App from './App.js'

class Main extends React.Component {
        render() {
            return <App / > ;
        }
    }
    // render this main component in root element in index.html
const rootElement = document.getElementById('root');
ReactDOM.render( < Main / > , rootElement);