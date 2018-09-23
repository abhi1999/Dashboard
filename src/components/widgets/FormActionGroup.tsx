import * as React from 'react';
import {ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

interface IFormActionGroupProps{
    items:string[]
    direction?:string
    onItemClick:(item:string)=>void
}
interface IFormActionGroupState{
    menuState:boolean
}
// Sample on how to use this
// <FormActionGroup items={["Help", "Settings"]} onItemClick={(item)=>console.log(item)}/>
export default class FormActionGroup extends React.Component<IFormActionGroupProps,IFormActionGroupState> {
    public constructor (props){
        super(props)
        this.state = {
            menuState:false
        }
    }
    public render(){
        const {items, onItemClick, direction}= this.props;
        return <ButtonDropdown className="form-action-group" direction={direction?direction:"left"}  isOpen={this.state.menuState} toggle={()=>{this.setState({menuState:!this.state.menuState})}}>
                    <DropdownToggle caret={false} className="fa fa-ellipsis-v btn-toggle"><span>Actions</span></DropdownToggle>
                    <DropdownMenu>
                        {
                            items.map((i)=>{
                                return <DropdownItem key={i} onClick={() => {this.setState({menuState:!this.state.menuState}); onItemClick(i)}}>{i}</DropdownItem>
                            })
                        }
                    </DropdownMenu>
                </ButtonDropdown>
    }
}