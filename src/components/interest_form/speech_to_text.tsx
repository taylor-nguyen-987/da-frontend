import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React, {useState} from 'react';
import { DefaultButton, PrimaryButton } from '@fluentui/react';
import { myTheme } from '../../mytheme';
import { PushInformation } from '../api_calls/posting';
import { useMsal } from '@azure/msal-react';

export const VoiceRecognition = () => {

    const [state, setState] = useState(''); // for post status
    const [resetbut, setResetbut] = useState(true);

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

    const { accounts } = useMsal();
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    
    function startListen() {
        SpeechRecognition.startListening({continuous: true})
    }

    return (
        <div className="voice">
            <br></br>
            <p><b>Microphone:</b> {listening ? 'Listening...' : 'Off'}</p>
            <DefaultButton className="buttonpost" onClick={startListen} theme={myTheme} text="Start"/>
            <DefaultButton className="buttonpost" onClick={() => {SpeechRecognition.stopListening();
                          setResetbut(false);}} theme={myTheme} text="Stop" />
            <DefaultButton className="buttonpost" onClick={() => {resetTranscript(); setResetbut(true)}} theme={myTheme} text="Reset" disabled={resetbut} />
            <div className="buttonsubmitvoice">
              <PushInformation uname={accounts[0] ? accounts[0].name : <div></div>} response={transcript} onSubmit={setNewStatus}/>
            </div>
            <p className="transcriptnotes">{transcript}</p>
            <NotifyPostStatus state={state}/>
        </div>
    );
}