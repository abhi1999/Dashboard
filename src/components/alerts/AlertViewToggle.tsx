import * as  React from 'react';
import {Button, ButtonDropdown, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle, } from "reactstrap";

interface IAlertViewToggleState{
    isOpen: boolean
    rSelected:string
}
interface IAlertViewToggleProps{
    presets:string[],
<<<<<<< HEAD
    defaultSelection:string,
=======
    selected:string,
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
    onChange:(selected:string)=>void
}
class AlertViewToggle extends React.Component<IAlertViewToggleProps, IAlertViewToggleState>{
    public constructor(props) {
        super(props);
<<<<<<< HEAD
        this.state={isOpen:false, rSelected:this.props.defaultSelection}
=======
        this.state={isOpen:false, rSelected:this.props.selected}
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
        this.toggle = this.toggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }
    public render(){
<<<<<<< HEAD
        return this.props.presets.length>3? this.renderDropdownToggle():this.reunderButtonGroup();
    }
    public reunderButtonGroup(){
=======
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
        return <ButtonGroup size="sm">
            {this.props.presets.map(p=><Button key={p}  onClick={() => this.onRadioBtnClick(p)} active={this.state.rSelected === p}>{p}</Button>)}
      </ButtonGroup>
    }
<<<<<<< HEAD
    public renderDropdownToggle(){
        return <ButtonDropdown isOpen={this.state.isOpen} className="alert-view-toggle" toggle={this.toggle}>
            <DropdownToggle caret={true} size="sm">
                {this.state.rSelected}
            </DropdownToggle>
            <DropdownMenu>
                {
                    this.props.presets.map(p=>p === this.state.rSelected? "":<DropdownItem key={p} onClick={() => this.onRadioBtnClick(p)}>{p}</DropdownItem>)
=======
    public render1(){
        return <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
            <DropdownToggle caret={true} size="sm">
                {this.props.selected}
            </DropdownToggle>
            <DropdownMenu>
                {
                    this.props.presets.map(p=><DropdownItem key={p}>{p}</DropdownItem>)
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
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