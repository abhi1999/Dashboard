import * as React from "react";
import { StringChecker, formatDate } from '../../utils/Conversion';
import { Divider, DatePicker } from 'antd'
import * as moment from 'moment';
import { FormGroup, Label, Col, Input, Row } from 'reactstrap';
import * as xCompany from "../../constants/EDICompany/CCompany"
import 'bootstrap/dist/css/bootstrap.min.css';
import MomentUtils from "material-ui-pickers/utils/moment-utils";

function CompanySystemPanelView(props) {

    return (

        <div>
            <Divider orientation="left">Identification</Divider>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_Qual}>EDI Qualifier</Label>
                        <Input
                            disabled={true}
                            id={xCompany.kCompany_YourCompany_Qual}
                            value={StringChecker(props.company.YourCompany_Qual)}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_ID}>EDI Identifier</Label>
                        <Input
                            disabled={true}
                            id={xCompany.kCompany_YourCompany_ID}
                            value={StringChecker(props.company.YourCompany_ID)}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourCompany_Duns}>DUNS Number</Label>
                        <Input
                            disabled={true}
                            id={xCompany.kCompany_YourCompany_Duns}
                            value={StringChecker(props.company.YourCompany_Duns)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_YourMan_ID}>Manufacturers Identification</Label>
                        <Input
                            id={xCompany.kCompany_YourMan_ID}
                            value={StringChecker(props.company.YourMan_ID)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_FedTax_ID}>Federal Tax Identification</Label>
                        <Input
                            id={xCompany.kCompany_FedTax_ID}
                            value={StringChecker(props.company.FedTax_ID)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_CanGstTax_ID}>Canadian GST Identification</Label>
                        <Input
                            id={xCompany.kCompany_CanGstTax_ID}
                            value={StringChecker(props.company.CanGstTax_ID)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_EurTax_ID}>Euro (VAT) Tax Identification</Label>
                        <Input
                            id={xCompany.kCompany_EurTax_ID}
                            value={StringChecker(props.company.EurTax_ID)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Divider orientation="left">Settings</Divider>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_dbVer}>Database Version</Label>
                        <Input
                            id={xCompany.kCompany_dbVer}
                            value={StringChecker(props.company.dbVer)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_SupExp}>Key Expiration Date</Label>
                        <DatePicker
                            format="MM-DD-YYYY"
                            value={moment(formatDate(props.company.SupExp), 'MM-DD-YYYY')}
                            onChange={props.handleSupExpChange}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Divider orientation="left">Map Processor</Divider>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup check={true}>
                        <Label for={xCompany.kCompany_TestServer}>
                            <Input type="checkbox"
                                id={xCompany.kCompany_TestServer}
                                checked={props.company.TestServer}
                                onChange={props.handleInputChange} />
                            Use Test Server
                            </Label>
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_Primary_MapServer}>Primary Server</Label>
                        <Input
                            id={xCompany.kCompany_Primary_MapServer}
                            value={StringChecker(props.company.Primary_MapServer)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_Backup_MapServer}>Backup Server</Label>
                        <Input
                            id={xCompany.kCompany_Backup_MapServer}
                            value={StringChecker(props.company.Backup_MapServer)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup check={true}>
                        <Label for={xCompany.kCompany_AutoHoldDoc}>
                            <Input type="checkbox"
                                id={xCompany.kCompany_AutoHoldDoc}
                                checked={props.company.AutoHoldDoc}
                                onChange={props.handleInputChange} />
                            Enable Document Versioning
                            </Label>
                    </FormGroup>
                </Col>
            </Row>
        </div>
    )
};

export default CompanySystemPanelView
