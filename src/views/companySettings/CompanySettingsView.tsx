import * as React from "react";
import { connect } from 'react-redux'
import _ from 'lodash';
import { Button, Form } from 'reactstrap';
import { axCompanyID } from '../../constants/index';
import { Collapse } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import { companysettingsGetAll, companysettingsUpdate } from './../../actions/CompanySettingsAction';
import Media from "react-media";
import LoadingComponent from "../../components/widgets/LoadingComponent";
// import ICompanySettingsViewState from "./ICompanySettingsViewState";
// import ICompanySettingsViewProps from "./ICompanySettingsViewProps";
import PageBtnContainer from "./../../components/widgets/PageBtnContainer";
import CompanySettingsModel from "./../../constants/implementations/CompanySettingsModel"
import CompanyPanelView from "./CompanyPanelView"
import CompanySetupPanelView from "./CompanySetupPanelView"
import CompanySystemPanelView from "./CompanySystemPanelView"
import CompanyErpPanelView from "./CompanyErpPanelView"

const Panel = Collapse.Panel;
// const companyID = "2"

// import CompanySettingsCompany from './CompanySettingsCompany'

export interface ICompanySettingsViewProps {
    // redux
    companySetting: any,
    acctPackageSet: any,
    companysettingsGetAll: any,
    companysettingsUpdate: any,
    toastError: any,
}

export interface ICompanySettingsViewState {
    // companyID: string,
    companyEdit: CompanySettingsModel,
    companyID: any,
    loading: boolean,
    [propName: string]: any, // This is so we can set by name dynamically
}

export class CompanySettingsView extends React.Component<ICompanySettingsViewProps, ICompanySettingsViewState> {
    constructor(props: ICompanySettingsViewProps) {
        super(props)


        this.initState = this.initState.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDropDownChange = this.handleDropDownChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleImportMethodChange = this.handleImportMethodChange.bind(this);
        this.handleAuthenticationMethodChange = this.handleAuthenticationMethodChange.bind(this);
        this.handlePostItemSequenceChange = this.handlePostItemSequenceChange.bind(this);
        this.handlePOTypeChange = this.handlePOTypeChange.bind(this);
        this.handleErpPackageChange = this.handleErpPackageChange.bind(this);
        this.handleSupExpChange = this.handleSupExpChange.bind(this);
    }

    public componentWillMount() {
        this.initState();
    };

    public componentDidMount() {
        this.query()
    }
    public componentWillReceiveProps(newProps) {

        this.setState({
            companyEdit: newProps.companySetting.companyModel,
            loading: false,
        });
    }

    public render() {

        if (this.state.loading) {
            return <LoadingComponent />
        }

        const actionButtons =
            <PageBtnContainer>
                <Button
                    color="primary"
                    onClick={() => {
                        if (this.isValid()) {
                            this.handleUpdate();
                        }
                    }}>
                    Save
               </Button>
               <Button
                    onClick={() => {
                        this.setState({ loading: true });
                        this.query();
                    }}>
                    Cancel
                </Button>
            </PageBtnContainer>;

        // if (this.state.companyEdit === undefined) {
        //     return (<div> Loading... </div>)
        // }



        const acctPackageList = this.props.acctPackageSet.acctPackageList

        return (
            <div>
                <Form row={true}>
                    <Collapse accordion={false} >
                        <Panel header="Company" key="Company">
                            <CompanyPanelView
                                company={this.state.companyEdit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Panel>
                        <Panel header="Setup" key="Setup">
                            <CompanySetupPanelView
                                company={this.state.companyEdit}
                                handleInputChange={this.handleInputChange}
                                handleDropDownChange={this.handleDropDownChange}
                            />
                        </Panel>
                        <Panel header="System" key="System">
                            <CompanySystemPanelView
                                company={this.state.companyEdit}
                                handleInputChange={this.handleInputChange}
                                handleSupExpChange={this.handleSupExpChange}
                            />
                        </Panel>
                        <Panel header="ERP" key="Erp">
                            <CompanyErpPanelView
                                company={this.state.companyEdit}
                                handleInputChange={this.handleInputChange}
                                // handleAuthenticationMethodChange={this.handleAuthenticationMethodChange}
                                // handlePostItemSequenceChange={this.handlePostItemSequenceChange}
                                // handlePOTypeChange={this.handlePOTypeChange}
                                acctPackageList={acctPackageList}
                                // handleErpPackageChange={this.handleErpPackageChange}
                                handleDropDownChange={this.handleDropDownChange}
                            />
                        </Panel>
                    </Collapse>
                    {actionButtons}
                </Form>
            </div>
        );
    }
    private query() {
        this.props.companysettingsGetAll(this.state.companyID)
    }

    private initState() {
        this.setState({
            loading: true,
            companyID: sessionStorage.getItem(axCompanyID),
        });
    }

    private isValid() {
        return true;
    }

    private handleUpdate() {
        this.props.companysettingsUpdate(this.state.companyEdit)
    }

    private handleDropDownChange(field: string, value: any) {
        this.setState(prevState => ({
            companyEdit: {
                ...prevState.companyEdit,
                [field]: value
            }
        }))
    }

    // private handleImportMethodChange(value: string) {
    //     this.handleDropDownChange("WMSImportType", value)
    // }

    private handleAuthenticationMethodChange(value: string) {
        this.handleDropDownChange("AuthType", value)
    }

    private handlePostItemSequenceChange(value: string) {
        this.handleDropDownChange("PostItemSeq", value)
    }

    private handlePOTypeChange(value: string) {
        this.handleDropDownChange("AxaptaExpandedPO", value)
    }

    private handleErpPackageChange(value: string) {
        this.handleDropDownChange("AcctPackageID", value)
    }

    private handleSupExpChange(date: any, dateStr: string) {
        this.handleDropDownChange("SupExp", date)
    }

    private handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;

        // const current = this.state.FieldStatus.find(item => item.field === name)

        // // determine if there is a max field length and if so, set it
        // if (current !== undefined) {
        //     if (current.max !== undefined) {
        //         value = (value as string).substring(0, current.max)
        //     }
        // }

        this.setState(prevState => ({
            companyEdit: {
                ...prevState.companyEdit,
                [name]: value
            }
        }))

    }
}

const mapStateToProps = ({ companySetting, acctPackageSet }) => {
    return { companySetting, acctPackageSet }
};

const mapActionsToProps = {
    companysettingsGetAll,
    companysettingsUpdate
};

export default connect(mapStateToProps, mapActionsToProps)(CompanySettingsView);
// export default connect(mapStateToProps, mapActionsToProps)(CompanySettingsView);