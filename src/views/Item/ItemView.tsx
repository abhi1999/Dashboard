import * as  React from 'react';
import _ from 'lodash';
import { StringChecker } from '../../utils/Conversion';
import { connect } from "react-redux";
import { Form, Input, Select, Button, Checkbox, Divider, Collapse, Tooltip } from 'antd';
import { itemAdd, itemUpdate, itemGetXrefAll, itemGetSacAll, itemAIU01Get, itemFrtGetAll } from '../../actions/ItemAction';
import { IItem, IAPIsacXRef, IAPIitemXRef, IFreightCode } from '../../constants/edidb';
import * as XItem from "../../constants/edidb/CItem";
import * as XItemCust from "../../constants/edidb/CAPIitemXRef"
import * as XItemSac from "../../constants/edidb/CAPIsacXRef"
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { LimitLength, IsRequired, GetUserLabelCaptions, NumericOnly } from '../../utils/UIValidation';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import SortDescriptor from '../../constants/params/sortDescriptor';
import ODataParams from '../../constants/params/oDataParams';
import { FaSyncAlt, FaPlusCircle, FaTimesCircle, FaEdit, FaClone, FaSort, FaSortUp, FaSortDown, FaTable, FaList, FaLessThanEqual } from 'react-icons/fa';
import { ICON_SIZE, ICON_SMALL, ICON_COLOR } from '../../constants/Attributes';
import Media from "react-media";
import ReactTable from "react-table";
import { IItemReducer } from '../../reducers/ItemSetReducer';
import { IUserLabel } from '../../constants/IUserLabel';
import LoadingComponent from "../../components/widgets/LoadingComponent";

const Label_Int_Item_No= 'Item ID';
const Label_Item_Desc= 'Description';
const Label_UPC= 'UPC';
const Label_Def_Pack_Qty = 'Default Pack Quantity';
const Label_Item_Wt = 'Item Weight';
const Label_Item_Um = 'Weight UOM';
const Label_Item_UOM = 'ERP Item UOM';
const Label_EDI_UOM= 'EDI Item UOM';
const Label_RetailPrice= 'Retail Price';
const Label_SellingPrice= '--notused--';
const Label_SAC_Flag = 'SAC Item';
const Label_SAC_Qual= 'SAC Qualifier';
const Label_Cube_Length= 'Length';
const Label_Cube_Width= 'Width';
const Label_Cube_Height= 'Height';
const Label_Cube_Qty= 'Quantity';
const Label_Cube_UOM= '--notused--';
const Label_User1= 'User1';
const Label_User2= 'User2';
const Label_User3= 'User3';
const Label_User4= 'User4';
const Label_User5= 'User5';
const Label_Item_rfid = 'RFID';
const Label_locid= 'Location';
const Label_PackingClass= 'Packing Class';
const Label_Item_Alt_No= 'Alternate Item ID';
const Label_Item_Config= 'Config';
const Label_Item_Size= 'Size';
const Label_Item_Color= 'Color';
const Label_Frt_Code= 'Freight Code';
const Label_GTIN= 'GTIN';
const Label_EAN= 'EAN';

const Label_Xref_TP_Name = 'TRADING PARTNER';
const Label_Xref_Int_Item_No = 'not used';
const Label_Xref_TP_PartID = 'not used';
const Label_Xref_Cust_Item_Qual = 'QUAL';
const Label_Xref_Cust_Item_ID = 'PARTNER ITEM NUMBER';
const Label_Xref_Cust_Item_UM = 'EDI UOM';
const Label_Xref_Cust_Item_SizeWidth = '';
const Label_Xref_Cust_Item_Pack_Qty = '';
const Label_Xref_Cust_Item_UMout = 'ERP UOM';
const Label_Xref_Cust_Item_UMfactor = 'FACTOR';
const Label_Xref_Cust_Item_UMoperin = '';
const Label_Xref_Cust_Item_UMoperout = '';
const Label_Xref_pricecode = '';
const Label_Xref_price = '';
const Label_Xref_locid = '';
const Label_Xref_ICID = '';
const Label_Xref_GenericRef = '';
const Label_Xref_User1 = '';
const Label_Xref_User2 = '';
const Label_Xref_User3 = '';
const Label_Xref_User4 = '';
const Label_Xref_User5 = '';
const Label_Xref_Loc_Override = 'LOCATION';

const Label_Sac_TP_Name = 'Trading Partner';
const Label_Sac_Sac_Qual = 'SAC Qualifier';

const Label_Panel_Details = 'Details';
const Label_Panel_XRef = 'Cross References';
const Label_Panel_Sac = 'SAC References';

const Label_Section_General = 'General';
const Label_Section_SAC = 'SAC';
const Label_Section_UOM = 'Unit of Measure';
const Label_Section_Weight = 'Weight';
const Label_Section_Configuration = 'Configuration';
const Label_Section_CubeDim = 'Cube Dimensions';
const Label_Section_Packing = 'Packing';
const Label_Section_User = 'User Fields';

const preferredLocale : string  = 'en-us';

export interface IItemViewProps
{
    // Local
    itemId:string,
    item:IItem,
    isNew:boolean,
    toggleModal:any,
    // Redux
    itemAdd:any,
    itemUpdate:any,
    itemGetSacAll : any,
    itemGetXrefAll : any,
    itemAIU01Get : any,
    itemFrtGetAll : any,
    itemsetReducer:any
}

export interface IItemViewState
{
    isExpanded:boolean,
    isNew:boolean,
    itemEdit : IItem,
    loading : number,
    Original_Int_Item_No : string,
    Field_Int_Item_No: string;
    Field_Int_Item_No_ErrorText : string,
    Field_Item_Desc: string;
    Field_UPC: string;
    Field_Def_Pack_Qty: number;
    Field_Item_Wt: number;
    Field_Item_Um: string;
    Field_Item_UOM: string;
    Field_EDI_UOM: string;
    Field_RetailPrice: number;
    Field_SellingPrice: number;
    Field_SAC_Flag: boolean;
    Field_SAC_Qual: string;
    Field_Cube_Length: number;
    Field_Cube_Width: number;
    Field_Cube_Height: number;
    Field_Cube_Qty: number;
    Field_Cube_UOM: string;
    Field_User1: string;
    Field_User2: string;
    Field_User3: string;
    Field_User4: string;
    Field_User5: string;
    Field_Item_rfid: boolean;
    Field_locid: string;
    Field_PackingClass: string;
    Field_Item_Alt_No: string;
    Field_Item_Config: string;
    Field_Item_Size: string;
    Field_Item_Color: string;
    Field_Frt_Code: string;
    Field_GTIN: string;
    Field_EAN: string;

    XrefEdit :IAPIitemXRef;
    Field_Xref_TP_Name: string;
    Field_Xref_Int_Item_No: string;
    Field_Xref_TP_PartID: string;
    Field_Xref_Cust_Item_Qual: string;
    Field_Xref_Cust_Item_ID: string;
    Field_Xref_Cust_Item_UM: string;
    Field_Xref_Cust_Item_SizeWidth: string;
    Field_Xref_Cust_Item_Pack_Qty: number;
    Field_Xref_Cust_Item_UMout: string;
    Field_Xref_Cust_Item_UMfactor: number;
    Field_Xref_Cust_Item_UMoperin: string;
    Field_Xref_Cust_Item_UMoperout: string;
    Field_Xref_pricecode: string;
    Field_Xref_price: number;
    Field_Xref_locid: string;
    Field_Xref_ICID: string;
    Field_Xref_GenericRef: boolean;
    Field_Xref_User1: string;
    Field_Xref_User2: string;
    Field_Xref_User3: string;
    Field_Xref_User4: string;
    Field_Xref_User5: string;
    Field_Xref_Loc_Override: string;

    SacEdit : IAPIsacXRef;
    Field_Sac_TP_Name: string;
    Field_Sac_SAC_Qual: string;
    Field_Sac_Int_Item_No: string;
    Field_Sac_TP_PartID: string;

    freightCodeList : IFreightCode[],
    userLabelsList : IUserLabel[],
    xrefList: IAPIitemXRef[],
    sacList : IAPIsacXRef[],
    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class ItemView extends React.Component<IItemViewProps, IItemViewState> {

    constructor(props:any) {
      super(props);

      this.initState = this.initState.bind(this);
      this.isValid = this.isValid.bind(this);
      this.packItem = this.packItem.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFrtCodeChange = this.handleFrtCodeChange.bind(this);
      this.handleNumericChange = this.handleNumericChange.bind(this);
    }

    public componentWillMount() {
        this.initState();
    }

    public componentWillReceiveProps(newProps) {
        const us : IItemReducer = newProps.itemsetReducer;
        const itm : IItem = newProps.item;
        console.log('WillRecv  ' + us.loading.toString());
        this.setState({
            xrefList : us.xrefList,
            sacList : us.sacList,
            freightCodeList : us.freightCodeList,
            userLabelsList : us.userLabelsList,
            loading : us.loading,
            itemEdit : itm,

            Field_Int_Item_No: itm.Int_Item_No,
            Field_Int_Item_No_ErrorText : '',
            Field_Item_Desc: itm.Item_Desc,
            Field_UPC: itm.UPC,
            Field_Def_Pack_Qty: itm.Def_Pack_Qty,
            
            Field_Item_Wt: itm.Item_Wt,
            Field_Item_Um: itm.Item_Um,
            Field_Item_UOM: itm.Item_UOM,
            Field_EDI_UOM: itm.EDI_UOM ,
            Field_RetailPrice: itm.RetailPrice,
            Field_SellingPrice: itm.SellingPrice,
            Field_SAC_Flag: itm.SAC_Flag,
            Field_SAC_Qual: itm.SAC_Qual,
            Field_Cube_Length: itm.Cube_Length,
            Field_Cube_Width: itm.Cube_Width,
            Field_Cube_Height: itm.Cube_Height,
            Field_Cube_Qty: itm.Cube_Qty,
            Field_Cube_UOM: itm.Cube_UOM,
            Field_User1: itm.User1,
            Field_User2: itm.User2,
            Field_User3: itm.User3,
            Field_User4: itm.User4,
            Field_User5: itm.User5,
            Field_Item_rfid: itm.Item_rfid,
            Field_locid: itm.locid,
            Field_PackingClass: itm.PackingClass,
            Field_Item_Alt_No: itm.Item_Alt_No,
            Field_Item_Config: itm.Item_Config,
            Field_Item_Size: itm.Item_Size,
            Field_Item_Color: itm.Item_Color,
            Field_Frt_Code: itm.Frt_Code,
            Field_GTIN: itm.GTIN,
            Field_EAN: itm.EAN
          });
    }

    public render() {  

        if (this.state.loading > 0) {
            return <LoadingComponent />
        }

        let actionButtons =
        <div>
            <Button icon='arrow-left' shape="circle" style={{marginLeft:8}} onClick={() =>
                    {
                        this.initState();
                        this.props.toggleModal();
                    }} />

            <Button style={{marginLeft:8}} type="primary" onClick={() =>
                    {
                        if(this.isValid())
                        {
                            this.handleUpdate();
                        }
                    }}>
                Update
            </Button>
        </div>;

    if(this.props.isNew)
    {
        actionButtons =
        <div>
            <Button icon='arrow-left' shape="circle" style={{ marginLeft:8}} onClick={() =>
                    {
                        this.initState();
                        this.props.toggleModal();
                    }} />
            <Button style={{marginLeft:8}} type="primary" onClick={() =>
                    {
                        if(this.isValid())
                        {
                            this.handleAdd();
                            this.props.toggleModal();
                        }
                    }}>
                Add
            </Button>
        </div>
    }

    let xlist : any;
    if (this.state.xrefList !== undefined) {
        xlist = this.state.xrefList.map((xref) =>
                <Card outline={false} key={xref.Int_Item_No + xref.TP_PartID + xref.Cust_Item_Qual + xref.Cust_Item_ID + xref.Cust_Item_UM}>
                    <CardHeader>
                        {xref.Int_Item_No}
                        <div className="card-header-actions">
                            <Tooltip title='Edit'>
                                <FaEdit onClick={() => this.xrefEdit(xref)} size={ICON_SMALL} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                            </Tooltip>
                            <Tooltip title='Delete'>
                                <FaTimesCircle onClick={() => this.xrefDelete(xref)} size={ICON_SMALL} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                            </Tooltip>
                        </div> 
                    </CardHeader>
                    <CardBody>
                        <Container>
                            <Form layout="vertical">
                                <Row><Col>
                                    <Form.Item
                                        label={Label_Xref_TP_Name} colon={false}
                                        style={{ width: '100%' }}
                                    >
                                        {xref.TP_Name}
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                <Form.Item
                                            label={Label_Xref_Cust_Item_Qual} colon={false}
                                            style={{ width: '100%' }}
                                        >
                                            {xref.Cust_Item_Qual}
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item
                                            label={Label_Xref_Cust_Item_ID} colon={false}
                                            style={{ width: '100%' }}
                                        >
                                            {xref.Cust_Item_ID}
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item
                                            label={Label_Xref_Cust_Item_UM} colon={false}
                                            style={{ width: '100%' }}
                                        >
                                            {xref.Cust_Item_UM}
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item
                                            label={Label_Xref_Cust_Item_UMout} colon={false}
                                            style={{ width: '100%' }}
                                        >
                                            {xref.Cust_Item_UMout}
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item
                                            label={Label_Xref_Cust_Item_UMfactor} colon={false}
                                            style={{ width: '100%' }}
                                        >
                                            {xref.Cust_Item_UMfactor}
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item
                                            label={Label_Xref_Loc_Override} colon={false}
                                            style={{ width: '100%' }}
                                        >
                                            {xref.Loc_Override}
                                    </Form.Item>
                                </Col></Row>
                            </Form>
                        </Container>
                    </CardBody>
                </Card>)
    }
    else {
        xlist = null;
    }

    
    let sacList : any;
    if (this.state.sacList !== undefined) {
        sacList = this.state.sacList.map((sacRef : IAPIsacXRef) =>
                <Card outline={false} key={sacRef.TP_PartID + sacRef.Int_Item_No + sacRef.SAC_Qual}>
                    <CardHeader>
                        {sacRef.Int_Item_No}
                        <div className="card-header-actions">
                            <Tooltip title='Edit'>
                                <FaEdit onClick={() => this.sacEdit(sacRef)} size={ICON_SMALL} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                            </Tooltip>
                            <Tooltip title='Delete'>
                                <FaTimesCircle onClick={() => this.sacDelete(sacRef)} size={ICON_SMALL} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                            </Tooltip>
                        </div> 
                    </CardHeader>
                    <CardBody>
                        <Container>
                            <Form layout="vertical">
                                <Row><Col>
                                    <Form.Item
                                        label={Label_Sac_TP_Name}
                                        style={{ width: '100%' }}
                                    >
                                        {sacRef.TP_Name}
                                    </Form.Item>
                                </Col></Row>
                            </Form>
                            <Form layout="vertical">
                                <Row><Col>
                                    <Form.Item
                                        label={Label_Sac_Sac_Qual}
                                        style={{ width: '100%' }}
                                    >
                                        {sacRef.SAC_Qual}
                                    </Form.Item>
                                </Col></Row>
                            </Form>
                        </Container>
                    </CardBody>
                </Card>
            )
    }
    else {
        sacList = null;
    }


    let freightcodeDropOptions : any;
    if (this.state.freightCodeList !== undefined) {
            freightcodeDropOptions = this.state.freightCodeList.map((ent: IFreightCode) => {
                return <Select.Option key={ent.Frt_Code}>{ent.Description}</Select.Option>;
            });
    } else {
        freightcodeDropOptions = null;
    }

    const userLabels : string[] = GetUserLabelCaptions(this.state.userLabelsList, 5);

    
    return (
        <div style={{width: '100%', marginBottom: 20,marginLeft:10 }}>
            {actionButtons}
            <Divider/>
            <div style={{width: '100%'}}>
                    <Collapse defaultActiveKey={[Label_Panel_Details]} >
                        <Collapse.Panel header={Label_Panel_Details} key={Label_Panel_Details}>
                            <Collapse defaultActiveKey={[Label_Section_General]}>
                                <Collapse.Panel header={Label_Section_General} key={Label_Section_General}>
                                    <Container>
                                        <Row><Col>
                                            <Form.Item label={Label_Int_Item_No} colon={false}
                                            validateStatus={IsRequired(this.state.Field_Int_Item_No, this.state.Field_Int_Item_No_Error)}
                                                help={this.state.Field_Int_Item_No_ErrorText}
                                                >
                                                <Input
                                                    name="Field_Int_Item_No"
                                                    value={StringChecker(this.state.Field_Int_Item_No)}
                                                    onChange={this.handleInputChange}
                                                />
                                            </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                            <Form.Item validateStatus={IsRequired(this.state.Field_Item_Desc, '')}
                                                label={Label_Item_Desc} colon={false}
                                            >
                                                <Input
                                                    name="Field_Item_Desc"
                                                    value={StringChecker(this.state.Field_Item_Desc)}
                                                    onChange={this.handleInputChange}
                                                />
                                            </Form.Item>
                                        </Col></Row>  
                                        <Row><Col>
                                            <Form.Item 
                                                label={Label_UPC} colon={false}
                                            >
                                                <Input
                                                    name="Field_UPC"
                                                    value={StringChecker(this.state.Field_UPC)}
                                                    onChange={this.handleInputChange}
                                                />
                                            </Form.Item>
                                        </Col></Row>   
                                        <Row><Col>
                                            <Form.Item 
                                                label={Label_GTIN} colon={false}
                                            >
                                                <Input
                                                    name="Field_GTIN"
                                                    value={StringChecker(this.state.Field_GTIN)}
                                                    onChange={this.handleInputChange}
                                                />
                                            </Form.Item>
                                        </Col></Row>   
                                        <Row><Col>
                                            <Form.Item 
                                                label={Label_EAN} colon={false}
                                            >
                                                <Input
                                                    name="Field_EAN"
                                                    value={StringChecker(this.state.Field_EAN)}
                                                    onChange={this.handleInputChange}
                                                />
                                            </Form.Item>
                                        </Col></Row>   
                                        <Row><Col>
                                            <Form.Item validateStatus={IsRequired(this.state.Field_Item_Alt_No, '')}
                                                label={Label_Item_Alt_No} colon={false}
                                            >
                                                <Input
                                                    name="Field_Item_Alt_No"
                                                    value={StringChecker(this.state.Field_Item_Alt_No)}
                                                    onChange={this.handleInputChange}
                                                />
                                            </Form.Item>
                                        </Col></Row>   
                                        <Row><Col>
                                            <Form.Item
                                                label={Label_RetailPrice} colon={false}
                                            >
                                                <Input
                                                    name="Field_RetailPrice"
                                                    value={this.state.Field_RetailPrice.toLocaleString(preferredLocale)}
                                                    onChange={this.handleNumericChange}
                                                />
                                            </Form.Item>
                                        </Col></Row>   
                                        <Row><Col>
                                            <Form.Item validateStatus={IsRequired(this.state.Field_locid, '')}
                                                label={Label_locid} colon={false}
                                            >
                                                <Input
                                                    name="Field_locid"
                                                    value={StringChecker(this.state.Field_locid)}
                                                    onChange={this.handleInputChange}
                                                />
                                            </Form.Item>
                                        </Col></Row>                             
                                    </Container>
                                </Collapse.Panel>
                            </Collapse>

                            <Collapse defaultActiveKey={[Label_Section_SAC]}>
                                <Collapse.Panel header={Label_Section_SAC} key={Label_Section_SAC}>
                                    <Container>
                                    <Row><Col>
                                            <Form.Item label={Label_SAC_Flag}  colon={false}
                                                >
                                                <Checkbox
                                                    name="Field_SAC_Flag"
                                                    checked={this.state.Field_SAC_Flag}
                                                    onChange={this.handleInputChange}
                                                />
                                            </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={Label_SAC_Qual}  colon={false}
                                        >
                                            <Input
                                                name="Field_SAC_Qual"
                                                value={StringChecker(this.state.Field_SAC_Qual)}
                                                onChange={this.handleInputChange}
                                                style={{ maxWidth: 60 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                    </Container>
                                </Collapse.Panel>
                            </Collapse>

                            <Collapse defaultActiveKey={[Label_Section_UOM]}>
                                <Collapse.Panel header={Label_Section_UOM} key={Label_Section_UOM}>
                                    <Container>
                                        <Row><Col>
                                        <Form.Item label={Label_Item_UOM}  colon={false}
                                        >
                                            <Input
                                                name="Field_Item_UOM"
                                                value={StringChecker(this.state.Field_Item_UOM)}
                                                onChange={this.handleInputChange}
                                                style={{ maxWidth: 60 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={Label_EDI_UOM}  colon={false}
                                        >
                                            <Input
                                                name="Field_EDI_UOM"
                                                value={StringChecker(this.state.Field_EDI_UOM)}
                                                onChange={this.handleInputChange}
                                                style={{ maxWidth: 60 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                    </Container>
                                </Collapse.Panel>
                            </Collapse>

                            <Collapse defaultActiveKey={[Label_Section_Weight]}>
                                <Collapse.Panel header={Label_Section_Weight} key={Label_Section_Weight}>
                                    <Container>
                                        <Row><Col>
                                        <Form.Item label={Label_Item_Wt}  colon={false}
                                        >
                                            <Input
                                                name="Field_Item_Wt"
                                                value={this.state.Field_Item_Wt.toLocaleString(preferredLocale)}
                                                onChange={this.handleNumericChange}
                                                style={{ maxWidth: 60 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={Label_Item_Um}  colon={false}
                                        >
                                            <Input
                                                name="Field_Item_Um"
                                                value={StringChecker(this.state.Field_Item_Um)}
                                                onChange={this.handleInputChange}
                                                style={{ maxWidth: 60 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                    </Container>
                                </Collapse.Panel>
                            </Collapse>

                            <Collapse defaultActiveKey={[Label_Section_Configuration]}>
                                <Collapse.Panel header={Label_Section_Configuration} key={Label_Section_Configuration}>
                                    <Container>
                                        <Row><Col>
                                        <Form.Item label={Label_Item_Color}  colon={false}
                                        >
                                            <Input
                                                name="Field_Item_Color"
                                                value={StringChecker(this.state.Field_Item_Color)}
                                                onChange={this.handleInputChange}
                                                style={{ maxWidth: 100 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={Label_Item_Size}  colon={false}
                                        >
                                            <Input
                                                name="Field_Item_Size"
                                                value={this.state.Field_Item_Size}
                                                onChange={this.handleInputChange}
                                                style={{ maxWidth: 100 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={Label_Item_Config}  colon={false}
                                        >
                                            <Input
                                                name="Field_Item_Config"
                                                value={StringChecker(this.state.Field_Item_Config)}
                                                onChange={this.handleInputChange}
                                                style={{ maxWidth: 100 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                    </Container>
                                </Collapse.Panel>
                            </Collapse>

                            <Collapse defaultActiveKey={[Label_Section_CubeDim]}>
                                <Collapse.Panel header={Label_Section_CubeDim} key={Label_Section_CubeDim}>
                                    <Container>
                                        <Row><Col>
                                        <Form.Item label={Label_Cube_Length}  colon={false}
                                        >
                                            <Input
                                                name="Field_Cube_Length"
                                                value={this.state.Field_Cube_Length.toLocaleString(preferredLocale)}
                                                onChange={this.handleNumericChange}
                                                style={{ maxWidth: 60 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={Label_Cube_Width}  colon={false}
                                        >
                                            <Input
                                                name="Field_Cube_Width"
                                                value={this.state.Field_Cube_Width.toLocaleString(preferredLocale)}
                                                onChange={this.handleNumericChange}
                                                style={{ maxWidth: 60 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={Label_Cube_Height}  colon={false}
                                        >
                                            <Input
                                                name="Field_Cube_Height"
                                                value={this.state.Field_Cube_Height.toLocaleString(preferredLocale)}
                                                onChange={this.handleNumericChange}
                                                style={{ maxWidth: 60 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={Label_Cube_Qty}  colon={false}
                                        >
                                            <Input
                                                name="Field_Cube_Qty"
                                                value={this.state.Field_Cube_Qty.toLocaleString(preferredLocale)}
                                                onChange={this.handleNumericChange}
                                                style={{ maxWidth: 60 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                    </Container>
                                </Collapse.Panel>
                            </Collapse>

                            <Collapse defaultActiveKey={[Label_Section_Packing]}>
                                <Collapse.Panel header={Label_Section_Packing} key={Label_Section_Packing}>
                                    <Container>
                                        <Row><Col>
                                        <Form.Item label={Label_PackingClass}  colon={false}
                                        >
                                            <Input
                                                name="Field_PackingClass"
                                                value={StringChecker(this.state.Field_PackingClass)}
                                                onChange={this.handleInputChange}
                                                style={{ maxWidth: 60 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={Label_Def_Pack_Qty}  colon={false}
                                        >
                                            <Input
                                                name="Field_Def_Pack_Qty"
                                                value={this.state.Field_Def_Pack_Qty.toLocaleString(preferredLocale)}
                                                onChange={this.handleNumericChange}
                                                style={{ maxWidth: 60 }}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={Label_Frt_Code}  colon={false}
                                        >
                                            <Select
                                            style={{ maxWidth: 350 }}
                                                onChange={this.handleFrtCodeChange} value={this.state.Field_Frt_Code} >
                                                {freightcodeDropOptions}
                                            </Select>
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                            <Form.Item label={Label_Item_rfid}  colon={false}
                                                >
                                                <Checkbox
                                                    name="Field_Item_rfid"
                                                    checked={this.state.Field_Item_rfid}
                                                    onChange={this.handleInputChange}
                                                />
                                            </Form.Item>
                                        </Col></Row>
                                    </Container>
                                </Collapse.Panel>
                            </Collapse>

                            <Collapse defaultActiveKey={[Label_Section_User]}>
                                <Collapse.Panel header={Label_Section_User} key={Label_Section_User}>
                                    <Container>
                                        <Row><Col>
                                        <Form.Item label={userLabels[0]}  colon={false}
                                        >
                                            <Input
                                                name="Field_User1"
                                                value={StringChecker(this.state.Field_User1)}
                                                onChange={this.handleInputChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={userLabels[1]}  colon={false}
                                        >
                                            <Input
                                                name="Field_User2"
                                                value={StringChecker(this.state.Field_User2)}
                                                onChange={this.handleInputChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={userLabels[2]}  colon={false}
                                        >
                                            <Input
                                                name="Field_User3"
                                                value={StringChecker(this.state.Field_User3)}
                                                onChange={this.handleInputChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={userLabels[3]}  colon={false}
                                        >
                                            <Input
                                                name="Field_User4"
                                                value={StringChecker(this.state.Field_User4)}
                                                onChange={this.handleInputChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item label={userLabels[4]}  colon={false}
                                        >
                                            <Input
                                                name="Field_User5"
                                                value={StringChecker(this.state.Field_User5)}
                                                onChange={this.handleInputChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                    </Container>
                                </Collapse.Panel>
                            </Collapse>

                        </Collapse.Panel>
                        <Collapse.Panel header={Label_Panel_XRef + " {" + this.state.xrefList.length.toString() + "}"} key={Label_Panel_XRef}>
                            <Media query={{maxWidth: 1024}}>
                                {matches => // Mobile version first
                                    matches ? (
                                        <div>
                                        <Row>
                                            <Tooltip title="Add">
                                                <FaPlusCircle onClick={() => this.xRefAdd()} size={ICON_SIZE} color={ICON_COLOR} style={{marginBottom: 12}}/>
                                            </Tooltip>
                                        </Row>
                                        <Row>
                                            {xlist}
                                        </Row>
                                        </div>
                                        ) : ( // Desktop version
                                            <div>
                                                <Row>
                                                    <Tooltip title="Add">
                                                        <FaPlusCircle onClick={() => this.xRefAdd()} size={ICON_SIZE} color={ICON_COLOR} style={{marginBottom: 12}}/>
                                                    </Tooltip>
                                                </Row>
                                                <ReactTable
                                                    columns={[
                                                        {
                                                            sortable: false,
                                                            filterable: false,
                                                            width: 90,
                                                            Cell: row => (
                                                                <div>
                                                                    <Tooltip title='Edit'>
                                                                        <Button type="primary" shape="circle" size="small" style={{marginLeft:2}} icon="edit"  onClick={() => this.xrefEdit(row.original)} />
                                                                    </Tooltip>
                                                                    <Tooltip title='Delete'>
                                                                        <Button type="primary" shape="circle" size="small" style={{marginLeft:2}} icon="delete" onClick={() => this.xrefDelete(row.original)} />
                                                                    </Tooltip>
                                                                </div>
                                                            )
                                                        },
                                                        {
                                                            Header: Label_Xref_TP_Name,
                                                            accessor: XItemCust.kAPIitemXRef_TP_Name,
                                                            minWidth: 20
                                                        },
                                                        {
                                                            Header: Label_Xref_Cust_Item_Qual,
                                                            accessor: XItemCust.kAPIitemXRef_Cust_Item_Qual,
                                                            minWidth: 20
                                                        },
                                                        {
                                                            Header: Label_Xref_Cust_Item_ID,
                                                            accessor: XItemCust.kAPIitemXRef_Cust_Item_ID,
                                                            minWidth: 20
                                                        },
                                                        {
                                                            Header: Label_Xref_Cust_Item_UM,
                                                            accessor: XItemCust.kAPIitemXRef_Cust_Item_UM,
                                                            minWidth: 20
                                                        },
                                                        {
                                                            Header: Label_Xref_Cust_Item_UMout,
                                                            accessor: XItemCust.kAPIitemXRef_Cust_Item_UMout,
                                                            minWidth: 20
                                                        },
                                                        {
                                                            Header: Label_Xref_Cust_Item_UMfactor,
                                                            accessor: XItemCust.kAPIitemXRef_Cust_Item_UMfactor,
                                                            minWidth: 20
                                                        },
                                                        {
                                                            Header: Label_Xref_Loc_Override,
                                                            accessor: XItemCust.kAPIitemXRef_Loc_Override,
                                                            minWidth: 20
                                                        },
                                                    ]}
                                                    manual={false} 
                                                    data={this.state.xrefList}
                                                    showPagination={false}
                                                    minRows={0}
                                                    getNoDataProps={() => {
                                                        return { style: { display: 'none' } };
                                                    }}
                                                    className="-striped -highlight" />
                                            </div>
                                                )}
                            </Media>
                        </Collapse.Panel>

                        <Collapse.Panel header={Label_Panel_Sac + " {" + this.state.sacList.length.toString() + "}"} key={Label_Panel_Sac}>
                        <Media query={{maxWidth: 1024}}>
                                {matches => // Mobile version first
                                    matches ? (
                                        <Row>
                                            {sacList}
                                        </Row>
                                        ) : ( // Desktop version
                                        <ReactTable
                                            columns={[
                                                {
                                                    sortable: false,
                                                    filterable: false,
                                                    width: 90,
                                                    Cell: row => (
                                                        <div>
                                                            <Tooltip title='Edit'>
                                                                <Button type="primary" shape="circle" size="small" style={{marginLeft:2}} icon="edit"  onClick={() => this.xrefEdit(row.original)} />
                                                            </Tooltip>
                                                            <Tooltip title='Delete'>
                                                                <Button type="primary" shape="circle" size="small" style={{marginLeft:2}} icon="delete" onClick={() => this.xrefDelete(row.original)} />
                                                            </Tooltip>
                                                        </div>
                                                    )
                                                },
                                                {
                                                    Header: Label_Sac_TP_Name,
                                                    accessor: XItemSac.kAPIsacXRef_TP_Name,
                                                    minWidth: 20
                                                },
                                                {
                                                    Header: Label_Sac_Sac_Qual,
                                                    accessor: XItemSac.kAPIsacXRef_TP_PartID,
                                                    minWidth: 20
                                                }
                                            ]}
                                            manual={false} 
                                            data={this.state.sacList}
                                            showPagination={false}
                                            minRows={0}
                                            getNoDataProps={() => {
                                                return { style: { display: 'none' } };
                                              }}
                                            className="-striped -highlight" />
                                        )}
                            </Media>
                        </Collapse.Panel>
                    </Collapse>
            </div>
        </div>
    )};


    private initState()
    {
        // Get the User Label Captions
        this.props.itemAIU01Get();

        // Get the Freight Codes
        this.props.itemFrtGetAll();

        // Load any references
        const filtered : FilterDescriptor[] = [];
        filtered.push(new FilterDescriptor({id : XItem.kItem_Int_Item_No, value : this.props.itemId}));

        if (!this.props.isNew) {
            const sortedXref : SortDescriptor[] = [];
            sortedXref.push(new SortDescriptor({ "desc": false, "id": XItemCust.kAPIitemXRef_TP_Name }));
            sortedXref.push(new SortDescriptor({ "desc": false, "id": XItemCust.kAPIitemXRef_Cust_Item_Qual }));
            const paramsXr:ODataParams = {top:99999999, skip:0, sorted : sortedXref, filtered};
            this.props.itemGetXrefAll(paramsXr);
        }

        if (!this.props.isNew) {
            const sortedSac : SortDescriptor[] = [];
            sortedSac.push(new SortDescriptor({ "desc": false, "id": XItemSac.kAPIsacXRef_TP_Name}));
            sortedSac.push(new SortDescriptor({ "desc": false, "id": XItemSac.kAPIsacXRef_SAC_Qual }));
            const paramsSac:ODataParams = {top:99999999, skip:0, sorted : sortedSac, filtered};
            this.props.itemGetSacAll(paramsSac);
        }

        const itm : IItem = this.props.item;
        this.setState({
            form : this,
            loading: 0,
            Field_Int_Item_No_Error : '',
            isNew : this.props.isNew,
            itemEdit : this.props.item,
            userLabelsList : [],
            freightCodeList : [],
            sacList : [],
            xrefList : [],
            Original_Int_Item_No : itm.Int_Item_No,
            Field_Int_Item_No: itm.Int_Item_No,
            Field_Int_Item_No_ErrorText : '',
            Field_Item_Desc: itm.Item_Desc,
            Field_UPC: itm.UPC,
            Field_Def_Pack_Qty: itm.Def_Pack_Qty,
            Field_Item_Wt: itm.Item_Wt,
            Field_Item_Um: itm.Item_Um,
            Field_Item_UOM: itm.Item_UOM,
            Field_EDI_UOM: itm.EDI_UOM ,
            Field_RetailPrice: itm.RetailPrice,
            Field_SellingPrice: itm.SellingPrice,
            Field_SAC_Flag: itm.SAC_Flag,
            Field_SAC_Qual: itm.SAC_Qual,
            Field_Cube_Length: itm.Cube_Length,
            Field_Cube_Width: itm.Cube_Width,
            Field_Cube_Height: itm.Cube_Height,
            Field_Cube_Qty: itm.Cube_Qty,
            Field_Cube_UOM: itm.Cube_UOM,
            Field_User1: itm.User1,
            Field_User2: itm.User2,
            Field_User3: itm.User3,
            Field_User4: itm.User4,
            Field_User5: itm.User5,
            Field_Item_rfid: itm.Item_rfid,
            Field_locid: itm.locid,
            Field_PackingClass: itm.PackingClass,
            Field_Item_Alt_No: itm.Item_Alt_No,
            Field_Item_Config: itm.Item_Config,
            Field_Item_Size: itm.Item_Size,
            Field_Item_Color: itm.Item_Color,
            Field_Frt_Code: itm.Frt_Code,
            Field_GTIN: itm.GTIN,
            Field_EAN: itm.EAN
        });
   }

    private xrefEdit(p : IAPIitemXRef) {
        // Test
    }

    private xrefDelete(p : IAPIitemXRef) {
        const check = confirm('Are you sure you want to delete this?')
        // Test
    }

    private sacEdit(p : IAPIsacXRef) {
        // Test
    }

    private sacDelete(p : IAPIsacXRef) {
        const check = confirm('Are you sure you want to delete this?')
        // Test
    }

    private xRefAdd() {
        // Test
    }

    private handleAdd() {
        const item = this.packItem();
        this.props.itemAdd(item);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const item = this.packItem();
        this.props.itemUpdate(this.state.Original_Int_Item_No, item);
        this.props.toggleModal();
    }


    private packItem() : IItem
    {
        const item:IItem = new XItem.CItem();
        item.locid = StringChecker(this.state.Field_locid);
        item.GTIN = StringChecker(this.state.Field_GTIN);
        item.Cube_Height = this.state.Field_Cube_Height;
        item.Cube_Length = this.state.Field_Cube_Length;
        item.Cube_Qty = this.state.Field_Cube_Qty;
        item.Cube_UOM = StringChecker(this.state.Field_Cube_UOM);
        item.Cube_Width = this.state.Field_Cube_Width;
        item.Def_Pack_Qty = this.state.Field_Def_Pack_Qty;
        item.EAN = StringChecker(this.state.Field_EAN);
        item.EDI_UOM = StringChecker(this.state.Field_EDI_UOM);
        item.Frt_Code = StringChecker(this.state.Field_Frt_Code);
        item.Int_Item_No = StringChecker(this.state.Field_Int_Item_No);
        item.Item_Alt_No = StringChecker(this.state.Field_Item_Alt_No);
        item.Item_Color = StringChecker(this.state.Field_Item_Color);
        item.Item_Config = StringChecker(this.state.Field_Item_Config);
        item.Item_Desc = StringChecker(this.state.Field_Item_Desc);
        item.Item_rfid = this.state.Field_Item_rfid;
        item.Item_Size = StringChecker(this.state.Field_Item_Size);
        item.Item_Um = StringChecker(this.state.Field_Item_Um);
        item.Item_UOM = StringChecker(this.state.Field_Item_UOM);
        item.Item_Wt = this.state.Field_Item_Wt;
        item.locid = StringChecker(this.state.Field_locid);
        item.PackingClass = StringChecker(this.state.Field_PackingClass);
        item.RetailPrice = this.state.Field_RetailPrice;
        item.SAC_Flag = this.state.Field_SAC_Flag;
        item.SAC_Qual = StringChecker(this.state.Field_SAC_Qual);
        item.SellingPrice = this.state.Field_SellingPrice;
        item.UPC = StringChecker(this.state.Field_UPC);
        item.User1 = StringChecker(this.state.Field_User1);
        item.User2 = StringChecker(this.state.Field_User2);
        item.User3 = StringChecker(this.state.Field_User3);
        item.User4 = StringChecker(this.state.Field_User4);
        item.User5 = StringChecker(this.state.Field_User5);
        
        return item;
    }

    private handleFrtCodeChange(optVal : string) {
        this.setState( { Field_Frt_Code : optVal });
    }

    private handleNumericChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: NumericOnly(value) });
    }

    private handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (this!==undefined) {
            this.setState({
                [name]: value
            });
        }

        switch(name)
        {
            case 'Field_Int_Item_No':
                if (this.state.isNew) {
                    LimitLength(name, value, XItem.IItem_Int_Item_No_length, this);
                    const itemList: IItem[] = this.props.itemsetReducer.itemList;
                    if (itemList.filter((item) => (item.Int_Item_No === value)).length > 0) {
                        this.setState({ Field_Int_Item_No_ErrorText : "Must be unique"});
                    }
                    else {
                        this.setState({ Field_Int_Item_No_ErrorText : ''});
                    }
                }
                break;

            case 'Field_Item_Desc':
                LimitLength(name, value, XItem.IItem_Item_Desc_length, this);
                break;

            case 'Field_Item_Um':
                LimitLength(name, value, XItem.IItem_Item_Um_length, this);
                break;

            case 'Field_Item_UOM':
                LimitLength(name, value, XItem.IItem_Item_UOM_length, this);
                break;

            case 'Field_EDI_UOM':
                LimitLength(name, value, XItem.IItem_EDI_UOM_length, this);
                break;

            case 'Field_SAC_Qual':
                LimitLength(name, value, XItem.IItem_SAC_Qual_length, this);
                break;

            case 'Field_Cube_UOM':
                LimitLength(name, value, XItem.IItem_Cube_UOM_length, this);
                break;

            case 'Field_User1':
                LimitLength(name, value, XItem.IItem_User1_length, this);
                break;

            case 'Field_User2':
                LimitLength(name, value, XItem.IItem_User2_length, this);
                break;

            case 'Field_User3':
                LimitLength(name, value, XItem.IItem_User3_length, this);
                break;

            case 'Field_User4':
                LimitLength(name, value, XItem.IItem_User4_length, this);
                break;

            case 'Field_User5':
                LimitLength(name, value, XItem.IItem_User5_length, this);
                break;

            case 'Field_locid':
                LimitLength(name, value, XItem.IItem_locid_length, this);
                break;

            case 'Field_PackingClass':
                LimitLength(name, value, XItem.IItem_PackingClass_length, this);
                break;

            case 'Field_Item_Alt_No':
                LimitLength(name, value, XItem.IItem_Item_Alt_No_length, this);
                break;

            case 'Field_Item_Config':
                LimitLength(name, value, XItem.IItem_Item_Config_length, this);
                break;

            case 'Field_Item_Size':
                LimitLength(name, value, XItem.IItem_Item_Size_length, this);
                break;
                
            case 'Field_Item_Color':
                LimitLength(name, value, XItem.IItem_Item_Color_length, this);
                break;
            
            case 'Field_Frt_Code':
                LimitLength(name, value, XItem.IItem_Frt_Code_length, this);
                break;
                
            case 'Field_GTIN':
                LimitLength(name, value, XItem.IItem_GTIN_length, this);
                break;
            
            case 'Field_EAN':
                LimitLength(name, value, XItem.IItem_EAN_length, this);
                break;

        }

        
    }

    private isValid()
    {
        // Check mandatory fields
        // if (this.state.Field_Item_Van_ID.length === 0) { return false };
    
        return true;
    }
    
}

const mapStateToProps = ({itemsetReducer}) => {
    return {itemsetReducer}
};

const mapActionsToProps = {
    itemAdd,
    itemUpdate,
    itemGetSacAll,
    itemGetXrefAll,
    itemAIU01Get,
    itemFrtGetAll
};

export default connect(mapStateToProps, mapActionsToProps)(ItemView);
