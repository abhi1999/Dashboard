import * as  React from 'react';
import {Popover, PopoverBody, PopoverHeader} from "reactstrap";
interface IDashboardFooterState{
    popoverOpen: boolean
    envVariables:any
}
class DashboardFooter extends React.Component<any, IDashboardFooterState>{
    constructor(props){
        super(props)
        this.state={popoverOpen:false, envVariables:process.env}
        this.toggle = this.toggle.bind(this);
    }
    public render(){
        console.log("*****",this.state.envVariables)
        return <React.Fragment>
            <div>
                <a href="http://www.datamasons.com/">Data Masons</a>
                <span>© 2018 Data Masons Software</span>
            </div>
            <div className="ml-auto" id="Popover1" onClick={this.toggle}>
                <span>Version {process.env.REACT_APP_VERSION}</span>
            </div>
            <Popover isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                <PopoverHeader>Environment Properties</PopoverHeader>
                <PopoverBody>{Object.keys(this.state.envVariables).map(key=> <div key={key}><label>{key}: </label><span>{this.state.envVariables[key]}</span></div>)}</PopoverBody>
            </Popover>
        </React.Fragment>
    }
    private toggle(){
        this.setState({popoverOpen:!this.state.popoverOpen})
    }
}

export default DashboardFooter;