import * as  React from 'react';
import { ILoggedNotification } from '../constants/ILoggedNotification';
import uuid from 'uuid-v4';
import _ from 'lodash';
import { IUserLabel } from '../constants/IUserLabel';

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
    if (value.length > limit) {
        ths.setState({ [key]  : value.substring(0, limit) })
    }
}

// Only extract numeric and separators
//
// TODO: This is US-centric (only supports . as a separator)
export function NumericOnly(value:string) : string {
    if (isNaN(Number(value))) {
        return value.replace(/[^\d.-]/g, '');
    } else {
        return value
    }
}

//
// Convert the IUserLabel[] array to a simple array of label captions
//
// labelList : IUserLabel array
// max : Maximum number of labels to return
//
export function GetUserLabelCaptions(labelList : IUserLabel[], max : number) : string[] {
    const retlbl : string[] = [];
    for (let i=1; i<= max; i++) {
        const u = 'User' + i.toString();
        const lbl : IUserLabel = _.find(labelList, ll => ll.labelName === u);
        const userlabel = lbl !== undefined ? (lbl.Caption.length !== 0 ? lbl.Caption : u) : u;
        retlbl.push(userlabel)
    }
    return retlbl;
}

export default DebugNotify;