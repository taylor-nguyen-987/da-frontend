import { useMsal } from '@azure/msal-react';
import React, { useEffect } from 'react';
import axios from '../axios';

export const GetToken = () => {

    const { instance } = useMsal();
    useEffect( () => {
      if ((instance.getAllAccounts().length) !== 0) { //makes sure there are accounts before acquiring the token
          const account = instance.getAllAccounts()[0];
      
          const accessTokenRequest = {
            scopes: ["api://5d359792-1c01-4139-995b-c292ce7c68a2/user_impersonation"],
            account: account,
          };
      
          // get a token
          instance.acquireTokenSilent(accessTokenRequest)
              .then(async function (accessTokenResponse) {
                  // Acquire token silent success
                  let accessToken = accessTokenResponse.accessToken;
                  // Set headers with the bearer token
                  // axios.interceptors.request.use((req: any) => {
                  //   req.headers.authorization = `Bearer ${accessToken}`;
                  //   return req;
                  //   });
                  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
              })
              .catch(function (error) {
                //Acquire token silent failure
                console.log(error);
              });
          
          }
      })
    return (<div></div>);
}