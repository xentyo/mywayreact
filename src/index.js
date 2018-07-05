import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//routes
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './routes';

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
