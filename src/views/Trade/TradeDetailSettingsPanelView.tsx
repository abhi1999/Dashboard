import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Divider } from 'antd'
import { Select, Button, Icon, message } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToString } from '../../utils/Conversion';
import { Form as RSForm, FormGroup as RSFormGroup, Label as RSLabel, Col as RSCol, Input as RSInput, Row as RSRow } from 'reactstrap';
import * as xTrade from "../../constants/edidb/CTrade"

// const Panel = Collapse.Panel;
// const FormItem = Form.Item;
// const Option = Select.Option;

const booleanList = [{ id: "N", value: "No" }, { id: "Y", value: "Yes" }]

function TradeDetailSettingsPanelView(props) {

    return (

            <div>
                {/* <Collapse accordion={false} defaultActiveKey={["Qualifier"]} >
                <Panel header="Qualifier" key="Qualifier"> */}
                <Divider orientation="left">Qualifier</Divider>
               <RSRow>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_ShipDateQual}>Ship Date</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_ShipDateQual}
                            id={xTrade.kTrade_TP_ShipDateQual}
                            value={StringChecker(props.tradingPartner.TP_ShipDateQual)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_ShipDateQual1}>Ship Date</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_ShipDateQual1}
                            id={xTrade.kTrade_TP_ShipDateQual1}
                            value={StringChecker(props.tradingPartner.TP_ShipDateQual1)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_ShipDateQual1}>Ship Date</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_ShipDateQual2}
                            id={xTrade.kTrade_TP_ShipDateQual2}
                            value={StringChecker(props.tradingPartner.TP_ShipDateQual2)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_CancelDateQual}>Cancel Date</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_CancelDateQual}
                            id={xTrade.kTrade_TP_CancelDateQual}
                            value={StringChecker(props.tradingPartner.TP_CancelDateQual)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_CancelDateQual1}>Cancel Date</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_CancelDateQual1}
                            id={xTrade.kTrade_TP_CancelDateQual1}
                            value={StringChecker(props.tradingPartner.TP_CancelDateQual1)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_CancelDateQual2}>Cancel Date</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_CancelDateQual2}
                            id={xTrade.kTrade_TP_CancelDateQual2}
                            value={StringChecker(props.tradingPartner.TP_CancelDateQual2)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_ItemCode}>Item XRef</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_ItemCode}
                            id={xTrade.kTrade_TP_ItemCode}
                            value={StringChecker(props.tradingPartner.TP_ItemCode)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_ItemCode2}>Partner Item</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_ItemCode2}
                            id={xTrade.kTrade_TP_ItemCode2}
                            value={StringChecker(props.tradingPartner.TP_ItemCode2)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_STQUAL2}>Ship To</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_STQUAL}
                            id={xTrade.kTrade_TP_STQUAL2}
                            value={StringChecker(props.tradingPartner.TP_STQUAL)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_STformat}>Ship To Size</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.TP_STformat}
                            id={xTrade.kTrade_TP_STformat}
                            value={props.tradingPartner.TP_STformat}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_AddlAdrQual1}>Addl Address Codes</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.AddlAdrQual1}
                            id={xTrade.kTrade_AddlAdrQual1}
                            value={StringChecker(props.tradingPartner.AddlAdrQual1)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_AddlAdrQual2}>Addl Address Codes</RSLabel>
                        <RSInput validateStatus={props.tradingPartner.AddlAdrQual2}
                            id={xTrade.kTrade_AddlAdrQual2}
                            value={StringChecker(props.tradingPartner.AddlAdrQual2)}
                            onChange={props.handleInputChange} />
                    </RSFormGroup>
                </RSCol>
            </RSRow>
            {/* </Panel>
                <Panel header="Directional Settings" key="DirectionalSettings"> */}
                <Divider orientation="left">Directional Settings</Divider>
                <RSRow>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_UseDept}>Use Dept</RSLabel>
                        <RSInput type="select"
                            id={xTrade.kTrade_TP_UseDept}
                            value={props.tradingPartner.TP_UseDept}
                            // onChange={(e) => props.handleKitTypeChange(e.target.value)}
                            onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                        >
                            {booleanList.map((option) => <option key={option.id} value={option.id}>{option.value}</option>)}
                        </RSInput>
                    </RSFormGroup>
                </RSCol>
                <RSCol lg={3} md={6} sm={12}>
                    <RSFormGroup>
                        <RSLabel for={xTrade.kTrade_TP_UseN1ST}>Use N1 ST</RSLabel>
                        <RSInput type="select"
                            id={xTrade.kTrade_TP_UseN1ST}
                            value={props.tradingPartner.TP_UseN1ST}
                            // onChange={(e) => props.handleKitTypeChange(e.target.value)}
                            onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                        >
                            {booleanList.map((option) => <option key={option.id} value={option.id}>{option.value}</option>)}
                        </RSInput>
                    </RSFormGroup>
                </RSCol>
            </RSRow> 
                {/* </Panel>
                <Panel header="Delimiters Ascii value" key="Ascii"> */}
                <Divider orientation="left">Element</Divider>
                <RSRow>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_TP_EleSep}>Element</RSLabel>
                            <RSInput validateStatus={props.tradingPartner.TP_EleSep}
                                id={xTrade.kTrade_TP_EleSep}
                                value={props.tradingPartner.TP_EleSep}
                                onChange={props.handleInputChange} />
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_TP_SubEleSep}>Sub Element</RSLabel>
                            <RSInput validateStatus={props.tradingPartner.TP_SubEleSep}
                                id={xTrade.kTrade_TP_SubEleSep}
                                value={props.tradingPartner.TP_SubEleSep}
                                onChange={props.handleInputChange} />
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_TP_SegTerm}>Terminator</RSLabel>
                            <RSInput validateStatus={props.tradingPartner.TP_SegTerm}
                                id={xTrade.kTrade_TP_SegTerm}
                                value={props.tradingPartner.TP_SegTerm}
                                onChange={props.handleInputChange} />
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_TP_RepSep}>Repetition</RSLabel>
                            <RSInput validateStatus={props.tradingPartner.TP_RepSep}
                                id={xTrade.kTrade_TP_RepSep}
                                value={props.tradingPartner.TP_RepSep}
                                onChange={props.handleInputChange} />
                        </RSFormGroup>
                    </RSCol>
                </RSRow>
                {/* </Panel>
                <Panel header="Vendor" key="Vendor"> */}
                <Divider orientation="left">Vendor</Divider>
                <RSRow>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_TP_VendID}>Partner Vendor ID</RSLabel>
                            <RSInput validateStatus={props.tradingPartner.TP_VendID}
                                id={xTrade.kTrade_TP_VendID}
                                value={props.tradingPartner.TP_VendID}
                                onChange={props.handleInputChange} />
                        </RSFormGroup>
                    </RSCol>
                </RSRow>
                {/* 
                </Panel>
                <Panel header="Package Settings" key="Package"> */}
                <RSRow>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_PackSizeLookupSeq}>Pack Size Lookup Seq</RSLabel>
                            <RSInput validateStatus={props.tradingPartner.PackSizeLookupSeq}
                                id={xTrade.kTrade_PackSizeLookupSeq}
                                value={props.tradingPartner.PackSizeLookupSeq}
                                onChange={props.handleInputChange} />
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_PKG_ID}>Default Package</RSLabel>
                            <RSInput type="select"
                                id={xTrade.kTrade_PKG_ID}
                                value={props.tradingPartner.PKG_ID}
                                // onChange={(e) => props.handleKitTypeChange(e.target.value)}
                                onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                            >
                                {props.packageList.map((option) => <option key={option.PKG_ID} value={option.PKG_ID}>{option.PKG_Desc}</option>)}
                            </RSInput>
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup>
                            <RSLabel for={xTrade.kTrade_Loc_Override}>Location</RSLabel>
                            <RSInput validateStatus={props.tradingPartner.Loc_Override}
                                id={xTrade.kTrade_Loc_Override}
                                value={props.tradingPartner.Loc_Override}
                                onChange={props.handleInputChange} />
                        </RSFormGroup>
                    </RSCol>
                </RSRow>
                {/* </Panel>
                <Panel header="Additional Settings" key="AdditionalSettings"> */}
                <Divider orientation="left">Additional Settings</Divider>
                <RSRow>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup check={true}>
                            <RSLabel for={xTrade.kTrade_SerLotFlag}>
                                <RSInput type="checkbox"
                                    id={xTrade.kTrade_SerLotFlag}
                                    checked={props.tradingPartner.SerLotFlag}
                                    onChange={props.handleInputChange} />
                                Force Serial/Lot</RSLabel>
                        </RSFormGroup>

                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup check={true}>
                            <RSLabel for={xTrade.kTrade_UsePackingClass}>
                                <RSInput type="checkbox"
                                    validateStatus={props.tradingPartner.UsePackingClass}
                                    id={xTrade.kTrade_UsePackingClass}
                                    checked={props.tradingPartner.UsePackingClass}
                                    onChange={props.handleInputChange} />
                                Use Packing Class</RSLabel>
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup check={true}>
                            <RSLabel for={xTrade.kTrade_UseCurrency}>
                                <RSInput type="checkbox"
                                    validateStatus={props.tradingPartner.UseCurrency}
                                    id={xTrade.kTrade_UseCurrency}
                                    checked={props.tradingPartner.UseCurrency}
                                    onChange={props.handleInputChange} />
                                Currency Conversion</RSLabel>
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup check={true}>
                            <RSLabel for={xTrade.kTrade_CreateFA}>
                                <RSInput type="checkbox"
                                    validateStatus={props.tradingPartner.CreateFA}
                                    id={xTrade.kTrade_CreateFA}
                                    checked={props.tradingPartner.CreateFA}
                                    onChange={props.handleInputChange} />
                                Create Outbound FA</RSLabel>
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup check={true}>
                            <RSLabel for={xTrade.kTrade_CalcLineTax}>
                                <RSInput type="checkbox"
                                    validateStatus={props.tradingPartner.CalcLineTax}
                                    id={xTrade.kTrade_CalcLineTax}
                                    checked={props.tradingPartner.CalcLineTax}
                                    onChange={props.handleInputChange} />
                                Calc Line item Tax</RSLabel>
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup check={true}>
                            <RSLabel for={xTrade.kTrade_Create856}>
                                <RSInput type="checkbox"
                                    validateStatus={props.tradingPartner.Create856}
                                    id={xTrade.kTrade_Create856}
                                    checked={props.tradingPartner.Create856}
                                    onChange={props.handleInputChange} />
                                Auto Create Order</RSLabel>
                        </RSFormGroup>
                    </RSCol>
                    <RSCol lg={3} md={6} sm={12}>
                        <RSFormGroup check={true}>
                            <RSLabel for={xTrade.kTrade_CreditMemoAsInvoice}>
                                <RSInput type="checkbox"
                                    validateStatus={props.tradingPartner.CreditMemoAsInvoice}
                                    id={xTrade.kTrade_CreditMemoAsInvoice}
                                    checked={props.tradingPartner.CreditMemoAsInvoice}
                                    onChange={props.handleInputChange} />
                                Credit Memo As Invoice</RSLabel>
                        </RSFormGroup>
                    </RSCol>
                </RSRow>
                {/* </Panel>
            </Collapse> */}
            </div >
        )
};





export default TradeDetailSettingsPanelView
