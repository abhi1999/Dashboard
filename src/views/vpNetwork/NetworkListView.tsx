import * as  React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import ReactTable from "react-table";
import { Container, Card, Col, Row, CardHeader, CardBody } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaSyncAlt,FaPlusCircle,FaTimesCircle,FaEdit,FaClone,FaSort,FaSortUp,FaSortDown,FaTable,FaList } from 'react-icons/fa';
import { Tooltip, Button } from 'antd';
import { vpnetworkGetAll, vpnetworkDelete } from '../../actions/VpNetworksAction';
import NetworkView from './NetworkView';
import { Pagination } from 'antd';
import { Checkbox, Form, Input, Select } from 'antd';
import { ICON_SIZE, ICON_COLOR, ICON_SMALL } from '../../constants/Attributes';
import { INetwork } from "../../constants/edidb";
import * as XNetwork from "../../constants/edidb/CNetwork";
import ODataParams from '../../constants/params/oDataParams';
import SortDescriptor from '../../constants/params/sortDescriptor';
import FilterDescriptor from '../../constants/params/filterDescriptor';
import Media from "react-media";
import DebugNotify from '../../utils/UIValidation';
import KeyValueLabel from '../../constants/params/keyValueLabel';
import { filterAdd, filterIncludes, filterClear, filterGetValue, selectGetValue, kAll, kTrue, kFalse } from '../../utils/Comparison';
import { IvpNetworkState } from '../../reducers/vpNetworksReducer';

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

const networkVanTypeAllValue = 4;
const networkVanTypes:KeyValueLabel[] = [
    new KeyValueLabel({ key: "", value: networkVanTypeAllValue, label: kAll }),
    new KeyValueLabel({ key: "FTP", value: 0, label: "FTP" }),
    new KeyValueLabel({ key: "Folder Exchange", value: 1, label: "Folder Exchange" }),
    new KeyValueLabel({ key: "FTPS (FTP/SSL)", value: 2, label: "FTPS (FTP/SSL)" }),
    new KeyValueLabel({ key: "SFTP (FTP/SSH)", value: 3, label: "SFTP (FTP/SSH)" }),
];

const networkTerminatorSuffixAllValue = 4;
const networkTerminatorSuffix:KeyValueLabel[] = [
    new KeyValueLabel({ key: "", value: networkTerminatorSuffixAllValue, label: kAll }),
    new KeyValueLabel({ key: "None", value: 0, label: "None" }),
    new KeyValueLabel({ key: "CR", value: 1, label: "CR" }),
    new KeyValueLabel({ key: "LF", value: 2, label: "LF" }),
    new KeyValueLabel({ key: "CRLF", value: 3, label: "CRLF" })
];

const booleanTypes:KeyValueLabel[] = [
    new KeyValueLabel({ key: "", value : kAll, label : kAll}),
    new KeyValueLabel({ key: kTrue, value: kTrue, label: kTrue}),
    new KeyValueLabel({ key: kFalse, value: kFalse, label: kFalse})
];

const Label_Van_ID = "NETWORK";
const Label_VanExt = "FILE EXTENSION";
const Label_VanType = "TYPE";
const Label_VanFTPSite = "HOST NAME / ADDRESS";
const Label_VanConfig = "CONFIGURATION DOCUMENT";
const Label_VanMailbox = "MAILBOX / LOGIN";

export interface INetworkListViewProps
{
    // redux
    vpnetworksReducer:any,
    vpnetworkGetAll:any,
    vpnetworkDelete:any,
}

export interface INetworkListViewState
{
    viewMode:string,
    pageSize:number,
    page:number,
    modal:boolean,
    networkEdit:INetwork,
    isNew:boolean,
    collapseAddNew:boolean,
    networkList:INetwork[],
    networkListCount:number,
    loading:boolean,
    sorted:SortDescriptor[],
    filtered:FilterDescriptor[],
    // Filter fields
    Van_ID:string,
    VanExt:string,
    VanPassive:boolean,
    VanBinary:boolean,
    VanConfig:string,
    VanMailbox:string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class NetworkListView extends React.Component<INetworkListViewProps, INetworkListViewState> {
    
    constructor(props:INetworkListViewProps) {
        super(props);
        this.state = {
            viewMode: 'cards',
            pageSize:10,
            page:1,
            modal: false,
            networkEdit: new XNetwork.CNetwork(),
            isNew: false,
            collapseAddNew: false,
            networkList: [],
            networkListCount: 0,
            loading: true,
            sorted: [{desc: false,id: XNetwork.kNetwork_Van_ID}],
            filtered: [],
            Van_ID:"",
            VanExt:"",
            VanPassive: false,
            VanBinary: false,
            VanConfig: "",
            VanMailbox: "",
        };

        this.updateFilter = this.updateFilter.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.newtworkAdd = this.newtworkAdd.bind(this);
        this.networkEdit = this.networkEdit.bind(this);
        this.networkDelete = this.networkDelete.bind(this);
        this.networkClone = this.networkClone.bind(this);
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
        this.handleVanTypeFilterChange = this.handleVanTypeFilterChange.bind(this);
        this.handleVanTypeChange = this.handleVanTypeChange.bind(this);
        this.handleVanPassiveFilterChange = this.handleVanPassiveFilterChange.bind(this);
        this.handleVanBinaryFilterChange = this.handleVanBinaryFilterChange.bind(this);
        this.handleVanAppendCRLFChange = this.handleVanAppendCRLFChange.bind(this);
        }
 

    public componentWillMount() {
        this.query(1,10);
    }


    public componentWillReceiveProps(newProps) {
        this.setState({
            networkList: ((newProps.vpnetworksReducer) as IvpNetworkState).networkList,
            networkListCount: ((newProps.vpnetworksReducer) as IvpNetworkState).networkListCount,
            loading : ((newProps.vpnetworksReducer) as IvpNetworkState).loading
          });
    }

    public render() {
        const { loading, pageSize, sorted, filtered } = this.state;
        let { networkList } = this.state;

        if (this.state.modal){
            return <NetworkView itemId={this.state.networkEdit.Van_ID} item={this.state.networkEdit} isNew={this.state.isNew} toggleModal={this.toggleModal} />
        }

        if (filtered.length > 0) {   // Filter on each column with a value
            filtered.map((column) => {
                if (typeof (column.value) === 'number') {
                    networkList = _.filter(networkList, item => item[column.id] === column.value);
                }
                else if (typeof (column.value) === 'boolean') {
                    networkList = _.filter(networkList, item => item[column.id] === column.value);
                }
                else {
                    networkList = networkList.filter(item => _.includes(String(item[column.id]).toLowerCase(), String(column.value).toLowerCase()));
                }
            });
        }

        if (sorted.length > 0) {   // Implement the multi-sort with lodash
            networkList = _.orderBy(networkList, sorted.map((column) => column.id), sorted.map((column) => column.desc ? "desc" : "asc"));
        }

        const tablePageSize = Math.min(networkList.length, pageSize); // Only show rows with data in the table

        return (
            <div>
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
                                total={this.state.networkListCount}
                                />
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center" basis="120" wrap={true}>
                            <Tooltip title="Add">
                                <FaPlusCircle onClick={() => this.newtworkAdd()} size={ICON_SIZE} color={ICON_COLOR} style={{marginRight: 12}}/>
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
                                            label={Label_Van_ID}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XNetwork.kNetwork_Van_ID}
                                                prefix={this.getSortButton(XNetwork.kNetwork_Van_ID)}
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
                                                name={XNetwork.kNetwork_VanExt}
                                                prefix={this.getSortButton(XNetwork.kNetwork_VanExt)}
                                                value={this.state.VanExt}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_VanType}
                                            style={{ width: '100%' }}
                                        >
                                            <Select 
                                                onChange={this.handleVanTypeChange}
                                                defaultValue={networkVanTypeAllValue}
                                            >
                                                {networkVanTypes.map((option)=><Select.Option key={option.key} value={option.value}>{option.label}</Select.Option>)} 
                                            </Select>
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_VanFTPSite}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XNetwork.kNetwork_VanFTPsite}
                                                prefix={this.getSortButton(XNetwork.kNetwork_VanFTPsite)}
                                                value={this.state.VanFTPsite}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_VanConfig}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XNetwork.kNetwork_VanConfig}
                                                prefix={this.getSortButton(XNetwork.kNetwork_VanConfig)}
                                                value={this.state.VanConfig}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                        <Row><Col>
                                        <Form.Item
                                            {...FormItemLayout}
                                            colon={false}
                                            label={Label_VanMailbox}
                                            style={{ width: '100%' }}
                                        >
                                            <Input
                                                name={XNetwork.kNetwork_VanMailbox}
                                                prefix={this.getSortButton(XNetwork.kNetwork_VanMailbox)}
                                                value={this.state.VanMailbox}
                                                onChange={this.handleFilterChange}
                                            />
                                        </Form.Item>
                                        </Col></Row>
                                    </Form>
                                    </Container>
                                </Card>
                                <Row>
                                    {networkList.map((item) =>
                                        <Col key={item.Van_ID}>
                                            <Card outline={false}>
                                                <CardHeader>
                                                    {item.Van_ID}
                                                    <div className="card-header-actions">
                                                        <Tooltip title='Edit'>
                                                            <FaEdit onClick={() => this.networkEdit(item)} size={ICON_SMALL} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                        </Tooltip>
                                                        <Tooltip title='Delete'>
                                                            <FaTimesCircle onClick={() => this.networkDelete(item)} size={ICON_SMALL} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                        </Tooltip>
                                                        <Tooltip title='Clone'>
                                                            <FaClone onClick={() => this.networkClone(item)} size={ICON_SMALL} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                        </Tooltip>
                                                    </div> 
                                                </CardHeader>
                                                <CardBody>
                                                    <Container>
                                                        <Form layout="vertical">
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_Van_ID}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.Van_ID}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_VanExt}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.VanExt}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_VanType}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.VanType}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_VanFTPSite}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.VanFTPsite}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_VanConfig}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.VanConfig}
                                                                </Form.Item>
                                                            </Col></Row>
                                                            <Row><Col>
                                                                <Form.Item
                                                                    label={Label_VanMailbox}
                                                                    style={{ width: '100%' }}
                                                                >
                                                                    {item.VanMailbox}
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
                                                <Button type="primary" shape="circle" size="small" style={{marginLeft:2}} icon="edit"  onClick={() => this.networkEdit(row.original)} />
                                            </Tooltip>
                                            <Tooltip title='Delete'>
                                                <Button type="primary" shape="circle" size="small" style={{marginLeft:2}} icon="delete" onClick={() => this.networkDelete(row.original)} />
                                            </Tooltip>
                                            <Tooltip title='Clone'>
                                                <Button type="primary" shape="circle" size="small" style={{marginLeft:2}} icon="copy" onClick={() => this.networkClone(row.original)} />    
                                            </Tooltip>
                                        </div>
                                    )
                                },
                                {
                                    Header: Label_Van_ID,
                                    accessor: XNetwork.kNetwork_Van_ID,
                                    minWidth: 20
                                },
                                {
                                    Header: Label_VanExt,
                                    accessor: XNetwork.kNetwork_VanExt,
                                    minWidth: 15
                                },
                                {
                                    Header:'PASSIVE',
                                    accessor: XNetwork.kNetwork_VanPassive,
                                    minWidth: 70,
                                    maxWidth: 70,
                                    style: {textAlign:'center'},
                                    Cell: row =>
                                    {
                                        return (
                                            <Checkbox checked={row.original.VanPassive} />
                                        )
                                    },
                                    Filter: ({ filter, onChange }) =>
                                    <Select
                                        style={{ minWidth: 60 }}
                                        defaultValue={kAll}
                                        onChange={this.handleVanPassiveFilterChange}
                                    >
                                        {booleanTypes.map((option)=><Select.Option key={option.key} value={option.value}>{option.label}</Select.Option>)}
                                    </Select>
                                },
                                {
                                    Header: "BINARY",
                                    accessor: XNetwork.kNetwork_VanBinary,
                                    minWidth: 70,
                                    maxWidth: 70,
                                    style: {textAlign:'center'},
                                    Cell: row => {
                                        return (
                                            <Checkbox checked={row.original.VanBinary} />
                                        )
                                    },
                                    Filter: ({ filter, onChange }) =>
                                    <Select
                                        style={{ minWidth: 60 }}
                                        defaultValue={kAll}
                                        onChange={this.handleVanBinaryFilterChange}
                                    >
                                        {booleanTypes.map((option)=><Select.Option key={option.key} value={option.value}>{option.label}</Select.Option>)}
                                    </Select>
                                },
                                {
                                    Header: "TERMINATOR SUFFIX",
                                    accessor: XNetwork.kNetwork_VanAppendCRLF,
                                    minWidth: 20,
                                    Cell:row => { 
                                        const xx = networkTerminatorSuffix.find((z) => Number(z.value) === Number(selectGetValue(networkTerminatorSuffix, row.original.VanAppendCRLF)));
                                        return xx === undefined ? '' : xx.label;
                                    },
                                    Filter: ({ filter, onChange }) =>
                                    <Select
                                        onChange={this.handleVanAppendCRLFChange}
                                        style={{minWidth: 110}}
                                        defaultValue={networkTerminatorSuffixAllValue}
                                    >
                                        {networkTerminatorSuffix.map((option)=><Select.Option key={option.key} value={option.value}>{option.label}</Select.Option>)}   
                                    </Select>
                                },
                                {
                                    Header: Label_VanType,
                                    accessor: XNetwork.kNetwork_VanType,
                                    minWidth: 20,
                                    Cell: row => {
                                        const xx = networkVanTypes.find((z) => Number(z.value) === Number(selectGetValue(networkVanTypes, row.original.VanType)));
                                        return xx === undefined ? '' : xx.label;
                                    },
                                    Filter: ({ filter, onChange }) =>
                                    <Select
                                        onChange={this.handleVanTypeChange}
                                        style={{minWidth: 110}}
                                        defaultValue={networkVanTypeAllValue}
                                    >
                                        {networkVanTypes.map((option)=><Select.Option key={option.key} value={option.value}>{option.label}</Select.Option>)}   
                                    </Select>
                                },
                                {
                                    Header: Label_VanConfig,
                                    accessor: XNetwork.kNetwork_VanConfig,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_VanFTPSite,
                                    accessor: XNetwork.kNetwork_VanFTPsite,
                                    minWidth: 15
                                },
                                {
                                    Header: Label_VanMailbox,
                                    accessor: XNetwork.kNetwork_VanMailbox,
                                    minWidth: 15
                                },
                                {
                                    Header: "DOWNLOAD LOCATION",
                                    accessor: XNetwork.kNetwork_VanSdown,
                                    minWidth: 15
                                },
                                {
                                    Header: "UPLOAD LOCATION",
                                    accessor: XNetwork.kNetwork_VanSup,
                                    minWidth: 15
                                },
                                {
                                    Header: "DIRECTORY / LIST LOCATION",
                                    accessor: XNetwork.kNetwork_VanSdir,
                                    minWidth: 15
                                },
                                {
                                    Header: "UPLOAD FILE PATTERN",
                                    accessor: XNetwork.kNetwork_UploadFilePattern,
                                    minWidth: 15
                                },
                            ]}
                            manual={false} 
                            data={networkList}
                            loading={loading}
                            loadingText= "Please wait, retrieving list of networks..."
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
                            getNoDataProps={() => {
                                return { style: { display: 'none' } };
                              }}
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

    private handleVanPassiveFilterChange(value: string) {
        if (value !== kAll) {
            this.updateFilter(XNetwork.kNetwork_VanPassive, value === kTrue);
        }
        else {
            // Remove the current filter for this column if there is one
            this.clearFilter(XNetwork.kNetwork_VanPassive);
        }
    }

    private handleVanBinaryFilterChange(value: string) {

        if (value !== kAll) {
            this.updateFilter(XNetwork.kNetwork_VanBinary, value === kTrue);
        }
        else {
            // Remove the current filter for this column if there is one
            this.clearFilter(XNetwork.kNetwork_VanBinary);
        }
    }

    private handleVanTypeChange(value: number) {
        if (value !== networkVanTypeAllValue) {
            this.updateFilter(XNetwork.kNetwork_VanType, value);
        }
        else {
            // Remove the current filter for this column if there is one
            this.clearFilter(XNetwork.kNetwork_VanType);
        }
    }

    private handleVanAppendCRLFChange(value: number) {
        if (value !== networkTerminatorSuffixAllValue) {
            this.updateFilter(XNetwork.kNetwork_VanAppendCRLF, value);
        }
        else {
            // Remove the current filter for this column if there is one
            this.clearFilter(XNetwork.kNetwork_VanAppendCRLF);
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
        this.props.vpnetworkGetAll(params);
    }

    private requery(pageSize:number)
    {
        this.setState({ page: 1 });
        this.query(1, pageSize);
    }

    private newtworkAdd()
    {
        this.setState({
            networkEdit:new XNetwork.CNetwork(),
            modal: true,
            isNew: true
        });
    }

    private networkEdit(network:INetwork)
    {
        this.setState({
            networkEdit: network,
            modal: true,
            isNew: false
        });      
    }

    private networkDelete(network:INetwork)
    {
        this.props.vpnetworkDelete(network); 
    }

    private networkClone(network)
    {
        const clone : INetwork = JSON.parse(JSON.stringify(network));
        clone.Van_ID = clone.Van_ID.substring(0, XNetwork.INetwork_Van_ID_length-1) + "#";  
        this.setState({
            networkEdit: clone,
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

    private handleVanTypeFilterChange(value: number) {
        this.handleVanTypeChange(value);
    }
}

// Name is the name of the reducer
const mapStateToProps = ({vpnetworksReducer}) => {
    return {vpnetworksReducer}
};

const mapActionsToProps = {
    vpnetworkGetAll,
    vpnetworkDelete,
};

export default connect(mapStateToProps, mapActionsToProps)(NetworkListView);