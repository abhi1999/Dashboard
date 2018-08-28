import * as React from "react";
import _ from 'lodash';
import { StringChecker, StripAtSign, ArrayMove, BooleanChecker } from '../../utils/Conversion';
import { Transfer } from 'antd';
import { TYPE_TASK, TYPE_WORKFLOW } from '../../constants/ServiceParameters';
import { TYPE_SCHEDULER, TYPE_FOLDER_WATCHER } from '../../constants/ServiceParameters';
import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import { getLastModified } from '../../actions/Service';
import uuid from 'uuid-v4';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { FaCircle } from 'react-icons/fa'; import { FaCheckCircle } from 'react-icons/fa';
import 'antd/dist/antd.css';
import FlexView from 'react-flexview';
import { workflowAdd, workflowUpdate, workflowDelete } from '../../actions/Workflow';
import {toastError} from '../../actions/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input } from 'antd';
import Workflow from '../../constants/scheduler/workflow';
import TransferItem from '../../constants/params/transferItem';
import KeyValuePair from '../../constants/params/keyValuePair';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export interface IWorkflowViewProps
{
    // Local
    itemId:string,
    item:Workflow,
    isNew:boolean,
    toggleModal:any,
    // Redux
    settings:any,
    workflow:any,
    task:any, 
    scheduler:any, 
    folder:any, 
    service:any,
    variable:any,
    getLastModified:any,
    workflowAdd:any,
    workflowUpdate:any,
    workflowDelete:any,
    toastError:any
}

export interface IWorkflowViewState
{
    isExpanded:boolean,
    Field_Active:boolean,
    Field_Name:string,
    Field_Name_Error:boolean,
    Field_Name_Help:string,
    Field_Type:string,
    Field_Argument:string,
    Field_Cascade:boolean,
    Field_Broadcast:boolean,
    Field_Resource:string,
    schedulerList:string[],
    folderList:string[],
    resourceOptions:KeyValuePair[],
    taskSelect:TransferItem[],
    taskSelectChosen:string[],
    targetSelectedKeys:string[],
    chosenItems:string[],
    [propName: string]: any, // This is so we can set by name dynamically
}

class WorkflowView extends React.Component<IWorkflowViewProps, IWorkflowViewState> {

  constructor(props:IWorkflowViewProps) {
      super(props);
    this.initState = this.initState.bind(this);
    this.isValid = this.isValid.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.packWorkflow = this.packWorkflow.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderResourceOptions = this.renderResourceOptions.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.buildSelectList = this.buildSelectList.bind(this);
    this.packSelectList = this.packSelectList.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
  }

  public componentWillMount() {
    this.initState();
    this.buildSelectList();
  }

  public componentDidMount() {
    this.renderResourceOptions(this.props.item.Type);
    this.setState({
      Field_Resource: this.props.item.Resource
    });
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
                                    <MenuItem value={'Scheduler'}>Scheduler</MenuItem>
                                    <MenuItem value={'FolderWatcher'}>FolderWatcher</MenuItem>
                                    <MenuItem value={'Passive'}>Passive</MenuItem>
                                  </Select>
                                  <FormHelperText>Type</FormHelperText>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                              <FormControl className="w-100 mb-2">
                                <Select
                                  value={StringChecker(this.state.Field_Resource)}
                                  onChange={this.handleInputChange}
                                  inputProps={{
                                    name: 'Field_Resource'
                                  }}
                                >
                              {
                                this.state.resourceOptions.map((kvp:KeyValuePair) => {
                                        return (
                                          <MenuItem
                                            key={kvp.key}
                                            value={kvp.value}>
                                            {kvp.value}
                                          </MenuItem>
                                        );
                                      })
                                    }
                                </Select>
                                <FormHelperText>Resource</FormHelperText>
                              </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_Argument"
                                        value={StringChecker(this.state.Field_Argument)}
                                        onChange={this.handleInputChange}
                                        helperText="Argument"
                                    />
                            </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={this.state.Field_Cascade}
                                      onChange={this.handleCheckboxChange('Field_Cascade')}
                                      value="Field_Cascade"
                                    />
                                  }
                                  label="Evaluate"
                                />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={this.state.Field_Broadcast}
                                      onChange={this.handleCheckboxChange('Field_Broadcast')}
                                      value="Field_Broadcast"
                                    />
                                  }
                                  label="Broadcast"
                                />
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ whiteSpace: 'nowrap'}}>
                    <FlexView hAlignContent="left" vAlignContent="center">
                      <Transfer
                        titles={['Available', 'Selected']}
                        dataSource={this.state.taskSelect}
                        showSearch={true}
                        rowKey={item => item.key}
                        targetKeys={this.state.taskSelectChosen}
                        onChange={this.handleChange}
                        onSelectChange={this.handleSelectChange}
                        render={this.renderItem}
                        listStyle={{
                          width: 300,
                          height: 300,
                          marginTop: 10
                        }}
                      />
                      <div style={{margin: '3px'}}>
                        <div style={{margin: '5px'}}>
                          <span >
                            <button disabled={false} type="button" className="ant-btn ant-btn-primary ant-btn-sm ant-btn-icon-only"
                              onClick={() =>
                                {
                                    this.moveUp();
                                }}>
                              <i className="anticon anticon-up"/>
                            </button>
                          </span>
                        </div>
                        <div style={{margin: '5px'}}>
                          <span >
                            <button disabled={false} type="button" className="ant-btn ant-btn-primary ant-btn-sm ant-btn-icon-only"
                              onClick={() =>
                                {
                                    this.moveDown();
                                }}>
                              <i className="anticon anticon-down"/>
                            </button>
                          </span>
                        </div>
                        </div>
                        </FlexView>
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
      Field_Name: StringChecker(this.props.item.Name),
      Field_Name_Error: false,
      Field_Name_Help: 'Name',
      Field_Type: StringChecker(this.props.item.Type),
      Field_Argument: StringChecker(this.props.item.Argument),
      Field_Cascade: !BooleanChecker(this.props.item.Cascade),
      Field_Broadcast: BooleanChecker(this.props.item.Broadcast),
      schedulerList: [],
      folderList: [],
      resourceOptions: []
    });
  }

  private buildSelectList()
  {
   // Build the selectList, and the selectedList for the workflow tasks
   const taskSelect:TransferItem[] = [];
   const taskSelectChosen:string[] = [];
   const workflowTasks:string[] = StringChecker(this.props.item.TaskList).split('|');
   const workflowName:string = this.props.item.Name;

   // Add all workflows to the select list
   this.props.workflow.workflowList.map((workflow) => {
    // A workflow cannot select its own name
    if (workflow.Active === true && workflow.Name !== workflowName)
    {
      taskSelect.push(new TransferItem({
        key: workflow.Id,
        type: 1,
        title: StripAtSign(workflow.Name)
      }));
    }
  });

  // Add all tasks to the select list
  this.props.task.taskList.map((task) => {
    if(task.Active === true)
    {
      taskSelect.push({
        key: task.Id,
        type: 2,
        title: task.Name
      });
    }
  });

  // Extract the Ids from those records that are chosen, based upon their name
  workflowTasks.map((name) => {
    const workflowTask = taskSelect.filter(item => item.title === StripAtSign(name))[0];
    if (typeof workflowTask !== 'undefined')
    {
      taskSelectChosen.push(workflowTask.key);
    }
  });

  this.setState({
    taskSelect,
    taskSelectChosen
  });
}

private packSelectList()
{
  const workflowTaskArray:TransferItem[] = this.state.taskSelect.slice(0);
  const selectedIdArray:string[] = this.state.taskSelectChosen.slice(0);
  const processedArray:string[] = [];
  
   // Get the respective name for each id
   // If it is a workflow, append the "@ " prefix
   selectedIdArray.map((Id) => {

    const workflowTask = workflowTaskArray.filter(item => item.key === Id)[0];

    if (workflowTask.type === 1)
    {
      processedArray.push("@ " + workflowTask.title);
    }
    else
    {
      processedArray.push(workflowTask.title);
    }
  });

  // return as a pipe-delimited string
  return processedArray.join("|");
}

private moveUp()
{
  const selectedItems:string[] = this.state.targetSelectedKeys.splice(0);
  const chosenItems:string[] =  this.state.taskSelectChosen.splice(0);

  chosenItems.map((item) => {
    const index = chosenItems.indexOf(item);
    if (index > 0)
    {
      if (_.includes(selectedItems,item))
      {
        ArrayMove(chosenItems, index, index - 1);
      }
    }
  });

  this.setState({
    taskSelectChosen: chosenItems
  });
}

private moveDown()
{
  const selectedItems:string[] = this.state.targetSelectedKeys.splice(0);
  const chosenItems:string[] =  this.state.taskSelectChosen.splice(0).reverse();

  chosenItems.map((item) => {
    const index = chosenItems.indexOf(item);
    if (index > 0)
    {
      if (_.includes(selectedItems,item))
      {
        ArrayMove(chosenItems, index, index - 1);
      }
    }
  });

  this.setState({
    taskSelectChosen: chosenItems.reverse()
  });
}

  private toggleActive()
  {
      let abortMission:boolean = false;
      let errorMessage:string = "";
      const newActive:boolean = !this.state.Field_Active;
      const name:string = this.state.Field_Name;

      if (this.props.isNew)
      {
        // This item has not been saved yet, so just change the active status locally
        this.setState({
          Field_Active: newActive
        });
      }
      else
      {
      if(newActive===true)
      {
        // Check to see that this workflow does not contain inactive tasks
        const inactiveNames:string[] = [];
        const workflowTasks = this.packSelectList().split("|");
        workflowTasks.map((taskName) => 
        {
          if (taskName.startsWith("@ "))
          {
            // This is a workflow. Check to see if it is inactive.
            const match = this.props.workflow.workflowList.filter((item) => item.Name === taskName && item.Active === false);
            if (match.length>0)
            {
              inactiveNames.push(taskName);
            }
          }
          else
          {
            // Check tasks to see if it is inactive.
            const match = this.props.task.taskList.filter((item) => item.Name === taskName && item.Active === false);
            if (match.length>0)
            {
              inactiveNames.push(taskName);
            }
          }
        });
        if (inactiveNames.length>0)
        {
          errorMessage = "This workflow cannot be activated, because it contains the following inactive: " + inactiveNames.join(",");
          abortMission = true;
        }
      }
      else if (newActive===false)
      {
        // Check to see that this Workflow is not contained by another active Workflow
        const match = this.props.workflow.workflowList.filter((item) => item.Active === true && item.Name !== name);
        const matchNames:string[] = [];
        if(match.length > 0)
        { match.map((item)=> 
          {
            const itemName = "@ " + name;
            const workflowTasks = StringChecker(item.TaskList).split('|');
            if(workflowTasks.filter((taskName) => taskName === itemName).length>0)
            {
              matchNames.push(StripAtSign(itemName));
            }
          });
        }
        if(matchNames.length>0)
        {
          errorMessage = "This workflow cannot be deactivated, because it is contained in the following: " + matchNames.join(",");
          abortMission = true;
        }
      }
      
      if(abortMission===true)
      {
        this.props.toastError(errorMessage);
      }
      else
      {
        this.setState({
            Field_Active: newActive
        });
        const workflow:Workflow = this.packWorkflow();
        workflow.Active = newActive; // This must be done because setState does not update synchronously
        this.props.workflowUpdate(workflow);
      }
    }
  }

  private handleAdd() {
      const workflow:Workflow = this.packWorkflow();
      this.props.workflowAdd(workflow);
      this.props.toggleModal();
  }

  private handleUpdate() {
      const workflow:Workflow = this.packWorkflow();
      this.props.workflowUpdate(workflow);
      this.setState({
          isExpanded: false
          });
  }

  private handleDelete() {
      const workflow:Workflow = this.packWorkflow();
      this.props.workflowDelete(workflow);
      this.setState({
          isExpanded: false
          });
  }

  private packWorkflow()
  {
      const { itemId } = this.props;
      
      let item:Workflow = new Workflow({ Id: itemId });
      if (!this.props.isNew)
      {
          item= this.props.workflow.workflowList.filter((selected) => selected.Id === itemId)[0];
      }

      item.Active = this.state.Field_Active;
      item.Name = this.state.Field_Name;
      item.Type = this.state.Field_Type;
      item.Resource = this.state.Field_Resource;
      item.Argument = this.state.Field_Argument;
      item.Cascade = !BooleanChecker(this.state.Field_Cascade);
      item.Broadcast = BooleanChecker(this.state.Field_Broadcast);
      item.ClientId = this.props.service.clientId;
      item.LastModified =  this.props.getLastModified(uuid()).payload;
      item.TaskList = this.packSelectList();

      return item;
  }

  private expansionChange = panel => (event, expanded) => {
      this.setState({
        isExpanded: !this.state.isExpanded
      });
    };

  private renderResourceOptions(type) {

    const resourceOptions:KeyValuePair[] = [];

    switch( type ) {

      case TYPE_SCHEDULER:

        this.props.scheduler.schedulerList.map((s) => {
          resourceOptions.push(new KeyValuePair({key: s.Id, value: 'Scheduler.' +  s.Name}));
        });

        break;

      case TYPE_FOLDER_WATCHER:

        this.props.folder.folderList.map((f) => {
          this.state.resourceOptions.push(new KeyValuePair({key: f.Id, value: 'Folder.' +  f.Name}));
        });

        break;
      }

      this.setState({resourceOptions});
    }

    private handleCheckboxChange = name => event => {
      this.setState({ [name]: event.target.checked });
    };

    private handleChange = (targetKeys) => {
      this.setState({ taskSelectChosen: targetKeys });
    }

    private handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
      this.setState({ targetSelectedKeys });
    }

    private renderItem = (item) => {
      let customLabel;

      // Determine whether a "W" or a "T" is shown
      switch( item.type ) {
        case TYPE_TASK:
            customLabel = (<span><span style={{background: '#33cc4d', color: '#CCC', padding: '3px 7px', borderRadius: '16px', fontSize: '11px', fontWeight: 'bold'}}>T</span>&nbsp;{item.title}</span>);
            break;
        case TYPE_WORKFLOW:
            customLabel = (<span><span style={{background: '#3366cc', color: '#CCC', padding: '3px 6px', borderRadius: '16px', fontSize: '11px', fontWeight: 'bold'}}>W</span>&nbsp;{item.title}</span>);
            break;
          }
      return {
        label: customLabel, // for displayed item
        value: item.title, // for title and filter matching
      };
    }

    private handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        if (this!==undefined) {
            this.setState({
                [target.name]: value
            });
        }

        if (event.target.name === "Field_Type")
        {
          this.renderResourceOptions(event.target.value);
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
}

const mapStateToProps = ({settings, workflow, task, scheduler, folder, service}) => {
    return {settings, workflow, task, scheduler, folder, service}
};

const mapActionsToProps = {
    getLastModified,
    workflowAdd,
    workflowUpdate,
    workflowDelete,
    toastError
};

export default connect(mapStateToProps, mapActionsToProps)(WorkflowView);
