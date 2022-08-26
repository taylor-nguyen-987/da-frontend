import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import axios from '../axios';
import { myTheme } from '../../mytheme';


export const PushInformation = (props: any) => {
    // Send JSON object to API

    const handleSubmit = () => {
        axios.post(`/api/note`, {
            author: props.uname,
            content: props.response,
        }).then(() => {props.onSubmit('Posted!')})
        .catch((error) => { 
            console.log(error.response.data);  
            console.log(error.response.status);  
            console.log(error.response.headers); 
        })
    }
    return (
        <div className="submit">
          <PrimaryButton 
            text="Submit"
            onClick={handleSubmit}
            theme={myTheme}/>
        </div>
    )
      
}