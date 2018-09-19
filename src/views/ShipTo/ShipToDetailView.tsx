import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import { Card } from 'reactstrap'
import { Collapse, Form, Input, Modal, InputNumber, Button, Checkbox, Row, Col } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import { shipToAdd, shipToUpdate, shipToDelete } from '../../actions/ShipTo';
import { IShipTo } from "../../constants/edidb";
import { CShipTo } from "../../constants/edidb/CShipTo";
import ShipTo from "../../constants/implementations/ShipTo"

const FormItem = Form.Item
const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

export interface IShipToDetailViewProps {
    // Local
    TP_PartID: string,
    TP_Name: string,
    itemId: string,
    item: ShipTo,
    isNew: boolean,
    toggleModal: any,
    // Redux
    shipTo: any,
    shipToAdd: any,
    shipToUpdate: any,
    shipToDelete: any
}

export interface IShipToDetailViewState {
    item: ShipTo
    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class ShipToDetailView extends React.Component<IShipToDetailViewProps, IShipToDetailViewState>  {

    constructor(props: any) {
        super(props);
        this.initState = this.initState.bind(this);
        this.isValid = this.isValid.bind(this);
        this.packShipTo = this.packShipTo.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onOkDelete = this.onOkDelete.bind(this);

    }

    public componentWillMount() {
        this.initState();
    };

    public render() {

        const Panel = Collapse.Panel;

        let actionButtons =
            <div>
                <Button icon='arrow-left' shape="circle" style={{marginLeft:8}} onClick={() =>
                    {
                        this.initState();
                        this.props.toggleModal(); // return from this screen
                    }} />
                <Button style={{ marginLeft: 8 }}
                    onClick={() => {
                        this.handleDelete();
                    }}>
                    Delete
                </Button>
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
                <Button icon='arrow-left' shape="circle" style={{marginLeft:8}} onClick={() =>
                    {
                        this.props.toggleModal();
                    }} />
                    <Button style={{ marginLeft: 8 }}
                        type="primary"
                        onClick={() => {
                            if (this.isValid()) {
                                this.handleAdd();
                                this.props.toggleModal();
                            }
                        }}>
                        Add
                    </Button>
                </div>
        }

        return (
            <div style={{ width: '100%', marginBottom: 20 }}>
                {actionButtons}
                <Card>&nbsp;&nbsp;{this.props.TP_Name}</Card>
                <Form name="DetailForm" id="DetailForm" style={{ width: '100%' }}>
                    <Collapse accordion={true} defaultActiveKey={['1']}>
                        <Panel header="General" key="1">
                            <FormItem label="Ship To ID"
                                required={true}
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_ID"
                                    value={StringChecker(this.state.item.ShipTo_ID)}
                                    onChange={this.handleInputChange}
                                    readOnly={this.props.isNew ? false : true}
                                />
                            </FormItem>
                            <FormItem label="ERP Cust ID"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_CustID"
                                    value={StringChecker(this.state.item.ShipTo_CustID)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="ERP Xref"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_Xref"
                                    value={StringChecker(this.state.item.ShipTo_Xref)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="Ship To DC"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_DC"
                                    value={StringChecker(this.state.item.ShipTo_DC)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="Store Name"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_StoreName"
                                    value={StringChecker(this.state.item.ShipTo_StoreName)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="Ship Date Qual"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_ShipDateQual"
                                    value={StringChecker(this.state.item.ShipTo_ShipDateQual)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="RFID"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Checkbox
                                    name="ShipTo_rfid"
                                    checked={this.state.item.ShipTo_rfid}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="Group ID"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_GroupID"
                                    value={StringChecker(this.state.item.ShipTo_GroupID)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="Location"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="Loc_Override"
                                    value={StringChecker(this.state.item.Loc_Override)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="Ship Via ID"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_Carrier"
                                    value={StringChecker(this.state.item.ShipTo_Carrier)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                        </Panel>
                        <Panel header="Address" key="2">
                            <FormItem label="Name"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_Name"
                                    value={StringChecker(this.state.item.ShipTo_Name)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="Address"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_Address"
                                    value={StringChecker(this.state.item.ShipTo_Address)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label=" "
                                colon={false}
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_Address2"
                                    value={StringChecker(this.state.item.ShipTo_Address2)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="City"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_City"
                                    value={StringChecker(this.state.item.ShipTo_City)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="State"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_State"
                                    value={StringChecker(this.state.item.ShipTo_State)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="Postal Code"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_Zip"
                                    value={StringChecker(this.state.item.ShipTo_Zip)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="Country"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipTo_Country"
                                    value={StringChecker(this.state.item.ShipTo_Country)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                        </Panel>
                        <Panel header="Release Configuration" key="3">
                            <FormItem label="Transit Days"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="TransitDays"
                                    value={StringChecker(this.state.item.TransitDays)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="Frozen Days"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="FrozenDays"
                                    value={StringChecker(this.state.item.FrozenDays)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="Delivery Pattern"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="ShipDlvPattern"
                                    value={StringChecker(this.state.item.ShipDlvPattern)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                        </Panel>
                        <Panel header="User Fields" key="4">
                            <FormItem label="User 1"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="User1"
                                    value={StringChecker(this.state.item.User1)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="User 2"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="User2"
                                    value={StringChecker(this.state.item.User2)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="User 3"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="User3"
                                    value={StringChecker(this.state.item.User3)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="User 4"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="User4"
                                    value={StringChecker(this.state.item.User4)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                            <FormItem label="User 5"
                                style={{ height: 24 }}
                                {...formItemLayout}>
                                <Input
                                    name="User5"
                                    value={StringChecker(this.state.item.User5)}
                                    onChange={this.handleInputChange}
                                />
                            </FormItem>
                        </Panel>
                    </Collapse>
                </Form>
            </div>
        )
    };

    private initState() {
        this.setState({
            item: this.props.item,
            // TODO: add more fields here
        });
    }

    private isValid() {
        if (this.state.item.ShipTo_ID.length < 1) {
            // alert('Ship To ID - cannot be blank.')
            return false;
        }

        return true;
    }

    private handleAdd() {
        const shipTo = this.packShipTo();
        this.props.shipToAdd(shipTo);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const shipTo = this.packShipTo();
        this.props.shipToUpdate(shipTo);
        this.props.toggleModal();
    }

    private onOkDelete() {
        const shipTo = this.packShipTo();
        this.props.shipToDelete(shipTo);
        this.props.toggleModal();
    }

    private handleDelete() {

        const loc: string = 'Ship to location ' + this.state.item.ShipTo_ID;

        Modal.confirm({
            title: 'Confirm Delete for:',
            content: [loc],
            onOk: this.onOkDelete,
            onCancel() {
                console.log('Cancel');
            },
          });
    }

    private packShipTo() {
        // const { itemId } = this.props;

        const item = new CShipTo();

        if (!this.props.isNew) {
            // item = this.props.shipTo.shipToList.filter((selected) => selected.Id === itemId)[0];
        }
        
        item.TP_PartID = this.props.TP_PartID;

        item.ShipTo_ID = StringChecker(this.state.item.ShipTo_ID);
        item.ShipTo_Name = StringChecker(this.state.item.ShipTo_Name);                    
        item.ShipTo_Xref = StringChecker(this.state.item.ShipTo_Xref);                    
        item.ShipTo_Address = StringChecker(this.state.item.ShipTo_Address);                 
        item.ShipTo_Address2 = StringChecker(this.state.item.ShipTo_Address2);                
        item.ShipTo_City = StringChecker(this.state.item.ShipTo_City);                    
        item.ShipTo_State = StringChecker(this.state.item.ShipTo_State);                   
        item.ShipTo_Zip = StringChecker(this.state.item.ShipTo_Zip);                     
        item.ShipTo_Country = StringChecker(this.state.item.ShipTo_Country);                 
        item.ShipTo_CustID = StringChecker(this.state.item.ShipTo_CustID);                  
        item.ShipTo_DC = StringChecker(this.state.item.ShipTo_DC);                      
        item.ShipTo_ShipDateQual = StringChecker(this.state.item.ShipTo_ShipDateQual);            
        item.ShipTo_StoreName = StringChecker(this.state.item.ShipTo_StoreName);               
        item.ShipTo_Carrier = StringChecker(this.state.item.ShipTo_Carrier);                 
        item.User1 = StringChecker(this.state.item.User1);                          
        item.User2 = StringChecker(this.state.item.User2);                          
        item.User3 = StringChecker(this.state.item.User3);                          
        item.User4 = StringChecker(this.state.item.User4);                          
        item.User5 = StringChecker(this.state.item.User5);                          
        item.ShipTo_rfid = this.state.item.ShipTo_rfid;                    
        item.ShipTo_GroupID = StringChecker(this.state.item.ShipTo_GroupID);                 
        item.TransitDays = this.state.item.TransitDays;                    
        item.FrozenDays = this.state.item.FrozenDays;                     
        item.ShipDlvPattern = StringChecker(this.state.item.ShipDlvPattern);                 
        item.Loc_Override = StringChecker(this.state.item.Loc_Override);                   

        // TODO: add more fields ...

        return JSON.parse(JSON.stringify(item));
    }

    private handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (this !== undefined) {
            this.setState(prevState => ({
                item: {
                    ...prevState.item,
                    [name]: value
                }
            }))
        }
    }
}

const mapStateToProps = ({ shipTo }) => {
    return { shipTo }
};

const mapActionsToProps = {
    shipToAdd,
    shipToUpdate,
    shipToDelete
};

export default connect(mapStateToProps, mapActionsToProps)(ShipToDetailView);
