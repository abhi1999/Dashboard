import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Form, Input, Select, InputNumber, Divider, Button, Row, Col } from 'antd'
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { partnerDocGroupAdd, partnerDocGroupDelete } from '../../actions/PartnerDocGroupAction';
// import { IPartnerDocGroup } from '../../constants/edidb'
// import PartnerDocGroupModel from '../../constants/implementations/PartnerDocGroupModel'
import { CTrade } from "../../constants/edidb/CTrade";

const FormItem = Form.Item;
const Option = Select.Option;
const statusList = [{ id: "P", status: "Production" }, { id: "T", status: "Test" }]

export interface ITradeCloneViewProps {
    // Local
    itemId: string,
    // item: IPartnerDocGroup,
    item: CTrade,
    isNew: boolean,
    toggleClone: any,
    networkList: any,
    ediDocGroupList: any,

    // Redux
    trade: any,
   
}

export interface ITradeCloneViewState {
    TradeClone: CTrade,
    TradeCloneOriginal: CTrade,
    ValidISAID:any,
    ValidISAHelp:any,

    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class TradeCloneView extends React.Component<ITradeCloneViewProps, ITradeCloneViewState>  {

    constructor(props: any) {
        super(props);

        this.initState = this.initState.bind(this);
        this.isValid = this.isValid.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
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

        const tradeClone = this.state.TradeClone
        const tradeCloneOriginal = this.state.TradeCloneOriginal

        const actionButtons =
            <div>
                <Button
                    onClick={() => {
                        this.props.toggleClone();
                    }}>
                    Cancel
                </Button>
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
                <Divider orientation="left">Partner to Copy</Divider>
                <Form>
                    <Row >
                        <Col xs={16}>
                            <FormItem>
                                <Input
                                    disabled={true}
                                    addonBefore="Partner Name"
                                    value={StringChecker(tradeCloneOriginal.TP_Name)}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={16}>
                            <FormItem >
                                <Input
                                    disabled={true}
                                    addonBefore="ISA ID"
                                    value={StringChecker(tradeCloneOriginal.TP_PartID)}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={16}>
                            <FormItem >
                                <Input
                                    disabled={true}
                                    addonBefore="Accounting ID"
                                    value={StringChecker(tradeCloneOriginal.TP_ID)}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={16}>
                            <FormItem  >
                                <Input
                                    disabled={true}
                                    addonBefore="Qualifier"
                                    value={StringChecker(tradeCloneOriginal.TP_PartQ)}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={16}>
                            <FormItem  >
                                <Input
                                    disabled={true}
                                    addonBefore="GS ID"
                                    value={StringChecker(tradeCloneOriginal.TP_GroupID)}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Divider orientation="left">New Partner</Divider>
                    <Row >
                        <Col xs={16}>
                            <FormItem>
                                <Input
                                    addonBefore="Partner Name"
                                    type="text"
                                    name="TP_Name"
                                    value={StringChecker(tradeClone.TP_Name)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={16}>
                            <FormItem 
                                validateStatus={this.state.ValidISAID}
                                help={this.state.ValidISAHelp}>
                                <Input
                                    addonBefore="ISA ID"
                                    type="text"
                                    name="TP_PartID"
                                    value={StringChecker(tradeClone.TP_PartID)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={16}>
                            <FormItem >
                                <Input
                                    addonBefore="Accounting ID"
                                    type="text"
                                    name="TP_ID"
                                    value={StringChecker(tradeClone.TP_ID)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={16}>
                            <FormItem  >
                                <Input
                                    addonBefore="Qualifier"
                                    type="text"
                                    name="TP_PartQ"
                                    value={StringChecker(tradeClone.TP_PartQ)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={16}>
                            <FormItem  >
                                <Input
                                    addonBefore="GS ID"
                                    type="text"
                                    name="TP_GroupID"
                                    value={StringChecker(tradeClone.TP_GroupID)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    };

    private isValid() {
        return true;
    }

    private initState() {
        this.setState({
            TradeCloneOriginal: this.props.item,
            TradeClone: this.props.item,
            ValidISAID:"error",
            ValidISAHelp:"ISA ID Must Be Unique"
        });

        // append (Copy) to TradeClone name for uniqueness
        this.setState(prevState => ({
            TradeClone: {
                ...prevState.TradeClone,
                "TP_Name": prevState.TradeClone.TP_Name + " (Copy)"
            }
        }))
    }

    private handleDropDownChange(field: string, value: any) {
        this.setState(prevState => ({
            TradeClone: {
                ...prevState.TradeClone,
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
        // verify ISA ID was changed
        if (this.state.TradeClone.TP_PartID === this.state.TradeCloneOriginal.TP_PartID){
            this.setState({
                ValidISAID:"error",
                ValidISAHelp:"ISA ID Must Be Unique"
            })
        }
    }

    private handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(prevState => ({
            TradeClone: {
                ...prevState.TradeClone,
                [name]: value
            }
        }))

        if (this.state.TradeClone.TP_PartID === this.state.TradeCloneOriginal.TP_PartID){
            this.setState({
                ValidISAID:"error",
                ValidISAHelp:"ISA ID Must Be Unique"
            })
        }
        else {
            this.setState({
                ValidISAID:"success",
                ValidISAHelp:""
            })
        }
    }
}

const mapStateToProps = ({ trade }) => {
    return { trade }
};

const mapActionsToProps = {
    partnerDocGroupAdd,
    partnerDocGroupDelete
};

export default connect(mapStateToProps, mapActionsToProps)(TradeCloneView);
