import React, { useState } from 'react';
import './title_page.css';
import { PrimaryButton, DefaultButton } from '@fluentui/react';
import { PostTableList } from '../render_table/posts_table';
import { ShowPosts } from '../api_calls/get_posts';
import { myTheme } from '../../mytheme';
import { useMsal } from '@azure/msal-react';

export const TitlePage = () => {
  const [state, setState] = useState([]);

  const saveData = (profileData: any) => {
  	  setState(profileData);
  };

  const { accounts } = useMsal();
  return (
      <div className="titlePage">
          <div className="titletitle">
            <h1>Recent</h1>
          </div>
          <div className="containerfortyping">
            <p className="typed">Hi! Would you like to check out what's new?</p> {/*null is falsey so if accounts[0] is null, it will return an empty div*/}
          </div>
          <div className='showDetails'>
            {state.length === 0 ? <ShowPosts onSubmit={saveData}/>: 
              <PrimaryButton 
                text='Hide Posts' 
                onClick={()=> {setState([])}}
                theme={myTheme}/>}
          </div>
          {state.length !== 0 ? <PostTableList data={state}/>: <div></div>}
      </div>
  );
}
