import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './pages/Inicio';
import Paginaprincipal from './pages/Paginaprincipal';
import App from './routes/App';


import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
   {/* <App/>  */}
    <Paginaprincipal />
  </React.StrictMode>,
  document.getElementById('root')
);



