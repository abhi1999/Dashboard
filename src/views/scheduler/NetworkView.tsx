import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Form, Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import { getLastModified } from '../../actions/Service';
import uuid from 'uuid-v4';
import TextField from '@material-ui/core/TextField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { FaCircle,FaCheckCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { networkAdd, networkUpdate, networkDelete } from '../../actions/Network';
import Network from '../../constants/scheduler/network';

export interface INetworkViewProps
{
    // Local
    itemId:string,
    item:Network,
    isNew:boolean,
    toggleModal:any,
    // Redux
    settings:any, 
    network:any,
    service:any
    getLastModified:any,
    networkAdd:any,
    networkUpdate:any,
    networkDelete:any
}

export interface INetworkViewState
{
    isExpanded:boolean,
    Field_Active:boolean,
    Field_Name:string,
    Field_Name_Error:boolean,
    Field_Name_Help:string,
    Field_Server:string,
    Field_Port:string,
    Field_Username:string,
    Field_Password: string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class NetworkView extends React.Component<INetworkViewProps, INetworkViewState> {

    constructor(props:INetworkViewProps) {
      super(props);
      this.initState = this.initState.bind(this);
      this.isValid = this.isValid.bind(this);
      this.toggleActive = this.toggleActive.bind(this);
      this.packNetwork = this.packNetwork.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    public componentWillMount() {
        this.initState();
    };

    public render() {

        let activeIcon = <FaCircle size={36} color='Green' onClick={ () => { this.toggleActive(); }} />;
        if (this.state.Field_Active)
        {
            activeIcon = <FaCheckCircle size={36} color='Green' onClick={ () => { this.toggleActive(); }} />;
        }

        let actionButtons =
        <div>
            <Button size="medium" color="secondary"
                    onClick={() =>
                    {
                        this.initState();
                        this.setState({
                            isExpanded: false
                            });
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
                        if(this.isValid())
                        {
                            this.handleAdd();
                        }
                    }}>
                Add
            </Button>
        </div>
    }

        return (
        <table style={{width: '100%', marginBottom: 20 }}>
        <tbody>
        <tr >
            <td style={{verticalAlign: 'top', paddingLeft: 9, paddingTop: 8, paddingRight:8}}>
            <div>{activeIcon}</div>
        </td>
        <td style={{width: '100%'}}>
            <ExpansionPanel expanded={this.state.isExpanded} onChange={this.expansionChange(null)} CollapseProps={{ unmountOnExit: true }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} style={{width: '100%'}}>
                <div style={{width: '100%', fontWeight: 'bold', marginLeft:8, marginTop:8}}>{ this.state.Field_Name }</div>
                </ExpansionPanelSummary>
                <Divider/>
                <ExpansionPanelActions>
                    {actionButtons}
                </ExpansionPanelActions>
                <Divider/>
                <ExpansionPanelDetails >
                  <Form name="DetailForm" id="DetailForm" style={{width: '100%'}}>
                      <Container>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        error={this.state.Field_Name_Error}
                                        name="Field_Name"
                                        value={StringChecker(this.state.Field_Name)}
                                        onChange={this.handleInputChange}
                                        helperText={this.state.Field_Name_Help}
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_Server"
                                        value={StringChecker(this.state.Field_Server)}
                                        onChange={this.handleInputChange}
                                        helperText="Server"
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_Port"
                                        value={StringChecker(this.state.Field_Port)}
                                        onChange={this.handleInputChange}
                                        helperText="Port"
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_Username"
                                        value={StringChecker(this.state.Field_Username)}
                                        onChange={this.handleInputChange}
                                        helperText="Username"
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_Password"
                                        value={StringChecker(this.state.Field_Password)}
                                        onChange={this.handleInputChange}
                                        type="password"
                                        helperText="Password"
                                    />
                            </Col>
                        </Row>
                      </Container>
                  </Form>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            </td>
        </tr>
        </tbody>
      </table>
    )};

    private initState()
    {
        this.setState({
            isExpanded: this.props.isNew,
            Field_Active: this.props.item.Active,
            Field_Name: this.props.item.Name,
            Field_Name_Error: false,
            Field_Name_Help: 'Name',
            Field_Server: this.props.item.Server,
            Field_Port: this.props.item.Port,
            Field_Username: this.props.item.Username,
            Field_Password: this.props.item.Password,
          });
    }

    private toggleActive()
    {
        const newActive = !this.state.Field_Active;
        this.setState({
            Field_Active: newActive
        });

        if (!this.props.isNew) // Only update immediately if the item already exists.
        {
            const network:Network = this.packNetwork();
            network.Active = newActive; // This must be done because setState does not update synchronously
            this.props.networkUpdate(network);
        }
    }

    private handleAdd() {
        const network:Network = this.packNetwork();
        this.props.networkAdd(network);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const network:Network = this.packNetwork();
        this.props.networkUpdate(network);
        this.setState({
            isExpanded: false
            });
    }

    private handleDelete() {
        const network:Network = this.packNetwork();
        this.props.networkDelete(network);
        this.setState({
            isExpanded: false
            });
    }

    private packNetwork()
    {
        const { itemId } = this.props;
        
        let item:Network = new Network({ Id: itemId });
        if (!this.props.isNew)
        {
            item= this.props.network.networkList.filter((selected) => selected.Id === itemId)[0];
        }

        item.Active = this.state.Field_Active;
        item.Name = this.state.Field_Name;
        item.Server = this.state.Field_Server;
        item.Port = this.state.Field_Port;
        item.Username = this.state.Field_Username;
        item.Password = this.state.Field_Password;
        item.ClientId = this.props.service.clientId;
        item.LastModified =  this.props.getLastModified(uuid()).payload;

        return item;
    }

    private handleInputChange(event) {

        const target:any = event.target;
        const value:string = target.type === 'checkbox' ? target.checked : target.value;
        const name:string = target.name;

        if (this!==undefined) {
            this.setState({
                [name]: value
            });
        }
        // Field Validation
        if (name==='Field_Name')
        {
            if (value.length < 1)
            {
                this.setState({
                    Field_Name_Error: true,
                    Field_Name_Help: 'Name - cannot be blank.'
                });
            }
            else if (this.props.network.networkList.filter((item) => (item.Name === value)).length>0)
            {
                this.setState({
                    Field_Name_Error: true,
                    Field_Name_Help: 'Name - cannot be the same as another Network.'
                });
            }
            else
            {
                this.setState({
                    Field_Name_Error: false,
                    Field_Name_Help: 'Name'
                });
            }
        }
    }

    private isValid()
    {
        if (this.state.Field_Name_Error===true)
        {
            return false;
        }

        return true;
    }

    private expansionChange = panel => (event, expanded) => {
        this.setState({
          isExpanded: !this.state.isExpanded
        });
      };

}

const mapStateToProps = ({settings, network, service}) => {
    return {settings, network, service}
};

const mapActionsToProps = {
    getLastModified,
    networkAdd,
    networkUpdate,
    networkDelete
};

export default connect(mapStateToProps, mapActionsToProps)(NetworkView);
