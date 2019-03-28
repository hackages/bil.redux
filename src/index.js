import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

const Routing = () => (
  <BrowserRouter>
    <Route path="/" exact component={App} />
    <Route
      path="/app/:appId"
      render={({ match }) => {
        return <App appId={match.params.appId} />;
      }}
    />
    <Route path="/home" component={Home} />
  </BrowserRouter>
);
const Header = () => {
  return <h1>Header component</h1>;
};
const Index = () => (
  <Fragment>
    <Header />
    <Routing />
  </Fragment>
);

ReactDOM.render(<Index />, document.getElementById('root'));
