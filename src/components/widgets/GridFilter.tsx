import * as React from 'react';
import {Badge, Button, Input, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import {remove, cloneDeep} from 'lodash';
import IconButton from "./IconButton";
import PageBtnContainer from "./PageBtnContainer";
// sample {type:'text', label:'ID' name:'xxx', placeholder:'', returnType:'number'}

interface IGridFilterProps{
    filters:FilterDescriptor[],
    filterItems:any[],
    onApply:(newFilter:FilterDescriptor[])=>void
}
interface IGridFilterState{
    isOpen:boolean
    filtersDirtyState:FilterDescriptor[]
}
export default class GridFilter extends React.Component<IGridFilterProps,IGridFilterState> {
    public constructor (props){
        super(props)
        this.state = {
            isOpen:false,
            filtersDirtyState:[]
        }
        this.handleFilterDirtyChange = this.handleFilterDirtyChange.bind(this);
        this.getValueForFilter = this.getValueForFilter.bind(this);
        this.handleFilterApply = this.handleFilterApply.bind(this);
        this.handleFilterCancel = this.handleFilterCancel.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    public componentWillReceiveProps(props){
        this.setState({filtersDirtyState:cloneDeep(props.filters)})
    }
    public render(){
        const { filters, filterItems }= this.props;
        const { isOpen, filtersDirtyState} = this.state;
        return <React.Fragment>
            <IconButton id="filterBtn" className="fa fa-filter" active={filters.length > 0} 
                    onClick={() => {
                        if(!isOpen){
                            this.setState({filtersDirtyState:cloneDeep(filters)})
                        }
                        this.setState({isOpen:!isOpen})}} iconText="Filter"/>
            {filters.length>0? <Badge color="secondary">{filters.length}</Badge>:""}
            <Popover placement="left-end" isOpen={isOpen} target="filterBtn" toggle={() => this.setState({isOpen:!isOpen})} className="filter-popover">
                <PopoverHeader>Filter</PopoverHeader>
                <PopoverBody>
                    {
                        filterItems.map((item, index) =>{
                            let innerItem;
                            switch(item.type){
                                case "select":
                                    innerItem=<Input type="select" name={item.name} value={this.getValueForFilter(item.name)} onChange={(e)=>{ this.handleFilterDirtyChange(e.target.name, e.target.value, e.target.options[e.target.options.selectedIndex].text)}}>
                                                {item.options}
                                        </Input>   
                                        break;
                                default:
                                    innerItem = <Input autoComplete="off" name={item.name} onKeyPress={this.handleKeyPress} defaultValue={this.getValueForFilter(item.name)} onChange={(e)=>{this.handleFilterDirtyChange(e.target.name, e.target.value)}}/>;
                            }
                            return <React.Fragment key={index}>
                                {item.label}
                                {innerItem}
                            </React.Fragment>
                        })
                    }
                    <PageBtnContainer>
                        <Button color="primary" onClick={this.handleFilterApply}>Apply</Button>                                
                        <Button color="secondary" onClick={this.handleFilterCancel}>Cancel</Button>
                    </PageBtnContainer>
                </PopoverBody>
            </Popover>
        </React.Fragment>
    }
    private handleKeyPress(e){
        if(e.charCode === 13){
            this.handleFilterApply();
        }
    }
    private getValueForFilter(id){
        const item = this.state.filtersDirtyState.find(f=> f.id === id);
        return item? item.value: undefined; 
    }
    private handleFilterDirtyChange(id, value, displayValue?){
        const filtersDirtyState = this.state.filtersDirtyState;
        let item = filtersDirtyState.find(f=> f.id === id)
        if(item!== undefined){
            item.value = value;
        }else{
            item = {id, value, displayValue}
            filtersDirtyState.push(item);
        }
        if(displayValue){
            item.displayValue = displayValue;
        }                 
        remove(filtersDirtyState, (f)=>f.value === undefined || f.value.length === 0 )
        this.setState({filtersDirtyState});
    }
    private handleFilterApply(){
        const filtersDirtyState:FilterDescriptor[] = this.state.filtersDirtyState;
        filtersDirtyState.forEach(f=>{
            const filterItem = this.props.filterItems.find((fi:any)=>fi.name === f.id);
            if(filterItem && filterItem.returnType === "number"){
                f.value = parseInt(f.value, 10 );
            }
            else if(filterItem && filterItem.returnType === "boolean"){
                if(Boolean(f.value.toLowerCase())){
                    f.value = (f.value.toLowerCase() === "true")
                }
                else {
                    f.value = undefined;
                }
            }
        });
        remove(filtersDirtyState, (f)=>f.value === undefined )
        this.setState({isOpen:false}, ()=>{
            this.props.onApply(filtersDirtyState);
        })
    }
    private handleFilterCancel(){
        this.setState({isOpen:false})
    }
}