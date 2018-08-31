import * as React from "react";
import ReactTable from "react-table";
import { FaTimesCircle, FaEdit, FaClone } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';

function FreightCodeTableView(props) {

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
                                <FaEdit onClick={() => props.freightCodeEdit(row.original)}  size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                                <FaTimesCircle onClick={() => props.freightCodeDelete(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                                <FaClone onClick={() => props.freightCodeClone(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft:12}}/>    
                        </div>
                        )
                    },
                    {
                        Header: "Freight Code",
                        accessor: "Frt_Code"
                    },
                    {
                        Header: "Description",
                        accessor: "Description",
                        minWidth: 250
                    },
                    {
                        Header: "NMFC",
                        accessor: "NMFC"
                    },
                    {
                        Header: "Class",
                        accessor: "Class"
                    },
                    {
                        Header: "HazMat",
                        id: "HazMat",
                        accessor: h => (h.HazMat ? "True" : "False")
                    },
                    {
                        Header: "Sub",
                        accessor: "Sub"
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

export default FreightCodeTableView