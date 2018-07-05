import buildQuery from "odata-query";
import { BASE_URL, FETCH_PARAMS } from "./BaseController"

export const GetItemSet = (pageSize, page, sorted, filtered) => {
    return new Promise((resolve, reject) => {

        let endpoint = BASE_URL + "/odata/ShipViaSet";
        let count = true;
        let top = pageSize;
        let skip = page * pageSize;
        let orderBy = [];
        let filter = [];

        sorted.map(sort => {
            orderBy.push(sort.id + (sort.desc ? " desc" : ""));
        });

        filtered.map(f => {
            filter.push("contains(" + f.id + ", '" + f.value + "')");
        });

        const oDataParams = buildQuery({count, top, skip, orderBy, filter});
        let url = endpoint + oDataParams;
        fetch(url, FETCH_PARAMS)
            .then((resp) => resp.json())
            .then(function (data) {
                let res = {
                    pages: Math.ceil(data["@odata.count"] / pageSize),
                    rows: data.value
                };
                resolve(res);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
};

export const AddItem = (ShipVia) => {
    return new Promise((resolve, reject) => {

        let endpoint = BASE_URL +  "/api/ShipVia/Add/";

        let url = endpoint;

        const fetchOpts = {
            body: JSON.stringify(ShipVia),
            headers: {"Content-Type": "application/json"},
            method: 'POST'
        };

        fetch(url, fetchOpts)
            .then((response) => {
                if (response.status >= 400) {
                    console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
                    throw new Error("Server error: " + response.status);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        resolve();
    });
};

export const UpdateItem = (ShipVia) => {
    return new Promise((resolve, reject) => {

        let endpoint = BASE_URL +  "/api/ShipVia/Update/";

        let url = endpoint + ShipVia.Ship_Via_ID;

        const fetchOpts = {
            body: JSON.stringify(ShipVia),            
            headers: {"Content-Type": "application/json"},
            method: 'PUT'
        };

        fetch(url, fetchOpts)
            .then((response) => {
                if (response.status >= 400) {
                    console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
                    throw new Error("Server error: " + response.status);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        resolve();
    });
};

export const DeleteItem = (shipViaId) => {
    return new Promise((resolve, reject) => {

        let endpoint = BASE_URL +  "/api/ShipVia/Delete/";

        let url = endpoint + shipViaId;

        const fetchOpts = {
            method: 'DELETE'
        };

        fetch(url, fetchOpts)
            .then((response) => {
                if (response.status >= 400) {
                    console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
                    throw new Error("Server error: " + response.status);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        resolve();
    });
};
