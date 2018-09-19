import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Form, Input, InputNumber, Checkbox, Row, Col, Collapse } from 'antd'
import { Select, Button, Icon, message } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToString } from '../../utils/Conversion';
import ReactTable from "react-table";
import { FaTimesCircle, FaEdit, FaClone } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';

const Panel = Collapse.Panel;
const FormItem = Form.Item;
const Option = Select.Option;

const pricingMethod = [
    { id: 0, value: "Use EDI Price, No Price Verification" },
    { id: 1, value: "Use EDI Price, With Price Verification" },
    { id: 2, value: "Use Accounting Price" }
]

const planSchedToPOMethod = [
    { id:  0, value: "By ShipTo, All Items, All Forecasts" },
    { id:  1, value: "By ShipTo, Single Item, All Forecasts" },
    { id:  2, value: "By ShipTo, Single Item, Single Forecast" },
    { id:  3, value: "By PO Number, All Items, All Forecasts" },
    { id:  4, value: "By PO Number, Single Item, All Forecasts" },
    { id:  5, value: "By PO Number, Single Item, Single Forecast" },
    { id:  6, value: "By PO Release, All Items, All Forecasts" },
    { id:  7, value: "By PO Release, Single Item, All Forecasts" },
    { id:  8, value: "By PO Release, Single Item, Single Forecast" },
    { id:  9, value: "By Forecast Date, All Items, All Forecasts" },
    { id: 10, value: "By Forecast Date, Single Item, All Forecasts" },
    { id: 11, value: "By Forecast Date, Single Item, Single Forecast" },
    { id: 12, value: "By Forecast Date/PO/ShipTo, All Items, All Forecasts" },
    { id: 13, value: "By Forecast Date/PO/ShipTo, Single Item, All Forecasts" },
    { id: 14, value: "By Forecast Date/PO/ShipTo, Single Item, Single Forecast" }
]

function TradeDetailConfigurationPanelView(props) {
    return (

        <div>
            <Collapse accordion={false} defaultActiveKey={["Labeling"]} >
                <Panel header="Labeling" key="Labeling">
                    <Row gutter={8}>
                        <Col span={12}>
                            <ReactTable
                                columns={[
                                    {
                                        sortable: false,
                                        filterable: false,
                                        width: 120,
                                        Cell: row => (
                                            <div>
                                                <FaEdit size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                                <FaTimesCircle size={ICON_SIZE} color={ICON_COLOR} style={{ marginLeft: 12 }} />
                                            </div>
                                        )
                                    },
                                    {
                                        Header: "PKG ID",
                                        accessor: "PKG_ID"
                                    },
                                    {
                                        Header: "Label ID",
                                        accessor: "Label_ID"
                                    },
                                ]}
                                manual={false}
                                data={props.packageLabelList}
                                loading={props.loading}
                                sortable={false}
                                filterable={false}
                                showPagination={false}
                                pageSize={props.packageLabelRowCount}
                                className="-striped -highlight"
                            />
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col span={4}>
                            <FormItem
                                label="Use GS1 Prefix"
                            >
                                <Checkbox
                                    name="TP_UseGS1Prefix"
                                    checked={props.tradingPartner.TP_UseGS1Prefix}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem >
                                <Input
                                    addonBefore="GS1 Prefix"
                                    name="TP_GS1Prefix"
                                    value={StringChecker(props.tradingPartner.TP_GS1Prefix)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Purchase Order Posting Options" key="PurchaseOrder">
                    <Row gutter={8}>
                        <Col xs={8}>
                            <FormItem>
                                <Input
                                    addonBefore="PO Types Excluded"
                                    name="PO_Exclude_Types"
                                    value={StringChecker(props.tradingPartner.PO_Exclude_Types)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={12}>
                            <FormItem label="Pricing Method">
                                <Select style={{ width: '100%' }}
                                    value={props.tradingPartner.PrcMethod}
                                    onChange={props.handlePriceMethodChange}
                                >
                                    {pricingMethod.map((item) => {
                                        return (
                                            <Option key={item.id} value={item.id}>{item.value}</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col span={8}>
                            <FormItem
                                label="Create SAC Data In Sales Order"
                            >
                                <Checkbox
                                    name="PostSAC"
                                    checked={props.tradingPartner.PostSAC}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col span={8}>
                            <FormItem
                                label="Create As Quote"
                            >
                                <Checkbox
                                    name="TP_QuoteOrder"
                                    checked={props.tradingPartner.TP_QuoteOrder}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col span={4}>
                            <FormItem
                                label="Post Comments"
                            >
                                <Checkbox
                                    name="PostCommentsToAcct"
                                    checked={props.tradingPartner.PostCommentsToAcct}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={8}>
                            <FormItem>
                                <Input
                                    addonBefore="Inbound PO Routing"
                                    name="TP_MapIn_850"
                                    value={props.tradingPartner.TP_MapIn_850}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Terms" key="Terms">
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Discount %"
                                    name="Disc_Perc"
                                    value={props.tradingPartner.Disc_Perc}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Discount Days"
                                    name="Disc_Days"
                                    value={props.tradingPartner.Disc_Days}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Due Days"
                                    name="Term_Days"
                                    value={props.tradingPartner.Term_Days}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Release Configuration" key="Release">
                    <Row gutter={8}>
                    <Col xs={12}>
                            <FormItem label="Plan Sched To PO Method">
                                <Select style={{ width: '100%' }}
                                    value={props.tradingPartner.PSPOMethod}
                                    onChange={props.handlePSPOMethodChange}
                                >
                                    {planSchedToPOMethod.map((item) => {
                                        return (
                                            <Option key={item.id} value={item.id}>{item.value}</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Transit Days"
                                    name="TransitDays"
                                    value={props.tradingPartner.TransitDays}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Frozen Days"
                                    name="FrozenDays"
                                    value={props.tradingPartner.FrozenDays}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Ship/Delivery Pattern"
                                    name="ShipDlvPattern"
                                    value={props.tradingPartner.ShipDlvPattern}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>
        </div>
    )
};





export default TradeDetailConfigurationPanelView
