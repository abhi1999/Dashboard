import * as  React from 'react';
import {Button, ButtonDropdown, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle, } from "reactstrap";

interface IAlertViewToggleState{
    isOpen: boolean
    rSelected:string
}
interface IAlertViewToggleProps{
    presets:string[],
    defaultSelection:string,
    onChange:(selected:string)=>void
}
class AlertViewToggle extends React.Component<IAlertViewToggleProps, IAlertViewToggleState>{
    public constructor(props) {
        super(props);
        this.state={isOpen:false, rSelected:this.props.defaultSelection}
        this.toggle = this.toggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }
    public render(){
        return this.props.presets.length>3? this.renderDropdownToggle():this.reunderButtonGroup();
    }
    public reunderButtonGroup(){
        return <ButtonGroup size="sm">
            {this.props.presets.map(p=><Button key={p}  onClick={() => this.onRadioBtnClick(p)} active={this.state.rSelected === p}>{p}</Button>)}
      </ButtonGroup>
    }
    public renderDropdownToggle(){
        return <ButtonDropdown isOpen={this.state.isOpen} className="alert-view-toggle" toggle={this.toggle}>
            <DropdownToggle caret={true} size="sm">
                {this.state.rSelected}
            </DropdownToggle>
            <DropdownMenu>
                {
                    this.props.presets.map(p=>p === this.state.rSelected? "":<DropdownItem key={p} onClick={() => this.onRadioBtnClick(p)}>{p}</DropdownItem>)
                }
            </DropdownMenu>
        </ButtonDropdown>
    }
    private onRadioBtnClick(rSelected:string){
        this.setState({rSelected})
        this.props.onChange(rSelected)
    }
    private toggle(){
        this.setState({isOpen:!this.state.isOpen})
    }
}
export default AlertViewToggle;