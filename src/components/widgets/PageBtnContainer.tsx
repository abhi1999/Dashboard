import * as React from 'react';
import classNames from 'classnames';

export default class PageBtnContainer extends React.Component<any> {
    public constructor (props){
        super(props)
    }
    public render(){
        const { children, className, ...rest } = this.props;
        return <div className={classNames("btn-container", className)} {...rest}>{children}</div>
    }
}

// Sample on how to use this in form
// <PageBtnContainer><Button.....></PageBtnContainer>
