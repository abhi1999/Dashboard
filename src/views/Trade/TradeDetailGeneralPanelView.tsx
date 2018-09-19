import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import Divider from '@material-ui/core/Divider';
import { Form, Input, InputNumber, Row, Col, Collapse } from 'antd'
import { Select, Checkbox, Button, Icon, message } from 'antd'
import ReactTable from "react-table";
import { FaSyncAlt, FaTimesCircle, FaEdit, FaPlusCircle, FaClone } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormItem = Form.Item;
const Option = Select.Option;

function TradeDetailGeneralPanelView(props) {
    return (
        <div>
            <Row gutter={8} >
                <Col span={12}>
                    <FormItem label="Company Name" >
                        <Input
                            type="text"
                            name="TP_Name"
                            value={StringChecker(props.tradingPartner.TP_Name)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
                <Col span={12}>
                    <FormItem
                        label="ERP ID"
                        validateStatus={props.fieldStatus.find(item => item.field === "TP_ID")!.value}
                    >
                        <Input
                            type="text"
                            name="TP_ID"
                            value={StringChecker(props.tradingPartner.TP_ID)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row gutter={8}>
                <Col span={6}>
                    <FormItem label="Qualifier">
                        <Input
                            type="text"
                            name="TP_PartQ"
                            value={StringChecker(props.tradingPartner.TP_PartQ)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
                <Col span={6}>
                    <FormItem label="ID">
                        <Input
                            disabled={true}
                            name="TP_PartID"
                            value={StringChecker(props.tradingPartner.TP_PartID)}
                        />
                    </FormItem>
                </Col>
                <Col span={12}>
                    <FormItem label="Partner Type">
                        <Select
                            style={{ width: "100%" }}
                            value={props.tradingPartner.KitTypeID}
                            onChange={props.handleKitTypeChange}
                        >
                            {props.partnerList.map((item) => {
                                return (
                                    <Option key={item.KitTypeID} value={item.KitTypeID}>{item.KitTypeDesc}</Option>
                                )
                            })
                            }

                        </Select>
                    </FormItem>
                </Col>
            </Row>
            <Row gutter={8}>
                <Col span={12}>
                    <FormItem label="Group ID">
                        <Input
                            disabled={true}
                            name="TP_GroupID"
                            value={StringChecker(props.tradingPartner.TP_GroupID)}
                        />
                    </FormItem>
                </Col>
                <Col span={12}>
                    <FormItem label="Status">
                        <Select style={{ width: '100%' }}
                            value={props.tradingPartner.TP_Status}
                            onChange={props.handleStatusChange}
                        >
                            {props.statusList.map((item) => {
                                return (
                                    <Option key={item.id} value={item.id}>{item.status}</Option>
                                )
                            })
                            }
                        </Select>
                    </FormItem>
                </Col>
            </Row>
            <Row gutter={8}>
                <Col span={24}>
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
                                Cell: row => (
                                    <div>
                                        <FaEdit onClick={() => props.handleDocumentsUsedEdit(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                        <FaTimesCircle onClick={() => props.handleDocumentsUsedDelete(row.original)}  size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                    </div>
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
                        className="-striped -highlight"
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
                                                        Cell: row => (
                                                            <div>
                                                                <FaSyncAlt onClick={() => props.handleGetLatestMaps(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                                <FaEdit onClick={() => props.handleTransObjectEdit(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                                <FaTimesCircle size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                            </div>
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
                                                className="-striped -highlight"
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            )
                        }}
                    />
                </Col>
            </Row>
        </div>
    )
};





export default TradeDetailGeneralPanelView
