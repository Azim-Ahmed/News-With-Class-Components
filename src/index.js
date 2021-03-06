import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

if(process.env.NODE_ENV != 'development'){
    ReactDOM.render(
        <React.StrictMode>
            <App />
            </React.StrictMode>,
        document.getElementById('root')
    )
}
else {
    ReactDOM.render(
        
            <App />,
           
        document.getElementById('root')
    )
}

// console.log(process.env.REACT_APP_URL, process.env.REACT_APP_API);