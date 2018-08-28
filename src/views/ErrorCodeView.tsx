import * as  React from 'react';
import { StringChecker } from '../utils/Conversion';
import { Form, Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { errorCodeAdd, errorCodeUpdate, errorCodeDelete } from '../actions/ErrorCode';
import { IErrorCode } from "../constants/edidb";

class ErrorCodeView extends React.Component<any, any> {

    constructor(props:any) {
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
            <Button size="medium" color="secondary"
                    onClick={() =>
                    {
                        this.initState();
                        this.props.toggleModal();
                    }}>
                Cancel
            </Button>
            <Button size="medium" color="secondary"
                    onClick={() =>
                    {
                        this.handleDelete();
                    }}>
                Delete
            </Button>
            <Button size="medium" color="primary"
                    onClick={() =>
                    {
                        if (this.isValid())
                        {
                            this.handleUpdate();
                        }
                    }}>
                Update
            </Button>
        </div>;
        
        if (this.props.isNew)
        {
            actionButtons =
            <div>
                <Button size="medium" color="secondary"
                        onClick={() =>
                        {
                            this.props.toggleModal();
                        }}>
                    Cancel
                </Button>
                <Button size="medium" color="secondary"
                        onClick={() =>
                        {
                            if(this.isValid())
                            {
                                this.handleAdd();
                                this.props.toggleModal();
                            }
                        }}>
                    Add
                </Button>
            </div>
        }

        return (
            <div style={{width: '100%', marginBottom: 20 }}>
                {actionButtons}
                <Divider/>
                <Form name="DetailForm" id="DetailForm" style={{width: '100%'}}>
                    <Container>
                        <Row>
                        <Col xs="4">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    error={this.state.Field_ErrorCode_ErrCode_Error}
                                    name="Field_ErrorCode_ErrCode"
                                    value={StringChecker(this.state.Field_ErrorCode_ErrCode)}
                                    onChange={this.handleInputChange}
                                    helperText={this.state.Field_ErrorCode_ErrCode_Help}
                                />
                            </Col>
                            <Col xs="6">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    error={this.state.Field_ErrorCode_ErrDesc_Error}
                                    name="Field_ErrorCode_ErrDesc"
                                    value={StringChecker(this.state.Field_ErrorCode_ErrDesc)}
                                    onChange={this.handleInputChange}
                                    helperText={this.state.Field_ErrorCode_ErrDesc_Help}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_ErrorCode_Problem"
                                    value={StringChecker(this.state.Field_ErrorCode_Problem)}
                                    onChange={this.handleInputChange}
                                    helperText="Problem"
                                />
                            </Col>
                            <Col xs="4">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_ErrorCode_Solution"
                                    value={StringChecker(this.state.Field_ErrorCode_Solution)}
                                    onChange={this.handleInputChange}
                                    helperText="Solution"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_ErrorCode_URL"
                                    value={StringChecker(this.state.Field_ErrorCode_URL)}
                                    onChange={this.handleInputChange}
                                    helperText="URL"
                                />
                            </Col>
                            <Col xs="4">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_ErrorCode_AcctPackageID"
                                    value={StringChecker(this.state.Field_ErrorCode_AcctPackageID)}
                                    onChange={this.handleInputChange}
                                    helperText="Accounting Package ID"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        )
    };

    private initState()
    {
        this.setState({
            Field_ErrorCode_ErrCode: StringChecker(this.props.item.ErrCode),
            Field_ErrorCode_ErrCode_Error: false,
            Field_ErrorCode_ErrCode_Help: 'Code',
            
            Field_ErrorCode_ErrDesc: StringChecker(this.props.item.ErrDesc),
            Field_ErrorCode_ErrDesc_Error: false,
            Field_ErrorCode_ErrDesc_Help: 'Error Desc',
            
            Field_ErrorCode_Problem: StringChecker(this.props.item.Problem),
            Field_ErrorCode_Solution: StringChecker(this.props.item.Solution),
            Field_ErrorCode_URL: StringChecker(this.props.item.URL),
            Field_ErrorCode_AcctPackageID: StringChecker(this.props.item.AcctPackageID),
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

    private packErrorCode()
    {
        const { itemId } = this.props;
        
        let item: IErrorCode =
        {
            // Id: itemId,
            ErrCode: "",
            ErrDesc: "",
            Problem: "",
            Solution: "",
            URL: "",
            AcctPackageID: "",
        }

        if (!this.props.isNew)
        {
            item = this.props.errorCode.errorCodeList.filter((selected) => selected.Id === itemId)[0];
        }

        item.ErrCode = StringChecker(this.state.Field_ErrorCode_ErrCode);
        item.ErrDesc = StringChecker(this.state.Field_ErrorCode_ErrDesc);
        item.Problem = StringChecker(this.state.Field_ErrorCode_Problem);
        item.Solution = StringChecker(this.state.Field_ErrorCode_Solution);
        item.URL = StringChecker(this.state.Field_ErrorCode_URL);
        item.AcctPackageID = StringChecker(this.state.Field_ErrorCode_AcctPackageID);
        
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
        if (name === 'Field_ErrCode_Code')
        {
            if (value.length < 1)
            {
                this.setState({
                    Field_ErrorCode_ErrCode_Error: true,
                    Field_ErrorCode_ErrCode_Help: 'Error Code - cannot be blank.'
                });
            }
            else
            {
                this.setState({
                    Field_ErrorCode_ErrCode_Error: false,
                    Field_ErrorCode_ErrCode_Help: 'Error Code'
                });
            }
        }
        else if (name === 'Field_ErrorCode_Desc')
        {
            if (value.length < 1)
            {
                this.setState({
                    Field_ErrorCode_ErrDesc_Error: true,
                    Field_ErrorCode_ErrDesc_Help: 'Error Desc - cannot be blank.'
                });
            }
            else
            {
                this.setState({
                    Field_ErrorCode_ErrDesc_Error: false,
                    Field_ErrorCode_ErrDesc_Help: 'Desc'
                });
            }
        }
    }

    private isValid()
    {
        if (this.state.Field_Name_Error === true)
        {
            return false;
        }

        return true;
    }
}

const mapStateToProps = ({errorCode}) => {
    return {errorCode}
};

const mapActionsToProps = {
    errorCodeAdd,
    errorCodeUpdate,
    errorCodeDelete
};

export default connect(mapStateToProps, mapActionsToProps)(ErrorCodeView);
