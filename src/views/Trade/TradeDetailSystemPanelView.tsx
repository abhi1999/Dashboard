import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Form, Input, InputNumber, Checkbox, Row, Col, Collapse } from 'antd'
import { Select, Button, Icon, message } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToString } from '../../utils/Conversion';

const Panel = Collapse.Panel;
const FormItem = Form.Item;
const Option = Select.Option;

const booleanList = [{ id: "N", value: "No" }, { id: "Y", value: "Yes" }]

const querySegmentList = [
    { id: "BEG", value: "BEG" },
    { id: "GS", value: "GS" },
    { id: "N1", value: "N1" },
    { id: "REF", value: "REF" },
    { id: "PER", value: "PER" }
]

function TradeDetailSettingsPanelView(props) {
    return (

        <div>
            <Collapse accordion={false} defaultActiveKey={["IDOverride"]} >
                <Panel header="ID " key="IDOverride">
                    <Row gutter={8}>
                        <Col span={4}>
                            <FormItem >
                                <Input
                                    addonBefore="Sender Qual / ID"
                                    name="TP_SendQ"
                                    value={StringChecker(props.tradingPartner.TP_SendQ)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={4}>
                            <FormItem >
                                <Input
                                    name="TP_SendID"
                                    value={StringChecker(props.tradingPartner.TP_SendID)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Sender Group ID"
                                    name="TP_SendGID"
                                    value={StringChecker(props.tradingPartner.TP_SendGID)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Redirect Settings" key="RedirectSettings">
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem label="Trading Partner ID">
                                <Select style={{ width: '100%' }}
                                    value={props.tradingPartner.Pseudo_TPPartID}
                                    onChange={props.handlePseudoTPPartIDtChange}
                                >
                                    {props.pseudoTradeList.map((item) => {
                                        return (
                                            <Option key={item.TP_PartID} value={item.TP_PartID}>{item.TP_Name}</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <FormItem label="Pseudo ID">
                                <Select style={{ width: '100%' }}
                                    value={props.tradingPartner.Pseudo_ID}
                                    onChange={props.handlePseudoIDChange}
                                >
                                    {props.pseudoTradeList.map((item) => {
                                        return (
                                            <Option key={item.TP_PartID} value={item.TP_PartID}>{item.TP_Name}</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <FormItem label="Query Segment">
                                <Select style={{ width: '100%' }}
                                    value={props.tradingPartner.Pseudo_Segname}
                                    onChange={props.handlePseudoSegmentNameChange}
                                >
                                    {querySegmentList.map((item) => {
                                        return (
                                            <Option key={item.id} value={item.id}>{item.id}</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Qualifying Element No"
                                    name="Pseudo_Qual_Elem_No"
                                    value={props.tradingPartner.Pseudo_Qual_Elem_No}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Qualifying Element Value"
                                    name="Pseudo_Qual_Elem_Value"
                                    value={StringChecker(props.tradingPartner.Pseudo_Qual_Elem_Value)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Vendor Element No"
                                    name="Pseudo_Vendor_Elem_No"
                                    value={props.tradingPartner.Pseudo_Vendor_Elem_No}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Vendor Element Value"
                                    name="Pseudo_Vendor_Elem_Value"
                                    value={StringChecker(props.tradingPartner.Pseudo_Vendor_Elem_Value)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Network" key="Network">
                    <Row gutter={8}>
                        <Col xs={8}>
                            <FormItem label="Network">
                                <Select style={{ width: '100%' }}
                                    value={props.tradingPartner.Van}
                                    onChange={props.handleNetworkChange}
                                >
                                    {props.networkList.map((item) => {
                                        return (
                                            <Option key={item.Van_ID} value={item.Van_ID}>{item.Van_ID}</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>
        </div>
    )
};





export default TradeDetailSettingsPanelView
