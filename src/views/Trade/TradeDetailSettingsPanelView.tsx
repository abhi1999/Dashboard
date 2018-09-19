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

function TradeDetailSettingsPanelView(props) {
    return (

        <div>
            <Collapse accordion={false} defaultActiveKey={["Qualifier"]} >
                <Panel header="Qualifier" key="Qualifier">
                    <Row gutter={8}>
                        <Col span={4}>
                            <FormItem >
                                <Input
                                    addonBefore="Ship Date"
                                    name="TP_ShipDateQual"
                                    value={StringChecker(props.tradingPartner.TP_ShipDateQual)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={4}>
                            <FormItem >
                                <Input
                                    name="TP_ShipDateQual1"
                                    value={StringChecker(props.tradingPartner.TP_ShipDateQual1)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    name="TP_ShipDateQual2"
                                    value={StringChecker(props.tradingPartner.TP_ShipDateQual2)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col span={4}>
                            <FormItem >
                                <Input
                                    addonBefore="Cancel Date"
                                    name="TP_CancelDateQual"
                                    value={StringChecker(props.tradingPartner.TP_CancelDateQual)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={4}>
                            <FormItem >
                                <Input
                                    name="TP_CancelDateQual1"
                                    value={StringChecker(props.tradingPartner.TP_CancelDateQual1)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    name="TP_CancelDateQual2"
                                    value={StringChecker(props.tradingPartner.TP_CancelDateQual2)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem >
                                <Input
                                    addonBefore="Item Xref"
                                    name="TP_ItemCode"
                                    value={StringChecker(props.tradingPartner.TP_ItemCode)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Partner Item"
                                    name="TP_ItemCode2"
                                    value={StringChecker(props.tradingPartner.TP_ItemCode2)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Ship To"
                                    name="TP_STQUAL"
                                    value={StringChecker(props.tradingPartner.TP_STQUAL)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Ship To Size"
                                    name="TP_STformat"
                                    value={ToString(props.tradingPartner.TP_STformat)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Addl Address Codes"
                                    name="AddlAdrQual1"
                                    value={StringChecker(props.tradingPartner.AddlAdrQual1)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    name="AddlAdrQual2"
                                    value={StringChecker(props.tradingPartner.AddlAdrQual2)}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Directional Settings" key="DirectionalSettings">
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem label="Use Dept">
                                <Select style={{ width: '100%' }}
                                    value={props.tradingPartner.TP_UseDept}
                                    onChange={props.handleUseDeptChange}
                                >
                                    {booleanList.map((item) => {
                                        return (
                                            <Option key={item.id} value={item.id}>{item.value}</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </FormItem>
                        </Col>
                        <Col xs={4}>
                            <FormItem label="Use N1 ST">
                                <Select style={{ width: '100%' }}
                                    value={props.tradingPartner.TP_UseN1ST}
                                    onChange={props.handleUseN1StChange}
                                >
                                    {booleanList.map((item) => {
                                        return (
                                            <Option key={item.id} value={item.id}>{item.value}</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Delimiters Ascii value" key="Ascii">
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Element"
                                    name="TP_EleSep"
                                    value={props.tradingPartner.TP_EleSep}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Sub Element"
                                    name="TP_SubEleSep"
                                    value={props.tradingPartner.TP_SubEleSep}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Terminator"
                                    name="TP_SegTerm"
                                    value={props.tradingPartner.TP_SegTerm}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <FormItem>
                                <Input
                                    addonBefore="Repitition"
                                    name="TP_RepSep"
                                    value={props.tradingPartner.TP_RepSep}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Vendor" key="Vendor">
                    <Row gutter={8}>
                        <Col xs={8}>
                            <FormItem>
                                <Input
                                    addonBefore="Partner Vendor ID"
                                    name="TP_VendID"
                                    value={props.tradingPartner.TP_VendID}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Package Settings" key="Package">
                    <Row gutter={8}>
                        <Col xs={8}>
                            <FormItem>
                                <Input
                                    addonBefore="Pack Size Lookup Seq"
                                    name="TP_VendID"
                                    value={props.tradingPartner.PackSizeLookupSeq}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col span={12}>
                            <FormItem label="Default Package">
                                <Select style={{ width: '100%' }}
                                    value={props.tradingPartner.PKG_ID}
                                    onChange={props.handlePackageChange}
                                >
                                    {props.packageList.map((item) => {
                                        return (
                                            <Option key={item.PKG_ID} value={item.PKG_ID}>{item.PKG_Desc}</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={8}>
                            <FormItem>
                                <Input
                                    addonBefore="Location"
                                    name="Loc_Override"
                                    value={props.tradingPartner.Loc_Override}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Additional Settings" key="AdditionalSettings">
                    <Row gutter={8}>
                        <Col xs={8}>
                            <FormItem
                                label="Force Serial/Lot"
                            >
                                <Checkbox
                                    name="SerLotFlag"
                                    checked={props.tradingPartner.SerLotFlag}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={8}>
                            <FormItem
                                label="Use Packing Class"
                            >
                                <Checkbox
                                    name="UsePackingClass"
                                    checked={props.tradingPartner.UsePackingClass}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={8}>
                            <FormItem
                                label="Currency Conversion"
                            >
                                <Checkbox
                                    name="UseCurrency"
                                    checked={props.tradingPartner.UseCurrency}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={8}>
                            <FormItem
                                label="Create Outbound FA"
                            >
                                <Checkbox
                                    name="CreateFA"
                                    checked={props.tradingPartner.CreateFA}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={8}>
                            <FormItem
                                label="Calc Line Item Tax"
                            >
                                <Checkbox
                                    name="CalcLineTax"
                                    checked={props.tradingPartner.CalcLineTax}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={8}>
                            <FormItem
                                label="Auto Create Order"
                            >
                                <Checkbox
                                    name="Create856"
                                    checked={props.tradingPartner.Create856}
                                    onChange={props.handleInputChange}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={8}>
                            <FormItem
                                label="Credit Memo As Invoice"
                            >
                                <Checkbox
                                    name="CreditMemoAsInvoice"
                                    checked={props.tradingPartner.CreditMemoAsInvoice}
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





export default TradeDetailSettingsPanelView
