import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Divider } from 'antd'
import { FormGroup, Label, Col, Input, Row } from 'reactstrap';
import * as xCompany from "../../constants/EDICompany/CCompany"
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_vpEDIdirect}>Data Folder</Label>
                        <Input
                            id={xCompany.kCompany_vpEDIdirect}
                            value={StringChecker(props.company.vpEDIdirect)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_EDIdirect}>FTP Folder</Label>
                        <Input
                            id={xCompany.kCompany_EDIdirect}
                            value={StringChecker(props.company.EDIdirect)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_ACCTdirect}>ERP Folder</Label>
                        <Input
                            id={xCompany.kCompany_ACCTdirect}
                            value={StringChecker(props.company.ACCTdirect)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_vpSharedirect}>Shared Folder</Label>
                        <Input
                            id={xCompany.kCompany_vpSharedirect}
                            value={StringChecker(props.company.vpSharedirect)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Divider orientation="left">Settings</Divider>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup check={true}>
                        <Label for={xCompany.kCompany_LinkDelDate}>
                            <Input type="checkbox"
                                id={xCompany.kCompany_LinkDelDate}
                                checked={props.company.LinkDelDate}
                                onChange={props.handleInputChange} />
                            Line Delivery Date
                            </Label>
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup check={true}>
                        <Label for={xCompany.kCompany_SecurityEnabled}>
                            <Input type="checkbox"
                                id={xCompany.kCompany_SecurityEnabled}
                                checked={props.company.SecurityEnabled}
                                onChange={props.handleInputChange} />
                            Enable Security
                            </Label>
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup check={true}>
                        <Label for={xCompany.kCompany_AutoHoldDoc}>
                            <Input type="checkbox"
                                id={xCompany.kCompany_AutoHoldDoc}
                                checked={props.company.AutoHoldDoc}
                                onChange={props.handleInputChange} />
                            Auto Hold On Error
                            </Label>
                    </FormGroup>
                </Col>
            </Row>
            <Divider orientation="left">Warehouse</Divider>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_WMSImportType}>Import Method</Label>
                        <Input type="select"
                            id={xCompany.kCompany_WMSImportType}
                            value={props.company.WMSImportType}
                            onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                        >
                            {importMethod.map((option) => <option key={option.id} value={option.id}>{option.value}</option>)}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Divider orientation="left">Scheduler / Workflow</Divider>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_wfUser}>Username</Label>
                        <Input
                            id={xCompany.kCompany_wfUser}
                            value={StringChecker(props.company.wfUser)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Divider orientation="left">Purge Password</Divider>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <FormGroup>
                        <Label for={xCompany.kCompany_PurgePass}>Password</Label>
                        <Input
                            id={xCompany.kCompany_PurgePass}
                            value={StringChecker(props.company.PurgePass)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </div>
    )
};

export default CompanySetupPanelView
