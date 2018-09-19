import * as React from "react";
import ReactTable from "react-table";
import { FaTimesCircle, FaEdit, FaClone } from 'react-icons/fa';
import { Select } from 'antd';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { ToString } from '../../utils/Conversion';

const Option = Select.Option;

function ErrorCodeTableView(props) {

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
                                <FaEdit onClick={() => props.errorCodeEdit(row.original)}  size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                                <FaTimesCircle onClick={() => props.errorCodeDelete(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                                <FaClone onClick={() => props.errorCodeClone(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft:12}}/>    
                        </div>
                        )
                    },
                    {
                        Header: "Error Code",
                        accessor: "ErrCode"
                    },
                    {
                        Header: "Description",
                        accessor: "ErrDesc",
                        minWidth: 250
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

export default ErrorCodeTableView
