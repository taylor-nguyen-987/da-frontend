import { PrimaryButton } from '@fluentui/react';
import React, { useState } from 'react';
import axios from '../axios';
import { useMsal } from '@azure/msal-react';
import { PostTableList } from '../render_table/posts_table';
import { createTheme } from "@fluentui/react";
import { myTheme } from '../../mytheme';


// Renders the button, Makes a GET request to the API, Retrieves the data
export const ShowPosts = (props: any) => {

    //   const handleSubmit = async (event: any) => {
    //     event.preventDefault();
    //     const resp = await axios.get(`/api/note`);
    //     props.onSubmit(resp.data);
    //   };
     
    const handleSubmit = () => {
        axios.get(`/api/note`, {
            headers: {
                'accept' : 'application/json',
            }
        }).then(
            function(res) {
                props.onSubmit(res.data)
                console.log(res.headers);
            }
        ).catch((error) => { 
            console.log(error.response.data);  
            console.log(error.response.status);  
            console.log(error.response.headers); 
        })
      }
      
      return (
            <div className="getData">
              <PrimaryButton 
                text='Check Recent Posts'
                onClick={handleSubmit}
                theme={myTheme}
                />
            </div>
        )
    }