import * as React from 'react';
import { StringChecker } from '../../utils/Conversion';
import { connect } from "react-redux";
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { carrierAdd, carrierUpdate, carrierDelete } from '../../actions/CarrierAction';
import ShipViaModel from "../../constants/implementations/ShipViaModel";
import * as XShipVia from "../../constants/edidb/CShipVia";
import { Form, Input, Select, Button } from 'antd';
import KeyValueLabel from '../../constants/params/keyValueLabel';

import { Button as RSButton, ButtonDropdown, Card, CardTitle, CardHeader, CardBody, Col, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';

import {Form as RSForm, FormGroup as RSFormGroup, Label as RSLabel, Col as RSCol, Input as RSInput, Row as RSRow} from 'reactstrap';
import PageBtnContainer from "./../../components/widgets/PageBtnContainer";


const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const selectType:KeyValueLabel[] = [
    new KeyValueLabel({ key: "", value: "", label: "All" }),
    new KeyValueLabel({ key: "LT", value: "LT", label: "LT" }),
    new KeyValueLabel({ key: "M", value: "M", label: "M" }),
    new KeyValueLabel({ key: "U", value: "U", label: "U" }),
];

export interface ICarrierViewProps {
    // Local
    itemId: string,
    item: ShipViaModel,
    isNew: boolean,
    revertDisplay: any,
    // Redux
    carrier: any,
    carrierAdd: any,
    carrierUpdate: any,
    carrierDelete: any
}

export interface ICarrierViewState {
    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class CarrierView extends React.Component<ICarrierViewProps, ICarrierViewState> {
    constructor(props: any) {
        super(props);
        this.initState = this.initState.bind(this);
        this.isValid = this.isValid.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleField_Ship_Via_TypeChange = this.handleField_Ship_Via_TypeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }
    public componentWillMount() {
        this.initState();
    };
    public render() {
        let actionButtons =
            <PageBtnContainer>
                <RSButton 
                    color="primary"
                    onClick={() => {
                        if (this.isValid()) {
                            this.handleUpdate();
                        }
                    }}>
                    Save
                </RSButton>
                <RSButton onClick={() =>
                    {
                        this.initState();
                        this.props.revertDisplay();
                    }} >
                    Cancel
                </RSButton>
                <RSButton 
                    onClick={() => {
                        this.handleDelete();
                    }}>
                    Delete
                </RSButton>
                </PageBtnContainer>;
        if (this.props.isNew) {
            actionButtons =
                <PageBtnContainer>
                    <RSButton
                        color="primary"
                        onClick={() => {
                            if (this.isValid()) {
                                this.handleAdd();
                                this.props.revertDisplay();
                            }
                        }}>
                        Save
                    </RSButton>
                    <RSButton onClick={() =>
                        {
                            this.initState();
                            this.props.revertDisplay();
                        }} >
                    Cancel
                    </RSButton>
                </PageBtnContainer>
        }
        return (
                <RSForm row={true}>
                    <RSRow>
                        <RSCol lg={3} md={6} sm={12}>
                            <RSFormGroup>
                                <RSLabel for={XShipVia.kShipVia_Ship_Via_Name}>Name</RSLabel>
                                <RSInput validateStatus={this.state.Field_Ship_Via_Name_Status} id={XShipVia.kShipVia_Ship_Via_Name} placeholder="Ship via Name" value={StringChecker(this.state.item.Ship_Via_Name)} onChange={this.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            <RSFormGroup>
                                <RSLabel for={XShipVia.kShipVia_Ship_Via_ID}>ID</RSLabel>
                                <RSInput disabled={!this.props.isNew} id={XShipVia.kShipVia_Ship_Via_ID} name={XShipVia.kShipVia_Ship_Via_ID} value={StringChecker(this.state.item.Ship_Via_ID)} onChange={this.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            <RSFormGroup>
                                <RSLabel for={XShipVia.kShipVia_SCAC}>SCAC</RSLabel>
                                <RSInput name={XShipVia.kShipVia_SCAC} id={XShipVia.kShipVia_SCAC} value={StringChecker(this.state.item.SCAC)} onChange={this.handleInputChange}/>
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            <RSFormGroup>
                                <RSLabel for={XShipVia.kShipVia_Ship_Via_Type}>Type</RSLabel>
                                <RSInput type="select" id={XShipVia.kShipVia_Ship_Via_Type} value={StringChecker(this.state.item.Ship_Via_Type)} onChange={(e)=>this.handleField_Ship_Via_TypeChange(e.target.value)}>
                                    {selectType.map((option)=><option key={option.key} value={option.value}>{option.label}</option>)}
                                </RSInput>
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            <RSFormGroup>
                                <RSLabel for={XShipVia.kShipVia_User1}>Field 1</RSLabel>
                                <RSInput name={XShipVia.kShipVia_User1}value={StringChecker(this.state.item.User1)} onChange={this.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            <RSFormGroup>
                                <RSLabel for={XShipVia.kShipVia_User2}>Field 2</RSLabel>
                                <RSInput name={XShipVia.kShipVia_User2} value={StringChecker(this.state.item.User2)} onChange={this.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            <RSFormGroup>
                                <RSLabel for={XShipVia.kShipVia_User3}>Field 3</RSLabel>
                                <RSInput name={XShipVia.kShipVia_User3} value={StringChecker(this.state.item.User3)} onChange={this.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            <RSFormGroup>
                                <RSLabel for={XShipVia.kShipVia_User4}>Field 4</RSLabel>
                                <RSInput name={XShipVia.kShipVia_User4} value={StringChecker(this.state.item.User4)} onChange={this.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            <RSFormGroup>
                                <RSLabel for={XShipVia.kShipVia_User5}>Field 5</RSLabel>
                                <RSInput name={XShipVia.kShipVia_User5} value={StringChecker(this.state.item.User5)} onChange={this.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        </RSRow>
                    {actionButtons}
                </RSForm>
        )
    };

    private initState() {
        this.setState({
            item: this.props.item,
            Field_Ship_Via_Name_Status: undefined,
            Field_Ship_Via_Name_Help: ''
        });
    }

    private handleAdd() {
        const carrier = this.state.item;
        this.props.carrierAdd(carrier);
        this.props.revertDisplay();
    }

    private handleUpdate() {
        const carrier = this.state.item;
        this.props.carrierUpdate(carrier);
        this.props.revertDisplay();
    }

    private handleDelete() {
        const carrier = this.state.item;
        this.props.carrierDelete(carrier);
        this.props.revertDisplay();
    }

    private handleField_Ship_Via_TypeChange(value: string) {
        this.handleFieldChange(XShipVia.kShipVia_Ship_Via_Type, value);
    }

    private handleInputChange(event:any) {

        const target: any = event.target;
        const value: string = target.type === 'checkbox' ? target.checked : target.value;
        const name: string = target.name;

        this.handleFieldChange(name, value);
    }

    private handleFieldChange(name: string, value: string) {

        if (this !== undefined) {

            this.setState(prevState => ({
                item: {
                    ...prevState.item,
                    [name]: value
                }
            }))
        }

        // Field Validation
        /*
        if (name === 'Field_Ship_Via_Name') {
            if (value.length < 1) {
                this.setState({
                    Field_Name_Status: 'error',
                    Field_Name_Help: 'Carrier Name - cannot be blank.'
                });
            }
            else {
                this.setState({
                    Field_Name_Status: undefined,
                    Field_Name_Help: ''
                });
            }
        }
        else if (name === 'Field_Ship_Via_ID') {
            if (value.length < 1) {
                this.setState({
                    Field_Ship_Via_ID_Status: 'error',
                    Field_Ship_Via_ID_Help: 'Carrier ID - cannot be blank.'
                });
            }
            else if (MultiIncludes(value, ['$', '&', '+', ',', '/', ':', ';', '=', '?', '@'])) {
                this.setState({
                    Field_Ship_Via_ID_Status: 'error',
                    Field_Ship_Via_ID_Help: 'Carrier ID - cannot contain prohibited characters.'
                });
            }
            else if (this.props.carrier.carrierList.filter((item) => (item.Ship_Via_ID === value)).length > 0) {
                this.setState({
                    Field_Ship_Via_ID_Status: 'error',
                    Field_Ship_Via_ID_Help: 'Carrier ID must be Unique'
                });
            }
            else if (value.length > 30) {
                this.setState({
                    Field_Ship_Via_ID_Status: 'error',
                    Field_Ship_Via_ID_Help: 'Carrier ID must not be more than 30 characters long.'
                });
            }
            else {
                this.setState({
                    Field_Ship_Via_ID_Status: 'success',
                    Field_Ship_Via_ID_Help: ''
                });
            }
        }
        */
    }

    private isValid() {
        return true;
    }
}

const mapStateToProps = ({ carrier }) => {
    return { carrier }
};

const mapActionsToProps = {
    carrierAdd,
    carrierUpdate,
    carrierDelete
};

export default connect(mapStateToProps, mapActionsToProps)(CarrierView);
