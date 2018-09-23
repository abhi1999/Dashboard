import * as  React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import {cloneDeep} from 'lodash';
import ReactTable from "react-table";
import { Button as RSButton,  Container, Card, Col, Row, CardHeader, CardBody } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaSyncAlt,FaPlusCircle,FaTimesCircle,FaEdit,FaClone,FaSort,FaSortUp,FaSortDown,FaTable,FaList, FaFile, FaUndo } from 'react-icons/fa';
import { itemDelete, itemGetAll } from '../../actions/ItemAction';
// import NetworkView from './NetworkView';
import { Checkbox, Form, Input, Select, Pagination, Menu, Tooltip, Button } from 'antd';
import { ICON_SIZE, ICON_COLOR, ICON_SMALL } from '../../constants/Attributes';
import { IItem, IItemCust, IItemCustSAC } from "../../constants/edidb";
import * as XItem from "../../constants/edidb/CItem";
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import Media from "react-media";
import DebugNotify from '../../utils/UIValidation';
import KeyValueLabel from '../../constants/params/keyValueLabel';
import { filterAdd, filterIncludes, filterClear, filterGetValue, selectGetValue, kAll, kTrue, kFalse } from '../../utils/Comparison';
import { ClickParam } from 'antd/lib/menu';
import { ShowHelp } from '../../utils/index';
import ItemView from './ItemView';
import { IItemReducer } from '../../reducers/ItemSetReducer';
import LoadingComponent from "../../components/widgets/LoadingComponent";

import GridActionMenu from './../../components/widgets/GridActionMenu';
import GridFilter from './../../components/widgets/GridFilter';
import GridFilterPills from './../../components/widgets/GridFilterPills';


const FormItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };


const booleanTypes:KeyValueLabel[] = [
    new KeyValueLabel({ key: "", value : kAll, label : kAll}),
    new KeyValueLabel({ key: kTrue, value: kTrue, label: kTrue}),
    new KeyValueLabel({ key: kFalse, value: kFalse, label: kFalse})
];

const Label_Int_Item_No = "ITEM ID";
const Label_Item_Desc = "ITEM DESCRIPTION";
const Label_UPC = "UPC";
const Label_GTIN = "GTIN";
const Label_EAN = "EAN";
const Label_Def_Pack_Qty = "PACK";
const Label_Item_Wt = "WT";
const Label_Item_Um = "WT UM";
const Label_Item_UOM = "ERP UM";
const Label_EDI_UOM = "EDI UM";
const Label_RetailPrice = "RETAIL";
const Label_SAC_Flag = "SAC";
const Label_SAC_Qual = "SAC QUAL";
const Label_Item_rfid = "RFID";
const Label_locid = "LOCATION";
const Label_PackingClass = "PACKING CLASS";
const Label_Item_Alt_No = "ALT ID";
const Label_Item_Color = "COLOR";
const Label_Item_Size = "SIZE";
const Label_Item_Config = "CONFIG";
const Label_Frt_Code = "FREIGHT";

const MenuKeyHelp = 'Help';
const MenuKeyImport = 'Import';
const MenuKeyLabels = 'Labels';

export interface IItemListViewProps
{
    // redux
    itemGetAll: any,
    itemDelete: any,
}

export interface IItemListViewState
{
    viewMode:string,
    pageSize:number,
    page:number,
    modal:boolean,
    relatedView:boolean,
    itemEdit:IItem,
    isNew:boolean,
    collapseAddNew:boolean,
    itemList:IItem[],
    itemListCount:number,
    loading:number,
    sorted:SortDescriptor[],
    filtered:FilterDescriptor[],
    // Filter fields
    Int_Item_No : string,
    Item_Desc : string,
    UPC : string,
    GTIN :string,
    EAN: string,
    Def_Pack_Qty : string,
    Item_Wt : string,
    Item_Um : string,
    Item_UOM : string,
    EDI_UOM : string,
    RetailPrice : string,
    SAC_Flag: boolean,
    SAC_Qual : string,
    Item_rfid : boolean,
    locid : string,
    PackingClass : string,
    Item_Alt_No : string,
    Item_Color : string,
    Item_Size : string,
    Item_Config : string,
    Frt_Code : string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class ItemListView extends React.Component<IItemListViewProps, IItemListViewState> {
    public constructor(props:IItemListViewProps) {
        super(props);
        this.state = {
            viewMode: 'cards',
            pageSize:10,
            page:1,
            modal: false,
            relatedView: false,
            itemEdit: new XItem.CItem(),
            isNew: false,
            collapseAddNew: false,
            itemList: [],
            itemListCount: 0,
            loading: 0,
            sorted: [{desc: false,id: XItem.kItem_Int_Item_No}],
            filtered: [],
            Int_Item_No : '',
            Item_Desc : '',
            UPC : '',
            GTIN : '',
            EAN : '',
            Def_Pack_Qty : '',
            Item_Wt : '',
            Item_Um : '',
            Item_UOM : '',
            EDI_UOM : '',
            RetailPrice : '',
            SAC_Flag : false,
            SAC_Qual : '',
            Item_rfid : false,
            locid : '',
            PackingClass : '',
            Item_Alt_No : '',
            Item_Color : '',
            Item_Size : '',
            Item_Config : '',
            Frt_Code : ''
        };

        this.updateFilter = this.updateFilter.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.itemAdd = this.itemAdd.bind(this);
        this.itemEdit = this.itemEdit.bind(this);
        this.itemDelete = this.itemDelete.bind(this);
        this.itemRename = this.itemRename.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleRelatedView = this.toggleRelatedView.bind(this);
        this.query = this.query.bind(this);
        this.requery = this.requery.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.onShowSizeChange = this.onShowSizeChange.bind(this);
        this.toggleViewMode = this.toggleViewMode.bind(this);
        this.toggleSortMode = this.toggleSortMode.bind(this);
        this.onSortedChange = this.onSortedChange.bind(this);
        this.onFilteredChange = this.onFilteredChange.bind(this);
        this.getSortButton = this.getSortButton.bind(this);
        this.handleBooleanFilterChange = this.handleBooleanFilterChange.bind(this);
        this.handleNumberFilterChange = this.handleNumberFilterChange.bind(this);
        this.menuClick = this.menuClick.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
        this.handleFilterApply = this.handleFilterApply.bind(this);
    }
 

    public componentWillMount() {
        this.query(1,10);
    }


    public componentWillReceiveProps(newProps) {
        this.setState({
            itemList: (newProps.itemsetReducer as IItemReducer).itemList,
            itemListCount: (newProps.itemsetReducer as IItemReducer).itemListCount,
            loading : (newProps.itemsetReducer as IItemReducer).loading
          });
    }

    public render() {

        if (this.state.modal){
            return <ItemView itemId={this.state.itemEdit.Int_Item_No} item={this.state.itemEdit} isNew={this.state.isNew} toggleModal={this.toggleModal} />
        }

        const { pageSize, sorted, filtered } = this.state;

        let { itemList } = this.state;

        if (this.state.loading > 0) {
            return <LoadingComponent />
        }

        if (filtered.length > 0) {   // Filter on each column with a value
            filtered.map((column) => {
                if (!isNaN(column.value)) {
                    // itemList = _.filter(itemList, item => item[column.id] === column.value);
                }
                else if (typeof(column.value) === 'boolean') {
                    itemList = _.filter(itemList, item => item[column.id] === column.value);
                }
                else {
                    itemList = itemList.filter(item => _.includes(String(item[column.id]).toLowerCase(), String(column.value).toLowerCase()));
                }
            });
        }

        if (sorted.length > 0) {   // Implement the multi-sort with lodash
            itemList = _.orderBy(itemList, sorted.map((column) => column.id), sorted.map((column) => column.desc ? "desc" : "asc"));
        }

        const tablePageSize = Math.min(itemList.length, pageSize); // Only show rows with data in the table

        return (
            <div>
                <Menu mode='horizontal' onClick={this.menuClick}>
                    <Menu.Item key={MenuKeyImport}>Import Items</Menu.Item>
                    <Menu.Item key={MenuKeyLabels}>Customize Labels</Menu.Item>
                    <Menu.Item key={MenuKeyHelp}>Help</Menu.Item>
                </Menu>
                <Card style={{width: '100%'}}>
                    <FlexView width='100%' wrap={true} style={{marginBottom: 12}}>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="40" wrap={true}>
                            <Tooltip title='Refresh'>
                                <FaSyncAlt onClick={() => this.requery(this.state.pageSize)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                            </Tooltip>
                            </FlexView>
                            <FlexView hAlignContent="right" vAlignContent="center" basis="40" wrap={true}>
                            <Tooltip title='Clear Filters'>
                                <FaUndo onClick={this.clearFilters} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                            </Tooltip>
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center" basis="120" wrap={true}>
                            <Tooltip title="Add">
                                <FaPlusCircle onClick={() => this.itemAdd()} size={ICON_SIZE} color={ICON_COLOR} style={{marginRight: 12}}/>
                            </Tooltip>
                        </FlexView>
                    </FlexView>
                </Card>
                <div className="header-icons">
                    <RSButton className="fa fa-plus" onClick={() => this.itemAdd()}/>
                    <GridFilter filters={this.state.filtered} filterItems={[
                            {type:'text', label:Label_Int_Item_No, name:XItem.kItem_Int_Item_No, placeholder:Label_Int_Item_No},
                    ]} 
                        onApply={this.handleFilterApply} 
                    />
                </div>
                <GridFilterPills filters={this.state.filtered} onFilterClear={this.handleFilterApply}/>
                <Media query={{maxWidth: 1024}}>
                    {matches => // Mobile version first
                        matches ? (
                            <div>
                                <Card body={true} outline={true} style={{ width: '100%' }}>
                                <Container>
                                    <Form layout="inline" style={{marginTop:-10, marginBottom:10}}>
                                    <Row><Col>
                                        <Form.Item 
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_Int_Item_No}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XItem.kItem_Int_Item_No}
                                                prefix={this.getSortButton(XItem.kItem_Int_Item_No)}
                                                value={this.state.Int_Item_No}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_Item_Desc}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XItem.kItem_Item_Desc}
                                                prefix={this.getSortButton(XItem.kItem_Item_Desc)}
                                                value={this.state.Item_Desc}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_UPC}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XItem.kItem_UPC}
                                                prefix={this.getSortButton(XItem.kItem_UPC)}
                                                value={this.state.UPC}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_GTIN}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XItem.kItem_GTIN}
                                                prefix={this.getSortButton(XItem.kItem_GTIN)}
                                                value={this.state.GTIN}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_EAN}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XItem.kItem_EAN}
                                                prefix={this.getSortButton(XItem.kItem_EAN)}
                                                value={this.state.EAN}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_Def_Pack_Qty}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XItem.kItem_Def_Pack_Qty}
                                                prefix={this.getSortButton(XItem.kItem_Def_Pack_Qty)}
                                                value={this.state.Def_Pack_Qty}
                                                onChange={this.handleNumberFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_Item_Wt}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XItem.kItem_Item_Wt}
                                                prefix={this.getSortButton(XItem.kItem_Item_Wt)}
                                                value={this.state.Item_Wt}
                                                onChange={this.handleNumberFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_Item_Um}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XItem.kItem_Item_Um}
                                                prefix={this.getSortButton(XItem.kItem_Item_Um)}
                                                value={this.state.Item_Um}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_Item_UOM}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XItem.kItem_Item_UOM}
                                                prefix={this.getSortButton(XItem.kItem_Item_UOM)}
                                                value={this.state.Item_UOM}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_EDI_UOM}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XItem.kItem_EDI_UOM}
                                                prefix={this.getSortButton(XItem.kItem_EDI_UOM)}
                                                value={this.state.EDI_UOM}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_RetailPrice}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XItem.kItem_RetailPrice}
                                                prefix={this.getSortButton(XItem.kItem_RetailPrice)}
                                                value={this.state.RetailPrice}
                                                onChange={this.handleNumberFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_locid}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XItem.kItem_locid}
                                                prefix={this.getSortButton(XItem.kItem_locid)}
                                                value={this.state.locid}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                    </Form>
                                    </Container>
                                </Card>
                                <Row>
                                    {itemList.map((item) =>
                                        <Col key={item.Int_Item_No}>
                                            <Card outline={false}>
                                                <CardHeader>
                                                    {item.Int_Item_No}
                                                    <div className="card-header-actions">
                                                        <Tooltip title='Edit'>
                                                            <FaEdit onClick={() => this.itemEdit(item)} size={ICON_SMALL} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                        </Tooltip>
                                                        <Tooltip title='Delete'>
                                                            <FaTimesCircle onClick={() => this.itemDelete(item)} size={ICON_SMALL} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                        </Tooltip>
                                                        <Tooltip title='Clone'>
                                                            <FaFile onClick={() => this.itemRename(item)} size={ICON_SMALL} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                        </Tooltip>
                                                    </div> 
                                                </CardHeader>
                                                <CardBody>
                                                    <Container>
                                                        <Form layout="vertical">
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_Int_Item_No}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.Int_Item_No}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_Item_Desc}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.Item_Desc}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_UPC}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.UPC}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_GTIN}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.GTIN}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_EAN}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.EAN}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_Def_Pack_Qty}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.Def_Pack_Qty}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_Item_Wt}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.Item_Wt}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_Item_Um}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.Item_Um}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_Item_UOM}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.Item_UOM}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_EDI_UOM}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.EDI_UOM}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_RetailPrice}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.RetailPrice}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_locid}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.locid}
                                                                </Form.Item>
                                                            </Col></Row>
                                                        </Form>
                                                    </Container>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        )}
                                </Row>    
                            </div>
                    ) : ( // Desktop version
                        <ReactTable
                            columns={[
                                {
                                    sortable: false,
                                    filterable: false,
                                    width: 50,
                                    resizable:false,
                                    className:'action-menu',
                                    Cell: row => (
                                        <GridActionMenu items={["Edit", "Delete"]} 
                                            onItemClick={(item)=>{switch(item){
                                                case "Edit":
                                                    this.itemEdit(row.original)
                                                    break;
                                                case "Delete":
                                                    this.itemDelete(row.original)
                                                    break;
                                        }}}/>
                                    )
                                },
                                {
                                    Header: Label_Int_Item_No,
                                    accessor: XItem.kItem_Int_Item_No,
                                    minWidth: 20
                                },
                                {
                                    Header: Label_Item_Desc,
                                    accessor: XItem.kItem_Item_Desc,
                                    minWidth: 80
                                },
                                {
                                    Header: Label_UPC,
                                    accessor: XItem.kItem_UPC,
                                    minWidth: 20
                                },
                                {
                                    Header: Label_GTIN,
                                    accessor: XItem.kItem_GTIN,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_EAN,
                                    accessor: XItem.kItem_EAN,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_Def_Pack_Qty,
                                    accessor: XItem.kItem_Def_Pack_Qty,
                                    minWidth: 15,
                                    className : 'tableColumnRightAlign'
                                },
                                {
                                    Header: Label_Item_Wt,
                                    accessor: XItem.kItem_Item_Wt,
                                    minWidth: 15,
                                    className : 'tableColumnRightAlign'
                                },
                                {
                                    Header: Label_Item_Um,
                                    accessor: XItem.kItem_Item_Um,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_Item_UOM,
                                    accessor: XItem.kItem_Item_UOM,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_RetailPrice,
                                    accessor: XItem.kItem_RetailPrice,
                                    minWidth: 15,
                                    className : 'tableColumnRightAlign'
                                },
                                {
                                    Header: Label_SAC_Flag,
                                    minWidth: 15,
                                    className : 'TableColumnCenterAlign',
                                    Cell: row =>
                                    {
                                        return (
                                            <Checkbox checked={row.original.SAC_Flag} />
                                        )
                                    },
                                    filterMethod : (filter, row) => {
                                        return filter.value === row[filter.id];
                                    },
                                    Filter: ({ filter, onChange }) =>
                                    <Select
                                        style={{ minWidth: 60 }}
                                        defaultValue={kAll}
                                        onChange={this.handleBooleanFilterChange}
                                    >
                                        {booleanTypes.map((option)=><Select.Option key={option.key} value={option.value} title={XItem.kItem_SAC_Flag}>{option.label}</Select.Option>)}
                                    </Select>
                                },
                                {
                                    Header: Label_SAC_Qual,
                                    accessor: XItem.kItem_SAC_Qual,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_Item_rfid,
                                    minWidth: 15,
                                    className : 'TableColumnCenterAlign',
                                    filterMethod : (filter,row) => {
                                        return false;
                                    },
                                    Cell: row =>
                                    {
                                        return (
                                            <Checkbox checked={row.original.Item_rfid} />
                                        )
                                    },
                                    Filter: ({ filter, onChange }) =>
                                    <Select
                                        style={{ minWidth: 60 }}
                                        defaultValue={kAll}
                                        onChange={this.handleBooleanFilterChange}
                                    >
                                        {booleanTypes.map((option)=><Select.Option key={option.key} value={option.value} title={XItem.kItem_Item_rfid}>{option.label}</Select.Option>)}
                                    </Select>
                                },
                                {
                                    Header: Label_locid,
                                    accessor: XItem.kItem_locid,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_PackingClass,
                                    accessor: XItem.kItem_PackingClass,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_Item_Alt_No,
                                    accessor: XItem.kItem_Item_Alt_No,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_Item_Color,
                                    accessor: XItem.kItem_Item_Color,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_Item_Size,
                                    accessor: XItem.kItem_Item_Size,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_Item_Config,
                                    accessor: XItem.kItem_Item_Config,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_Frt_Code,
                                    accessor: XItem.kItem_Frt_Code,
                                    minWidth: 15
                                }
                            ]}
                            manual={false} 
                            data={itemList}
                            sortable={true}
                            sorted={sorted}
                            onSortedChange={this.onSortedChange}
                            filterable={true}
                            filtered={filtered}
                            defaultFilterMethod={(filter, row) => filterIncludes(filter, row)}
                            onFilteredChange={this.onFilteredChange}
                            showPagination={false}
                            pageSize={tablePageSize}
                            className="-highlight table-container"
                            minRows={0}
                            getNoDataProps={() => {
                                return { style: { display: 'none' } };
                              }}
                        />)}
                </Media>
                <div className="paging-panel">
                    <Pagination
                        showSizeChanger={true}
                        onChange={this.onChangePage} 
                        current={this.state.page}
                        pageSize={this.state.pageSize}
                        pageSizeOptions={['10','50','100']}
                        onShowSizeChange={this.onShowSizeChange}
                        total={this.state.itemListCount}
                        />
                </div>
            </div>
            )
    }
    protected toggleModal() {
        this.setState({
          modal: !this.state.modal
        });
    }
    protected toggleRelatedView() {
        this.setState({ relatedView : !this.state.relatedView });
    }
    private handleFilterApply(newFilter:FilterDescriptor[]){
        this.setState({filtered:cloneDeep(newFilter)}, ()=>{
            this.requery(this.state.pageSize)
        })
    }
    private getFilterValues(id){
        const item = this.state.filtered.find(f=> f.id === id);
        return item? item.value: ""; 
    }

    private clearFilters() {
        this.setState({ 
            filtered: [],
            Int_Item_No : '',
            Item_Desc : '',
            UPC : '',
            GTIN :'',
            EAN: '',
            Def_Pack_Qty : '',
            Item_Wt : '',
            Item_Um : '',
            Item_UOM : '',
            EDI_UOM : '',
            RetailPrice : '',
            SAC_Flag: false,
            SAC_Qual : '',
            Item_rfid : false,
            locid : '',
            PackingClass : '',
            Item_Alt_No : '',
            Item_Color : '',
            Item_Size : '',
            Item_Config : '',
            Frt_Code : '',
         });
    }

    private handleBooleanFilterChange(value: string, opt:any) {
        if (value !== kAll) {
            this.updateFilter(opt.props.title, value === kTrue);
        }
        else {
            // Remove the current filter for this column if there is one
            this.clearFilter(opt.props.title);
        }
    }

    private toggleViewMode()
    {
        if (this.state.viewMode==='cards')
        {
            this.setState({ viewMode: 'table' });
        }
        else
        {
            this.setState({ viewMode: 'cards' });
        }
    }

    private query(page:number, pageSize:number) 
    {   // We pass these arguments rather than reading them from the state, because updates to state are delayed
        const top:number = pageSize;
        const skip:number = (page-1) * pageSize; // The pagination component is 1-based
        const params:ODataParams = {top, skip, sorted: this.state.sorted, filtered: this.state.filtered};
        this.props.itemGetAll(params);
    }

    private requery(pageSize:number)
    {
        this.setState({ page: 1 });
        this.query(1, pageSize);
    }

    private itemAdd()
    {
        this.setState({
            itemEdit:new XItem.CItem(),
            modal: true,
            isNew: true
        });
    }

    private itemEdit(item:IItem)
    {
        this.setState({
            itemEdit: item,
            modal: true,
            isNew: false
        });      
    }

    private menuClick(param : ClickParam)
    {
        switch (param.key)
        {
            case MenuKeyHelp:
                ShowHelp('#Items_Products_You_Sell.htm');
            break;

            case MenuKeyImport:
            break;

            case MenuKeyLabels:
            break;
        }
    }

    private itemDelete(item:IItem)
    {
        const check = confirm('Are you sure you want to delete this?')
        if (check) { this.props.itemDelete(item) }; 
    }

    private itemRename(item: IItem)
    {
        const clone : IItem = JSON.parse(JSON.stringify(item));
        clone.Int_Item_No = clone.Int_Item_No.substring(0, XItem.IItem_Int_Item_No_length - 1) + "#";  
        this.setState({
            itemEdit: clone,
            modal: true,
            isNew: true
        });     
    }

    private onChangePage = (page) => {
        this.setState({ page });
        this.query(page, this.state.pageSize);
      }

    private onShowSizeChange = (current, pageSize) => {
        this.setState({ pageSize });
        this.requery(pageSize);
    }

    private getSortButton(columnId : string)
    {
        // Get the relevant column from the sorted array
        const sortedColumn = this.state.sorted.filter((column)=>column.id===columnId);

        // This is a tri-state toggle
        if(sortedColumn.length>0)
        {
            if(sortedColumn[0].desc)
            {
                return <FaSortDown onClick={() => this.toggleSortMode(columnId)} color={ICON_COLOR} />;
            }
            else
            {
                return <FaSortUp onClick={() => this.toggleSortMode(columnId)} color={ICON_COLOR} />;
            }
        }
        else
        {
            return <FaSort onClick={() => this.toggleSortMode(columnId)} color={ICON_COLOR} />;
        }
    }

    private toggleSortMode(columnId : string)
    {
        let sortUpdated:SortDescriptor[] = [];

        // Get the relevant column from the sorted array
        const sortedColumn = this.state.sorted.filter((column)=>column.id===columnId);

        // This is a tri-state toggle
        if(sortedColumn.length>0)
        {
            if(sortedColumn[0].desc)
            {
                // Remove it from the array
                sortUpdated = this.state.sorted.filter((column)=>column.id!==columnId);
            }
            else
            {
                // Change it to descending
                sortUpdated = this.state.sorted.filter((column)=>column.id!==columnId).concat({"desc":true,"id":columnId});
            }
        }
        else
        {
            // Add it to the array as ascending (default)
            sortUpdated = this.state.sorted.concat({"desc":false,"id":columnId});
        }

        this.setState({
            sorted: sortUpdated
        });
    }

    private onSortedChange(sorted:SortDescriptor[])
    {
        this.setState({sorted});
    }

    private onFilteredChange(filtered:FilterDescriptor[])
    {
        if(filtered.length>0)
        {
            filtered.map((column)=>
            {
                this.setState({[column.id]: column.value});
            });
        }

        this.setState({filtered});
    }

    private updateFilter(id:string, value:any)
    {
        let { filtered } = this.state;
        filtered = filterAdd(filtered, id, value);
        this.setState({ filtered });
    }

    private clearFilter(id:string)
    {
        let { filtered } = this.state;
        filtered = filterClear(filtered, id);
        this.setState({ filtered });
    }


    private handleFilterChange(event) {
        const target:any = event.target;        
        const id:string = target.name;
        const value:string = target.type === 'checkbox' ? String(target.checked) : target.value;
        const columnId = target.name;
        
        if (this !== undefined) {
            this.setState({
                [columnId]: value
            })
        };
        this.updateFilter(id, value);
    }

    private handleNumberFilterChange(event) {
        if (isNaN(event.target.value)) {
            return;
        }

        const target:any = event.target;        
        const id:string = target.name;
        const columnId = target.name;
        
        // if (this !== undefined) {
        if (target.value.length === 0) {
            this.setState({[columnId]: ''});
            this.updateFilter(id, '');
        }
        else {
            this.setState({[columnId]: target.value});
            this.updateFilter(id, Number(target.value));
        };
    }

    // private handleVanTypeFilterChange(value: number) {
    //     this.handleVanTypeChange(value);
    // }
}

// Name is the name of the reducer
const mapStateToProps = ({itemsetReducer}) => {
    return {itemsetReducer}
};

const mapActionsToProps = {
    itemGetAll,
    itemDelete,
};

export default connect(mapStateToProps, mapActionsToProps)(ItemListView);