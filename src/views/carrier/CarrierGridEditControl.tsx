import * as  React from 'react';

// create your cellRenderer as a React component
export default class CarrierGridEditControl extends React.Component<any> {
    public constructor(props){
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onClone = this.onClone.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    public render() {
        console.log('props', this.props)
    // put in render logic
        return <div>
                <i className="fa fa-pencil" aria-hidden="true" onClick={this.onEdit}/>&nbsp;&nbsp;
                <i className="fa fa-clone" aria-hidden="true" onClick={this.onClone}/>&nbsp;&nbsp;
                <i className="fa fa-trash" aria-hidden="true" onClick={this.onDelete}/>&nbsp;&nbsp;
        </div>;
    }
    private onEdit(){
        if(this.props.onItemEdit !== undefined){
            this.props.onItemEdit(this.props.data)
        }
    }
    private onDelete(){
        if(this.props.onItemDelete !== undefined){
            this.props.onItemDelete(this.props.data)
        }
    }
    private onClone(){
       if(this.props.onItemClone !== undefined){
            this.props.onItemClone(this.props.data)
        }
    }
}
