import * as React from "react";
import FlexView from 'react-flexview';
import { Card, CardHeader, CardBody, Row, Col as ColRS } from 'reactstrap';
import { FaTimesCircle, FaEdit, FaClone, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Form, Input, Select } from 'antd';
import { ToString } from '../../utils/Conversion';

const Option = Select.Option;
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 18 },
    wrapperCol: { span: 20 },
};

function getSortButton(props, columnId) {
    // Get the relevant column from the sorted array
    const sortedColumn = props.sorted.filter((column) => column.id === columnId);

    // This is a tri-state toggle
    if (sortedColumn.length > 0) {
        if (sortedColumn[0].desc) {
            return <FaSortDown onClick={() => props.toggleSortMode(columnId)} color={ICON_COLOR} />;
        }
        else {
            return <FaSortUp onClick={() => props.toggleSortMode(columnId)} color={ICON_COLOR} />;
        }
    }
    else {
        return <FaSort onClick={() => props.toggleSortMode(columnId)} color={ICON_COLOR} />;
    }
}

function TradeCardView(props) {
    return (
        <div>
            <Card body={true} outline={true} style={{ width: '100%' }}>
                <Form layout="vertical" style={{ marginTop: -10, marginBottom: 10 }}>

                    <FormItem {...formItemLayout} colon={false}>
                        <Input
                            placeholder="Trading Partner"
                            name="TP_Name"
                            prefix={getSortButton(props, "TP_Name")}
                            onChange={props.handleFilterChange}
                        />
                    </FormItem>
                    <FormItem {...formItemLayout} colon={false}>
                        <Input
                            placeholder="Qualifier"
                            name="TP_PartQ"
                            prefix={getSortButton(props, "TP_PartQ")}
                            onChange={props.handleFilterChange}
                        />
                    </FormItem>
                    <FormItem {...formItemLayout} colon={false}>
                        <Input
                            placeholder="ISA ID"
                            name="TP_PartID"
                            prefix={getSortButton(props, "TP_PartID")}
                            onChange={props.handleFilterChange}
                        />
                    </FormItem>
                    <FormItem {...formItemLayout} colon={false}>
                        <Input
                            placeholder="GS ID"
                            name="TP_GroupID"
                            prefix={getSortButton(props, "TP_GroupID")}
                            onChange={props.handleFilterChange}
                        />
                    </FormItem>
                    <FormItem {...formItemLayout} colon={false}>
                        <Input
                            placeholder="ERP ID"
                            name="TP_ID"
                            prefix={getSortButton(props, "TP_ID")}
                            onChange={props.handleFilterChange}
                        />
                    </FormItem>
                    <FormItem {...formItemLayout} colon={false}>
                        <Select
                            style={{ width: "100%" }}
                            value={props.kitTypeID}
                            onChange={props.handleKitTypeIDFilterChange}
                        >
                            <Option key="all" value="all">All</Option>
                            {props.partnerList.map((item) => {
                                return (
                                    <Option key={item.KitTypeID} value={ToString(item.KitTypeID)}>{item.KitTypeDesc}</Option>
                                )
                            })
                            }

                        </Select>
                    </FormItem>
                    <FormItem {...formItemLayout} colon={false}>
                        <Select style={{ width: '100%' }}
                            value={props.tpStatus}
                            onChange={props.handleStatusFilterChange}
                        >
                            <Option key="all" value="all">All</Option>
                            {props.statusList.map((item) => {
                                return (
                                    <Option key={item.id} value={item.id}>{item.status}</Option>
                                )
                            })
                            }
                        </Select>
                    </FormItem>
                </Form>
            </Card>
            <Row>
                {props.list.map((item) =>
                    <ColRS xl={4} lg={4} md={4} sm={6} xs={12} key={item.Id}>
                        <Card outline={false}>
                            <CardHeader>
                                {item.TP_Name}
                                <div>
                                    <FaEdit onClick={() => props.tradeEdit(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                    <FaTimesCircle onClick={() => props.tradeDelete(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                    <FaClone onClick={() => props.tradeClone(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Form layout="inline">
                                    <FormItem label="Qualifier">
                                        {item.TP_PartQ}
                                    </FormItem>
                                    <FormItem label="ISA ID">
                                        {item.TP_PartID}
                                    </FormItem>
                                    <FormItem label="GS ID">
                                        {item.TP_GroupID}
                                    </FormItem>
                                    <FormItem label="ERP ID">
                                        {item.TP_ID}
                                    </FormItem>
                                    <FormItem label="Partner Type">
                                        {(props.partnerList.find(partner => partner.KitTypeID === item.KitTypeID) === undefined ? " " :
                                            props.partnerList.find(partner => partner.KitTypeID === item.KitTypeID)!.KitTypeDesc)}
                                    </FormItem>
                                    <FormItem label="Status">
                                        {(props.statusList.find(sl => sl.id === item.TP_Status) === undefined ? " " :
                                            props.statusList.find(sl => sl.id === item.TP_Status)!.status)}
                                    </FormItem>
                                </Form>
                            </CardBody>
                        </Card>
                    </ColRS>
                )}
            </Row>
        </div>
    )
}

export default TradeCardView
