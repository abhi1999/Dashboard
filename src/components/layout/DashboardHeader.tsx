import * as  React from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, NavItem, NavLink } from 'reactstrap';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

class DashboardHeader extends React.Component{
    public render(){
        return <React.Fragment>
            <AppSidebarToggler className="d-lg-none" display="md" mobile={true}/>
            <AppSidebarToggler className="d-md-down-none" display="lg"/>
            <Nav className="d-md-down-none" navbar={true}>
                <NavItem className="px-3">
                    <NavLink href="#"><i className="icon-settings"/></NavLink>
                </NavItem>
                <NavItem className="px-3">
                    <NavLink href="#"><i className="icon-cloud-download"/></NavLink>
                </NavItem>
                <NavItem className="px-3">
                    <NavLink href="#"><i className="icon-cloud-upload"/></NavLink>
                </NavItem>
                <NavItem className="px-3">
                    <NavLink href="#"><i className="icon-notebook"/></NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar={true}>
                <Input type="search" name="search" id="exampleSearch" placeholder="Search..." />
                <NavItem className="d-md-down-none">
                    <NavLink href="#"><i className="icon-globe"/><Badge pill={true} color="danger">5</Badge></NavLink>
                    
                </NavItem>
                <NavItem><i className="icon-refresh"/></NavItem>
            </Nav>
            <AppHeaderDropdown direction="down">
                <DropdownToggle nav={true}>
                    <h6>Vantage Point EDI</h6>
                    <small>Dynamics 365 Company</small>
                </DropdownToggle>
                <DropdownMenu right={true} style={{ right: 'auto' }}>
                    <DropdownItem header={true} tag="div" className="text-center"><strong>Actions</strong></DropdownItem>
                    <DropdownItem><i className="fa fa-bell-o"/> Updates<Badge color="info">42</Badge></DropdownItem>
                    <DropdownItem><i className="fa fa-bell-o"/> Inflows<Badge color="success">190</Badge></DropdownItem>
                    <DropdownItem><i className="fa fa-bell-o"/> Outflows<Badge color="danger">45</Badge></DropdownItem>
                </DropdownMenu>
                </AppHeaderDropdown>
            <AppAsideToggler className="d-md-down-none" />
            

        </React.Fragment>
    }
}

export default DashboardHeader;