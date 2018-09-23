import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import Divider from '@material-ui/core/Divider';
import { Form, Input, InputNumber, Row, Col, Collapse } from 'antd'
import { Select, Checkbox, Button, Icon, message } from 'antd'
import { ButtonDropdown, Container, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import ReactTable from "react-table";
import GridActionMenu from './../../components/widgets/GridActionMenu';
import { FaSyncAlt, FaTimesCircle, FaEdit, FaPlusCircle, FaClone } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form as RSForm, FormGroup as RSFormGroup, Label as RSLabel, Col as RSCol, Input as RSInput, Row as RSRow } from 'reactstrap';
import * as xTrade from "../../constants/edidb/CTrade"

const FormItem = Form.Item;
const Option = Select.Option;

function TradeDetailGeneralPanelView(props) {
    return (
        <div>
            <RSForm row={true}>
                <RSRow>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_TP_Name}>Company Name</RSLabel>
                            <RSInput validateStatus={props.tradingPartner.TP_Name}
                                id={xTrade.kTrade_TP_Name}
                                value={StringChecker(props.tradingPartner.TP_Name)}
                                onChange={props.handleInputChange} />
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_TP_ID}>ERP ID</RSLabel>
                            <RSInput validateStatus={props.tradingPartner.TP_ID}
                                id={xTrade.kTrade_TP_ID}
                                value={StringChecker(props.tradingPartner.TP_ID)}
                                onChange={props.handleInputChange} />
                        </RSFormGroup>
                    </RSCol>

                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_TP_PartQ}>Qualifier</RSLabel>
                            <RSInput validateStatus={props.tradingPartner.TP_PartQ}
                                id={xTrade.kTrade_TP_PartQ}
                                value={StringChecker(props.tradingPartner.TP_PartQ)}
                                onChange={props.handleInputChange} />
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_TP_PartID}>ID</RSLabel>
                            <RSInput
                                disabled={true}
                                id={xTrade.kTrade_TP_PartID}
                                value={StringChecker(props.tradingPartner.TP_PartID)}
                            />
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_KitTypeID}>Partner Type</RSLabel>
                            <RSInput type="select"
                                id={xTrade.kTrade_KitTypeID}
                                value={props.tradingPartner.KitTypeID}
                                // onChange={(e) => props.handleKitTypeChange(e.target.value)}
                                onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                            >
                                {props.partnerList.map((option) => <option key={option.KitTypeID} value={option.KitTypeID}>{option.KitTypeDesc}</option>)}
                            </RSInput>
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_TP_GroupID}>Group ID</RSLabel>
                            <RSInput
                                disabled={true}
                                id={xTrade.kTrade_TP_GroupID}
                                value={StringChecker(props.tradingPartner.TP_GroupID)}
                            />
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_KitTypeID}>Status</RSLabel>
                            <RSInput type="select"
                                id={xTrade.kTrade_TP_Status}
                                value={props.tradingPartner.TP_Status}
                                // onChange={(e) => props.handleStatusChange(e.target.value)}>
                                onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}>
                                {props.statusList.map((option) => <option key={option.id} value={option.id}>{option.status}</option>)}
                            </RSInput>
                        </RSFormGroup>
                    </RSCol>
                    {/* <Row>
                        <ReactTable
                            columns={[
                                {
                                    Header:
                                        <div>
                                            <FaPlusCircle onClick={() => props.handleDocumentsUsedAdd()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                        </div>,
                                    sortable: false,
                                    filterable: false,
                                    width: 120,
                                    resizable: false,
                                    className: 'action-menu',
                                    Cell: row => (
                                          <GridActionMenu items={["Edit", "Delete"]}
                                            onItemClick={(item) => {
                                                switch (item) {
                                                    case "Edit":
                                                        props.handleDocumentsUsedEdit(row.original)
                                                        break;
                                                    case "Delete":
                                                        props.handleDocumentsUsedDelete(row.original)
                                                        break;
                                                }
                                            }} />
                                    )
                                },
                                {
                                    Header: "DOC Group",
                                    accessor: "Doc_Group"
                                },
                                {
                                    Header: "Status",
                                    accessor: "TestProdInd",
                                    Cell: ({ row }) => {
                                        return (
                                            <div>
                                                {(row.TestProdInd === "T" ? "Test" : "Production")}
                                            </div>
                                        )
                                    }
                                },
                                {
                                    Header: "Qual",
                                    accessor: "PartnerQual"
                                },
                                {
                                    Header: "ID",
                                    accessor: "PartnerID"
                                },
                                {
                                    Header: "Group ID",
                                    accessor: "GroupID"
                                },
                                {
                                    Header: "Network",
                                    accessor: "Van_ID"
                                },

                            ]}
                            manual={false}
                            data={props.partnerDocGroupList}
                            sortable={false}
                            filterable={false}
                            showPagination={false}
                            pageSize={props.partnerDocGroupRowCount}
                            className="-highlight table-container"
                            getTrProps={(state, rowInfo) => {
                                return {
                                    onClick: (e) => {
                                        props.handleGetApiTransObjectList(rowInfo.original.DGID, rowInfo.original.TP_PartID)
                                    }
                                }
                            }}

                            expanded={props.expanded}
                            onExpandedChange={(newExpanded, index, event) =>
                                props.handleExpandedChange(newExpanded, index, event)
                            }
                            SubComponent={(subrow) => {
                                return (
                                    <div>
                                        <Row>
                                            <Col span={2} />
                                            <Col span={22}>
                                                <ReactTable
                                                    columns={[
                                                        {
                                                            sortable: false,
                                                            filterable: false,
                                                            width: 120,
                                                            resizable: false,
                                                            className: 'action-menu',
                                                            Cell: row => (
                                                                // <div>
                                                                //     <FaSyncAlt onClick={() => props.handleGetLatestMaps(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                                //     <FaEdit onClick={() => props.handleTransObjectEdit(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                                //     <FaTimesCircle size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                                // </div>


                                                                <GridActionMenu items={["Get Latest Map", "Edit", "Delete"]}
                                                                    onItemClick={(item) => {
                                                                        switch (item) {
                                                                            case "Get Latest Map":
                                                                                props.handleGetLatestMaps(row.original)
                                                                                break;
                                                                            case "Edit":
                                                                                props.handleTransObjectEdit(row.original)
                                                                                break;
                                                                        }
                                                                    }} />
                                                            )
                                                        },
                                                        {
                                                            Header: "Trans ID",
                                                            accessor: "TransID"
                                                        },
                                                        {
                                                            Header: "TDOC Name (Map)",
                                                            accessor: "TDocName",
                                                        },
                                                        {
                                                            Header: "Use Control Nums",
                                                            accessor: "UseControlNums",
                                                            Cell: ({ row }) => {
                                                                return (<Checkbox checked={row.UseControlNums} />)
                                                            }
                                                        },
                                                        {
                                                            Header: "Package Separately",
                                                            accessor: "PackageSeparately",
                                                            Cell: ({ row }) => {
                                                                return (<Checkbox checked={row.PackageSeparately} />)
                                                            }
                                                        },
                                                        {
                                                            Header: "Filename Layout",
                                                            accessor: "FilenameLayout",
                                                        },
                                                        {
                                                            Header: "Trans ID Import Date",
                                                            accessor: "TransIDImportDate",
                                                        },
                                                        {
                                                            Header: "Trans ID Version Date",
                                                            accessor: "TransIDObj_Date",
                                                        },
                                                        {
                                                            Header: "TDoc Import Date",
                                                            accessor: "TDocNameImportDate",
                                                        },
                                                        {
                                                            Header: "TDoc Import Date",
                                                            accessor: "TDocNameObj_Date",
                                                        },

                                                    ]}
                                                    manual={false}
                                                    minRows={0}
                                                    data={props.apiTransObjectList}
                                                    sortable={false}
                                                    filterable={false}
                                                    showPagination={false}
                                                    className="-highlight table-container"
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            }}
                        />
                    </Row> */}
                </RSRow>
            </RSForm>
        </div>
    )
};





export default TradeDetailGeneralPanelView
