import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import Divider from '@material-ui/core/Divider';
import { Form, Input, InputNumber, Row, Col, Collapse } from 'antd'
import { Select, Button, Icon, message } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';

const FormItem = Form.Item;

function TradeDetailUserFieldsPanelView(props) {

    return (

        <div>
            <Row>
                <Col span={12}>
                    <FormItem>

                        <Input
                            addonBefore="User 1"
                            name="TP_User1"
                            value={StringChecker(props.tradingPartner.TP_User1)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="User 2"
                            name="TP_User2"
                            value={StringChecker(props.tradingPartner.TP_User2)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem
                    // validateStatus={props.fieldStatus.find(item => item.name === "TP_PartID_Status")!.value}
                    >
                        <Input
                            addonBefore="User 3"
                            name="TP_User3"
                            value={StringChecker(props.tradingPartner.TP_User3)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="User 4"
                            name="TP_User4"
                            value={StringChecker(props.tradingPartner.TP_User4)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="User 5"
                            name="TP_User5"
                            value={StringChecker(props.tradingPartner.TP_User5)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>

                    <FormItem>
                        <Input
                            addonBefore="User 6"
                            name="TP_User6"
                            value={StringChecker(props.tradingPartner.TP_User6)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="User 7"
                            name="TP_User7"
                            value={StringChecker(props.tradingPartner.TP_User7)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="User 8"
                            name="TP_User8"
                            value={StringChecker(props.tradingPartner.TP_User8)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="User 9"
                            name="TP_User9"
                            value={StringChecker(props.tradingPartner.TP_User9)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
        </div>
    )
};





export default TradeDetailUserFieldsPanelView
