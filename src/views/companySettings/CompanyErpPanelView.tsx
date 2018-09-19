import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Form, Input, Divider, Row, Col, Checkbox } from 'antd'
import { Select, Button, Icon, message } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToString } from '../../utils/Conversion';

const FormItem = Form.Item;
const Option = Select.Option;

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

 if (isDynamicsAx){
     dynamicsAx =
        <div>
            <Divider orientation="left">Dynamics AX Specific</Divider>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Sales Types"
                            name="AxaptaSalesTypes"
                            value={StringChecker(props.company.AxaptaSalesTypes)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem label="P.O. Type">
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
                    </FormItem>
                </Col>
            </Row>

        </div>
    }
    else {
        dynamicsAx =
        <div> <span /> </div>
    }

    if (isMacola){
        macola =
           <div>
               <Divider orientation="left">Macola Specific</Divider>
               <Row>
                   <Col span={8}>
                   <FormItem
                        label="Barcode Interface File"
                    >
                        <Checkbox
                            name="MacBarcodeInterface"
                            checked={props.company.MacBarcodeInterface}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                   </Col>
               </Row>
               <Row>
                   <Col span={8}>
                   
                   <FormItem
                        label="Write To User Fields"
                    >
                        <Checkbox
                            name="mWriteToUserFlds"
                            checked={props.company.mWriteToUserFlds}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                   </Col>
               </Row>
               <Row>
                   <Col span={8}>
                   
                   <FormItem
                        label="Update ASN"
                    >
                        <Checkbox
                            name="UpdateASN"
                            checked={props.company.UpdateASN}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
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
                <Col span={12}>
                    <FormItem label="Import Method">
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
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            disabled={(props.company.AuthType === 4 ? false : true)}
                            addonBefore="Connection String"
                            name="ConnString"
                            value={StringChecker(props.company.ConnString)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Server name / IP"
                            name="ServerIP"
                            value={StringChecker(props.company.ServerIP)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Port"
                            name="ServerPort"
                            value={props.company.ServerPort}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Login"
                            name="ODBClogin"
                            value={StringChecker(props.company.ODBClogin)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Password"
                            name="eODBCpass"
                            value={StringChecker(props.company.eODBCpass)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Divider orientation="left">Web Service Authentication Credentials</Divider>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Authority"
                            name="WSAuthority"
                            value={StringChecker(props.company.WSAuthority)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Resource"
                            name="WSResource"
                            value={StringChecker(props.company.WSResource)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Endpoint"
                            name="WSEndpoint"
                            value={StringChecker(props.company.WSEndpoint)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Client ID"
                            name="WSClientID"
                            value={StringChecker(props.company.WSClientID)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Login"
                            name="WSLogin"
                            value={StringChecker(props.company.WSLogin)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Password"
                            name="WSPassword"
                            value={StringChecker(props.company.WSPassword)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>

            <Divider orientation="left">Settings</Divider>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Database"
                            name="DatabaseName"
                            value={StringChecker(props.company.DatabaseName)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Company ID"
                            name="AcctCompID"
                            value={StringChecker(props.company.AcctCompID)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="SQL Object Schema"
                            name="AcctSqlObjOwnr"
                            value={StringChecker(props.company.AcctSqlObjOwnr)}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem>
                        <Input
                            addonBefore="Decimal Places"
                            name="DecSize"
                            value={props.company.DecSize}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem label="Import Method">
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
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <FormItem
                        label="Verify ERP Invoice Total"
                    >
                        <Checkbox
                            name="VerifyAcctInvTotal"
                            checked={props.company.VerifyAcctInvTotal}
                            onChange={props.handleInputChange}
                        />
                    </FormItem>
                </Col>
            </Row>
            <Divider orientation="left">ERP Package</Divider>
            <Row>
                <Col span={8}>
                    <FormItem label="Application Version">
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
                    </FormItem>
                </Col>
            </Row>
            {dynamicsAx}
            {macola}
        </div>
    )
};

export default CompanySetupPanelView
