import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Form, Input, Divider, Row, Col, Checkbox } from 'antd'
import { Select, Button, Icon, message } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';

const FormItem = Form.Item;
const Option = Select.Option;

const importMethod = [
    { id: 0, value: "Standard" },
    { id: 1, value: "Custom" },
    { id: 2, value: "Custom Multi Pack" }
];

function CompanySetupPanelView(props) {

    console.log("Company From Within Panel", props.company)

    return (

        <div>
            <Divider orientation="left">Locations</Divider>
            <Row>
                <Col span={12}>
                    <FormItem>

                        <Input
                            addonBefore="Data Folder"
                            name="vpEDIdirect"
                            value={StringChecker(props.company.vpEDIdirect)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="FTP Folder"
                            name="EDIdirect"
                            value={StringChecker(props.company.EDIdirect)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="ERP Folder"
                            name="ACCTdirect"
                            value={StringChecker(props.company.ACCTdirect)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Shared Folder"
                            name="vpSharedirect"
                            value={StringChecker(props.company.vpSharedirect)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Divider orientation="left">Settings</Divider>
            <Row>
                <Col span={8}>
                    <FormItem
                        label="Link Delivery Date"
                    >
                        <Checkbox
                            name="LinkDelDate"
                            checked={props.company.LinkDelDate}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <FormItem
                        label="Enable Security"
                    >
                        <Checkbox
                            name="SecurityEnabled"
                            checked={props.company.SecurityEnabled}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <FormItem
                        label="Auto Hold On Error"
                    >
                        <Checkbox
                            name="AutoHoldDoc"
                            checked={props.company.AutoHoldDoc}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Divider orientation="left">Warehouse</Divider>
            <Row>
                <Col span={8}>
                    <FormItem label="Import Method">
                        <Select style={{ width: '100%' }}
                            value={props.company.WMSImportType}
                            onChange={props.handleImportMethodChange}
                        >
                            {importMethod.map((item) => {
                                return (
                                    <Option key={item.id} value={item.id}>{item.value}</Option>
                                )
                            })
                            }
                        </Select>
                    </FormItem>
                </Col>
            </Row>
            <Divider orientation="left">Scheduler / Workflow</Divider>
            <Row>
                <Col span={8}>
                    <FormItem>
                        <Input
                            addonBefore="Username"
                            name="wfUser"
                            value={StringChecker(props.company.wfUser)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Divider orientation="left">Purge Password</Divider>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Password"
                            name="PurgePass"
                            value={StringChecker(props.company.PurgePass)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
        </div>
    )
};

export default CompanySetupPanelView
