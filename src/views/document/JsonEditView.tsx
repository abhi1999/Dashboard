import * as  React from 'react';
import { connect } from "react-redux";
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { documentAdd, documentUpdate, documentDelete } from '../../actions/DocumentAction';
import { Button } from 'antd';
import { IXMLDoc } from '../../constants/edidb';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import { parseString, Builder } from 'xml2js';

export interface IJsonEditViewProps {
    // Local
    itemId: string,
    item: IXMLDoc,
    isNew: boolean,
    toggleModal: any,
    // Redux
    document: any,
    documentAdd: any,
    documentUpdate: any
}

export interface IJsonEditViewState {
    XmlDoc: any,
    jsonDocument: any
}

class JsonEditView extends React.Component<IJsonEditViewProps, IJsonEditViewState> {

    constructor(props: any) {
        super(props);

        this.initState = this.initState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isValid = this.isValid.bind(this);
        this.packDocument = this.packDocument.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    public componentWillMount() {
        this.initState();
    };

    public render() {

        let actionButtons =
            <div>
                <Button style={{ marginLeft: 8 }}
                    onClick={() => {
                        this.initState();
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

                <JSONInput
                    id          = 'jsonEditor'
                    placeholder = { this.state.jsonDocument }
                    theme="light_mitsuketa_tribute"
                    locale      = { locale }
                    width       = '100%'
                    height      = '100%'
                    onChange    = { this.onChange }
                    />
            </div>
        )
    };

    private initState() {

        parseString(this.props.item.XMLText, (err, result) =>
        this.setState({
            jsonDocument: result
            })
        );
    }

    private onChange(obj)
    {
        const json = obj.jsObject;
        
        this.setState({
            jsonDocument: json
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

        const { item } = this.props;

        const builder = new Builder({renderOpts: {'pretty': false}, headless: true});

        const xmlText = builder.buildObject(this.state.jsonDocument);

        item.XMLText = xmlText;

        return JSON.parse(JSON.stringify(item));
    }

    private isValid() {

        return true;
    }
}

const mapStateToProps = ({ document }) => {
    return { document }
};

const mapActionsToProps = {
    documentAdd,
    documentUpdate,
    documentDelete
};

export default connect(mapStateToProps, mapActionsToProps)(JsonEditView);
