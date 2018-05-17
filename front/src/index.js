import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


//FontAwesome
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/fontawesome-free-regular';




//bootstrap lib
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

fontawesome.library.add(faHeart);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
