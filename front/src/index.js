import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './componentsMain/App';
import registerServiceWorker from './registerServiceWorker';


//FontAwesome
import fontawesome from '@fortawesome/fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import { faThumbsUp, faThumbsDown,faGlobe,faUser } from '@fortawesome/fontawesome-free-solid'


//bootstrap lib
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

fontawesome.library.add(faHeart, faThumbsUp, faThumbsDown,faUser,faGlobe );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
