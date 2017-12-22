import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './index.css';
import App from './App';
import Greetings from './components/greetings';
import SignupPage from './components/signupPage';

import registerServiceWorker from './registerServiceWorker';
import createAppStore from './store/index';
import LoginPage from './components/login_page';
import EventPage from './components/event_page';
import requireAuth from './components/require_authentication';

const AppStore = createAppStore();

ReactDOM.render(
    <Provider store={AppStore}>
        <BrowserRouter>
            <div>
                <App/>
                <Switch>
                    <Route exact path="/" component={Greetings}/>
                    <Route path="/signup" component={SignupPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/event" component={requireAuth(EventPage)}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
