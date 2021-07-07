import './App.scss';
import Navbar from './components/Navbar';
import {retry} from './utils/commonFunctions';

import {lazy, Suspense} from 'react';
import {Route, Redirect, Switch, useLocation} from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Home = lazy(() => retry(() => import('./components/Home')));
const About = lazy(() => retry(() => import('./components/About')));
const Contactus = lazy(() => retry(() => import('./components/Contactus')));
const State = lazy(() => retry(() => import('./components/State')));



const App = () => {

  const location = useLocation();

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      showInNavbar: true,
    },
    {
      pageLink: '/about',
      view: About,
      displayName: 'About',
      showInNavbar: true,
    },
    {
      pageLink: '/state/:stateCode',
      view: State,
      displayName: 'State',
      showInNavbar: false,
    },
    {
      pageLink: '/contactus',
      view: Contactus,
      displayName: 'Emergency Contact',
      showInNavbar: true,
    },
  ];


  return (
    <div className="App">
      

      <Navbar {...{pages}} />

      <Suspense fallback={<div />}>
        <Switch location={location}>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                render={({match}) => <page.view />}
                key={index}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
