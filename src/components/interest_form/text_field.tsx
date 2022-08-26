import * as React from 'react';
import { useState } from 'react';
import { TextField} from '@fluentui/react/lib/TextField';
import { Stack, IStackStyles } from '@fluentui/react/lib/Stack';
import { PushInformation } from '../api_calls/posting';
import { PostTableList } from '../render_table/posts_table';
import './interest_form.css';
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
import { myTheme } from '../../mytheme';
import { DefaultButton } from '@fluentui/react';
import { VoiceRecognition } from './speech_to_text';

const bigStyle: Partial<IStackStyles> = { root: { width: 1200, padding: 8 } };

//INTEREST FORM
export const InterestForm = () => {
  const { accounts } = useMsal();
  
  const [response, setResponse] = useState('');

 
  const responseChange = (e: any) => {
    setResponse(e.target.value)
  };

  // STATE MANAGEMENT
  const [state, setState] = useState(''); // for post status
  const [text, setText] = useState(true); // default to true so text is rendered first
  const [voice, setVoice] = useState(false); // default to false so user needs to click button before using voice

  const setNewStatus = (status: string) => {
  	  setState(status);
  };

  function NotifyPostStatus(props: any) {
      if (props.state !== '') {
        return (
          <div>
              <p>Posted!</p>
          </div>
        )
      }
      return (<div></div>)
  }

  return (
    <div className="interestform">
      <div className="posttitle">
        <h1>Share Your Thoughts</h1> {/*null is falsey so if accounts[0] is null, it will return an empty div*/}
      </div>
      <div className="buttons">
        <DefaultButton text="Text" disabled={text} theme={myTheme} onClick={() => {
              setText(true); //currently in Text Mode
              setVoice(false);
        }}/>
        <DefaultButton text="Voice" disabled={voice} theme={myTheme} onClick={() => {
              setVoice(true); //currently in Voice Mode
              setText(false);
        }}/>
      </div>
      <div className="userstatus">
        <p>You are currently using <b>{text===true ? "Text Mode" : "Voice Mode"}</b>.</p>
      </div>
      
      {text ? <div className="texty">
          <Stack styles={bigStyle}>
              <TextField 
                    placeholder='Write your thoughts here...'
                    multiline rows={5} 
                    onChange={responseChange}
                    required
                    theme={myTheme}/>
          </Stack>
          <Stack styles={bigStyle}>
                <PushInformation uname={accounts[0] ? accounts[0].name : <div></div>} response={response} onSubmit={setNewStatus}/>
          </Stack>
          <NotifyPostStatus state={state}/>
        </div> : <VoiceRecognition />}
    </div>
  );
};