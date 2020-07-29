import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo} exact />
      <Route component={() => <div>Página 404</div>} />
    </Switch>
  </Router>,
  /* <React.StrictMode>
    <App />
  </React.StrictMode>, */
  document.getElementById('root')
);
