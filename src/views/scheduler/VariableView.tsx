import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Form, Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import { getLastModified } from '../../actions/Scheduler/ServiceAction';
import uuid from 'uuid-v4';
import TextField from '@material-ui/core/TextField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { FaCircle } from 'react-icons/fa'; import { FaCheckCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { variableAdd, variableUpdate, variableDelete } from '../../actions/Scheduler/VariableAction';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Variable from '../../constants/scheduler/variable';

export interface IVariableViewProps
{
    // Local
    itemId:string,
    item:Variable,
    isNew:boolean,
    toggleModal:any,
    // Redux
    settings:any, 
    variable:any, 
    network:any, 
    service:any
    getLastModified:any,
    variableAdd:any,
    variableUpdate:any,
    variableDelete:any
}

export interface IVariableViewState
{
    isExpanded:boolean,
    Field_Active:boolean,
    Field_Name:string,
    Field_Name_Error:boolean,
    Field_Name_Help:string,
    Field_Init:string,
    Field_Type:string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class VariableView extends React.Component<IVariableViewProps, IVariableViewState> {

    constructor(props:IVariableViewProps) {
      super(props);
      this.initState = this.initState.bind(this);
      this.isValid = this.isValid.bind(this);
      this.toggleActive = this.toggleActive.bind(this);
      this.packVariable = this.packVariable.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    public componentWillMount() {
        this.initState();
    }

    
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
                          <FormControl className="w-100 mb-2">
                                    <Select
                                      value={StringChecker(this.state.Field_Type)}
                                      onChange={this.handleInputChange}
                                      inputProps={{
                                        name: 'Field_Type'
                                      }}
                                    >
                                      <MenuItem value={'Integer'}>Integer</MenuItem>
                                      <MenuItem value={'String'}>String</MenuItem>
                                    </Select>
                                    <FormHelperText>Data Type</FormHelperText>
                                  </FormControl>
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              <TextField
                                     margin="normal"
                                     fullWidth={true}
                                     name="Field_Init"
                                     value={StringChecker(this.state.Field_Init)}
                                     onChange={this.handleInputChange}
                                     helperText="Initial Value"
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
            Field_Init: this.props.item.Init,
            Field_Type: this.props.item.Type
          });
    }

    private toggleActive()
    {
        const newActive:boolean = !this.state.Field_Active;
        this.setState({
            Field_Active: newActive
        });

        if (!this.props.isNew) // Only update immediately if the item already exists.
        {
            const variable = this.packVariable();
            variable.Active = newActive; // This must be done because setState does not update synchronously
            this.props.variableUpdate(variable);
        }
    }

    private handleAdd() {
        const variable:Variable = this.packVariable();
        this.props.variableAdd(variable);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const variable:Variable = this.packVariable();
        this.props.variableUpdate(variable);
        this.setState({
            isExpanded: false
            });
    }

    private handleDelete() {
        const variable:Variable = this.packVariable();
        this.props.variableDelete(variable);
        this.setState({
            isExpanded: false
            });
    }

    private packVariable()
    {
        const { itemId } = this.props;
        
        let item:Variable = new Variable({ Id: itemId });
        if (!this.props.isNew)
        {
            item= this.props.variable.variableList.filter((selected) => selected.Id === itemId)[0];
        }

        item.Active = this.state.Field_Active;
        item.Name = this.state.Field_Name;
        item.Init = this.state.Field_Init;
        item.Type = this.state.Field_Type;
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
            else if (this.props.variable.variableList.filter((item) => (item.Name === value)).length>0)
            {
                this.setState({
                    Field_Name_Error: true,
                    Field_Name_Help: 'Name - cannot be the same as another Variable.'
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

const mapStateToProps = ({settings, variable, service}) => {
    return {settings, variable, service}
};

const mapActionsToProps = {
    getLastModified,
    variableAdd,
    variableUpdate,
    variableDelete
};

export default connect(mapStateToProps, mapActionsToProps)(VariableView);
