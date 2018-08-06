import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarMinimizer, AppSidebarToggler } from '@coreui/react';
import * as  React from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, NavItem, NavLink } from 'reactstrap';

// import logo from  "./../../assets/images/vantage-point-logo.png";
interface IHeaderProps{
    reload:()=>void
}
class Header extends React.Component<IHeaderProps>{
    public render(){
        return <React.Fragment>
            <AppSidebarToggler className="d-lg-none" display="md" mobile={true}/>
            <AppNavbarBrand
                full={{ src: "./assets/images/vantage-point-logo.png", alt: 'Vantage Point 5' }}
                minimized={{ src: "./assets/images/favicon.ico", alt: 'Vantage Point 5' }}
            />
            <AppSidebarToggler className="d-md-down-none" display="lg"/>
            
            <Nav className="d-md-down-none" navbar={true}>
                <NavItem className="px-3">
                    <NavLink href="#"><i className="icon-settings" title="Settings"/></NavLink>
                </NavItem>
                <NavItem className="px-3">
                    <NavLink href="#"><i className="icon-cloud-download" title="Download"/></NavLink>
                </NavItem>
                <NavItem className="px-3">
                    <NavLink href="#"><i className="icon-cloud-upload" title="Update"/></NavLink>
                </NavItem>
                <NavItem className="px-3">
                    <NavLink href="#"><i className="icon-notebook" title="Notes"/></NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar={true}>
                <NavItem className="d-md-down-none"> <Input type="search" name="search" id="exampleSearch" placeholder="Search..." />
                </NavItem>
                <NavItem className="d-md-down-none">
                    <NavLink href="#"><i className="icon-globe"/><Badge pill={true} color="danger">5</Badge></NavLink>                    
                </NavItem>
                <NavItem className="d-md-down-none"><i className="icon-refresh" onClick={()=>{this.props.reload()}}/></NavItem>
                
            </Nav>
            <AppAsideToggler className="d-md-down-none" />
        </React.Fragment>
    }
}

export default Header;