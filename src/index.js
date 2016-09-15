import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App';
import Homepage from './Homepage';
import Page from './Page';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      <Route path=":pageId" component={Page}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
