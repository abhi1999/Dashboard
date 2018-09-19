import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Form, Input, Select, InputNumber, Checkbox, Button, Row, Col } from 'antd'
import { connect } from "react-redux";
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { partnerDocGroupAdd, partnerDocGroupDelete } from '../../actions/PartnerDocGroupAction';
// import { IPartnerDocGroup } from '../../constants/edidb'
import PartnerDocGroupModel from '../../constants/implementations/PartnerDocGroupModel'

const FormItem = Form.Item;
const Option = Select.Option;
const statusList = [{ id: "P", status: "Production" }, { id: "T", status: "Test" }]

export interface ITradeDetailDocumentsUsedViewProps {
    // Local
    itemId: string,
    // item: IPartnerDocGroup,
    item: PartnerDocGroupModel,
    isNew: boolean,
    toggleModal: any,
    networkList: any,
    ediDocGroupList: any,

    // Redux
    trade: any,
    partnerDocGroupAdd: any,
    partnerDocGroupDelete: any
}

export interface ITradeDetailDocumentsUsedViewState {
    // PartnerDocGroup: IPartnerDocGroup,
    // PartnerDocGroupOriginal:IPartnerDocGroup,
    PartnerDocGroup: PartnerDocGroupModel,
    PartnerDocGroupOriginal: PartnerDocGroupModel,

    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class TradeDetailDocumentsUsedView extends React.Component<ITradeDetailDocumentsUsedViewProps, ITradeDetailDocumentsUsedViewState>  {

    constructor(props: any) {
        super(props);

        this.initState = this.initState.bind(this);
        this.isValid = this.isValid.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDropDownChange = this.handleDropDownChange.bind(this);
        this.handleNetworkChange = this.handleNetworkChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDocGroupChange = this.handleDocGroupChange.bind(this);

    }

    public componentWillMount() {
        this.initState();
    };

    public render() {

        const partnerDocGroup = this.state.PartnerDocGroup

        let deleteButton
        
        if (!this.props.isNew) {
            deleteButton =   
                <Button
                    onClick={() => {
                        this.handleDelete();
                    }}>
                    Delete
                </Button>
        }
        else {
            deleteButton = <span />
        }

        const actionButtons =
            <div>
                <Button
                    onClick={() => {
                        this.props.toggleModal(false);
                    }}>
                    Cancel
                </Button>
                { deleteButton}
                {/* <Button
                    onClick={() => {
                        this.handleDelete();
                    }}>
                    Delete
                </Button> */}
                <Button
                    type="primary"
                    onClick={() => {
                        if (this.isValid()) {
                            this.handleUpdate();
                        }
                    }}>
                    Update
                </Button>
            </div>;

        return (
            <div style={{ width: '100%', marginBottom: 20 }}>
                {actionButtons}
                <Divider />
                <Form>
                    <Row gutter={4}>
                        <Col xs={12}>
                            <FormItem label="Doc Group" >
                                <Select style={{ width: '100%' }}
                                    value={partnerDocGroup.Doc_Group}
                                    onChange={this.handleDocGroupChange}
                                >
                                    {this.props.ediDocGroupList.map((item) => {
                                        return (
                                            <Option key={item.DGID} value={item.Doc_Group}>{item.Doc_Group}</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </FormItem>
                        </Col>

                        <Col xs={12}>
                            <FormItem label="Status" >
                                <Select style={{ width: '100%' }}
                                    value={partnerDocGroup.TestProdInd}
                                    onChange={this.handleStatusChange}
                                >
                                    {statusList.map((item) => {
                                        return (
                                            <Option key={item.id} value={item.id}>{item.status}</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </FormItem>
                        </Col>

                        <Col xs={12}>
                            <FormItem label="Qualifier" >
                                <Input
                                    type="text"
                                    name="PartnerQual"
                                    value={StringChecker(partnerDocGroup.PartnerQual)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={4}>
                        <Col xs={12}>
                            <FormItem label="ID" >
                                <Input
                                    type="text"
                                    name="TP_PartID"
                                    value={StringChecker(partnerDocGroup.TP_PartID)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                        </Col>

                        <Col xs={12}>
                            <FormItem label="Group ID" >
                                <Input
                                    type="text"
                                    name="GroupID"
                                    value={StringChecker(partnerDocGroup.GroupID)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                        </Col>

                        <Col xs={12}>
                            <FormItem label="Network">
                                <Select style={{ width: '100%' }}
                                    value={partnerDocGroup.Van_ID}
                                    onChange={this.handleNetworkChange}
                                >
                                    {this.props.networkList.map((item) => {
                                        return (
                                            <Option key={item.Van_ID} value={item.Van_ID}>{item.Van_ID}</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    {/* <Row>
                    <Col xs={8}>
                            <FormItem label="DGID" >
                                <Input
                                    type="text"
                                    name="DGID"
                                    disabled={true}
                                    value={StringChecker(partnerDocGroup.DGID)}
                                    
                                />
                            </FormItem>
                        </Col>
                    </Row> */}
                </Form>
            </div>
        )
    };

    private isValid() {
        return true;
    }

    private initState() {
        // need the original record if editing becuase on saving we need to delete original and add new record
        this.setState({
            PartnerDocGroup: this.props.item,
            PartnerDocGroupOriginal: this.props.item
        });
    }

    private handleDropDownChange(field: string, value: any) {
        this.setState(prevState => ({
            PartnerDocGroup: {
                ...prevState.PartnerDocGroup,
                [field]: value
            }
        }))
    }

    private handleNetworkChange(value: string) {
        this.handleDropDownChange("Van_ID", value)
    }

    private handleStatusChange(value: string) {
        this.handleDropDownChange("TestProdInd", value)
    }

    private handleDocGroupChange(value: string, option: any) {

        // need to set both Doc_Group and DGID fields
        this.handleDropDownChange("Doc_Group", value)
        this.handleDropDownChange("DGID", option.key)
    }

    private handleUpdate() {

        if (!this.props.isNew) {
            // due to primary key, need to delete/add to perform update
            this.props.partnerDocGroupDelete(this.state.PartnerDocGroupOriginal)
        }

        this.props.partnerDocGroupAdd(this.state.PartnerDocGroup)

        this.props.toggleModal(true);
    }

    private handleDelete() {

        this.props.partnerDocGroupDelete(this.state.PartnerDocGroupOriginal)
        this.props.toggleModal(true);
    }

    private handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(prevState => ({
            PartnerDocGroup: {
                ...prevState.PartnerDocGroup,
                [name]: value
            }
        }))
        // Field Validation
        // if (name === 'Field_Frt_Code') {
        //     if (value.length < 1) {
        //         this.setState({
        //             Field_Frt_Code_Error: true,
        //             Field_Frt_Code_Help: 'Freight Code - cannot be blank.'
        //         });
        //     }
        //     else {
        //         this.setState({
        //             Field_Frt_Code_Error: false,
        //             Field_Frt_Code_Help: 'Freight Code'
        //         });
        //     }
        // }
        // else if (name === 'Field_NMFC') {
        //     if (value.length < 1) {
        //         this.setState({
        //             Field_NMFC_Error: true,
        //             Field_NMFC_Help: 'Freight Code NMFC - cannot be blank.'
        //         });
        //     }
        //     else {
        //         this.setState({
        //             Field_NMFC_Error: false,
        //             Field_NMFC_Help: 'Freight Code NMFC'
        //         });
        //     }
        // }
    }
}

const mapStateToProps = ({ trade }) => {
    return { trade }
};

const mapActionsToProps = {
    partnerDocGroupAdd,
    partnerDocGroupDelete
};

export default connect(mapStateToProps, mapActionsToProps)(TradeDetailDocumentsUsedView);
