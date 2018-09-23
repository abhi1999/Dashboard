import * as React from 'react';
import {Button, Tooltip} from 'reactstrap';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import {remove, cloneDeep} from 'lodash';

interface IGridFilterPillsProps{
    filters:FilterDescriptor[],
    onFilterClear:(newFilter:FilterDescriptor[])=>void
}
interface IGridFilterPillsState{
    tooltipOpen:string;
}
export default class GridFilterPills extends React.Component<IGridFilterPillsProps, IGridFilterPillsState> {
    public constructor (props){
        super(props);
        this.state = {
            tooltipOpen:""
        }
    }
    public render(){
        const { filters } = this.props;
        return <span className="filter-pills">
                Filter:
                {filters.map(f=><React.Fragment key={f.id}>
                        <Button className="btn-filter-pill"  id={f.id} onClick={()=>{this.clearFilter(f.id)}}>
                            {f.displayValue? f.displayValue: f.value}<i className="fa fa-close" aria-hidden="true"/>
                        </Button>
                        <Tooltip isOpen={this.state.tooltipOpen === f.id} target={f.id} toggle={()=>this.toggleToolTip(f.id)}>
                        {f.displayLabel? f.displayLabel: f.id}
                        </Tooltip>
                      </React.Fragment>)}
                {filters.length > 1 ? <Button className="btn-filter-pill"  onClick={()=>{this.clearFilter()}}>
                            Clear All<i className="fa fa-close" aria-hidden="true"/>
                        </Button> :""}
            </span>
    }
    private toggleToolTip = (id)=>{
        this.setState({tooltipOpen: this.state.tooltipOpen === id? "":id})
    }
    private clearFilter = (id="")=>{
        if(id === undefined|| id.length === 0){
            this.props.onFilterClear([]);
        }
        else{
            const newFilter = cloneDeep(this.props.filters);
            remove(newFilter, (filer) => filer.id === id);
            this.props.onFilterClear(newFilter);    
        }
    }
}