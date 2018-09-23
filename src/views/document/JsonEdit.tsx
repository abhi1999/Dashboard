import * as  React from 'react';
import { connect } from "react-redux";
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { documentAdd, documentUpdate, documentDelete, documentGetOne } from '../../actions/DocumentAction';
import { Button } from 'antd';
import { IXMLDoc } from '../../constants/edidb';
import * as XXMLDoc from "../../constants/edidb/CXMLDoc";
import * as convert from 'xml-js';
import * as format from 'xml-formatter';
import { JSONEditor } from 'react-json-editor-viewer';
import { EncodeXml } from '../../utils/Conversion';

export interface IJsonEditProps {
    // Local
    item: IXMLDoc,
    itemId: string,
    isNew: boolean,
    match: any,
    // Redux
    document: any,
    documentAdd: any,
    documentUpdate: any,
    documentGetOne: any
}

export interface IJsonEditState {
    key: number,
    XmlDoc: IXMLDoc,
    jsonDocument: any
}

class JsonEdit extends React.Component<IJsonEditProps, IJsonEditState> {

    constructor(props: any) {
        super(props);

        this.isValid = this.isValid.bind(this);
        this.packDocument = this.packDocument.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.onJsonChange = this.onJsonChange.bind(this);
        this.getXml = this.getXml.bind(this);

        this.state = {
            key: 0,
            XmlDoc: new XXMLDoc.CXMLDoc(),
            jsonDocument: {},
        };
    }

    public componentWillMount() {

        if (this.props.match) {
            this.props.documentGetOne(this.props.match.params.vpid);
        }
    }

    public componentWillReceiveProps(newProps) {

        if (newProps.document.document && newProps.document.document.XMLText) {
            
            const result = convert.xml2js(newProps.document.document.XMLText, {compact: true});

            this.setState({
                key:Math.random(),
                XmlDoc: newProps.document.document,
                jsonDocument: result
            })
        }
    }

    public render() {

        let actionButtons =
            <div>
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
                        type="primary"
                        onClick={() => {
                            if (this.isValid()) {
                                this.handleAdd();
                            }
                        }}>
                        Add
            </Button>
                </div>
        }
        return (
            <div style={{ width: '100%', marginBottom: 20 }}>
                {actionButtons}
                <Divider style={{ margin: 10 }} />
                <JSONEditor 
                    key={this.state.key}
                    data={this.state.jsonDocument}
                    onChange={this.onJsonChange}/>
                />
                <Divider style={{ margin: 10 }} />
                <table>
                    <tr>
                        <td>
                            <pre>
                                {format(this.state.XmlDoc.XMLText)}
                            </pre>
                        </td>
                        <td>
                            <pre>
                                {format(this.getXml())}
                            </pre>
                        </td>
                    </tr>
                </table>
            </div>
        )
    };

    private onJsonChange(key, value, parent, data) {
        this.setState({
            jsonDocument: data
        });
    }

    private handleAdd() {
        const document = this.packDocument();
        this.props.documentAdd(document);
    }

    private handleUpdate() {
        const document = this.packDocument();
        this.props.documentUpdate(document);
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

export default connect(mapStateToProps, mapActionsToProps)(JsonEdit);
