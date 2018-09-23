import * as React from "react";
import ReactTable from "react-table";
import { Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { FaTimesCircle, FaEdit, FaClone } from 'react-icons/fa';
import { FaEllipsisV, } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Select } from 'antd';
import { ToString } from '../../utils/Conversion';

import GridActionMenu from './../../components/widgets/GridActionMenu';
import GridFilter from './../../components/widgets/GridFilter';
import GridFilterPills from './../../components/widgets/GridFilterPills';

const Option = Select.Option;

function ShipToTradeTableView(props) {

    return (
        <div>
            <ReactTable
                columns={[
                    {
                        sortable: false,
                        filterable: false,
                        width: 50,
                        resizable:false,
                        className:'action-menu',
                        Cell: row => (
                            <Button className="fa fa-ellipsis-v btn-toggle" caret={false} onClick={() => props.tradeToEdit(row.original)}/>
                            /*
                                <GridActionMenu items={["Edit"]} 
                                    onItemClick={(item)=>{switch(item){
                                        case "Edit":
                                            props.tradeToEdit(row.original)
                                            break;
                                }}}/>
                            */
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

export default ShipToTradeTableView