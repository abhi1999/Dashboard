import * as React from "react";

export default class SelectOption
{
    public key:string | number;
    public label?:React.ReactNode;

    public constructor(init?:Partial<SelectOption>) {
        Object.assign(this, init);
    }
}