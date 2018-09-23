import * as React from 'react';
import {Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Popover, PopoverBody} from 'reactstrap';
import IconButton from "./IconButton";
interface IGridActionMenuProps{
    items:string[]
    onItemClick:(item:string)=>void
}
interface IGridActionMenuState{
    actionMenuState:boolean
}
export default class GridActionMenu extends React.Component<IGridActionMenuProps,IGridActionMenuState> {
    private iconButtonRef:any;
    public constructor (props){
        super(props)
        this.state = {
            actionMenuState:false
        }
        this.iconButtonRef = React.createRef();
    }
    // TODo placeholder to replace button dropdown with popover
    public renderNew(){
        const {items, onItemClick}= this.props;
        return <React.Fragment>
                    <IconButton ref={this.iconButtonRef} id="actionButton" className="fa fa-ellipsis-v btn-toggle" onClick={()=>{this.setState({actionMenuState:!this.state.actionMenuState})}}/>
                    <Popover placement="right-end" isOpen={this.state.actionMenuState} target={()=>this.iconButtonRef} toggle={()=>{this.setState({actionMenuState:!this.state.actionMenuState})}}>
                        <PopoverBody>
                        {
                            items.map((i)=>{
                                return <Button block={true} key={i} onClick={() => {this.setState({actionMenuState:!this.state.actionMenuState}); onItemClick(i)}}>{i}</Button>
                            })
                        }
                        </PopoverBody>
                    </Popover>
                </React.Fragment>
    }
    public render(){
        const {items, onItemClick}= this.props;
        return <ButtonDropdown direction="right"  isOpen={this.state.actionMenuState} toggle={()=>{this.setState({actionMenuState:!this.state.actionMenuState})}}>
                    <DropdownToggle caret={false} className="fa fa-ellipsis-v btn-toggle"/>
                    <DropdownMenu>
                        {
                            items.map((i)=>{
                                return <DropdownItem key={i} onClick={() => {this.setState({actionMenuState:!this.state.actionMenuState}); onItemClick(i)}}>{i}</DropdownItem>
                            })
                        }
                    </DropdownMenu>
                </ButtonDropdown>
    }
}