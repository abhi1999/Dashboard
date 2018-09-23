import * as React from "react";
import { Card, CardHeader, CardBody, Row, Col as ColRS } from 'reactstrap';
import FlexView from 'react-flexview';
import { FaTimesCircle, FaEdit, FaClone, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Form, Input, Select } from 'antd';
import { ToString } from '../../utils/Conversion';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 10, offset: 15 },
    // wrapperCol: { span: 20 },
    // formItemLayout: 'horizontal',
    // style: { color: "blue" },
};

const Option = Select.Option;

function ShipToCardView(props) {
    // const textStyle = { color: "red", };
    return (
        <div>
            <Row>
                {props.list.map((item) =>
                    // <ColRS xl={4} lg={4} md={4} sm={6} xs={12} key={item.Id}>
                    <ColRS xl={4} lg={4} md={4} sm={6} xs={12} key={item.Id}>
                    <Card outline={false}>
                            <CardHeader>
                                {item.ShipTo_ID}
                                <div className="card-header-actions">
                                    <i className="fa fa-pencil" onClick={() => props.shipToEdit(item)}/>&nbsp;&nbsp; 
                                    <i className="fa fa-trash" onClick={() => props.shipToDelete(item)}/> 
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Form layout="vertical">
                                    <FormItem {...formItemLayout} label="ERP Cust ID:">
                                        {item.ShipTo_CustID}
                                    </FormItem>
                                    <FormItem {...formItemLayout} label="Store Name:">
                                        {item.ShipTo_StoreName}
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

export default ShipToCardView
