import * as  React from 'react';
import { ILoggedNotification } from '../constants/ILoggedNotification';
import uuid from 'uuid-v4';


//
// Log a debugging message to the Notify buffer
//
function DebugNotify(titleText : string, messageText : string) {
    const newEnt : ILoggedNotification = {
        id: uuid(),
        when : new Date().toLocaleString(),
        title : titleText,
        message : messageText
    }

    if (((window as any).notificationLog) === undefined) {
        (window as any).notificationLog= [newEnt];
    }
    else {
        ((window as any).notificationLog as ILoggedNotification[]).push(newEnt);
    }
}

// antd Form validateStatus return
//
// Pass in the string to check for length
// Pass in the Help field and if it's non-blank return an Error status
export function IsRequired(val : string, hlp : string) : any {
    if (hlp.length !== 0) {
        // An error message is present 
        return 'error';
    }

    if (val.length === 0) {
            return 'warning'  // Required and blank
        }
        else {
            return 'success'
        }
}

// Limit the maximum length of a string input
export function LimitLength(key: string, value:string, limit:number, ths:any) {
    if (key.length > limit) {
        ths.setState({
            [key]  : (value as string).substring(0, limit)
        });
    }
}

export default DebugNotify;