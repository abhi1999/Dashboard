import * as React from "react";
import { Card, CardHeader, CardBody, Row, Col as ColRS } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaTimesCircle, FaEdit, FaClone, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Form, Input, Select } from 'antd';
import { ToString } from '../../utils/Conversion';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 18 },
    wrapperCol: { span: 20 },
    // formItemLayout: 'horizontal',
    style: { color: "red" },
};

const Option = Select.Option;

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

function ShipToTradeCardView(props) {
    // const textStyle = { color: "red", };
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
                </Form>
            </Card>
            <Row>
                {props.list.map((item) =>
                    // <ColRS xl={4} lg={4} md={4} sm={6} xs={12} key={item.Id}>
                    <ColRS xl={4} lg={4} md={4} sm={6} xs={12} key={item.Id}>
                    <Card outline={false}>
                            <CardHeader>
                                {item.Description}
                                <div className="card-header-actions">
                                    <FaEdit onClick={() => props.tradeToEdit(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Form layout="vertical">
                                    <FormItem {...formItemLayout} label="Trading Partner:">
                                        {item.TP_Name}
                                    </FormItem>
                                    <FormItem {...formItemLayout} label="Qualifier:">
                                        {item.TP_PartQ}
                                    </FormItem>
                                    <FormItem {...formItemLayout} label="ISA ID:">
                                        {item.TP_PartID}
                                    </FormItem>
                                    <FormItem {...formItemLayout} label="GS ID:">
                                        {item.TP_GroupID}
                                    </FormItem>
                                    <FormItem {...formItemLayout} label="ERP ID:">
                                        {item.TP_ID}
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

export default ShipToTradeCardView
