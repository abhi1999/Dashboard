import * as  React from 'react';
import { StringChecker } from '../../utils/Conversion';
import { MultiIncludes } from '../../utils/Comparison';
import { connect } from "react-redux";
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { documentAdd, documentUpdate, documentDelete } from '../../actions/DocumentAction';
import ShipViaModel from "../../constants/implementations/ShipViaModel";
import { Form, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

export interface IDocumentViewProps {
    // Local
    itemId: string,
    item: ShipViaModel,
    isNew: boolean,
    toggleModal: any,
    // Redux
    document: any,
    documentAdd: any,
    documentUpdate: any,
    documentDelete: any
}

export interface IDocumentViewState {
    Field_Ship_Via_ID: string,
    Field_Ship_Via_ID_Status: any,
    Field_Ship_Via_ID_Help: string,
    Field_Ship_Via_Name: string,
    Field_Ship_Via_Name_Status: any,
    Field_Ship_Via_Name_Help: string,
    Field_SCAC: string,
    Field_Ship_Via_Type: string,
    Field_User1: string,
    Field_User2: string,
    Field_User3: string,
    Field_User4: string,
    Field_User5: string,
    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class DocumentView extends React.Component<IDocumentViewProps, IDocumentViewState> {

    constructor(props: any) {
        super(props);

        this.initState = this.initState.bind(this);
        this.isValid = this.isValid.bind(this);
        this.packDocument = this.packDocument.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleField_Ship_Via_TypeChange = this.handleField_Ship_Via_TypeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
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
                    onClick={() => {
                        this.handleDelete();
                    }}>
                    Delete
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
                <Form name="DetailForm" id="DetailForm">
                    <FormItem
                        style={{ height: 24 }}
                        {...formItemLayout}
                        label="Name"
                        validateStatus={this.state.Field_Ship_Via_Name_Status}
                        help={this.state.Field_Ship_Via_Name_Help}
                    >
                        <Input
                            name="Field_Ship_Via_Name"
                            value={StringChecker(this.state.Field_Ship_Via_Name)}
                            onChange={this.handleInputChange}
                        />
                    </FormItem>
                    <FormItem
                        style={{ height: 24 }}
                        {...formItemLayout}
                        label="ID"
                        validateStatus={this.state.Field_Ship_Via_ID_Status}
                        help={this.state.Field_Ship_Via_ID_Help}
                    >
                        <Input
                            disabled={!this.props.isNew}
                            name="Field_Ship_Via_ID"
                            value={StringChecker(this.state.Field_Ship_Via_ID)}
                            onChange={this.handleInputChange}
                        />
                    </FormItem>
                    <FormItem
                        style={{ height: 24 }}
                        {...formItemLayout}
                        label="SCAC"
                    >
                        <Input
                            name="Field_SCAC"
                            value={StringChecker(this.state.Field_SCAC)}
                            onChange={this.handleInputChange}
                        />
                    </FormItem>
                    <FormItem
                        style={{ height: 24 }}
                        {...formItemLayout}
                        label="Type"
                    >
                        <Select
                            id="Field_Ship_Via_Type"
                            value={StringChecker(this.state.Field_Ship_Via_Type)}
                            onChange={this.handleField_Ship_Via_TypeChange}
                        >
                            <Option key="LT" value="LT">LT</Option>
                            <Option key="M" value="M">M</Option>
                            <Option key="U" value="U">U</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        style={{ height: 24 }}
                        {...formItemLayout}
                        label="Field 1"
                    >
                        <Input
                            name="Field_User1"
                            value={StringChecker(this.state.Field_User1)}
                            onChange={this.handleInputChange}
                        />
                    </FormItem>
                    <FormItem
                        style={{ height: 24 }}
                        {...formItemLayout}
                        label="Field 2"
                    >
                        <Input
                            name="Field_User2"
                            value={StringChecker(this.state.Field_User2)}
                            onChange={this.handleInputChange}
                        />
                    </FormItem>
                    <FormItem
                        style={{ height: 24 }}
                        {...formItemLayout}
                        label="Field 3"
                    >
                        <Input
                            name="Field_User3"
                            value={StringChecker(this.state.Field_User3)}
                            onChange={this.handleInputChange}
                        />
                    </FormItem>
                    <FormItem
                        style={{ height: 24 }}
                        {...formItemLayout}
                        label="Field 4"
                    >
                        <Input
                            name="Field_User4"
                            value={StringChecker(this.state.Field_User4)}
                            onChange={this.handleInputChange}
                        />
                    </FormItem>
                    <FormItem
                        style={{ height: 24 }}
                        {...formItemLayout}
                        label="Field 5"
                    >
                        <Input
                            name="Field_User5"
                            value={StringChecker(this.state.Field_User5)}
                            onChange={this.handleInputChange}
                        />
                    </FormItem>
                </Form>
            </div>
        )
    };

    private initState() {
        this.setState({
            Field_Ship_Via_ID: StringChecker(this.props.item.Ship_Via_ID),
            Field_Ship_Via_ID_Status: undefined,
            Field_Ship_Via_ID_Help: '',
            Field_Ship_Via_Name: StringChecker(this.props.item.Ship_Via_Name),
            Field_Ship_Via_Name_Status: undefined,
            Field_Ship_Via_Name_Help: '',
            Field_SCAC: StringChecker(this.props.item.SCAC),
            Field_Ship_Via_Type: StringChecker(this.props.item.Ship_Via_Type),
            Field_User1: StringChecker(this.props.item.User1),
            Field_User2: StringChecker(this.props.item.User2),
            Field_User3: StringChecker(this.props.item.User3),
            Field_User4: StringChecker(this.props.item.User4),
            Field_User5: StringChecker(this.props.item.User5)
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

    private handleDelete() {
        const document = this.packDocument();
        this.props.documentDelete(document);
        this.props.toggleModal();
    }

    private packDocument() {
        const { itemId } = this.props;

        let item: ShipViaModel = new ShipViaModel();

        if (!this.props.isNew) {
            item = this.props.document.documentList.filter((selected) => selected.Id === itemId)[0];
        }

        item.SCAC = StringChecker(this.state.Field_SCAC);
        item.Ship_Via_ID = StringChecker(this.state.Field_Ship_Via_ID);
        item.Ship_Via_Name = StringChecker(this.state.Field_Ship_Via_Name);
        item.Ship_Via_Type = StringChecker(this.state.Field_Ship_Via_Type);
        item.User1 = StringChecker(this.state.Field_User1);
        item.User2 = StringChecker(this.state.Field_User2);
        item.User3 = StringChecker(this.state.Field_User3);
        item.User4 = StringChecker(this.state.Field_User4);
        item.User5 = StringChecker(this.state.Field_User5);

        return JSON.parse(JSON.stringify(item));
    }

    private handleField_Ship_Via_TypeChange(value: string) {
        this.handleFieldChange("Field_Ship_Via_Type", value);
    }

    private handleInputChange(event:any) {

        const target: any = event.target;
        const value: string = target.type === 'checkbox' ? target.checked : target.value;
        const name: string = target.name;

        this.handleFieldChange(name, value);
    }

    private handleFieldChange(name: string, value: string) {

        if (this !== undefined) {
            this.setState({
                [name]: value
            });
        }

        // Field Validation
        if (name === 'Field_Ship_Via_Name') {
            if (value.length < 1) {
                this.setState({
                    Field_Name_Status: 'error',
                    Field_Name_Help: 'Document Name - cannot be blank.'
                });
            }
            else {
                this.setState({
                    Field_Name_Status: undefined,
                    Field_Name_Help: ''
                });
            }
        }
    }

    private isValid() {
        if (this.state.Field_Ship_Via_Name_Error === true) {
            return false;
        }

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

export default connect(mapStateToProps, mapActionsToProps)(DocumentView);
