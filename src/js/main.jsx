import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsC from './components/SecondsC';

let seconds = 0;

const root = ReactDOM.createRoot(document.getElementById("app"));

setInterval(() => {
  root.render(<SecondsC seconds={seconds} />);
  seconds++;
}, 1000);