import * as  React from 'react';
/*
import {
    JsonTree,
    ADD_DELTA_TYPE,
    REMOVE_DELTA_TYPE,
    UPDATE_DELTA_TYPE,
    DATA_TYPES,
    INPUT_USAGE_TYPES,
} from 'react-editable-json-tree';
*/
// import ReactJson from 'react-json-view'
 
class JsonTreeComponent extends React.Component<any, any>{
    public constructor(props) {
        super(props);
    }
    public render(){
        const data = {
            error: new Error('error'),
            text: 'text',
            int: 100,
            boolean: true,
            null: null,
            object: {
                text: 'text',
                int: 100,
                boolean: true,
            },
            array: [
                1,
                {
                    string: 'test',
                },
            ],
        }
        // <JsonTree data={data} readOnly={false} />
        return <React.Fragment>
            <div>json edit</div>
        </React.Fragment>
    }

}

export default JsonTreeComponent;
