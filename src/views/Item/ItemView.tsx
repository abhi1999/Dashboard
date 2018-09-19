import * as  React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import ReactTable from "react-table";
import { Container, Card, Col, Row, CardHeader, CardBody } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaSyncAlt,FaPlusCircle,FaTimesCircle,FaEdit,FaClone,FaSort,FaSortUp,FaSortDown,FaTable,FaList } from 'react-icons/fa';
import { itemAdd, itemDelete, itemGetAll } from '../../actions/ItemAction';
// import NetworkView from './NetworkView';
import { Checkbox, Form, Input, Select, Pagination, Menu, Tooltip, Button } from 'antd';
import { ICON_SIZE, ICON_COLOR, ICON_SMALL } from '../../constants/Attributes';
import { IItem, IItemCust, IItemCustSAC } from "../../constants/edidb";
import * as XItem from "../../constants/edidb/CItem";
import * as XItemCust from "../../constants/edidb/CItemCust"
import * as XItemCustSac from "../../constants/edidb/CItemCustSAC"
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import Media from "react-media";
import DebugNotify from '../../utils/UIValidation';
import KeyValueLabel from '../../constants/params/keyValueLabel';
import { filterAdd, filterIncludes, filterClear, filterGetValue, selectGetValue, kAll, kTrue, kFalse } from '../../utils/Comparison';

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

const Label_Int_Item_No = "NETWORK";
const Label_VanExt = "FILE EXTENSION";
const Label_VanType = "TYPE";
const Label_VanFTPSite = "HOST NAME / ADDRESS";
const Label_VanConfig = "CONFIGURATION DOCUMENT";
const Label_VanMailbox = "MAILBOX / LOGIN";

export interface IIemViewProps
{
    // redux
    itemGetAll: any,
    itemDelete: any,
}

export interface IItemViewState
{
    viewMode:string,
    pageSize:number,
    page:number,
    modal:boolean,
    itemEdit:IItem,
    isNew:boolean,
    collapseAddNew:boolean,
    itemList:IItem[],
    itemListCount:number,
    loading:boolean,
    sorted:SortDescriptor[],
    filtered:FilterDescriptor[],
    // Filter fields
    Int_Item_No : string,
    Item_Desc : string,
    UPC : string,
    GTIN :string,
    EAN: string,
    Def_Pack_qty : number,
    Item_Wt : number,
    Item_Um : string,
    Item_UOM : string,
    EDI_UOM : string,
    RetailPrice : number,
    locid : string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class ItemView extends React.Component<IIemViewProps, IItemViewState> {
    
    constructor(props:IIemViewProps) {
        super(props);
        this.state = {
            viewMode: 'cards',
            pageSize:10,
            page:1,
            modal: false,
            itemEdit: new XItem.CItem(),
            isNew: false,
            collapseAddNew: false,
            itemList: [],
            itemListCount: 0,
            loading: true,
            sorted: [{desc: false,id: XItem.kItem_Int_Item_No}],
            filtered: [],
            Int_Item_No : '',
            Item_Desc : '',
            UPC : '',
            GTIN : '',
            EAN : '',
            Def_Pack_qty : 0,
            Item_Wt : 0,
            Item_Um : '',
            Item_UOM : '',
            EDI_UOM : '',
            RetailPrice : 0,
            locid : ''
        };

        this.updateFilter = this.updateFilter.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.itemAdd = this.itemAdd.bind(this);
        this.itemEdit = this.itemEdit.bind(this);
        this.itemDelete = this.itemDelete.bind(this);
        this.itemRename = this.itemRename.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.query = this.query.bind(this);
        this.requery = this.requery.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.onShowSizeChange = this.onShowSizeChange.bind(this);
        this.toggleViewMode = this.toggleViewMode.bind(this);
        this.toggleSortMode = this.toggleSortMode.bind(this);
        this.onSortedChange = this.onSortedChange.bind(this);
        this.onFilteredChange = this.onFilteredChange.bind(this);
        this.getSortButton = this.getSortButton.bind(this);
        // this.handleVanTypeFilterChange = this.handleVanTypeFilterChange.bind(this);
        // this.handleVanTypeChange = this.handleVanTypeChange.bind(this);
        // this.handleVanPassiveFilterChange = this.handleVanPassiveFilterChange.bind(this);
        // this.handleVanBinaryFilterChange = this.handleVanBinaryFilterChange.bind(this);
        // this.handleVanAppendCRLFChange = this.handleVanAppendCRLFChange.bind(this);
        }
 

    public componentWillMount() {
        this.query(1,10);
    }


    public componentWillReceiveProps(newProps) {
        this.setState({
            loading:  newProps.itemsetReducer.itemList.length === 0, // Leave loading state until we get some data
            itemList: newProps.itemsetReducer.itemList,
            itemListCount: newProps.itemsetReducer.itemListCount
          });
    }

    public render() {
        const { loading, pageSize, sorted, filtered } = this.state;
        let { itemList } = this.state;

        // if (this.state.modal){
        //     return <NetworkView itemId={this.state.itemEdit.Van_ID} item={this.state.itemEdit} isNew={this.state.isNew} toggleModal={this.toggleModal} />
        // }

        if (filtered.length > 0) {   // Filter on each column with a value
            filtered.map((column) => {
                if (typeof (column.value) === 'number') {
                    itemList = _.filter(itemList, item => item[column.id] === column.value);
                }
                else if (typeof (column.value) === 'boolean') {
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
                <Menu mode='horizontal'>
                    <Menu.Item>Import Items</Menu.Item>
                    <Menu.Item>Customize Labels</Menu.Item>
                    <Menu.Item>Help</Menu.Item>
                </Menu>
                <Card style={{width: '100%'}}>
                    <FlexView width='100%' wrap={true} style={{marginBottom: 12}}>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="40" wrap={true}>
                            <FaSyncAlt onClick={() => this.requery(this.state.pageSize)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                        </FlexView>
                        <FlexView hAlignContent="center" vAlignContent="center" grow={true} wrap={true}>
                            <Pagination
                                showSizeChanger={true}
                                onChange={this.onChangePage} 
                                current={this.state.page}
                                pageSize={this.state.pageSize}
                                pageSizeOptions={['10','50','100']}
                                onShowSizeChange={this.onShowSizeChange}
                                total={this.state.itemListCount}
                                />
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center" basis="120" wrap={true}>
                            <Tooltip title="Add">
                                <FaPlusCircle onClick={() => this.itemAdd()} size={ICON_SIZE} color={ICON_COLOR} style={{marginRight: 12}}/>
                            </Tooltip>
                        </FlexView>
                    </FlexView>
                </Card>
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
                                                value={this.state.Van_ID}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_VanExt}
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
                                                            <FaClone onClick={() => this.itemRename(item)} size={ICON_SMALL} color={ICON_COLOR} style={{ marginLeft: 12 }} />
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
                                                                    label={Label_VanExt}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.Item_Desc}
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
                                    width: 90,
                                    Cell: row => (
                                        <div>
                                            <Tooltip title='Edit'>
                                                <Button type="primary" shape="circle" size="small" style={{marginLeft:2}} icon="edit"  onClick={() => this.itemEdit(row.original)} />
                                            </Tooltip>
                                            <Tooltip title='Delete'>
                                                <Button type="primary" shape="circle" size="small" style={{marginLeft:2}} icon="delete" onClick={() => this.itemDelete(row.original)} />
                                            </Tooltip>
                                            <Tooltip title='Clone'>
                                                <Button type="primary" shape="circle" size="small" style={{marginLeft:2}} icon="copy" onClick={() => this.itemRename(row.original)} />    
                                            </Tooltip>
                                        </div>
                                    )
                                },
                                {
                                    Header: Label_Int_Item_No,
                                    accessor: XItem.kItem_Int_Item_No,
                                    minWidth: 20
                                },
                                {
                                    Header: Label_VanExt,
                                    accessor: XItem.kItem_Item_Desc,
                                    minWidth: 15
                                },
                            ]}
                            manual={false} 
                            data={itemList}
                            loading={loading}
                            loadingText= "Please wait, retrieving list of items..."
                            sortable={true}
                            sorted={sorted}
                            onSortedChange={this.onSortedChange}
                            filterable={true}
                            filtered={filtered}
                            defaultFilterMethod={(filter, row) => filterIncludes(filter, row)}
                            onFilteredChange={this.onFilteredChange}
                            showPagination={false}
                            pageSize={tablePageSize}
                            className="-striped -highlight"
                        />)}
                </Media>
            </div>
            )
    }

    protected toggleModal() {
        this.setState({
          modal: !this.state.modal
        });
      }

    // private handleVanPassiveFilterChange(value: string) {
    //     if (value !== kAll) {
    //         this.updateFilter(XItem.kNetwork_VanPassive, value === kTrue);
    //     }
    //     else {
    //         // Remove the current filter for this column if there is one
    //         this.clearFilter(XItem.kNetwork_VanPassive);
    //     }
    // }

    // private handleVanBinaryFilterChange(value: string) {

    //     if (value !== kAll) {
    //         this.updateFilter(XItem.kNetwork_VanBinary, value === kTrue);
    //     }
    //     else {
    //         // Remove the current filter for this column if there is one
    //         this.clearFilter(XItem.kNetwork_VanBinary);
    //     }
    // }

    // private handleVanTypeChange(value: number) {
    //     if (value !== networkVanTypeAllValue) {
    //         this.updateFilter(XItem.kNetwork_VanType, value);
    //     }
    //     else {
    //         // Remove the current filter for this column if there is one
    //         this.clearFilter(XItem.kNetwork_VanType);
    //     }
    // }

    // private handleVanAppendCRLFChange(value: number) {
    //     if (value !== networkTerminatorSuffixAllValue) {
    //         this.updateFilter(XItem.kNetwork_VanAppendCRLF, value);
    //     }
    //     else {
    //         // Remove the current filter for this column if there is one
    //         this.clearFilter(XItem.kNetwork_VanAppendCRLF);
    //     }
    // }

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

    private itemDelete(item:IItem)
    {
        this.props.itemDelete(item); 
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

export default connect(mapStateToProps, mapActionsToProps)(ItemView);