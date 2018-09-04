import * as React from "react";
import { Card } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaTimesCircle, FaEdit, FaClone, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Input } from 'antd';

function getSortButton(props, columnId)
{
    // Get the relevant column from the sorted array
    const sortedColumn = props.sorted.filter((column)=>column.id===columnId);

    // This is a tri-state toggle
    if(sortedColumn.length>0)
    {
        if(sortedColumn[0].desc)
        {
            return <FaSortDown onClick={() => props.toggleSortMode(columnId)} color={ICON_COLOR} />;
        }
        else
        {
            return <FaSortUp onClick={() => props.toggleSortMode(columnId)}  color={ICON_COLOR} />;
        }
    }
    else
    {
        return <FaSort onClick={() => props.toggleSortMode(columnId)}  color={ICON_COLOR} />;
    }
}

function FreightCodeCardView(props) {
    return (
        <div>
            <FlexView width='100%' wrap={true} >
                <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                    <span/>
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                    <Input
                        placeholder="Freight Code"
                        name="Frt_Code"
                        prefix={getSortButton(props, "Frt_Code")}
                        // value={this.state.Frt_Code}
                        onChange={props.handleFilterChange}
                    />
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="300" wrap={true}>
                    <Input
                        placeholder="Description"
                        name="Description"
                        prefix={getSortButton(props, "Description")}
                        // value={this.state.Description}
                        onChange={props.handleFilterChange}
                    />
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                    <Input
                        placeholder="NMFC"
                        name="NMFC"
                        prefix={getSortButton(props, "NMFC")}
                        // value={this.state.NMFC}
                        onChange={props.handleFilterChange}
                    />
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                    <Input
                        placeholder="Class"
                        name="Class"
                        prefix={getSortButton(props, "Class")}
                        // value={this.state.Class}
                        onChange={props.handleFilterChange}
                    />
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                    <Input
                        placeholder="HazMat"
                        name="HazMat"
                        prefix={getSortButton(props, "HazMat")}
                        // value={this.state.HazMat}
                        onChange={props.handleFilterChange}
                    />
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                    <Input
                        placeholder="Sub"
                        name="Sub"
                        prefix={getSortButton(props, "Sub")}
                        // value={this.state.Sub}
                        onChange={props.handleFilterChange}
                    />
                </FlexView>
                <FlexView hAlignContent="right" vAlignContent="center" grow={true} wrap={true}>
                    <span/>
                </FlexView>
            </FlexView>

            {props.list.map((item) =>
                <Card key={item.Id} body={true} outline={true} style={{ width: '100%', marginBottom: '1px' }}>
                    <FlexView width='100%' wrap={true}>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            <FaEdit onClick={() => props.freightCodeEdit(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                            <FaTimesCircle onClick={() => props.freightCodeDelete(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                            <FaClone onClick={() => props.freightCodeClone(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.Frt_Code}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="300" wrap={true}>
                            {item.Description}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.NMFC}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.Class}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.HazMat ? "True" : "False"}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.Sub}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" grow={true} wrap={true}>
                            <span/>
                        </FlexView>
                    </FlexView>
                </Card>
            )}
        </div>
    )
}

export default FreightCodeCardView
