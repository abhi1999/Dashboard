import * as React from "react";
import ReactTable from "react-table";
import { FaTimesCircle, FaEdit, FaClone } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Select } from 'antd';
import { ToString } from '../../utils/Conversion';
import GridActionMenu from './../../components/widgets/GridActionMenu';

import { ButtonDropdown, Container, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const Option = Select.Option;

function TradeTableView(props) {

    //                                <FaEdit onClick={() => props.tradeEdit(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
    //                              <FaTimesCircle onClick={() => props.tradeDelete(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
    //                            <FaClone onClick={() => props.tradeClone(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />


    return (
        <div>
            <ReactTable
                columns={[
                    {
                        sortable: false,
                        filterable: false,
                        width: 50,
                        resizable: false,
                        className: 'action-menu',
                        Cell: row => (
                            <GridActionMenu items={["Edit", "Clone", "Delete"]}
                                onItemClick={(item) => {
                                    switch (item) {
                                        case "Edit":
                                            props.tradeEdit(row.original)
                                            break;
                                        case "Clone":
                                            props.tradeClone(row.original)
                                            break;
                                        case "Delete":
                                            props.tradeDelete(row.original)
                                            break;
                                    }
                                }} />
                        )
                    },
                    {
                        Header: "Trading Partner",
                        accessor: "TP_Name"
                    },
                    {
                        Header: "Qualifier",
                        accessor: "TP_PartQ"
                    },
                    {
                        Header: "ISA ID",
                        accessor: "TP_PartID"
                    },
                    {
                        Header: "GS ID",
                        accessor: "TP_GroupID"
                    },
                    {
                        Header: "ERP ID",
                        accessor: "TP_ID"
                    },
                    {
                        Header: "Partner Type",
                        accessor: "KitTypeID",
                        sortable: true,
                        filterable: false,
                        Cell: ({ row }) => {
                            return (
                                <div>{(props.partnerList.find(partner => partner.KitTypeID === row.KitTypeID) === undefined ? " "
                                    : props.partnerList.find(partner => partner.KitTypeID === row.KitTypeID)!.KitTypeDesc)}</div>
                            )
                        },
                        Filter: ({ filter, onChange }) =>
                            <Select
                                style={{ width: "100%" }}
                                value={props.kitTypeID}
                                onChange={props.handleKitTypeIDFilterChange}
                            >
                                <Option key="all" value="all">All</Option>
                                {props.partnerList.map((item) => {
                                    return (
                                        <Option key={item.KitTypeID} value={ToString(item.KitTypeID)}>{item.KitTypeDesc}</Option>
                                    )
                                })
                                }
                            </Select>
                    },
                    {
                        Header: "Status",
                        accessor: "TP_Status",
                        Cell: ({ row }) => {
                            return (
                                <div>{(props.statusList.find(item => item.id === row.TP_Status) === undefined ? " " :
                                    props.statusList.find(item => item.id === row.TP_Status)!.status)}</div>
                            )
                        },
                        Filter: ({ filter, onChange }) =>
                            <Select
                                style={{ width: "100%" }}
                                value={props.tpStatus}
                                onChange={props.handleStatusFilterChange}
                            >
                                <Option key="all" value="all">All</Option>
                                {props.statusList.map((item) => {
                                    return (
                                        <Option key={item.id} value={item.id}>{item.status}</Option>
                                    )
                                })
                                }
                            </Select>
                    }

                ]}
                manual={false}
                data={props.list}
                loading={props.loading}
                sortable={true}
                sorted={props.sorted}
                onSortedChange={props.onSortChange}
                filterable={false}
                filtered={props.filtered}
                onFilteredChange={props.onFilteredChange}
                defaultFilterMethod={(filter, row) => ToString(row[filter.id]).toLowerCase().includes(ToString(filter.value).toLowerCase())}
                showPagination={false}
                pageSize={props.pageSize}
                className="-highlight table-container"
            />
        </div>
    )
}

export default TradeTableView