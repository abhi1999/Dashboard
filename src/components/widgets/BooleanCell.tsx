import * as React from 'react';
import classNames from 'classnames';
interface IBooleanCellProps{
    checked:boolean
}
export default class BooleanCell extends React.Component<IBooleanCellProps> {
    public constructor (props){
        super(props)
    }
    public render(){
        const { checked, children } = this.props;
        return <span><i className={classNames({'boolean-content':checked},'fa', {'fa-check':checked})}/>{children}</span>
    }
}

// Sample on how to use this in react-table
// headerClassName: 'boolean-value',
// className: 'boolean-value',
// Cell:(row)=><BooleanCell checked={row.value ==="40"}>{row.value}</BooleanCell>
