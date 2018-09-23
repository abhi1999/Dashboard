import * as  React from 'react';
import { connect } from "react-redux";
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { documentAdd, documentUpdate, documentDelete, documentGetOne } from '../../actions/DocumentAction';
// import { Button } from 'antd';
import { IXMLDoc } from '../../constants/edidb';
import * as XXMLDoc from "../../constants/edidb/CXMLDoc";
import * as convert from 'xml-js';
import * as format from 'xml-formatter';
import { JSONEditor } from 'react-json-editor-viewer';
import { Table, Form, FormGroup, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Label, Input, InputGroup, InputGroupText, InputGroupAddon, } from 'reactstrap';
import classnames from 'classnames';
import { cloneDeep } from 'lodash';
import { EncodeXml } from '../../utils/Conversion';

const FLAT_JSON_PROP_DELIMITER = " > "

export interface IJsonEditTreeProps {
    // Local
    item: IXMLDoc,
    itemId: string,
    isNew: boolean,
    revertDisplay: any,
    match: any,
    // Redux
    document: any,
    documentAdd: any,
    documentUpdate: any,
    documentGetOne: any
}
export interface IJsonEditTreeState {
    jsonDocument: any
    activeTab:string
    jsonEditorKey:any
}
class JsonEditTree extends React.Component<IJsonEditTreeProps, IJsonEditTreeState> {
    constructor(props: any) {
        super(props);

        this.isValid = this.isValid.bind(this);
        this.packDocument = this.packDocument.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.onJsonChange = this.onJsonChange.bind(this);
        this.toggleTab = this.toggleTab.bind(this);
        this.renderCustomJsonEdit = this.renderCustomJsonEdit.bind(this);
        this.onFlatJsonEdit = this.onFlatJsonEdit.bind(this)
        this.getXml = this.getXml.bind(this);
        
        this.state = {
            jsonDocument: {},
            activeTab:"2",
            jsonEditorKey:Math.random()  // workaround to force update jsoneditor
        };
    }

    public componentWillMount() {

        if (this.props.item && this.props.item.XMLText) {

           const result = convert.xml2js(this.props.item.XMLText, {compact: true});
            this.setState({
                jsonDocument: result
            })
        }
    }

    public render() {

        let actionButtons =
            <div>
                <Button style={{ marginLeft: 8 }}
                    onClick={() => {
                        this.props.revertDisplay();
                    }}>
                    Cancel
                </Button>
                <Button style={{ marginLeft: 8 }}
                    type="primary"
                    onClick={() => {
                        if (this.isValid()) {
                            this.handleUpdate();
                        }
                    }}>
                    Update
                </Button>
            </div>;
        if (this.props.isNew) {
            actionButtons =
                <div>
                    <Button style={{ marginLeft: 8 }}
                        onClick={() => {
                            this.props.revertDisplay();
                        }}>
                        Cancel
                    </Button>
                    <Button style={{ marginLeft: 8 }}
                        type="primary"
                        onClick={() => {
                            if (this.isValid()) {
                                this.handleAdd();
                                this.props.revertDisplay();
                            }
                        }}>
                        Add
                    </Button>
                </div>
        }
        return (
            <div className="document-explorer">
                {actionButtons}
                <Divider style={{ margin: 10 }} />
                <Nav tabs={true}>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggleTab('1'); }}>Tree View</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggleTab('2'); }}>Flat View</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggleTab('3'); }}>XML View</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab} style={{"max:height": "80vh"}}>
                    <TabPane tabId="1">
                        <JSONEditor key={this.state.jsonEditorKey} data={this.state.jsonDocument} onChange={this.onJsonChange}/>                            
                    </TabPane>
                    <TabPane tabId="2">
                        {this.renderCustomJsonEdit()}
                    </TabPane>
                    <TabPane tabId="3">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Original</th>
                                    <th>Modified</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <pre>
                                            {format(this.props.item.XMLText)}
                                        </pre>
                                    </td>
                                    <td>
                                        <pre>
                                            {format(this.getXml())}
                                        </pre>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
    private renderCustomJsonEdit(){
        const flatObj = this.flattenObject(this.state.jsonDocument)
        const textBoxToRender: any[] =[];
        for(const prop in flatObj){  
            if(flatObj.hasOwnProperty(prop) ){
                let label = prop;
                const attrStrToReplace = "_attributes" +  FLAT_JSON_PROP_DELIMITER;
                label = label.replace(attrStrToReplace,"")
                textBoxToRender.push(
                    <Row key={prop}>
                        <Col sm="12" md="6" lg="6">
                            <Label>{label}</Label>
                        </Col>
                        <Col sm="12" md="6" lg="6">
                            <Input autoComplete="off" value={flatObj[prop]} name={prop} onChange={(e)=>this.onFlatJsonEdit(prop, e.target.value)} />
                        </Col>
                    </Row>
                )
            }
        }
        return <Form>
            {textBoxToRender}
        </Form>
    }
    private onFlatJsonEdit(propToUpdate, newValue){
        const jsonDocument = cloneDeep(this.state.jsonDocument); 
        const iter = (o, keys)=>{
            keys.forEach((k, index)=>{
                if(o[k] !== null && typeof o[k] === "object"){
                    iter(o[k], keys.splice(index+1));
                    return;
                }
                if(typeof o[k] === "string"){
                    o[k] = newValue;
                }
            })
        }
        iter(jsonDocument, propToUpdate.split(FLAT_JSON_PROP_DELIMITER))
        this.setState({jsonDocument, jsonEditorKey:Math.random()});
    }
    private  flattenObject =(ob)=> {
        const toReturn = {};
        for (const i in ob) {
            if (!ob.hasOwnProperty(i)) {continue;}
            if ((typeof ob[i]) === 'object') {
                const flatObject = this.flattenObject(ob[i]);
                for (const x in flatObject) {
                    if (!flatObject.hasOwnProperty(x)) {
                        continue
                    };   
                    toReturn[i + FLAT_JSON_PROP_DELIMITER + x] = flatObject[x];
                }
            } else {
                toReturn[i] = ob[i];
            }
        }
        console.log('flattenObject', ob, toReturn)
        return toReturn;
    }
    private toggleTab(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    private onJsonChange(key, value, parent, data) {
        this.setState({
            jsonDocument: data
        });
    }

    private handleAdd() {
        const document = this.packDocument();
        this.props.documentAdd(document);
        this.props.revertDisplay();
    }

    private handleUpdate() {
        const document = this.packDocument();
        this.props.documentUpdate(document);
        this.props.revertDisplay();
    }

    private getXml()
    {
        const xmlText = convert.js2xml(this.state.jsonDocument, {compact: true, attributeValueFn: (val:string) => EncodeXml(val)});
        
        return xmlText;
    }

    private packDocument() {

        const XmlDoc = JSON.parse(JSON.stringify(this.props.item));

        XmlDoc.XMLText = this.getXml();

        return XmlDoc;
    }

    private isValid() {

        return true;
    }
}

const mapStateToProps = ({ document }) => {
    return { document }
};

const mapActionsToProps = {
    documentGetOne,
    documentAdd,
    documentUpdate,
    documentDelete
};

export default connect(mapStateToProps, mapActionsToProps)(JsonEditTree);
