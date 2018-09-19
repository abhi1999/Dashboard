import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import { Form, Input, InputNumber, Button, Checkbox, Row, Col } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import { errorCodeAdd, errorCodeUpdate, errorCodeDelete } from '../../actions/ErrorCode';
import ErrorCode from "../../constants/implementations/ErrorCode";

const FormItem = Form.Item
const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

export interface IErrorCodeDetailViewProps {
    // Local
    itemId: string,
    item: ErrorCode,
    isNew: boolean,
    toggleModal: any,
    // Redux
    errorCode: any,
    errorCodeAdd: any,
    errorCodeUpdate: any,
    errorCodeDelete: any
}

export interface IErrorCodeDetailViewState {
    Field_Err_Code: string,
    Field_Err_Code_Error: boolean,
    Field_Err_Code_Help: string,
    Field_Err_Desc: string,
    Field_Err_Problem: string,
    Field_Err_Solution: string,
    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class ErrorCodeDetailView extends React.Component<IErrorCodeDetailViewProps, IErrorCodeDetailViewState>  {

    constructor(props: any) {
        super(props);
        this.initState = this.initState.bind(this);
        this.isValid = this.isValid.bind(this);
        this.packErrorCode = this.packErrorCode.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    public componentWillMount() {
        this.initState();
    };

    public render() {

        let actionButtons =
            <div>
                <Button icon='arrow-left' shape="circle" style={{marginLeft:8}} onClick={() =>
                    {
                        this.initState();
                        this.props.toggleModal();
                    }} />
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
                <Button icon='arrow-left' shape="circle" style={{marginLeft:8}} onClick={() =>
                    {
                        this.props.toggleModal();
                    }} />
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
                <Divider />
                <Form name="DetailForm" id="DetailForm" style={{ width: '100%' }}>
                    <FormItem label="Error Code" 
                        style={{height:24}} 
                        {...formItemLayout} 
                        >
                        <Input
                            name="Field_Err_Code"                           
                            value={StringChecker(this.state.Field_Err_Code)}
                            onChange={this.handleInputChange}
                        />
                    </FormItem>
                    <FormItem label="Description" 
                        style={{height:24}}
                        {...formItemLayout}
                        >
                        <Input
                            name="Field_Err_Desc"
                            value={StringChecker(this.state.Field_Err_Desc)}
                            onChange={this.handleInputChange}
                        />
                    </FormItem>
                    <FormItem label="Problem" 
                        style={{height:24}}
                        {...formItemLayout}
                        >
                        <Input
                            name="Field_Err_Problem"
                            value={StringChecker(this.state.Field_Err_Problem)}
                            onChange={this.handleInputChange}
                        />
                    </FormItem>
                    <FormItem label="Solution" 
                        style={{height:24}}
                        {...formItemLayout}
                        >
                        <Input
                            name="Field_Err_Solution"
                            value={StringChecker(this.state.Field_Err_Solution)}
                            onChange={this.handleInputChange}
                        />
                    </FormItem>
                </Form>
            </div>
        )
    };

    private isValid() {
        if (this.state.Field_Err_Code_Error === true) {
            return false;
        }

        return true;
    }
    private initState() {
        this.setState({
            Field_Err_Code: StringChecker(this.props.item.ErrCode),
            Field_Err_Code_Error: false,
            Field_Err_Code_Help: 'Error Code',
            Field_Err_Desc: StringChecker(this.props.item.ErrDesc),
            Field_Err_Problem: StringChecker(this.props.item.Problem),
            Field_Err_Solution: StringChecker(this.props.item.Solution),
        });
    }

    private handleAdd() {
        const errorCode = this.packErrorCode();
        this.props.errorCodeAdd(errorCode);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const errorCode = this.packErrorCode();
        this.props.errorCodeUpdate(errorCode);
        this.props.toggleModal();
    }

    private handleDelete() {
        const errorCode = this.packErrorCode();
        this.props.errorCodeDelete(errorCode);
        this.props.toggleModal();
    }

    private packErrorCode() {
        const { itemId } = this.props;

        let item: ErrorCode = new ErrorCode();

        if (!this.props.isNew) {
            item = this.props.errorCode.errorCodeList.filter((selected) => selected.Id === itemId)[0];
        }

        item.ErrCode = StringChecker(this.state.Field_Err_Code);
        item.ErrDesc = StringChecker(this.state.Field_Err_Desc);
        item.Problem = StringChecker(this.state.Field_Err_Problem);
        item.Solution = StringChecker(this.state.Field_Err_Solution);

        return JSON.parse(JSON.stringify(item));
    }

    private handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (this !== undefined) {
            this.setState({
                [name]: value
            });
        }
        // Field Validation
        if (name === 'Field_Err_Code') {
            if (value.length < 1) {
                this.setState({
                    Field_Err_Code_Error: true,
                    Field_Err_Code_Help: 'Error Code - cannot be blank.'
                });
            }
            else {
                this.setState({
                    Field_Err_Code_Error: false,
                    Field_Err_Code_Help: 'Error Code'
                });
            }
        }
    }
}

const mapStateToProps = ({ errorCode }) => {
    return { errorCode }
};

const mapActionsToProps = {
    errorCodeAdd,
    errorCodeUpdate,
    errorCodeDelete
};

export default connect(mapStateToProps, mapActionsToProps)(ErrorCodeDetailView);
