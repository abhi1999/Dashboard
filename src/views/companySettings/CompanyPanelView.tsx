import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Form, Input, Divider, Row, Col } from 'antd'
import { Select, Button, Icon, message } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';

const FormItem = Form.Item;


function CompanyPanelView(props) {

    return (

        <div>
            <Divider orientation="left">Company Address</Divider>
            <Row>
                <Col span={12}>
                    <FormItem>

                        <Input
                            disabled={true}
                            addonBefore="Company Name"
                            name="YourCompany_Name"
                            value={StringChecker(props.company.YourCompany_Name)}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Display Name"
                            name="YourCompany_DispName"
                            value={StringChecker(props.company.YourCompany_DispName)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Address"
                            name="YourCompany_Add1"
                            value={StringChecker(props.company.YourCompany_Add1)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            name="YourCompany_Add2"
                            value={StringChecker(props.company.YourCompany_Add2)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="City"
                            name="YourCompany_City"
                            value={StringChecker(props.company.YourCompany_City)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>

                    <FormItem>
                        <Input
                            addonBefore="State/Region"
                            name="YourCompany_State"
                            value={StringChecker(props.company.YourCompany_State)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Postal Code"
                            name="YourCompany_Zip"
                            value={StringChecker(props.company.YourCompany_Zip)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Country"
                            name="YourCompany_Country"
                            value={StringChecker(props.company.YourCompany_Country)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Divider orientation="left">Remit To</Divider>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Company Name"
                            name="YourCompany_BillName"
                            value={StringChecker(props.company.YourCompany_BillName)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Address"
                            name="YourCompany_BillAdd1"
                            value={StringChecker(props.company.YourCompany_BillAdd1)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            name="YourCompany_BillAdd2"
                            value={StringChecker(props.company.YourCompany_BillAdd2)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="City"
                            name="YourCompany_BillCity"
                            value={StringChecker(props.company.YourCompany_BillCity)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="State/Region"
                            name="YourCompany_BillState"
                            value={StringChecker(props.company.YourCompany_BillState)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Postal Code"
                            name="YourCompany_BillZip"
                            value={StringChecker(props.company.YourCompany_BillZip)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Country"
                            name="YourCompany_BillCountry"
                            value={StringChecker(props.company.YourCompany_BillCountry)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="AR Contact"
                            name="YourCompany_Contact"
                            value={StringChecker(props.company.YourCompany_Contact)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Phone"
                            name="YourCompany_Phone"
                            value={StringChecker(props.company.YourCompany_Phone)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            type="email"
                            addonBefore="Email"
                            name="YourCompany_Email"
                            value={StringChecker(props.company.YourCompany_Email)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Divider orientation="left">EDI Contact</Divider>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Name"
                            name="YourCompany_EDIContact"
                            value={StringChecker(props.company.YourCompany_EDIContact)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Phone"
                            name="YourCompany_EDIPhone"
                            value={StringChecker(props.company.YourCompany_EDIPhone)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Email"
                            name="YourCompany_EDIEmail"
                            value={StringChecker(props.company.YourCompany_EDIEmail)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
        </div>
    )
};

export default CompanyPanelView
