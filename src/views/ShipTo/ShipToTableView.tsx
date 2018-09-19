import * as React from "react";
import ReactTable from "react-table";
import { FaTimesCircle, FaEdit, FaClone } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Select } from 'antd';
import { ToString } from '../../utils/Conversion';

import { Card } from 'reactstrap';
import FlexView from 'react-flexview';
import uuid from 'uuid-v4';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FaSyncAlt, FaPlusCircle, FaTable, FaList } from 'react-icons/fa';
// import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Pagination, Input } from 'antd';

const Option = Select.Option;

function ShipToTableView(props) {
    return (
        <div>
            {/*
            <Card body={true} outline={true} style={{ width: '100%' }}>
                <FlexView width='100%' wrap={true} style={{ marginBottom: 12 }}>
                    <FlexView hAlignContent="left" vAlignContent="center" basis="40" wrap={true}>
                        <FaSyncAlt onClick={() => props.requery()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                    </FlexView>
                    <FlexView hAlignContent="center" vAlignContent="center" grow={true} wrap={true}>
                        <Pagination
                            showSizeChanger={true}
                            onChange={props.onChangePage}
                            current={props.page}
                            pageSize={props.pageSize}
                            pageSizeOptions={['10', '50', '100']}
                            onShowSizeChange={props.onShowSizeChange}
                            total={props.shipToListCount}
                        />
                    </FlexView>
                    <FlexView hAlignContent="right" vAlignContent="center" basis="120" wrap={true}>
                        <FaPlusCircle onClick={() => props.shipToAdd()} size={ICON_SIZE} color={ICON_COLOR} style={{ marginRight: 12 }} />
                    </FlexView>
                </FlexView>
            </Card>
            */}
            <ReactTable
                columns={[
                    {
                        sortable: false,
                        filterable: false,
                        width: 90,
                        Cell: row => (
                            <div>
                                <FaEdit onClick={() => props.shipToEdit(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                <FaTimesCircle onClick={() => props.shipToDelete(row.original)} size={ICON_SIZE} color={ICON_COLOR} style={{marginLeft: 12}}/>
                            </div>
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

export default ShipToTableView