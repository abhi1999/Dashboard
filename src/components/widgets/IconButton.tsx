import * as React from 'react';
import {Badge, Button, Input, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import classNames from 'classnames';

export default class IconButton extends React.Component<any, any> {
    public constructor (props){
        super(props)
    }
    public render(){
        const { className, children, iconText, ...rest } = this.props;
        return <Button className={classNames("btn-icon", className)} {...rest}>{children}
            {iconText && iconText.length> 0? <span>{iconText}</span>:''}
        </Button>
    }
}