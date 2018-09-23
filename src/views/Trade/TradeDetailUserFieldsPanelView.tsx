import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import Divider from '@material-ui/core/Divider';
import { Form, Input, InputNumber, Row, Col, Collapse } from 'antd'
import { Select, Button, Icon, message } from 'antd'
import { Form as RSForm, FormGroup as RSFormGroup, Label as RSLabel, Col as RSCol, Input as RSInput, Row as RSRow } from 'reactstrap';
import * as xTrade from "../../constants/edidb/CTrade"
import 'bootstrap/dist/css/bootstrap.min.css';

const FormItem = Form.Item;

function TradeDetailUserFieldsPanelView(props) {

    return (

        <div>
            <RSRow>
                <RSCol lg={6} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_User1}>User 1</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_User1}
                            id={xTrade.kTrade_TP_User1}
                            value={StringChecker(props.tradingPartner.TP_User1)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={6} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_User2}>User 2</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_User2}
                            id={xTrade.kTrade_TP_User2}
                            value={StringChecker(props.tradingPartner.TP_User2)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={6} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_User3}>User 3</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_User3}
                            id={xTrade.kTrade_TP_User3}
                            value={StringChecker(props.tradingPartner.TP_User3)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={6} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_User4}>User 4</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_User4}
                            id={xTrade.kTrade_TP_User4}
                            value={StringChecker(props.tradingPartner.TP_User4)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={6} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_User5}>User 5</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_User5}
                            id={xTrade.kTrade_TP_User5}
                            value={StringChecker(props.tradingPartner.TP_User5)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={6} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_User6}>User 6</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_User6}
                            id={xTrade.kTrade_TP_User6}
                            value={StringChecker(props.tradingPartner.TP_User6)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={6} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_User7}>User 7</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_User7}
                            id={xTrade.kTrade_TP_User7}
                            value={StringChecker(props.tradingPartner.TP_User7)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={6} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_User8}>User 8</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_User8}
                            id={xTrade.kTrade_TP_User8}
                            value={StringChecker(props.tradingPartner.TP_User8)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={6} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_User9}>User9</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_User9}
                            id={xTrade.kTrade_TP_User9}
                            value={StringChecker(props.tradingPartner.TP_User9)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
            </RSRow>
        </div>
    )
};





export default TradeDetailUserFieldsPanelView
