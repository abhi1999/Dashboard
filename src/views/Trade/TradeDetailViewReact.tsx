import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Form, FormGroup, Label, Input, Container, Row, Col, Button} from 'reactstrap'
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Collapse } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { tradeUpdate, tradeDelete } from '../../actions/Trade';
import Trade from "../../constants/implementations/Trade";
// import { Dropdown } from "antd";

const Panel = Collapse.Panel;

export interface ITradeDetailViewProps {
    // Local
    itemId: string,
    item: Trade,
    isNew: boolean,
    toggleViewMode: any,

    // Redux
    trade: any,
    tradeUpdate: any,
    tradeDelete: any
}

export interface ITradeDetailViewState {
    Field_TP_PartID: string,
    Field_TP_PartQ: string,
    Field_TP_ID: string,
    Field_TP_Name: string,
    Field_TP_GroupID: string,
    Field_KitTypeID: number,
    Field_TP_Status: string,
    viewMode: string
    isPartnerDropdownOpen:boolean

    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class TradeDetailViewReact extends React.Component<ITradeDetailViewProps, ITradeDetailViewState>  {

    constructor(props: any) {
        super(props);

        this.initState = this.initState.bind(this);
        this.isValid = this.isValid.bind(this);
        this.packTrade = this.packTrade.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.togglePartner = this.togglePartner.bind(this);

    }

    public componentWillMount() {
        this.initState();
    };

    public render() {

        const actionButtons =
            <div>
                <Button size="medium" color="secondary"
                    onClick={() => {
                        this.initState();
                        this.props.toggleViewMode();
                    }}>
                    Cancel
            </Button>
                <Button size="medium" color="secondary"
                    onClick={() => {
                        this.handleDelete();
                    }}>
                    Delete
            </Button>
                <Button size="medium" color="primary"
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
                    <Button onClick={() => this.setViewMode('General')} block={true}>General / Maps </Button>
                    <Collapse isOpen={this.state.viewMode === 'General' ? true : false} >
                        <Row>
                            <Col xs="4">
                                <FormGroup>
                                    <Label for="company">Company Name</Label>
                                    <Input type="text" placeholder={this.state.Field_TP_Name} />
                                </FormGroup>
                            </Col>
                            <Col xs="4">
                                <FormGroup>
                                    <Label for="erpID">ERP ID</Label>
                                    <Input type="text" placeholder={this.state.Field_TP_ID} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2">
                                <FormGroup>
                                    <Label for="qualifier">Qualifier</Label>
                                    <Input type="text" placeholder={this.state.Field_TP_PartQ} />
                                </FormGroup>
                            </Col>
                            <Col xs="2">
                                <FormGroup>
                                    <Label for="partID">ID</Label>
                                    <Input type="text" placeholder={this.state.Field_TP_PartID} />
                                </FormGroup>
                            </Col>
                            <Col xs="4">
                                <FormGroup>
                                    <Label for="partnerType">Partner Type</Label>
                                    <Dropdown isOpen={this.state.isPartnerDropdownOpen} toggle={this.togglePartner}>
                                        <DropdownToggle caret={true}>
                                            Customer
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Customer</DropdownItem>
                                            <DropdownItem>Vendor</DropdownItem>
                                            <DropdownItem>Warehouse</DropdownItem>
                                            <DropdownItem>Carrier</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    {/* <Label for="partnerType">Partner Type</Label>
                                    <Input type="text" placeholder={this.state.Field_KitTypeID} /> */}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <FormGroup>
                                    <Label for="group">Group ID</Label>
                                    <Input type="text" placeholder={this.state.Field_TP_GroupID} />
                                </FormGroup>
                            </Col>
                            <Col xs="4">
                                <FormGroup>
                                    <Label for="Status">Status</Label>
                                    <Input type="text" placeholder={this.state.Field_TP_Status} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Collapse>
                    <Divider />
                    <Button onClick={() => this.setViewMode('Settings')} block={true}>Settings </Button>
                    <Collapse isOpen={this.state.viewMode === 'Settings' ? true : false}>
                        <Col xs="4">
                            <TextField
                                margin="normal"
                                fullWidth={true}
                                name="Field_TP_GroupID"
                                value={StringChecker(this.state.Field_TP_GroupID)}
                                onChange={this.handleInputChange}
                                helperText="TP Group ID"
                            />
                        </Col>
                    </Collapse>
                    <Divider />
                    <Button onClick={() => this.setViewMode('Configuration')} block={true}>Configuration </Button>
                    <Collapse isOpen={this.state.viewMode === 'Configuration' ? true : false}>
                        <Col xs="4">
                            <TextField
                                margin="normal"
                                fullWidth={true}
                                name="Field_TP_GroupID"
                                value={StringChecker(this.state.Field_TP_GroupID)}
                                onChange={this.handleInputChange}
                                helperText="TP Group ID"
                            />
                        </Col>
                        <Col xs="4">
                            <TextField
                                margin="normal"
                                fullWidth={true}
                                name="Field_KitTypeID"
                                value={StringChecker(this.state.Field_KitTypeID)}
                                onChange={this.handleInputChange}
                                helperText="Kit Type ID"
                            />
                        </Col>
                        <Col xs="4">
                            <TextField
                                margin="normal"
                                fullWidth={true}
                                name="Field_TP_Status"
                                value={StringChecker(this.state.Field_TP_Status)}
                                onChange={this.handleInputChange}
                                helperText="Status"
                            />
                        </Col>
                    </Collapse>
                </Form>
            </div>
        )
    };

    private isValid() {
        return true;
    }

    private setViewMode(mode: string) {
        if (this.state.viewMode === mode) {
            this.setState({ viewMode: "None" })
        }
        else {
            this.setState({ viewMode: mode })
        }
    }

    private togglePartner() {
        this.setState({isPartnerDropdownOpen: !this.state.isPartnerDropdownOpen})

    }
    private initState() {
        this.setState({
            Field_TP_PartID: StringChecker(this.props.item.TP_PartID),
            Field_TP_PartQ: StringChecker(this.props.item.TP_PartQ),
            Field_TP_ID: StringChecker(this.props.item.TP_ID),
            Field_TP_Name: StringChecker(this.props.item.TP_Name),
            Field_TP_GroupID: StringChecker(this.props.item.TP_GroupID),
            Field_KitTypeID: this.props.item.KitTypeID,
            Field_TP_Status: this.props.item.TP_Status,
            viewMode: "General",
            isPartnerDropdownOpen:false
        });
    }

    private handleUpdate() {
        const trade = this.packTrade();
        this.props.tradeUpdate(trade);
        this.props.toggleViewMode();
    }

    private handleDelete() {
        const trade = this.packTrade();
        this.props.tradeDelete(trade);
        this.props.toggleViewMode();
    }

    private packTrade() {
        const { itemId } = this.props;

        let item: Trade = new Trade();

        if (!this.props.isNew) {
            item = this.props.trade.tradeList.filter((selected) => selected.TP_PartID === itemId)[0];
        }

        item.TP_PartID = StringChecker(this.state.Field_TP_PartID);
        item.TP_PartQ = StringChecker(this.state.Field_TP_PartQ);
        item.TP_ID = StringChecker(this.state.Field_TP_ID);
        item.TP_Name = StringChecker(this.state.Field_TP_Name);
        item.TP_GroupID = StringChecker(this.state.Field_TP_GroupID);
        item.KitTypeID = this.state.Field_KitTypeID;
        item.TP_Status = this.state.Field_TP_Status;

        return JSON.parse(JSON.stringify(item));
    }

    private handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (this !== undefined) {
            this.setState({
                [name]: value
            });
        }
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
    tradeUpdate,
    tradeDelete
};

export default connect(mapStateToProps, mapActionsToProps)(TradeDetailViewReact);
