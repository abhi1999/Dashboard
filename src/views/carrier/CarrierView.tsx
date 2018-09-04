import * as  React from 'react';
import { StringChecker } from '../../utils/Conversion';
import { Form, Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { carrierAdd, carrierUpdate, carrierDelete } from '../../actions/CarrierAction';
import ShipViaModel from "../../constants/implementations/ShipViaModel";

export interface ICarrierViewProps
{
    // Local
    itemId:string,
    item:ShipViaModel,
    isNew:boolean,
    toggleModal:any,
    // Redux
    carrier:any,
    carrierAdd:any,
    carrierUpdate:any,
    carrierDelete:any
}

export interface ICarrierViewState
{
    Field_Ship_Via_ID:string,
    Field_Ship_Via_ID_Error:boolean,
    Field_Ship_Via_ID_Help:string,
    Field_Ship_Via_Name:string,
    Field_Ship_Via_Name_Error:boolean,
    Field_Ship_Via_Name_Help:string,
    Field_SCAC:string,
    Field_Ship_Via_Type:string,
    Field_User1:string,
    Field_User2:string,
    Field_User3:string,
    Field_User4:string,
    Field_User5:string,
    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class CarrierView extends React.Component<ICarrierViewProps,ICarrierViewState> {

    constructor(props:any) {
      super(props);

      this.initState = this.initState.bind(this);
      this.isValid = this.isValid.bind(this);
      this.packCarrier = this.packCarrier.bind(this);
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
                <Form name="DetailForm" id="DetailForm" style={{width: '100%'}}>
                    <Container>
                        <Row>
                            <Col xs="6">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    error={this.state.Field_Ship_Via_Name_Error}
                                    name="Field_Ship_Via_Name"
                                    value={StringChecker(this.state.Field_Ship_Via_Name)}
                                    onChange={this.handleInputChange}
                                    helperText={this.state.Field_Ship_Via_Name_Help}
                                />
                            </Col>
                            <Col xs="4">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    error={this.state.Field_Ship_Via_ID_Error}
                                    name="Field_Ship_Via_ID"
                                    value={StringChecker(this.state.Field_Ship_Via_ID)}
                                    onChange={this.handleInputChange}
                                    helperText={this.state.Field_Ship_Via_ID_Help}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_SCAC"
                                    value={StringChecker(this.state.Field_SCAC)}
                                    onChange={this.handleInputChange}
                                    helperText="SCAC"
                                />
                            </Col>
                            <Col xs="4">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_Ship_Via_Type"
                                    value={StringChecker(this.state.Field_Ship_Via_Type)}
                                    onChange={this.handleInputChange}
                                    helperText="Type"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_User1"
                                    value={StringChecker(this.state.Field_User1)}
                                    onChange={this.handleInputChange}
                                    helperText="Field 1"
                                />
                            </Col>
                            <Col xs="2">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_User2"
                                    value={StringChecker(this.state.Field_User2)}
                                    onChange={this.handleInputChange}
                                    helperText="Field 2"
                                />
                            </Col>
                            <Col xs="2">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_User3"
                                    value={StringChecker(this.state.Field_User3)}
                                    onChange={this.handleInputChange}
                                    helperText="Field 3"
                                />
                            </Col>
                            <Col xs="2">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_User4"
                                    value={StringChecker(this.state.Field_User4)}
                                    onChange={this.handleInputChange}
                                    helperText="Field 4"
                                />
                            </Col>
                            <Col xs="2">
                                <TextField
                                    margin="normal"
                                    fullWidth={true}
                                    name="Field_User5"
                                    value={StringChecker(this.state.Field_User5)}
                                    onChange={this.handleInputChange}
                                    helperText="Field 5"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
    )};

    private initState()
    {
        this.setState({
            Field_Ship_Via_ID: StringChecker(this.props.item.Ship_Via_ID),
            Field_Ship_Via_ID_Error: false,
            Field_Ship_Via_ID_Help: 'ID',
            Field_Ship_Via_Name: StringChecker(this.props.item.Ship_Via_Name),
            Field_Ship_Via_Name_Error: false,
            Field_Ship_Via_Name_Help: 'Carrier Name',
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
        const carrier = this.packCarrier();
        this.props.carrierAdd(carrier);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const carrier = this.packCarrier();
        this.props.carrierUpdate(carrier);
        this.props.toggleModal();
    }

    private handleDelete() {
        const carrier = this.packCarrier();
        this.props.carrierDelete(carrier);
        this.props.toggleModal();
    }

    private packCarrier()
    {
        const { itemId } = this.props;
        
        let item:ShipViaModel = new ShipViaModel();

        if (!this.props.isNew)
        {
            item = this.props.carrier.carrierList.filter((selected) => selected.Id === itemId)[0];
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
        if (name==='Field_Ship_Via_Name')
        {
            if (value.length < 1)
            {
                this.setState({
                    Field_Ship_Via_Name_Error: true,
                    Field_Ship_Via_Name_Help: 'Carrier Name - cannot be blank.'
                });
            }
            else
            {
                this.setState({
                    Field_Ship_Via_Name_Error: false,
                    Field_Ship_Via_Name_Help: 'Carrier Name'
                });
            }
        }
        else if (name==='Field_Ship_Via_ID')
        {
            if (value.length < 1)
            {
                this.setState({
                    Field_Ship_Via_ID_Error: true,
                    Field_Ship_Via_ID_Help: 'Carrier ID - cannot be blank.'
                });
            }
            else
            {
                this.setState({
                    Field_Ship_Via_ID_Error: false,
                    Field_Ship_Via_ID_Help: 'ID'
                });
            }
        }
    }

    private isValid()
    {
        if (this.state.Field_Ship_Via_Name_Error===true)
        {
            return false;
        }

        return true;
    }
}

const mapStateToProps = ({carrier}) => {
    return {carrier}
};

const mapActionsToProps = {
    carrierAdd,
    carrierUpdate,
    carrierDelete
};

export default connect(mapStateToProps, mapActionsToProps)(CarrierView);
