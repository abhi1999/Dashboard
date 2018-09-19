import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarMinimizer, AppSidebarToggler } from '@coreui/react';
import * as  React from 'react';
import { connect } from 'react-redux';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { getVersionInfo, getErrorInfo } from './../../actions/Setting';
import { MdInfo, MdErrorOutline, MdCheckBox } from 'react-icons/md';

// import logo from  "./../../assets/images/vantage-point-logo.png";

// This is needed so that TypeScript does not choke
interface IHeaderState{
    showingVersionInfo: boolean
    showingErrorInfo: boolean
}

class Header extends React.Component<any, IHeaderState>{

    constructor(props: any) {
        super(props);
        this.state = {
            showingVersionInfo: false,
            showingErrorInfo: false
        }
        this.toggleVersionInfo = this.toggleVersionInfo.bind(this);
        this.toggleErrorInfo = this.toggleErrorInfo.bind(this);
    }

    public toggleVersionInfo() {

        if (!this.state.showingVersionInfo===true)
        {
            // Refresh the data
            this.props.getVersionInfo();
        }
        this.setState({
            showingVersionInfo: !this.state.showingVersionInfo
        });
    }

    public toggleErrorInfo() {
        if (!this.state.showingErrorInfo===true)
        {
            // Refresh the data
            this.props.getErrorInfo();
        }
        this.setState({
            showingErrorInfo: !this.state.showingErrorInfo
        });
    }

    public render(){

        const versionInfoList = this.props.versionInfo.map((item) =>
            <li key={item}>{item}</li>
        );

        const errorInfoList = this.props.errorInfo.map((item, index) =>
            <li key={index}>{item}</li>
        );
        return <React.Fragment>
            <Modal isOpen={this.state.showingVersionInfo} toggle={this.toggleVersionInfo} className={this.props.className}>
                <ModalHeader toggle={this.toggleVersionInfo}>Version Information</ModalHeader>
                <ModalBody>
                    <ul>{versionInfoList}</ul>
                </ModalBody>
            </Modal>

            <Modal isOpen={this.state.showingErrorInfo} toggle={this.toggleErrorInfo} size="lg" className={this.props.className}>
                <ModalHeader toggle={this.toggleErrorInfo}>Recent Server Errors</ModalHeader>
                <ModalBody>
                    <ul>{errorInfoList}</ul>
                </ModalBody>
            </Modal>
            <AppSidebarToggler className="d-lg-none" display="md" mobile={true}/>
            <AppSidebarToggler className="d-md-down-none" display="lg"/>
            
            <AppNavbarBrand
                full={{ src: "./assets/images/vantage-point-logo.png", alt: 'Vantage Point 5' }}
                minimized={{ src: "./assets/images/favicon.ico", alt: 'Vantage Point 5' }}
            />
            
            <Nav className="d-md-down-none" navbar={true}>
                <NavItem className="">
                    <NavLink href="#"><i className="icon-exclamation icons" onClick={ () => { this.toggleErrorInfo(); }}/></NavLink>
                    
                </NavItem>

                <NavItem className="">
                    <NavLink href="#"><i className="icon-info exclamation icons" onClick={ () => { this.toggleVersionInfo(); }}/></NavLink>
                </NavItem>
            </Nav>
            
            <Nav className="ml-auto" navbar={true}>
                <span/>
            </Nav>
        </React.Fragment>
    }
}

const mapStateToProps = ({settings}) => {
    const {versionInfo, errorInfo} = settings;
    return {versionInfo, errorInfo}
};

const mapActionsToProps = {
    getVersionInfo, 
    getErrorInfo
}

export default connect(mapStateToProps, mapActionsToProps)(Header);

/*
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
*/