import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Divider } from 'antd'
import { Select, Button, Icon, message } from 'antd'
import { Form as RSForm, FormGroup as RSFormGroup, Label as RSLabel, Col as RSCol, Input as RSInput, Row as RSRow } from 'reactstrap';
import * as xTrade from "../../constants/edidb/CTrade"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToString } from '../../utils/Conversion';


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
            {/* <Collapse accordion={false} defaultActiveKey={["IDOverride"]} >
                <Panel header="ID " key="IDOverride"> */}
                <Divider orientation="left">ID</Divider>
                    <RSRow>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem >
                                <Input
                                    addonBefore="Sender Qual / ID"
                                    name="TP_SendQ"
                                    value={StringChecker(props.tradingPartner.TP_SendQ)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_TP_SendQ}>Sender Qual</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.TP_SendQ}
                                    id={xTrade.kTrade_TP_SendQ}
                                    value={StringChecker(props.tradingPartner.TP_SendQ)}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem >
                                <Input
                                    name="TP_SendID"
                                    value={StringChecker(props.tradingPartner.TP_SendID)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_TP_SendID}>Sender ID</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.TP_SendID}
                                    id={xTrade.kTrade_TP_SendID}
                                    value={StringChecker(props.tradingPartner.TP_SendID)}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="Sender Group ID"
                                    name="TP_SendGID"
                                    value={StringChecker(props.tradingPartner.TP_SendGID)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_TP_SendGID}>Sender Group ID</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.TP_SendGID}
                                    id={xTrade.kTrade_TP_SendGID}
                                    value={StringChecker(props.tradingPartner.TP_SendGID)}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                    </RSRow>
                {/* </Panel>
                <Panel header="Redirect Settings" key="RedirectSettings"> */}
                 <Divider orientation="left">Redirect Settings</Divider>
                    <RSRow>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem label="Trading Partner ID">
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
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_Pseudo_TPPartID}>Trading Partner ID</RSLabel>
                                <RSInput type="select"
                                    id={xTrade.kTrade_Pseudo_TPPartID}
                                    value={props.tradingPartner.Pseudo_TPPartID}
                                    // onChange={(e) => props.handleKitTypeChange(e.target.value)}
                                    onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                                >
                                    {props.pseudoTradeList.map((option) => <option key={option.TP_PartID} value={option.TP_PartID}>{option.TP_Name}</option>)}
                                </RSInput>
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem label="Pseudo ID">
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
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_Pseudo_ID}>Pseudo ID</RSLabel>
                                <RSInput type="select"
                                    id={xTrade.kTrade_Pseudo_ID}
                                    value={props.tradingPartner.Pseudo_ID}
                                    // onChange={(e) => props.handleKitTypeChange(e.target.value)}
                                    onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                                >
                                    {props.pseudoTradeList.map((option) => <option key={option.TP_PartID} value={option.TP_PartID}>{option.TP_Name}</option>)}
                                </RSInput>
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem label="Query Segment">
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
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_Pseudo_Segname}>Query Segment</RSLabel>
                                <RSInput type="select"
                                    id={xTrade.kTrade_Pseudo_Segname}
                                    value={props.tradingPartner.Pseudo_Segname}
                                    // onChange={(e) => props.handleKitTypeChange(e.target.value)}
                                    onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                                >
                                    {querySegmentList.map((option) => <option key={option.id} value={option.id}>{option.id}</option>)}
                                </RSInput>
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="Qualifying Element No"
                                    name="Pseudo_Qual_Elem_No"
                                    value={props.tradingPartner.Pseudo_Qual_Elem_No}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_Pseudo_Qual_Elem_No}>Qualifying Element No</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.Pseudo_Qual_Elem_No}
                                    id={xTrade.kTrade_Pseudo_Qual_Elem_No}
                                    value={props.tradingPartner.Pseudo_Qual_Elem_No}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="Qualifying Element Value"
                                    name="Pseudo_Qual_Elem_Value"
                                    value={StringChecker(props.tradingPartner.Pseudo_Qual_Elem_Value)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_Pseudo_Qual_Elem_Value}>Qualifying Element Value</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.Pseudo_Qual_Elem_Value}
                                    id={xTrade.kTrade_Pseudo_Qual_Elem_Value}
                                    value={StringChecker(props.tradingPartner.Pseudo_Qual_Elem_Value)}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="Vendor Element No"
                                    name="Pseudo_Vendor_Elem_No"
                                    value={props.tradingPartner.Pseudo_Vendor_Elem_No}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_Pseudo_Vendor_Elem_No}>Vendor Element No</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.Pseudo_Vendor_Elem_No}
                                    id={xTrade.kTrade_Pseudo_Vendor_Elem_No}
                                    value={props.tradingPartner.Pseudo_Vendor_Elem_No}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="Vendor Element Value"
                                    name="Pseudo_Vendor_Elem_Value"
                                    value={StringChecker(props.tradingPartner.Pseudo_Vendor_Elem_Value)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_Pseudo_Vendor_Elem_Value}>Vendor Element Value</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.Pseudo_Vendor_Elem_Value}
                                    id={xTrade.kTrade_Pseudo_Vendor_Elem_Value}
                                    value={StringChecker(props.tradingPartner.Pseudo_Vendor_Elem_Value)}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                    </RSRow>
                {/* </Panel>
                <Panel header="Network" key="Network"> */}
                <Divider orientation="left">Network</Divider>
                    <RSRow>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem label="Network">
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
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_Van}>Network</RSLabel>
                                <RSInput type="select"
                                    id={xTrade.kTrade_Van}
                                    value={props.tradingPartner.Van}
                                    // onChange={(e) => props.handleKitTypeChange(e.target.value)}
                                    onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                                >
                                    {props.networkList.map((option) => <option key={option.Van_ID} value={option.Van_ID}>{option.Van_ID}</option>)}
                                </RSInput>
                            </RSFormGroup>
                        </RSCol>
                    </RSRow>
                {/* </Panel>
            </Collapse> */}
        </div>
    )
};





export default TradeDetailSettingsPanelView
