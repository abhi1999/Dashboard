import * as React from "react";
import ReactTable from "react-table";
import { Select } from 'antd';
import { ToString } from '../../utils/Conversion';

import GridActionMenu from './../../components/widgets/GridActionMenu';
import GridFilter from './../../components/widgets/GridFilter';
import GridFilterPills from './../../components/widgets/GridFilterPills';

const Option = Select.Option;

function ShipToTableView(props) {
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
                            <GridActionMenu items={["Edit", "Delete"]}
                                onItemClick={(item) => {
                                    switch (item) {
                                        case "Edit":
                                            props.shipToEdit(row.original)
                                            break;

                                        case "Delete":
                                            props.shipToDelete(row.original)
                                            break;

                                    }
                                }} />
                        )
                    },
                    {
                        Header: "Ship To ID",
                        accessor: "ShipTo_ID",
                        // minWidth: 100                            
                    },
                    {
                        Header: "ERP Cust ID",
                        accessor: "ShipTo_CustID",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "ERP XRef",
                        accessor: "ShipTo_Xref",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "Ship To DC",
                        accessor: "ShipTo_DC",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "Name",
                        accessor: "ShipTo_Name",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "Address",
                        accessor: "ShipTo_Address",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "Address2",
                        accessor: "ShipTo_Address2",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "City",
                        accessor: "ShipTo_City",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "State",
                        accessor: "ShipTo_State",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "Postal Code",
                        accessor: "ShipTo_Zip",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "Country",
                        accessor: "ShipTo_Country",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "Store Name",
                        accessor: "ShipTo_StoreName",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "Ship Date Qual",
                        accessor: "ShipTo_ShipDateQual",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "Group ID",
                        accessor: "ShipTo_GroupID",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "Location",
                        accessor: "Loc_Override",
                        // minWidth: 100                            
                    
                    },
                    {
                        Header: "Ship Via",
                        accessor: "ShipTo_Carrier",
                        // minWidth: 100                            
                    
                    },
                    {
                        id: "checkbox",
                        Header: "RFID",
                        accessor: "ShipTo_rfid",
                        // minWidth: 100,                            

                        Cell: ({ original }) => {
							return (
								<input
									type="checkbox"
									className="checkbox"
									checked={original.ShipTo_rfid}
                                    // onChange={() => this.toggleRow(original.firstName)}
                                    readOnly={true}
								/>
							);
						},
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

export default ShipToTableView