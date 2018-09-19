import * as React from "react";
import { StringChecker, formatDate } from '../../utils/Conversion';
import { Form, Input, Divider, Row, Col, Checkbox, DatePicker } from 'antd'
import * as moment from 'moment';
import { Select, Button, Icon, message } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import MomentUtils from "material-ui-pickers/utils/moment-utils";

const FormItem = Form.Item;
const Option = Select.Option;

function CompanySystemPanelView(props) {
    
    return (

        <div>
            <Divider orientation="left">Identification</Divider>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            disabled={true}
                            addonBefore="EDI Qualifier"
                            name="YourCompany_Qual"
                            value={StringChecker(props.company.YourCompany_Qual)}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            disabled={true}
                            addonBefore="EDI Identifier"
                            name="YourCompany_ID"
                            value={StringChecker(props.company.YourCompany_ID)}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            disabled={true}
                            addonBefore="DUNS Number"
                            name="YourCompany_Duns"
                            value={StringChecker(props.company.YourCompany_Duns)}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Manufacturers Identification"
                            name="YourMan_ID"
                            value={StringChecker(props.company.YourMan_ID)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Federal Tax Identification"
                            name="FedTax_ID"
                            value={StringChecker(props.company.FedTax_ID)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Canadian GST Identification"
                            name="CanGstTax_ID"
                            value={StringChecker(props.company.CanGstTax_ID)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Euro (VAT) Tax Identification"
                            name="EurTax_ID"
                            value={StringChecker(props.company.EurTax_ID)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Divider orientation="left">Settings</Divider>
            <Row>
                <Col span={8}>
                    <FormItem>
                        <Input
                            addonBefore="Database Version"
                            name="dbVer"
                            value={props.company.dbVer}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <FormItem>
                        <DatePicker
                            format="MM-DD-YYYY"
                            value={moment(formatDate(props.company.SupExp), 'MM-DD-YYYY')}
                            onChange={props.handleSupExpChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Divider orientation="left">Map Processor</Divider>
            <Row>
                <Col span={8}>
                    <FormItem
                        label="Use Test Server"
                    >
                        <Checkbox
                            name="TestServer"
                            checked={props.company.TestServer}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <FormItem>
                        <Input
                            addonBefore="Primary Server"
                            name="Primary_MapServer"
                            value={StringChecker(props.company.Primary_MapServer)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Backup Server"
                            name="Backup_MapServer"
                            value={StringChecker(props.company.Backup_MapServer)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <FormItem
                        label="Enable Document Versioning"
                    >
                        <Checkbox
                            name="AutoHoldDoc"
                            checked={props.company.AutoHoldDoc}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
        </div>
    )
};

export default CompanySystemPanelView
