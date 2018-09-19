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

function ErrorCodeCardView(props) {
    return (
        <div>
            <Card body={true} outline={true} style={{ width: '100%' }}>
                <Form layout="vertical" style={{ marginTop: -10, marginBottom: 10 }}>
                    <FormItem  {...formItemLayout} colon={false}>
                        <Input
                            placeholder="Error Code"
                            name="ErrCode"
                            prefix={getSortButton(props, "ErrCode")}
                            // value={this.state.Err_Code}
                            onChange={props.handleFilterChange}
                        />
                    </FormItem>
                    <FormItem  {...formItemLayout} colon={false}>
                        <Input
                            placeholder="Description"
                            name="ErrDesc"
                            prefix={getSortButton(props, "ErrDesc")}
                            // value={this.state.Description}
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
                                    <FaEdit onClick={() => props.errorCodeEdit(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                    <FaTimesCircle onClick={() => props.errorCodeDelete(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                    <FaClone onClick={() => props.errorCodeClone(item)} size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Form layout="vertical">
                                    <FormItem {...formItemLayout} label="Error Code:"> 
                                        {item.ErrCode}
                                    </FormItem>
                                    <FormItem {...formItemLayout} label="Description:">
                                        {item.ErrDesc}
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

export default ErrorCodeCardView
