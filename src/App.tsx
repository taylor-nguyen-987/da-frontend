// HOOKS
import React from 'react';
import './App.css';

//NAVIGATION
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { InterestForm } from "./components/interest_form/text_field";
import { NavigationBar } from './components/navigate/navigation_bar';
import { TitlePage } from './components/title_page/title_page';
import { MeetTeam } from './components/team/team';

// LOG IN PAGE
import { UserLogs } from './components/log_controls/log_controls';

import { LandingPage } from './components/landing_page/particles';
import ReactStickyBox from 'react-sticky-box';

import { FaStream } from 'react-icons/fa';

function App() {

  return (
      <div className="App">
        <div className="head">
          <div className="headtitle">
              <h1><FaStream /> Digital Accelerators</h1>
          </div>
        </div>
        <Router>
              <div className="navig">
                <ReactStickyBox offsetTop={0}>
                  <NavigationBar />
                </ReactStickyBox>
              </div>
              <div className="content">
                  <Switch>
                      <Route exact path="/">
                            <TitlePage />
                      </Route>
                      <Route path="/team">
                            <MeetTeam />
                      </Route>
                      <Route path="/interest">
                            <InterestForm />
                      </Route>
                  </Switch>
              </div>
              <div className='corner'></div>
          </Router>
      </div>
  );
}

export default App;
