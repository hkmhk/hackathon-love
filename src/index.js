import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './componentsMain/App';
import registerServiceWorker from './registerServiceWorker';
import fontawesome from '@fortawesome/fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import { faGlobe, faHome, faSearch, faSignOut, faSignOutAlt, faThumbsDown, faThumbsUp, faUser } from '@fortawesome/fontawesome-free-solid';
//bootstrap lib
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//FontAwesome

fontawesome.library.add(
  faHeart,
  faThumbsUp,
  faThumbsDown,
  faUser,
  faGlobe,
  faHome,
  faSearch,
  faSignOutAlt,
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
