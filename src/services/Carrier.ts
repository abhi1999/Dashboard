import ODataParams from '../constants/params/oDataParams';

import axios from "./../configs/axios";
import {
    BASE_URL
} from "../configs"
import buildQuery from "odata-query";

export const carrierGet = (params:ODataParams)=>{
    const endpoint:string = BASE_URL + "/odata/ShipViaSet";
    const count:boolean = true;
    const top = params.top;
    const skip= params.skip;

    const orderBy:string[] = [];
    if (params.sorted) {
        params.sorted.map((s:any) => {
            const column:string = s.id + (s.desc ? " desc" : ""); 
            orderBy.push(column);
        });
    }

    const filter:string[] = [];
    if (params.filtered) {
        params.filtered.map((f:any) => {
            const column:string = "contains(" + f.id + ", '" + f.value + "')";
            filter.push(column);
        });
    }

    const oDataParams:string = buildQuery({
        count,
        top,
        skip,
        orderBy,
        filter
    });
    const url:string = endpoint + oDataParams; 
    console.log("carrierGetAllApi: " + url);
    return axios.get(url);
}
