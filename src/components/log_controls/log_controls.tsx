import React from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react"; 
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import './log_controls.css';
import { myTheme } from "../../mytheme";

// CONTROLS LOG INS AND LOG OUTS
export const UserLogs = () => {

    const { instance } = useMsal();

    return (
        <div className="logpage">
            <UnauthenticatedTemplate>
                    <DefaultButton 
                        onClick={() => instance.loginRedirect(loginRequest)}
                        text="Log In"
                        theme={myTheme} />
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
                <div className="logout">
                    <PrimaryButton onClick={() => instance.logoutRedirect({postLogoutRedirectUri: "/"})}
                        text="Log Out"
                        theme={myTheme} />
                </div>
            </AuthenticatedTemplate>
        </div>
    )
}




