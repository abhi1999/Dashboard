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
import { FaCircle } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { databaseAdd, databaseUpdate, databaseDelete } from '../../actions/Database';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Database from '../../constants/scheduler/database';

export interface IDatabaseViewProps
{
    // Local
    itemId:string,
    item:Database,
    isNew:boolean,
    toggleModal:any,
    // Redux
    settings:any, 
    database:any, 
    network:any, 
    service:any
    getLastModified:any,
    databaseAdd:any,
    databaseUpdate:any,
    databaseDelete:any
}

export interface IDatabaseViewState
{
    isExpanded:boolean,
    Field_Active:boolean,
    Field_Name:string,
    Field_Name_Error:boolean,
    Field_Name_Help:string,
    Field_Connection:string,
    Field_Database:string,
    Field_Linkage: string,
    Field_Network: string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class DatabaseView extends React.Component<IDatabaseViewProps, IDatabaseViewState> {

    constructor(props:IDatabaseViewProps) {
      super(props);
      this.initState = this.initState.bind(this);
      this.isValid = this.isValid.bind(this);
      this.toggleActive = this.toggleActive.bind(this);
      this.packDatabase = this.packDatabase.bind(this);
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
        };

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
                                        name="Field_Connection"
                                        value={StringChecker(this.state.Field_Connection)}
                                        onChange={this.handleInputChange}
                                        helperText="Connection"
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_Database"
                                        value={StringChecker(this.state.Field_Database)}
                                        onChange={this.handleInputChange}
                                        helperText="Database"
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormControl className="w-100 mb-2">
                                <Select
                                    value={StringChecker(this.state.Field_Linkage)}
                                    onChange={this.handleInputChange}
                                    inputProps={{
                                    name: 'Field_Linkage'
                                    }}
                                >
                                    <MenuItem value={'VB6'}>VB6</MenuItem>
                                    <MenuItem value={'VBNet'}>VBNet</MenuItem>
                                </Select>
                                <FormHelperText>Linkage</FormHelperText>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <FormControl className="w-100 mb-2">
                                  <Select
                                    value={StringChecker(this.state.Field_Network)}
                                    onChange={this.handleInputChange}
                                    inputProps={{
                                      name: 'Field_Network'
                                    }}
                                  >
                                {
                                  this.props.network.networkList.map((network) => {
                                          return (
                                            <MenuItem
                                              key={network.Id}
                                              value={network.Name}>
                                              {network.Name}
                                            </MenuItem>
                                          );
                                        })
                                      }
                                  </Select>
                                  <FormHelperText>Network</FormHelperText>
                                </FormControl>
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
          Field_Connection: this.props.item.Connection,
          Field_Database: this.props.item.Database,
          Field_Linkage: this.props.item.Linkage,
          Field_Network: this.props.item.Network
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
            const database:Database = this.packDatabase();
            database.Active = newActive; // This must be done because setState does not update synchronously
            this.props.databaseUpdate(database);
        }
    }

    private handleAdd() {
        const database = this.packDatabase();
        this.props.databaseAdd(database);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const database = this.packDatabase();
        this.props.databaseUpdate(database);
        this.setState({
            isExpanded: false
            });
    }

    private handleDelete() {
        const database = this.packDatabase();
        this.props.databaseDelete(database);
        this.setState({
            isExpanded: false
            });
    }

    private packDatabase()
    {
        const { itemId } = this.props;
        
        let item = new Database({ Id: itemId });
        if (!this.props.isNew)
        {
            item= this.props.database.databaseList.filter((selected) => selected.Id === itemId)[0];
        }

        item.Active = this.state.Field_Active;
        item.Name = this.state.Field_Name;
        item.Connection = this.state.Field_Connection;
        item.Database = this.state.Field_Database;
        item.Linkage = this.state.Field_Linkage;
        item.Network = this.state.Field_Network;
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
            else if (this.props.database.databaseList.filter((item) => (item.Name === value)).length>0)
            {
                this.setState({
                    Field_Name_Error: true,
                    Field_Name_Help: 'Name - cannot be the same as another Database.'
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

const mapStateToProps = ({settings, database, network, service}) => {
    return {settings, database, network, service}
};

const mapActionsToProps = {
    getLastModified,
    databaseAdd,
    databaseUpdate,
    databaseDelete
};

export default connect(mapStateToProps, mapActionsToProps)(DatabaseView);
