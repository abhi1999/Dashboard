import * as React from "react";
import { Card, CardHeader, CardBody, Row, Col as ColRS } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaTimesCircle, FaEdit, FaClone, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { Form, Input, Select, Checkbox } from 'antd';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
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

function FreightCodeCardView(props) {
    return (
        <div>
            <Card body={true} outline={true} style={{ width: '100%' }}>
                <Form layout="vertical" style={{ marginTop: -10, marginBottom: 10 }}>
                    <FormItem  {...formItemLayout} colon={false}>
                        <Input
                            placeholder="Freight Code"
                            name="Frt_Code"
                            prefix={getSortButton(props, "Frt_Code")}
                            // value={this.state.Frt_Code}
                            onChange={props.handleFilterChange}
                        />
                    </FormItem>
                    <FormItem  {...formItemLayout} colon={false}>
                        <Input
                            placeholder="Description"
                            name="Description"
                            prefix={getSortButton(props, "Description")}
                            // value={this.state.Description}
                            onChange={props.handleFilterChange}
                        />
                    </FormItem>
                    <FormItem  {...formItemLayout} colon={false}>
                        <Input
                            placeholder="NMFC"
                            name="NMFC"
                            prefix={getSortButton(props, "NMFC")}
                            // value={this.state.NMFC}
                            onChange={props.handleFilterChange}
                        />
                    </FormItem>
                    <FormItem  {...formItemLayout} colon={false}>
                        <Input
                            placeholder="Class"
                            name="Class"
                            prefix={getSortButton(props, "Class")}
                            // value={this.state.Class}
                            onChange={props.handleFilterChange}
                        />
                    </FormItem>
                    <FormItem  {...formItemLayout} colon={false}>
                        <Select style={{ width: '100%' }}
                            value={props.HazMat}
                            onChange={props.handleHazMatFilterChange}
                        >
                            <Option key="all" value="all">All</Option>
                            <Option key="true" value="true">True</Option>
                            <Option key="false" value="false">False</Option>
                        </Select>
                    </FormItem>
                    <FormItem  {...formItemLayout} colon={false}>
                        <Input
                            placeholder="Sub"
                            name="Sub"
                            prefix={getSortButton(props, "Sub")}
                            // value={this.state.Sub}
                            onChange={props.handleFilterChange}
                        />
                    </FormItem>
                </Form>
            </Card>
            <Row>
                {props.list.map((item) =>
                    <ColRS xl={4} lg={4} md={4} sm={6} xs={12} key={item.Id}>
                        <Card outline={false}>
                            <CardHeader>
                                {item.Description}
                                <div className="card-header-actions">
                                    <FaEdit onClick={() => props.freightCodeEdit(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                    <FaTimesCircle onClick={() => props.freightCodeDelete(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                    <FaClone onClick={() => props.freightCodeClone(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Form layout="inline">
                                    <FormItem {...formItemLayout} label="Frt_Code">
                                        {item.Frt_Code}
                                    </FormItem>
                                    <FormItem {...formItemLayout} label="NMFC">
                                        {item.NMFC}
                                    </FormItem>
                                    <FormItem {...formItemLayout} label="Class">
                                        {item.Class}
                                    </FormItem>
                                    <FormItem {...formItemLayout} label="HazMat">
                                        {item.HazMat ? "True" : "False"}
                                    </FormItem>
                                    <FormItem {...formItemLayout} label="Sub">
                                        {item.Sub}
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

export default FreightCodeCardView
