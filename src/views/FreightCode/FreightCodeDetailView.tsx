import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Form, Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { freightCodeAdd, freightCodeUpdate, freightCodeDelete } from '../../actions/FreightCode';
import FreightCode from "../../constants/implementations/FreightCode";

export interface IFreightCodeDetailViewProps
{
    // Local
    itemId:string,
    item:FreightCode,
    isNew:boolean,
    toggleModal:any,
    // Redux
    freightCode:any,
    freightCodeAdd:any,
    freightCodeUpdate:any,
    freightCodeDelete:any
}

export interface IFreightCodeDetailViewState
{
    Field_Frt_Code:string,
    Field_Frt_Code_Error:boolean,
    Field_Frt_Code_Help:string,
    Field_Description:string,
    Field_NMFC:string,
    Field_NMFC_Error:boolean,
    Field_NMFC_Help:string,
    Field_Class:string,
    Field_HazMat:boolean,
    Field_Sub:string,
    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class FreightCodeDetailView extends React.Component<IFreightCodeDetailViewProps,IFreightCodeDetailViewState>  {

    constructor(props:any) {
      super(props);
      this.initState = this.initState.bind(this);
      this.isValid = this.isValid.bind(this);
      this.packFreightCode = this.packFreightCode.bind(this);
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
                        if(this.isValid())
                        {
                            this.handleUpdate();
                        }
                    }}>
                Update
            </Button>
        </div>;
    if(this.props.isNew)
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
                <Form name="DetailForm" id="DetailForm" style={{ width: '100%' }}>
                    <Container>
                        <Row>
                            <Col xs="4">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    error={this.state.Field_Frt_Code_Error}
                                    name="Field_Frt_Code"
                                    value={StringChecker(this.state.Field_Frt_Code)}
                                    onChange={this.handleInputChange}
                                    helperText={this.state.Field_Frt_Code_Help}
                                />
                            </Col>
                            <Col xs="auto">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_Description"
                                    value={StringChecker(this.state.Field_Description)}
                                    onChange={this.handleInputChange}
                                    helperText="Description"
                                />
                            </Col>
                            <Col xs="4">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    error={this.state.Field_NMFC_Error}
                                    name="Field_NMFC"
                                    value={StringChecker(this.state.Field_NMFC)}
                                    onChange={this.handleInputChange}
                                    helperText={this.state.Field_NMFC_Help}
                                />
                            </Col>
                            <Col xs="4">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_Class"
                                    value={StringChecker(this.state.Field_Class)}
                                    onChange={this.handleInputChange}
                                    helperText="Class"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="Field_HazMat"
                                            checked = {this.state.Field_HazMat}
                                            onChange={this.handleInputChange}
                                            color="primary"
                                        />
                                    }
                                    label="HazMat"
                                />
                            </Col>
                            <Col xs="4">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_Sub"
                                    value={StringChecker(this.state.Field_Sub)}
                                    onChange={this.handleInputChange}
                                    helperText="Sub"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
    )};

    private isValid()
    {
        if (this.state.Field_Frt_Code_Error===true || this.state.Field_NMFC_Error===true)
        {
            return false;
        }

        return true;
    }
    private initState() {
        this.setState({
            Field_Frt_Code: StringChecker(this.props.item.Frt_Code),
            Field_Frt_Code_Error: false,
            Field_Frt_Code_Help: 'Freight Code',
            Field_Description: StringChecker(this.props.item.Description),
            Field_NMFC: StringChecker(this.props.item.NMFC),
            Field_NMFC_Error: false,
            Field_NMFC_Help: 'Freight Code NMFC',
            Field_Class: StringChecker(this.props.item.Class),
            Field_HazMat: this.props.item.HazMat,
            Field_Sub: StringChecker(this.props.item.Sub)
        });
    }

    private handleAdd() {
        const freightCode = this.packFreightCode();
        this.props.freightCodeAdd(freightCode);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const freightCode = this.packFreightCode();
        this.props.freightCodeUpdate(freightCode);
        this.props.toggleModal();
    }

    private handleDelete() {
        const freightCode = this.packFreightCode();
        this.props.freightCodeDelete(freightCode);
        this.props.toggleModal();
    }

    private packFreightCode()
    {
        const { itemId } = this.props;
        
        let item:FreightCode = new FreightCode();

        if (!this.props.isNew)
        {
            item= this.props.freightCode.freightCodeList.filter((selected) => selected.Id === itemId)[0];
        }

        item.Frt_Code = StringChecker(this.state.Field_Frt_Code);
        item.Description = StringChecker(this.state.Field_Description);
        item.NMFC = StringChecker(this.state.Field_NMFC);
        item.Class = StringChecker(this.state.Field_Class);
        item.HazMat = this.state.Field_HazMat;
        item.Sub = StringChecker(this.state.Field_Sub);
        
        return JSON.parse(JSON.stringify(item));
    }

    private handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (this!==undefined) {
            this.setState({
                [name]: value
            });
        }
        // Field Validation
        if (name === 'Field_Frt_Code') {
            if (value.length < 1) {
                this.setState({
                    Field_Frt_Code_Error: true,
                    Field_Frt_Code_Help: 'Freight Code - cannot be blank.'
                });
            }
            else {
                this.setState({
                    Field_Frt_Code_Error: false,
                    Field_Frt_Code_Help: 'Freight Code'
                });
            }
        }
        else if (name === 'Field_NMFC') {
            if (value.length < 1) {
                this.setState({
                    Field_NMFC_Error: true,
                    Field_NMFC_Help: 'Freight Code NMFC - cannot be blank.'
                });
            }
            else {
                this.setState({
                    Field_NMFC_Error: false,
                    Field_NMFC_Help: 'Freight Code NMFC'
                });
            }
        }
    }
}

const mapStateToProps = ({freightCode}) => {
    return {freightCode}
};

const mapActionsToProps = {
    freightCodeAdd,
    freightCodeUpdate,
    freightCodeDelete
};

export default connect(mapStateToProps, mapActionsToProps)(FreightCodeDetailView);
