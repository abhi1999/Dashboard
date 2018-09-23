import * as React from 'react';
import { StringChecker } from '../../utils/Conversion';
import { connect } from "react-redux";
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { documentAdd, documentUpdate, documentDelete } from '../../actions/DocumentAction';
import { IXMLDoc } from '../../constants/edidb'
import * as XXMLDoc from "../../constants/edidb/CXMLDoc";
import { Form, Input, Select, Button } from 'antd';
import KeyValueLabel from '../../constants/params/keyValueLabel';
import { pseudoTradeGetAll } from '../../actions/PseudoTradeAction';
import { Button as RSButton, ButtonDropdown, Card, CardTitle, CardHeader, CardBody, Col, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import { Form as RSForm, FormGroup as RSFormGroup, Label as RSLabel, Col as RSCol, Input as RSInput, Row as RSRow } from 'reactstrap';
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
const selectStatus: KeyValueLabel[] = [
    new KeyValueLabel({ key: "", value: "", label: "All" }),
    new KeyValueLabel({ key: "N", value: "N", label: "Ready" }),
    new KeyValueLabel({ key: "H", value: "H", label: "Hold" }),
    new KeyValueLabel({ key: "Y", value: "Y", label: "Complete" }),
    new KeyValueLabel({ key: "C", value: "C", label: "Carbon Copied" }),
];
const selectDirection: KeyValueLabel[] = [
    new KeyValueLabel({ key: "", value: "", label: "All" }),
    new KeyValueLabel({ key: "I", value: "I", label: "Inbound" }),
    new KeyValueLabel({ key: "O", value: "O", label: "Outbound" }),
];

export interface IdocumentViewProps {
    // Local
    itemId: string,
    item: IXMLDoc,
    isNew: boolean,
    revertDisplay: any,
    // Redux
    document: any,
    pseudoTradeSet: any,
    pseudoTradeGetAll: any;
    documentAdd: any,
    documentUpdate: any,
    documentDelete: any
}

export interface IdocumentViewState {
    tradeSelectList: any[],
    TP_PartID:string,
    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class DocumentView extends React.Component<IdocumentViewProps, IdocumentViewState> {
    constructor(props: any) {
        super(props);
        this.initState = this.initState.bind(this);
        this.isValid = this.isValid.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleExp_FlagChange = this.handleExp_FlagChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    public componentWillMount() {
        this.initState();
    };

    public render() {
        let actionButtons =
            <div>
                <Button icon='arrow-left' shape="circle" style={{ marginLeft: 8 }} onClick={() => {
                    this.initState();
                    this.props.revertDisplay();
                }} />
                <Button style={{ marginLeft: 8 }}
                    type="primary"
                    onClick={() => {
                        if (this.isValid()) {
                            this.handleUpdate();
                        }
                    }}>
                    Update
            </Button>
            </div>;
        if (this.props.isNew) {
            actionButtons =
                <div>
                    <Button icon='arrow-left' shape="circle" onClick={() => {
                        this.initState();
                        this.props.revertDisplay();
                    }} />
                    <Button style={{ marginLeft: 8 }}
                        type="primary"
                        onClick={() => {
                            if (this.isValid()) {
                                this.handleAdd();
                                this.props.revertDisplay();
                            }
                        }}>
                        Add
            </Button>
                </div>
        }
        return (
            <div style={{ width: '100%', marginBottom: 20 }}>
                {actionButtons}
                <Divider style={{ margin: 10 }} />
                <RSForm row={true}>
                    <RSRow>
                        <RSCol lg={3} md={6} sm={12}>
                            <RSFormGroup>
                                <RSLabel for={XXMLDoc.kXMLDoc_DGID}>DGID</RSLabel>
                                <RSInput id={XXMLDoc.kXMLDoc_DGID} value={StringChecker(this.state.item.DGID)} onChange={this.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            <RSFormGroup>
                                <RSLabel for={XXMLDoc.kXMLDoc_XMLRef}>XMLRef</RSLabel>
                                <RSInput id={XXMLDoc.kXMLDoc_XMLRef} value={StringChecker(this.state.item.XMLRef)} onChange={this.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            <RSFormGroup>
                                <RSLabel for={XXMLDoc.kXMLDoc_Exp_Flag}>Status</RSLabel>
                                <RSInput type="select" id={XXMLDoc.kXMLDoc_Exp_Flag} value={StringChecker(this.state.item.Exp_Flag)} onChange={(e) => this.handleExp_FlagChange(e.target.value)}>
                                    {selectStatus.map((option) => <option key={option.key} value={option.value}>{option.label}</option>)}
                                </RSInput>
                            </RSFormGroup>
                        </RSCol>
                    </RSRow>
                </RSForm>
            </div>
        )
    };

    private initState() {
        this.setState({
            item: this.props.item,
            TP_PartID:this.props.item.TP_PartID,
            tradeSelectList: [],
        });

        this.props.pseudoTradeGetAll();
    }

    private handleAdd() {
        const document = this.state.item;
        this.props.documentAdd(document);
        this.props.revertDisplay();
    }

    private handleUpdate() {
        const document = this.state.item;
        this.props.documentUpdate(document);
        this.props.revertDisplay();
    }

    private handleTP_PartIDChange(value: string) {
        this.handleFieldChange(XXMLDoc.kXMLDoc_TP_PartID, value);
    }

    private handleExp_FlagChange(value: string) {
        this.handleFieldChange(XXMLDoc.kXMLDoc_Exp_Flag, value);
    }

    private handleInputChange(event: any) {

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
    }

    private isValid() {
        return true;
    }
}

const mapStateToProps = ({ document, pseudoTradeSet }) => {
    return { document, pseudoTradeSet }
};

const mapActionsToProps = {
    pseudoTradeGetAll,
    documentAdd,
    documentUpdate,
    documentDelete
};

export default connect(mapStateToProps, mapActionsToProps)(DocumentView);
