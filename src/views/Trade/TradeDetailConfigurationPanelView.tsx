import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Divider } from 'antd'
import { Select, Button, Icon, message } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToString } from '../../utils/Conversion';
import ReactTable from "react-table";
import GridActionMenu from './../../components/widgets/GridActionMenu';
import { FaTimesCircle, FaEdit, FaClone } from 'react-icons/fa';
import { ICON_SIZE, ICON_COLOR } from './../../constants/Attributes';
import { Form as RSForm, FormGroup as RSFormGroup, Label as RSLabel, Col as RSCol, Input as RSInput, Row as RSRow } from 'reactstrap';
import * as xTrade from "../../constants/edidb/CTrade"

// const Panel = Collapse.Panel;
// const FormItem = Form.Item;
// const Option = Select.Option;

const pricingMethod = [
    { id: 0, value: "Use EDI Price, No Price Verification" },
    { id: 1, value: "Use EDI Price, With Price Verification" },
    { id: 2, value: "Use Accounting Price" }
]

const planSchedToPOMethod = [
    { id: 0, value: "By ShipTo, All Items, All Forecasts" },
    { id: 1, value: "By ShipTo, Single Item, All Forecasts" },
    { id: 2, value: "By ShipTo, Single Item, Single Forecast" },
    { id: 3, value: "By PO Number, All Items, All Forecasts" },
    { id: 4, value: "By PO Number, Single Item, All Forecasts" },
    { id: 5, value: "By PO Number, Single Item, Single Forecast" },
    { id: 6, value: "By PO Release, All Items, All Forecasts" },
    { id: 7, value: "By PO Release, Single Item, All Forecasts" },
    { id: 8, value: "By PO Release, Single Item, Single Forecast" },
    { id: 9, value: "By Forecast Date, All Items, All Forecasts" },
    { id: 10, value: "By Forecast Date, Single Item, All Forecasts" },
    { id: 11, value: "By Forecast Date, Single Item, Single Forecast" },
    { id: 12, value: "By Forecast Date/PO/ShipTo, All Items, All Forecasts" },
    { id: 13, value: "By Forecast Date/PO/ShipTo, Single Item, All Forecasts" },
    { id: 14, value: "By Forecast Date/PO/ShipTo, Single Item, Single Forecast" }
]

function TradeDetailConfigurationPanelView(props) {
    return (

        <div>
            {/* <Collapse accordion={false} defaultActiveKey={["Labeling"]} >
                <Panel header="Labeling" key="Labeling"> */}
                <Divider orientation="left">Labeling</Divider>
                    <RSRow>
                        <RSCol >
                            <ReactTable
                                columns={[
                                    {
                                        sortable: false,
                                        filterable: false,
                                        width: 120,
                                        resizable: false,
                                        className: 'action-menu',
                                        Cell: row => (
                                            <GridActionMenu items={["Edit", "Delete"]}
                                                onItemClick={(item) => {
                                                    switch (item) {
                                                        case "Edit":
                                                            // props.handleDocumentsUsedEdit(row.original)
                                                            break;
                                                        case "Delete":
                                                            // props.handleDocumentsUsedDelete(row.original)
                                                            break;
                                                    }
                                                }} />
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
                                className="-highlight table-container"
                            />
                        </RSCol>
                    </RSRow>
                    <RSRow>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem
                                label="Use GS1 Prefix"
                            >
                                <Checkbox
                                    name="TP_UseGS1Prefix"
                                    checked={props.tradingPartner.TP_UseGS1Prefix}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup check={true}>
                                <RSLabel for={xTrade.kTrade_TP_UseGS1Prefix}>
                                    <RSInput type="checkbox"
                                        id={xTrade.kTrade_TP_UseGS1Prefix}
                                        checked={props.tradingPartner.TP_UseGS1Prefix}
                                        onChange={props.handleInputChange} />
                                    Use GS1 Prefix
                                </RSLabel>
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem >
                                <Input
                                    addonBefore="GS1 Prefix"
                                    name="TP_GS1Prefix"
                                    value={StringChecker(props.tradingPartner.TP_GS1Prefix)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_TP_GS1Prefix}>GS1 Prefix</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.TP_GS1Prefix}
                                    id={xTrade.kTrade_TP_GS1Prefix}
                                    value={StringChecker(props.tradingPartner.TP_GS1Prefix)}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                    </RSRow>
                {/* </Panel>
                <Panel header="Purchase Order Posting Options" key="PurchaseOrder"> */}
                <Divider orientation="left">Purchase Order Posting Options</Divider>
                    <RSRow>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="PO Types Excluded"
                                    name="PO_Exclude_Types"
                                    value={StringChecker(props.tradingPartner.PO_Exclude_Types)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_PO_Exclude_Types}>PO Types Excluded</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.PO_Exclude_Types}
                                    id={xTrade.kTrade_PO_Exclude_Types}
                                    value={StringChecker(props.tradingPartner.PO_Exclude_Types)}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem label="Pricing Method">
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
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_PrcMethod}>Pricing Method</RSLabel>
                                <RSInput type="select"
                                    id={xTrade.kTrade_PrcMethod}
                                    value={props.tradingPartner.PrcMethod}
                                    // onChange={(e) => props.handleKitTypeChange(e.target.value)}
                                    onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                                >
                                    {pricingMethod.map((option) => <option key={option.id} value={option.id}>{option.value}</option>)}
                                </RSInput>
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem
                                label="Create SAC Data In Sales Order"
                            >
                                <Checkbox
                                    name="PostSAC"
                                    checked={props.tradingPartner.PostSAC}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup check={true}>
                                <RSLabel for={xTrade.kTrade_PostSAC}>
                                    <RSInput type="checkbox"
                                        id={xTrade.kTrade_PostSAC}
                                        value={props.tradingPartner.PostSAC}
                                        onChange={props.handleInputChange} />
                                    Create SAC Data In Sales Order</RSLabel>
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem
                                label="Create As Quote"
                            >
                                <Checkbox
                                    name="TP_QuoteOrder"
                                    checked={props.tradingPartner.TP_QuoteOrder}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup check={true}>
                                <RSLabel for={xTrade.kTrade_TP_QuoteOrder}>
                                    <RSInput type="checkbox"
                                        id={xTrade.kTrade_TP_QuoteOrder}
                                        value={props.tradingPartner.TP_QuoteOrder}
                                        onChange={props.handleInputChange} />
                                    Create As Quote</RSLabel>
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem
                                label="Post Comments"
                            >
                                <Checkbox
                                    name="PostCommentsToAcct"
                                    checked={props.tradingPartner.PostCommentsToAcct}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup check={true}>
                                <RSLabel for={xTrade.kTrade_PostCommentsToAcct}>
                                    <RSInput type="checkbox"
                                        id={xTrade.kTrade_PostCommentsToAcct}
                                        value={props.tradingPartner.PostCommentsToAcct}
                                        onChange={props.handleInputChange} />
                                    Post Comments</RSLabel>
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="Inbound PO Routing"
                                    name="TP_MapIn_850"
                                    value={props.tradingPartner.TP_MapIn_850}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_TP_MapIn_850}>Inbound PO Routing</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.TP_MapIn_850}
                                    id={xTrade.kTrade_TP_MapIn_850}
                                    value={props.tradingPartner.TP_MapIn_850}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                    </RSRow>
                {/* </Panel>
                <Panel header="Terms" key="Terms"> */}
                <Divider orientation="left">Terms</Divider>
                    <RSRow>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="Discount %"
                                    name="Disc_Perc"
                                    value={props.tradingPartner.Disc_Perc}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_Disc_Perc}>Discount %</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.Disc_Perc}
                                    id={xTrade.kTrade_Disc_Perc}
                                    value={props.tradingPartner.Disc_Perc}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="Discount Days"
                                    name="Disc_Days"
                                    value={props.tradingPartner.Disc_Days}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_Disc_Days}>Discount Days</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.Disc_Days}
                                    id={xTrade.kTrade_Disc_Days}
                                    value={props.tradingPartner.Disc_Days}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="Due Days"
                                    name="Term_Days"
                                    value={props.tradingPartner.Term_Days}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_Term_Days}>Due Days</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.Term_Days}
                                    id={xTrade.kTrade_Term_Days}
                                    value={props.tradingPartner.Term_Days}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                    </RSRow>
                {/* </Panel>
                <Panel header="Release Configuration" key="Release"> */}
                <Divider orientation="left">Release Configuration</Divider>
                    <RSRow>
                        <RSCol lg={6} md={6} sm={12}>
                            {/* <FormItem label="Plan Sched To PO Method">
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
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_PSPOMethod}>Pricing MethodPlan Sched To PO Method</RSLabel>
                                <RSInput type="select"
                                    id={xTrade.kTrade_PSPOMethod}
                                    value={props.tradingPartner.PSPOMethod}
                                    // onChange={(e) => props.handleKitTypeChange(e.target.value)}
                                    onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                                >
                                    {planSchedToPOMethod.map((option) => <option key={option.id} title={option.value} value={option.id}>{option.value}</option>)}
                                </RSInput>
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="Transit Days"
                                    name="TransitDays"
                                    value={props.tradingPartner.TransitDays}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_TransitDays}>Transit Days</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.TransitDays}
                                    id={xTrade.kTrade_TransitDays}
                                    value={props.tradingPartner.TransitDays}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="Frozen Days"
                                    name="FrozenDays"
                                    value={props.tradingPartner.FrozenDays}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_FrozenDays}>Frozen Days</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.FrozenDays}
                                    id={xTrade.kTrade_FrozenDays}
                                    value={props.tradingPartner.FrozenDays}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                        <RSCol lg={3} md={6} sm={12}>
                            {/* <FormItem>
                                <Input
                                    addonBefore="Ship/Delivery Pattern"
                                    name="ShipDlvPattern"
                                    value={props.tradingPartner.ShipDlvPattern}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem> */}
                            <RSFormGroup>
                                <RSLabel for={xTrade.kTrade_ShipDlvPattern}>Frozen Days</RSLabel>
                                <RSInput validateStatus={props.tradingPartner.ShipDlvPattern}
                                    id={xTrade.kTrade_ShipDlvPattern}
                                    value={props.tradingPartner.ShipDlvPattern}
                                    onChange={props.handleInputChange} />
                            </RSFormGroup>
                        </RSCol>
                    </RSRow>
                {/* </Panel>
            </Collapse> */}
        </div>
    )
};





export default TradeDetailConfigurationPanelView
