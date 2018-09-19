import * as React from "react";
import ReactTable from "react-table";
import { FaTimesCircle, FaEdit, FaClone } from 'react-icons/fa';
import { Select, Checkbox } from 'antd';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { ToString } from '../../utils/Conversion';

const Option = Select.Option;

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
                        // Header: "HazMat",
                        // id: "HazMat",
                        // accessor: h => (h.HazMat ? "True" : "False")

                        Header: "HazMat",
                        accessor: "HazMat",
                        sortable: true,
                        filterable: true,
                        Cell: ({ row }) => {
                            // This is where we could cause it to display in the table as something else
                            return (
                                // (row.HazMat ? "True" : "False")
                                // ToString(row.HazMat)
                                <Checkbox
                                    checked={row.HazMat}
                                />
                            )
                        },
                        Filter: ({ filter, onChange }) =>
                            <Select
                                style={{ width: "100%" }}
                                value={props.HazMat}
                                onChange={props.handleHazMatFilterChange}
                            >
                                <Option key="all" value="all">All</Option>
                                <Option key="true" value="true">True</Option>
                                <Option key="false" value="false">False</Option>
                            </Select>
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
                defaultFilterMethod={(filter, row) => ToString(row[filter.id]).toLowerCase().includes(ToString(filter.value).toLowerCase())}
                showPagination={false}
                pageSize={props.pageSize}
                className="-striped -highlight"
           />
        </div>
    )
}

export default FreightCodeTableView