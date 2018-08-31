import * as React from "react";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { getLastModified } from '../../actions/Scheduler/ServiceAction';
import { taskAdd, taskDelete, taskUpdate } from '../../actions/Scheduler/TaskAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';
import { connect } from "react-redux";
import { Col, Container, Form, Row } from 'reactstrap';
import { StringChecker, StripAtSign } from '../../utils/Conversion';
import uuid from 'uuid-v4';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { toastError } from '../../actions/Scheduler/ServiceAction';
import NameValuePair from '../../constants/params/nameValuePair';
import Task from '../../constants/scheduler/task';

export interface ITaskViewProps
{
    // Local
    itemId:string,
    item:Task,
    isNew:boolean,
    toggleModal:any,
    // Redux
    settings:any, 
    task:any, 
    folder:any, 
    network:any, 
    service:any, 
    workflow:any,
    getLastModified:any,
    taskAdd:any,
    taskUpdate:any,
    taskDelete:any,
    toastError:any,
}

export interface ITaskViewState
{
    isExpanded:boolean,
    Field_Active:boolean,
    Field_Name:string,
    Field_Name_Error:boolean,
    Field_Name_Help:string,
    Field_ArgList:NameValuePair[],
    Field_ArgList_Length:number,
    Field_ClassName:string,
    Field_Linkage:string,
    Field_Method:string,
    Field_Timeout:number,
    Field_Terminate:boolean,
    Field_Critical:boolean,
    Field_ObjPath:string,
    Field_ObjFile:string,
    Field_MailOnFailure:string,
    Field_MailOnSuccess:string,
    Field_MailServer:string
    [propName: string]: any, // This is so we can set by name dynamically
}

class TaskView extends React.Component<ITaskViewProps, ITaskViewState> {

    constructor(props:ITaskViewProps) {
      super(props);
      this.initState = this.initState.bind(this);
      this.isValid = this.isValid.bind(this);
      this.toggleActive = this.toggleActive.bind(this);
      this.packTask = this.packTask.bind(this);
      this.unpackArgList = this.unpackArgList.bind(this);
      this.packArgList = this.packArgList.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
      this.renderEditable = this.renderEditable.bind(this);
      this.addRow = this.addRow.bind(this);
      this.removeRow = this.removeRow.bind(this);
      this.clickSummary = this.clickSummary.bind(this);
    }

    public componentWillMount() {
        this.initState();
        this.unpackArgList(this.props.item.ArgList)
    };

    public render() {
        const { Field_ArgList, Field_ArgList_Length } = this.state;

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
                      <Container >
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
                                        name="Field_ClassName"
                                        value={StringChecker(this.state.Field_ClassName)}
                                        onChange={this.handleInputChange}
                                        helperText="Class Name"
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
                                    <MenuItem value={'VB.Net'}>VB.Net</MenuItem>
                                    <MenuItem value={'Intrinsic'}>Intrinsic</MenuItem>
                                    <MenuItem value={'SQL Script'}>SQL Script</MenuItem>
                                    <MenuItem value={'EXE or BAT'}>EXE or BAT</MenuItem>
                                    <MenuItem value={'Object'}>Object</MenuItem>
                                    <MenuItem value={'SQL Stored Procedure'}>SQL Stored Procedure</MenuItem>
                                    </Select>
                                    <FormHelperText>Linkage</FormHelperText>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_Method"
                                        value={StringChecker(this.state.Field_Method)}
                                        onChange={this.handleInputChange}
                                        helperText="Method"
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_Timeout"
                                        value={StringChecker(this.state.Field_Timeout)}
                                        onChange={this.handleInputChange}
                                        helperText="Timeout"
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={this.state.Field_Terminate}
                                        onChange={this.handleCheckboxChange('Field_Terminate')}
                                        value="Field_Terminate"
                                    />
                                    }
                                    label="Terminate After Timeout"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={this.state.Field_Critical}
                                        onChange={this.handleCheckboxChange('Field_Critical')}
                                        value="Field_Critical"
                                    />
                                    }
                                    label="Critial to Workflow"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormControl className="w-100 mb-2">
                                    <Select
                                    value={StringChecker(this.state.Field_ObjPath)}
                                    onChange={this.handleInputChange}
                                    inputProps={{
                                        name: 'Field_ObjPath'
                                    }}
                                    >
                                    {
                                  this.props.folder.folderList.map((item) => {
                                          return (
                                            <MenuItem
                                              key={item.Id}
                                              value={item.Name}>
                                              {item.Name}
                                            </MenuItem>
                                          );
                                        })
                                      }
                                    </Select>
                                    <FormHelperText>Server Folder</FormHelperText>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_ObjFile"
                                        value={StringChecker(this.state.Field_ObjFile)}
                                        onChange={this.handleInputChange}
                                        helperText="Object File"
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_MailOnFailure"
                                        value={StringChecker(this.state.Field_MailOnFailure)}
                                        onChange={this.handleInputChange}
                                        helperText="Notify On Failure"
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_MailOnSuccess"
                                        value={StringChecker(this.state.Field_MailOnSuccess)}
                                        onChange={this.handleInputChange}
                                        helperText="Notify On Success"
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormControl className="w-100 mb-2">
                                    <Select
                                    value={StringChecker(this.state.Field_MailServer)}
                                    onChange={this.handleInputChange}
                                    inputProps={{
                                        name: 'Field_MailServer'
                                    }}
                                    >
                                    {
                                  this.props.network.networkList.map((item) => {
                                          return (
                                            <MenuItem
                                              key={item.Id}
                                              value={item.Name}>
                                              {item.Name}
                                            </MenuItem>
                                          );
                                        })
                                      }
                                    </Select>
                                    <FormHelperText>Mail Server</FormHelperText>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FaPlusCircle size={36} color="Grey" onClick={this.addRow} style={{margin: 8}}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ReactTable
                                    manual={true}
                                    data={Field_ArgList}
                                    columns={[
                                        {
                                            width: 30,
                                            Header: '',
                                            Cell: (row) =>
                                            {
                                                return(
                                                    <FaMinusCircle onClick={() => { this.removeRow(row.index) }}/>
                                                );
                                            }
                                        },
                                        {
                                        Header: "Name",
                                        accessor: "name",
                                        Cell: this.renderEditable,
                                        width: 200
                                        },
                                        {
                                        Header: "Value",
                                        accessor: "value",
                                        Cell: this.renderEditable
                                        }
                                    ]}
                                    className="-striped -highlight"
                                    showPaginationBottom={false}
                                    pageSize={Field_ArgList_Length}
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
            Field_ArgList:[],
            Field_ArgList_Length:0,
            Field_ClassName: this.props.item.ClassName,
            Field_Linkage: this.props.item.Linkage,
            Field_Method: this.props.item.Method,
            Field_Timeout: this.props.item.Timeout,
            Field_Terminate: this.props.item.Terminate,
            Field_Critical: this.props.item.Critical,
            Field_ObjPath: this.props.item.ObjPath,
            Field_ObjFile: this.props.item.ObjFile,
            Field_MailOnFailure: this.props.item.MailOnFailure,
            Field_MailOnSuccess: this.props.item.MailOnSuccess,
            Field_MailServer: this.props.item.MailServer
          });    
    }

    private toggleActive()
    {
        let abortMission = false;
        let errorMessage = "";
        const newActive = !this.state.Field_Active;
        const name = this.state.Field_Name;

        if (this.props.isNew)
        {
          // This item has not been saved yet, so just change the active status locally
          this.setState({
            Field_Active: newActive
          });
        }
        else
        {
            if (newActive===false)
            {
            // Check to see that this Task is not contained by another active Workflow
            const match = this.props.workflow.workflowList.filter((item) => item.Active === true);
            const matchNames:string[] = [];
            if(match.length > 0)
            { match.map((item)=> 
                {
                const itemName = item.Name;
                const workflowTasks = StringChecker(item.TaskList).split('|');
                if(workflowTasks.filter((taskName) => taskName === name).length>0)
                {
                    matchNames.push(StripAtSign(itemName));
                }
                });
            }
            if(matchNames.length>0)
            {
                errorMessage = "This task cannot be deactivated, because it is contained in the following: " + matchNames.join(",");
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
                const task = this.packTask();
                task.Active = newActive; // This must be done because setState does not update synchronously
                this.props.taskUpdate(task);
            }
        }
    }

    private handleAdd() {
        const task:Task = this.packTask();
        this.props.taskAdd(task);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const task:Task = this.packTask();
        this.props.taskUpdate(task);
        this.setState({
            isExpanded: false
            });
    }

    private handleDelete() {
        const task:Task = this.packTask();
        this.props.taskDelete(task);
        this.setState({
            isExpanded: false
            });
    }

    private packTask()
    {
        const { itemId } = this.props;
        
        let item:Task = new Task({ Id: itemId });
        if (!this.props.isNew)
        {
            item= this.props.task.taskList.filter((selected) => selected.Id === itemId)[0];
        }

        item.Active = this.state.Field_Active;
        item.Name = this.state.Field_Name;
        item.ClassName = this.state.Field_ClassName;
        item.Linkage = this.state.Field_Linkage;
        item.Method = this.state.Field_Method;
        item.Timeout = this.state.Field_Timeout;
        item.Terminate = this.state.Field_Terminate;
        item.Critical = this.state.Field_Critical;
        item.ObjPath = this.state.Field_ObjPath;
        item.ObjFile = this.state.Field_ObjFile;
        item.MailOnFailure = this.state.Field_MailOnFailure;
        item.MailOnSuccess = this.state.Field_MailOnSuccess;
        item.MailServer = this.state.Field_MailServer;
        item.ArgList = this.packArgList();
        item.ClientId = this.props.service.clientId;
        item.LastModified =  this.props.getLastModified(uuid()).payload;

        return item;
    }

    private unpackArgList(argList:string)
    {
        const result:NameValuePair[] = [];

        if (argList && (argList.length > 0))
        {
            let argArray:string[] = [];

            if (argList.includes("#"))
            {
                argArray = argList.split('#');
            }
            else
            {
                argArray.push(argList);
            }

            argArray.map(pair =>
            {
                if (pair.includes("|"))
                {
                    const splitPair:string[] = pair.split('|');

                    if (splitPair.length > 1)
                    {
                        result.push(new NameValuePair({ "name": splitPair[0], "value": splitPair[1] }));
                    }
                }
            });       
        }

        this.setState({
            Field_ArgList: result, 
            Field_ArgList_Length: result.length
        });
    }

    private packArgList()
    {
        const result:string[] = [];

        this.state.Field_ArgList.map((pair) => {
            if(result.length > 0)
            {
                result.push("#");
            }
            result.push(pair.name);
            result.push("|");
            result.push(pair.value);
        });

        return result.join("");
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
                else if (this.props.task.taskList.filter((item) => (item.Name === value)).length>0)
                {
                    this.setState({
                        Field_Name_Error: true,
                        Field_Name_Help: 'Name - cannot be the same as another Task.'
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

      private handleCheckboxChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

      private renderEditable(cellInfo) {
        return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onBlur={e => {
              const fieldArgList = [...this.state.Field_ArgList];
              fieldArgList[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ Field_ArgList: fieldArgList });
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.Field_ArgList[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
      }

    private addRow()
    {
        const inc = this.state.Field_ArgList_Length + 1;
        this.setState({
            Field_ArgList: this.state.Field_ArgList.concat([{ name: "", value: ""}]), 
            Field_ArgList_Length: inc
        });
    }

    private removeRow(index)
      {
        const dec = this.state.Field_ArgList_Length - 1;
        this.setState({
            Field_ArgList: this.state.Field_ArgList.filter((v, i) => i !== index),
            Field_ArgList_Length: dec
        });
      }

    private clickSummary = event => {
        event.preventDefault();
        event.stopPropagation();
      };
 
}

const mapStateToProps = ({settings, task, folder, network, service, workflow}) => {
    return {settings, task, folder, network, service, workflow}
};

const mapActionsToProps = {
    getLastModified,
    taskAdd,
    taskUpdate,
    taskDelete,
    toastError
};

export default connect(mapStateToProps, mapActionsToProps)(TaskView);
