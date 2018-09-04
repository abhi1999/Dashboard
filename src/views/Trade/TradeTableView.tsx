import * as React from "react";
import ReactTable from "react-table";
import { FaTimesCircle, FaEdit, FaClone } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Input, Select } from 'antd';
import { kitTypeGetAll } from "../../actions/KitTypeAction";
const Option = Select.Option;

function TradeTableView(props) {
    
    return (
        <div>
            <ReactTable
                columns={[
                    {
                        sortable: false,
                        filterable: false,
                        width: 120,
                        Cell: row => (
                            <div>
                                <FaEdit onClick={() => props.tradeEdit(row.original)}  size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                                <FaTimesCircle onClick={() => props.tradeDelete(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                                <FaClone onClick={() => props.tradeClone(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft:12}}/>    
                            </div>
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
                        Cell:({row})=>{
                            return(
                                <div>{(props.partnerList.find(partner => partner.KitTypeID === row.KitTypeID) === undefined ? " " 
                                : props.partnerList.find(partner => partner.KitTypeID === row.KitTypeID)!.KitTypeDesc)}</div>
                            )
                        },
                        Filter: ({ filter, onChange }) =>
                            <Select 
                                style={{ width: "100%" }}
                                value={filter ? filter.value : "all"}
                                onChange={props.handleKitTypeIDFilterChange}
                                >
                                <Option key="all" value="all">All</Option>
                                <Option key="0" value="0">Customer</Option>
                                <Option key="1" value="1">Vendor</Option>
                                <Option key="2" value="2">Warehouse</Option>
                                <Option key="3" value="3">A/R Factor</Option>
                                <Option key="4" value="4">Carrier</Option>
                                {
                                    /*
                                props.kitType.kitTypeList.map((item:any) => {
                                    return (
                                    <Option key={item.KitTypeID} value={item.KitTypeID}>{item.KitTypeDesc}</Option>
                                    );
                                })
                                */
                                }
                            </Select>
                    },
                    {
                        Header: "Status",
                        accessor:"TP_Status",
                        Cell:({row})=>{
                            return(
                                <div>{(props.statusList.find(item => item.id === row.TP_Status) === undefined ? " " : 
                                      props.statusList.find(item => item.id === row.TP_Status)!.status)}</div>
                            )
                        }
                    }

                ]}
                manual={false} 
                data={props.list}
                loading={props.loading}
                sortable={true}
                sorted={props.sorted}
                onSortedChange={props.onSortChange}
                filterable={true}
                filtered={props.filtered}
                onFilteredChange={props.onFilteredChange}
                defaultFilterMethod={(filter, row) => String(row[filter.id]).toLowerCase().includes(filter.value.toLowerCase())}
                showPagination={false}
                pageSize={props.pageSize}
                className="-striped -highlight"
           />
        </div>
    )
}

export default TradeTableView