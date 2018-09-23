import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Divider } from 'antd'
import { FormGroup, Label, Col, Input, Row } from 'reactstrap';
import * as xCompany from "../../constants/EDICompany/CCompany"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToString } from '../../utils/Conversion';


const authenticationMethod = [
    { id: 0, value: "Integrated Authentication" },
    { id: 1, value: "OLEDB" },
    { id: 2, value: "TCP/IP" },
    { id: 3, value: "ODBC" },
    { id: 4, value: "Connection String" }
];

const lineItemPostSequence = [
    { id: 0, value: "Line Number Sequence" },
    { id: 1, value: "Item ID Sequence" },
    { id: 2, value: "Line Number Sequence Descending" },
    { id: 3, value: "Item ID Sequence Descending" }
];


const POTypeSource = [
    { id: 0, value: "Standard" },
    { id: 1, value: "Expanded" },
    { id: 2, value: "AIF XML" },
    { id: 3, value: "mDOC XML" },
    { id: 4, value: "Business Connector" },
    { id: 5, value: "oData/JSON" }
];

function CompanySetupPanelView(props) {


    const acctPackage = props.acctPackageList.find(acct => acct.AcctPackageID === props.company.AcctPackageID) === undefined ? " "
        : props.acctPackageList.find(acct => acct.AcctPackageID === props.company.AcctPackageID)!.AcctDesc

    let dynamicsAx
    let macola

    const isDynamicsAx = ToString(acctPackage).toLowerCase().includes("dynamics ax") ||
        ToString(acctPackage).toLowerCase().includes("dynamics 365 for operations")

    const isMacola = ToString(acctPackage).toLowerCase().includes("macola")
    
    // need to convert to string since authtype is a small int
    const disableConnectionString = (ToString(props.company.AuthType)==="4" ? false : true)

    if (isDynamicsAx) {
        dynamicsAx =
            <div>
                <Divider orientation="left">Dynamics AX Specific</Divider>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        {/* <FormItem>
                        <Input
                            addonBefore="Sales Types"
                            name="AxaptaSalesTypes"
                            value={StringChecker(props.company.AxaptaSalesTypes)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                        <FormGroup>
                            <Label for={xCompany.kCompany_AxaptaSalesTypes}>Sales Types</Label>
                            <Input
                                id={xCompany.kCompany_AxaptaSalesTypes}
                                value={StringChecker(props.company.AxaptaSalesTypes)}
                                onChange={props.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        {/* <FormItem label="P.O. Type">
                        <Select style={{ width: '100%' }}
                            value={props.company.AxaptaExpandedPO}
                            onChange={props.handlePOTypeChange}
                        >
                            {POTypeSource.map((item) => {
                                return (
                                    <Option key={item.id} value={item.id}>{item.value}</Option>
                                )
                            })
                            }
                        </Select>
                    </FormItem> */}
                        <FormGroup>
                            <Label for={xCompany.kCompany_AxaptaExpandedPO}>P.O. Type</Label>
                            <Input type="select"
                                id={xCompany.kCompany_AxaptaExpandedPO}
                                value={props.company.AxaptaExpandedPO}
                                onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                            >
                                {POTypeSource.map((option) => <option key={option.id} value={option.id}>{option.value}</option>)}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>

            </div>
    }
    else {
        dynamicsAx =
            <div> <span /> </div>
    }

    if (isMacola) {
        macola =
            <div>
                <Divider orientation="left">Macola Specific</Divider>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        {/* <FormItem
                        label="Barcode Interface File"
                    >
                        <Checkbox
                            name="MacBarcodeInterface"
                            checked={props.company.MacBarcodeInterface}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    
                    <FormGroup check={true}>
                        <Label for={xCompany.kCompany_MacBarcodeInterface}>
                            <Input type="checkbox"
                                id={xCompany.kCompany_MacBarcodeInterface}
                                checked={props.company.MacBarcodeInterface}
                                onChange={props.handleInputChange} />
                            Barcode Interface File
                            </Label>
                    </FormGroup>
                    </Col>
                    <Col lg={3} md={6} sm={12}>

                        {/* <FormItem
                        label="Write To User Fields"
                    >
                        <Checkbox
                            name="mWriteToUserFlds"
                            checked={props.company.mWriteToUserFlds}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                        <FormGroup check={true}>
                            <Label for={xCompany.kCompany_mWriteToUserFlds}>
                                <Input type="checkbox"
                                    id={xCompany.kCompany_mWriteToUserFlds}
                                    checked={props.company.mWriteToUserFlds}
                                    onChange={props.handleInputChange} />
                                Write To User Fields
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col lg={3} md={6} sm={12}>

                        {/* <FormItem
                        label="Update ASN"
                    >
                        <Checkbox
                            name="UpdateASN"
                            checked={props.company.UpdateASN}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                        <FormGroup check={true}>
                            <Label for={xCompany.kCompany_UpdateASN}>
                                <Input type="checkbox"
                                    id={xCompany.kCompany_UpdateASN}
                                    checked={props.company.UpdateASN}
                                    onChange={props.handleInputChange} />
                                Update ASN
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
            </div>
    }
    else {
        macola =
            <div> <span /> </div>
    }

    
    return (

        <div>
            <Divider orientation="left">ERP Server</Divider>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem label="Import Method">
                        <Select style={{ width: '100%' }}
                            value={props.company.AuthType}
                            onChange={props.handleAuthenticationMethodChange}
                        >
                            {authenticationMethod.map((item) => {
                                return (
                                    <Option key={item.id} value={item.id}>{item.value}</Option>
                                )
                            })
                            }
                        </Select>
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_AuthType}>Import Method</Label>
                        <Input type="select"
                            id={xCompany.kCompany_AuthType}
                            value={props.company.AuthType}
                            onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                        >
                            {authenticationMethod.map((option) => <option key={option.id} value={option.id}>{option.value}</option>)}
                        </Input>
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            disabled={(props.company.AuthType === 4 ? false : true)}
                            addonBefore="Connection String"
                            name="ConnString"
                            value={StringChecker(props.company.ConnString)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_ConnString}>Connection String</Label>
                        <Input
                            disabled={disableConnectionString}
                            id={xCompany.kCompany_ConnString}
                            value={StringChecker(props.company.ConnString)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Server name / IP"
                            name="ServerIP"
                            value={StringChecker(props.company.ServerIP)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_ServerIP}>Server name / IP</Label>
                        <Input
                            id={xCompany.kCompany_ServerIP}
                            value={StringChecker(props.company.ServerIP)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Port"
                            name="ServerPort"
                            value={props.company.ServerPort}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_ServerPort}>Port</Label>
                        <Input
                            id={xCompany.kCompany_ServerPort}
                            value={props.company.ServerPort}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Login"
                            name="ODBClogin"
                            value={StringChecker(props.company.ODBClogin)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_ODBClogin}>Login</Label>
                        <Input
                            id={xCompany.kCompany_ODBClogin}
                            value={StringChecker(props.company.ODBClogin)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Password"
                            name="eODBCpass"
                            value={StringChecker(props.company.eODBCpass)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_eODBCpass}>Password</Label>
                        <Input
                            id={xCompany.kCompany_eODBCpass}
                            value={StringChecker(props.company.eODBCpass)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Divider orientation="left">Web Service Authentication Credentials</Divider>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Authority"
                            name="WSAuthority"
                            value={StringChecker(props.company.WSAuthority)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_WSAuthority}>Authority</Label>
                        <Input
                            id={xCompany.kCompany_WSAuthority}
                            value={StringChecker(props.company.WSAuthority)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Resource"
                            name="WSResource"
                            value={StringChecker(props.company.WSResource)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_WSResource}>Resource</Label>
                        <Input
                            id={xCompany.kCompany_WSResource}
                            value={StringChecker(props.company.WSResource)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Endpoint"
                            name="WSEndpoint"
                            value={StringChecker(props.company.WSEndpoint)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_WSEndpoint}>Endpoint</Label>
                        <Input
                            id={xCompany.kCompany_WSEndpoint}
                            value={StringChecker(props.company.WSEndpoint)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Client ID"
                            name="WSClientID"
                            value={StringChecker(props.company.WSClientID)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_WSClientID}>Client ID</Label>
                        <Input
                            id={xCompany.kCompany_WSClientID}
                            value={StringChecker(props.company.WSClientID)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Login"
                            name="WSLogin"
                            value={StringChecker(props.company.WSLogin)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_WSLogin}>Login</Label>
                        <Input
                            id={xCompany.kCompany_WSLogin}
                            value={StringChecker(props.company.WSLogin)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Password"
                            name="WSPassword"
                            value={StringChecker(props.company.WSPassword)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_WSPassword}>Password</Label>
                        <Input
                            id={xCompany.kCompany_WSPassword}
                            value={StringChecker(props.company.WSPassword)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Divider orientation="left">Settings</Divider>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Database"
                            name="DatabaseName"
                            value={StringChecker(props.company.DatabaseName)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_DatabaseName}>Database</Label>
                        <Input
                            id={xCompany.kCompany_DatabaseName}
                            value={StringChecker(props.company.DatabaseName)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Company ID"
                            name="AcctCompID"
                            value={StringChecker(props.company.AcctCompID)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_AcctCompID}>Company ID</Label>
                        <Input
                            id={xCompany.kCompany_AcctCompID}
                            value={StringChecker(props.company.AcctCompID)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="SQL Object Schema"
                            name="AcctSqlObjOwnr"
                            value={StringChecker(props.company.AcctSqlObjOwnr)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_AcctSqlObjOwnr}>SQL Object Schema</Label>
                        <Input
                            id={xCompany.kCompany_AcctSqlObjOwnr}
                            value={StringChecker(props.company.AcctSqlObjOwnr)}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem>
                        <Input
                            addonBefore="Deciman Places"
                            name="DecSize"
                            value={props.company.DecSize}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_DecSize}>Decimal Places</Label>
                        <Input
                            id={xCompany.kCompany_DecSize}
                            value={props.company.DecSize}
                            onChange={props.handleInputChange}
                        />
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem label="Import Method">
                        <Select style={{ width: '100%' }}
                            value={props.company.PostItemSeq}
                            onChange={props.handlePostItemSequenceChange}
                        >
                            {lineItemPostSequence.map((item) => {
                                return (
                                    <Option key={item.id} value={item.id}>{item.value}</Option>
                                )
                            })
                            }
                        </Select>
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_PostItemSeq}>Import Method</Label>
                        <Input type="select"
                            id={xCompany.kCompany_PostItemSeq}
                            value={props.company.PostItemSeq}
                            onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                        >
                            {lineItemPostSequence.map((option) => <option key={option.id} value={option.id}>{option.value}</option>)}
                        </Input>
                    </FormGroup>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    {/* <FormItem
                        label="Verify ERP Invoice Total"
                    >
                        <Checkbox
                            name="VerifyAcctInvTotal"
                            checked={props.company.VerifyAcctInvTotal}
                            onChange={props.handleInputChange}
                        />
                    </FormItem> */}
                    <FormGroup check={true}>
                        <Label for={xCompany.kCompany_VerifyAcctInvTotal}>
                            <Input type="checkbox"
                                id={xCompany.kCompany_VerifyAcctInvTotal}
                                checked={props.company.VerifyAcctInvTotal}
                                onChange={props.handleInputChange} />
                            Verify ERP Invoice Total
                            </Label>
                    </FormGroup>
                </Col>
            </Row>
            <Divider orientation="left">ERP Package</Divider>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    {/* <FormItem label="Application Version">
                        <Select style={{ width: '100%' }}
                            value={props.company.AcctPackageID}
                            onChange={props.handleErpPackageChange}
                        >
                            {props.acctPackageList.map((item) => {
                                return (
                                    <Option key={item.AcctPackageID} value={item.AcctPackageID}>{item.AcctDesc}</Option>
                                )
                            })
                            }
                        </Select>
                    </FormItem> */}
                    <FormGroup>
                        <Label for={xCompany.kCompany_AcctPackageID}>ERP Package</Label>
                        <Input type="select"
                            id={xCompany.kCompany_AcctPackageID}
                            value={props.company.AcctPackageID}
                            onChange={(e) => props.handleDropDownChange(e.target.id, e.target.value)}
                        >
                            {props.acctPackageList.map((option) => <option key={option.AcctPackageID} value={option.AcctPackageID}>{option.AcctDesc}</option>)}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            {dynamicsAx}
            {macola}
        </div>
    )
};

export default CompanySetupPanelView
