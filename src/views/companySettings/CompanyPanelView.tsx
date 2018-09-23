import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Divider } from 'antd'
import { FormGroup, Label, Col, Input, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as xCompany from "../../constants/EDICompany/CCompany"

function CompanyPanelView(props) {

    return (

        <div>
            <Divider orientation="left">Company Address</Divider>
            <Row>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_Name}>Company Name</Label>
                        <Input
                            disabled={true}
                            id={xCompany.kCompany_YourCompany_Name}
                            value={StringChecker(props.company.YourCompany_Name)}
                        />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_DispName}>Display Name</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_DispName}
                            value={StringChecker(props.company.YourCompany_DispName)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_Add1}>Address</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_Add1}
                            value={StringChecker(props.company.YourCompany_Add1)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_Add2}>Address</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_Add2}
                            value={StringChecker(props.company.YourCompany_Add2)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_City}>City</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_City}
                            value={StringChecker(props.company.YourCompany_City)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_State}>State/Region</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_State}
                            value={StringChecker(props.company.YourCompany_State)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_Zip}>Postal Code</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_Zip}
                            value={StringChecker(props.company.YourCompany_Zip)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_Country}>Country</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_Country}
                            value={StringChecker(props.company.YourCompany_Country)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            </Row>
            <Divider orientation="left">Remit To</Divider>
            <Row>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_BillName}>Company Name</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_BillName}
                            value={StringChecker(props.company.YourCompany_BillName)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_BillAdd1}>Address</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_BillAdd1}
                            value={StringChecker(props.company.YourCompany_BillAdd1)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_BillAdd2}>Address</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_BillAdd2}
                            value={StringChecker(props.company.YourCompany_BillAdd2)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_BillCity}>City</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_BillCity}
                            value={StringChecker(props.company.YourCompany_BillCity)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_BillState}>State/Region</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_BillState}
                            value={StringChecker(props.company.YourCompany_BillState)}
                            onChange={props.handleInputChange} />
                    </FormGroup>

                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_BillZip}>Postal Code</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_BillZip}
                            value={StringChecker(props.company.YourCompany_BillZip)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_BillCountry}>Country</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_BillCountry}
                            value={StringChecker(props.company.YourCompany_BillCountry)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_Contact}>AR Contact</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_Contact}
                            value={StringChecker(props.company.YourCompany_Contact)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_Phone}>Phone</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_Phone}
                            value={StringChecker(props.company.YourCompany_Phone)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_Email}>Email</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_Email}
                            value={StringChecker(props.company.YourCompany_Email)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            </Row>
            <Divider orientation="left">EDI Contact</Divider>
            <Row>
            <Col lg={3} md={6} sm={12}>

                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_EDIContact}>Name</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_EDIContact}
                            value={StringChecker(props.company.YourCompany_EDIContact)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_EDIPhone}>Phone</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_EDIPhone}
                            value={StringChecker(props.company.YourCompany_EDIPhone)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_EDIEmail}>Email</Label>
                        <Input
                            id={xCompany.kCompany_YourCompany_EDIEmail}
                            value={StringChecker(props.company.YourCompany_EDIEmail)}
                            onChange={props.handleInputChange} />
                    </FormGroup>
                </Col>
            </Row>
        </div>
    )
};

export default CompanyPanelView
