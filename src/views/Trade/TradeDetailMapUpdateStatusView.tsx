import * as React from "react";
import ReactTable from "react-table";
import 'bootstrap/dist/css/bootstrap.min.css';
import { enumTransformationType, enumTransformationUpdateStatus } from '../../constants/MapSetting'

function TradeDetailMapUpdateStatusView(props) {

    return (
        <div>
            <ReactTable
                columns={[
                    {
                        Header: "Map",
                        accessor: "MapName"
                    },
                    {
                        Header: "Type",
                        accessor: "Type",
                        Cell: ({ row }) => {
                            return (
                                <div>
                                    {(row.Type === enumTransformationType.Map ? "Map" : 
                                     (row.Type === enumTransformationType.Loop ? "Loop": "Token"))
                                    }
                                </div>
                            )
                        }
                    },
                    {
                        Header: "Status",
                        accessor: "Status",
                        Cell: ({ row }) => {
                            return (
                                <div>
                                    {(row.Status === enumTransformationUpdateStatus.Newer ? "Newer Map Installed" : 
                                     (row.Status === enumTransformationUpdateStatus.Same ? "Latest Map Already Installed": "Map Not Found"))
                                    }
                                </div>
                            )
                        }
                    },
                ]}
                manual={false}
                minRows={0}
                data={props.mapList}
                sortable={false}
                showPagination={false}
                className="-striped -highlight"
            />
        </div>
    )
}

export default TradeDetailMapUpdateStatusView