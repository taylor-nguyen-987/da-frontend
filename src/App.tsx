// HOOKS
import React, { useState } from 'react';
import './App.css';

//NAVIGATION
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { InterestForm } from "./components/interest_form/text_field";
import { NavigationBar } from './components/navigate/navigation_bar';
import { TitlePage } from './components/title_page/title_page';
import { MeetTeam } from './components/team/team';

// LOG IN PAGE
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate} from '@azure/msal-react';
import { UserLogs } from './components/log_controls/log_controls';
import { PublicClientApplication } from '@azure/msal-browser';

import { LandingPage } from './components/landing_page/particles';
import ReactStickyBox from 'react-sticky-box';

import { FaStream } from 'react-icons/fa';

import { GetToken } from './components/msaltoken/get_token';

function App({msalInstance}: {msalInstance: PublicClientApplication}) {

  return (
    <MsalProvider instance={msalInstance}>
      <div className="App">
        <div className="hidecomponent">
          {<GetToken/>}
        </div>
        <UnauthenticatedTemplate>
          <div className="landpage">
            <LandingPage />
          </div>
          <div className="logintitle">
              <h1>Digital Accelerators</h1>
          </div>
        </UnauthenticatedTemplate>
        <div className="logpage">
            <UserLogs />
        </div>
        <AuthenticatedTemplate>
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
        </AuthenticatedTemplate>
      </div>
    </MsalProvider>
  );
}

export default App;
