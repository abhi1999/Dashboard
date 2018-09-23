import * as React from 'react';
import {Badge, Button, Input, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import {remove, cloneDeep} from 'lodash';

interface IGridFilterPillsProps{
    filters:FilterDescriptor[],
    onFilterClear:(newFilter:FilterDescriptor[])=>void
}

export default class GridFilterPills extends React.Component<IGridFilterPillsProps> {
    public constructor (props){
        super(props)
        this.clearFilter = this.clearFilter.bind(this);   
    }
    public render(){
        const { filters } = this.props;
        return <span className="filter-pills">
                Filter:
                {filters.map(f=><Button className="btn-filter-pill" key={f.id} onClick={()=>{this.clearFilter(f.id)}}>
                            {f.displayValue? f.displayValue: f.value}<i className="fa fa-close" aria-hidden="true"/>
                        </Button>)}
                {filters.length > 1 ? <Button className="btn-filter-pill"  onClick={()=>{this.clearFilter()}}>
                            Clear All<i className="fa fa-close" aria-hidden="true"/>
                        </Button> :""}
            </span>
    }
    private clearFilter(id=""){
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