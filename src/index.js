import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/cadastro/video' component={App} exact />
      <Route component={() => <div>Página 404</div>} />
    </Switch>
  </Router>,
  /* <React.StrictMode>
    <App />
  </React.StrictMode>, */
  document.getElementById('root')
);
