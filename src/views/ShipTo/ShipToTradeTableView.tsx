import * as React from "react";
import ReactTable from "react-table";
import { FaTimesCircle, FaEdit, FaClone } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Select } from 'antd';
import { ToString } from '../../utils/Conversion';

const Option = Select.Option;

function ShipToTradeTableView(props) {

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
                                <FaEdit onClick={() => props.tradeToEdit(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
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
                defaultFilterMethod={(filter, row) => ToString(row[filter.id]).toLowerCase().includes(ToString(filter.value).toLowerCase())}
                showPagination={false}
                pageSize={props.pageSize}
                className="-striped -highlight"
            />
        </div>
    )
}

export default ShipToTradeTableView