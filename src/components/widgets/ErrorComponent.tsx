import * as  React from 'react';

export default class ErrorComponent extends React.Component<any, any>{
    public render(){
        return <div className='dashboard-component-error' >
        There was an error loading data.  Please refresh the page
      </div>
    }
}