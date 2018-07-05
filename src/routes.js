import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import About from './Components/About';
import Sign from './Components/Sign';
import App from './Components/App';
import Page404 from './Components/Page404';

const AppRoutes = () =>
    <About>
        <Switch>
            <Route exact path="/sign" component={Sign} />
            <Route exact path="/app" component={App}/>
            <Route component={Page404}/>
        </Switch>
    </About>;

export default AppRoutes;