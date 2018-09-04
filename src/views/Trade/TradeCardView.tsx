import * as React from "react";
import { Card } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaTimesCircle, FaEdit, FaClone, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Input, Select } from 'antd';
const Option = Select.Option;

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

function TradeCardView(props) {
    return (
        <div>
            <FlexView width='100%' wrap={true} >
                <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                    <span/>
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="300" wrap={true}>
                    <Input
                        placeholder="Trading Partner"
                        name="TP_Name"
                        prefix={getSortButton(props, "TP_Name")}
                        onChange={props.handleFilterChange}
                    />
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="100" wrap={true}>
                    <Input
                        placeholder="Qualifier"
                        name="TP_PartQ"
                        prefix={getSortButton(props, "TP_PartQ")}
                        onChange={props.handleFilterChange}
                    />
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                    <Input
                        placeholder="ISA ID"
                        name="TP_PartID"
                        prefix={getSortButton(props, "TP_PartID")}
                        onChange={props.handleFilterChange}
                    />
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                    <Input
                        placeholder="GS ID"
                        name="TP_GroupID"
                        prefix={getSortButton(props, "TP_GroupID")}
                        onChange={props.handleFilterChange}
                    />
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                    <Input
                        placeholder="ERP ID"
                        name="TP_ID"
                        prefix={getSortButton(props, "TP_ID")}
                        onChange={props.handleFilterChange}
                    />
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                    <Select 
                        style={{ width: "100%" }}
                        value={props.kitTypeIDFilter}
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
                </FlexView>
                <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                    <Input
                        placeholder="Status"
                        name="TP_Status"
                        prefix={getSortButton(props, "TP_Status")}
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
                            <FaEdit onClick={() => props.tradeEdit(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                            <FaTimesCircle onClick={() => props.tradeDelete(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                            <FaClone onClick={() => props.tradeClone(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="300" wrap={true}>
                            {item.TP_Name}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="100" wrap={true}>
                            {item.TP_PartQ}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.TP_PartID}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.TP_GroupID}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {item.TP_ID}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {(props.partnerList.find(partner => partner.KitTypeID === item.KitTypeID) === undefined ? " " :
                              props.partnerList.find(partner => partner.KitTypeID === item.KitTypeID)!.KitTypeDesc)}
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" basis="120" wrap={true}>
                            {(props.statusList.find(sl => sl.id === item.TP_Status) === undefined ? " " : 
                              props.statusList.find(sl => sl.id === item.TP_Status)!.status)}
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

export default TradeCardView
