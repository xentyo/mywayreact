import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign from './Components/Sign';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Sign />, document.getElementById('root'));
registerServiceWorker();
