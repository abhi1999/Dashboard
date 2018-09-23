import * as  React from 'react';
import { connect } from "react-redux";
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { documentAdd, documentUpdate, documentDelete, documentGetOne } from '../../actions/DocumentAction';
import { Button } from 'antd';
import { IXMLDoc } from '../../constants/edidb';
import * as XXMLDoc from "../../constants/edidb/CXMLDoc";
import { parseString, Builder } from 'xml2js';
import { SchemaTypes } from 'object-editor-react';
import { ObjectEditor } from 'object-editor-react';
const schema = SchemaTypes.object();

export interface IXmlEditFormProps {
    // Local
    item: IXMLDoc,
    itemId: string,
    isNew: boolean,
    toggleModal: any,
    match: any,
    // Redux
    document: any,
    documentAdd: any,
    documentUpdate: any,
    documentGetOne: any
}

export interface IXmlEditFormState {
    jsonDocument: any
}

class XmlEditForm extends React.Component<IXmlEditFormProps, IXmlEditFormState> {

    constructor(props: any) {
        super(props);

        this.isValid = this.isValid.bind(this);
        this.packDocument = this.packDocument.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.onUpdateElement = this.onUpdateElement.bind(this);

        this.state = {
            jsonDocument: {},
        };
    }

    public componentWillMount() {

        if (this.props.item && this.props.item.XMLText) {
            
            parseString(this.props.item.XMLText, (err, result) =>
                this.setState({
                    jsonDocument: result,
                })
            );
        }
    }

    public render() {

        let actionButtons =
            <div>
                <Button style={{ marginLeft: 8 }}
                    onClick={() => {
                        this.props.toggleModal();
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
                            this.props.toggleModal();
                        }}>
                        Cancel
            </Button>
                    <Button style={{ marginLeft: 8 }}
                        type="primary"
                        onClick={() => {
                            if (this.isValid()) {
                                this.handleAdd();
                                this.props.toggleModal();
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
                    {this.props.item.XMLText}
                <Divider style={{ margin: 10 }} />
                <ObjectEditor
                    type={schema}
                    object={this.state.jsonDocument}
                    onUpdateElement={this.onUpdateElement}
                />
            </div>
        )
    };

    private onUpdateElement(updatedElement, updatedIndex) {
        this.setState({
            jsonDocument: updatedElement
        });
    }

    private handleAdd() {
        const document = this.packDocument();
        this.props.documentAdd(document);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const document = this.packDocument();
        this.props.documentUpdate(document);
        this.props.toggleModal();
    }

    private packDocument() {

        const XmlDoc = JSON.parse(JSON.stringify(this.props.item));

        const builder = new Builder({ renderOpts: { 'pretty': false }, headless: true });

        const xmlText = builder.buildObject(this.state.jsonDocument);

        XmlDoc.XMLText = xmlText;

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

export default connect(mapStateToProps, mapActionsToProps)(XmlEditForm);
