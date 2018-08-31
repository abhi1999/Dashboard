import * as React from "react";
import { connect } from "react-redux";
import "react-table/react-table.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { taskStatusListGetAll, serviceGetState, serviceCommand, taskCommand } from '../../actions/Scheduler/ServiceAction';
import { SERVICE_COMMAND_START, SERVICE_COMMAND_STOP, SERVICE_STATE_RUNNING, SERVICE_STATE_STANDALONE_MODE, SERVICE_STATE_START_PENDING, SERVICE_STATE_STOPPED, SERVICE_STATE_STOP_PENDING, SERVICE_STATE_UNKNOWN } from '../../constants/ServiceParameters';
import { FaCheckSquare, FaBug, FaExclamationTriangle, FaPlayCircle, FaStopCircle, FaHourglass } from 'react-icons/fa';
import { Uptime } from '../../utils/Conversion';
import TaskStatusView from './TaskStatusView';
import FlexView from 'react-flexview';
import { Card } from 'reactstrap';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import WorkflowTask from '../../constants/scheduler/workflowTask';
import ServiceState from '../../constants/scheduler/serviceState';

export interface ITaskStatusListViewProps
{
  // Redux
    service:any,
    serviceGetState:any,
    taskStatusListGetAll:any,
    serviceCommand:any,
    taskCommand:any
}

export interface ITaskStatusListViewState
{
  Field_Filter:string,
  taskStatusList:WorkflowTask[],
  uptime:string,
  currentState:string,
  [propName: string]: any, // This is so we can set by name dynamically
}

class TaskStatusListView extends React.Component <ITaskStatusListViewProps, ITaskStatusListViewState> {

    constructor(props) {
        super(props);
        this.state = {
            Field_Filter: '',
            taskStatusList: this.props.service.taskStatusList.slice(0),
            uptime: '',
            currentState:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.serviceCommand = this.serviceCommand.bind(this);
    }

    public componentDidMount() {
        this.props.serviceGetState();
        this.props.taskStatusListGetAll();
    };

    public componentWillReceiveProps(newProps) {

        // Update these with every change
        this.setState({
            uptime: Uptime(this.props.service.serviceState.AdminTaskRunCount),
            currentState: this.props.service.serviceState.CurrentState
        });

        // Do not refresh the list unless it has completely changed
        if (this.props.service.taskStatusList !== undefined)
        {
            if(newProps.service.taskStatusList !== undefined)
            {
                if(this.props.service.taskStatusList.length !== newProps.service.taskStatusList.length)
                {
                    this.setState({
                        taskStatusList: newProps.service.taskStatusList
                    });
                }
            }
        }
    }
    
    public render() {

        let itemList = this.state.taskStatusList.slice(0);

        if (this.state.Field_Filter.length>0)
        {
            itemList = itemList.filter(item => item.Name.toLowerCase().includes(this.state.Field_Filter.toLowerCase()));
        }

        // Determine the service state icon and command buttons to show
        let serviceStateIcon = <span/>;
        let serviceCommandButton = <span/>;
        switch (this.state.currentState) {
          case SERVICE_STATE_RUNNING:
            serviceStateIcon = <FaCheckSquare size={36} color='Green' />;
            serviceCommandButton = <FaStopCircle size={36} color='Green' onClick={() => { this.serviceCommand(SERVICE_COMMAND_STOP); }}/>;
            break;
          case SERVICE_STATE_STANDALONE_MODE:
            serviceStateIcon = <FaBug size={36} color='Red' />;
            break;
          case SERVICE_STATE_STOPPED:
            serviceStateIcon = <FaExclamationTriangle size={36} color='Orange' />;
            serviceCommandButton = <FaPlayCircle size={36} color='Green' onClick={() => { this.serviceCommand(SERVICE_COMMAND_START); }}/>;
            break;
          default:
        }

        return (
                <div style={{ margin: '1rem' }}>

                <Card>
                    <FlexView width='100%' style={{padding: 5}}>
                        <FlexView hAlignContent="left" vAlignContent="center"  basis={80}>
                            {serviceStateIcon}
                        </FlexView>
                        <FlexView hAlignContent="center" vAlignContent="center" grow={true}>
                            <div style={{fontWeight: 'bold'}}>Uptime: {this.state.uptime}</div>
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center">
                            <TextField
                                helperText="Filter"
                                name="Field_Filter"
                                value={this.state.Field_Filter}
                                onChange={this.handleInputChange}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <Search />
                                    </InputAdornment>
                                ),
                                }}
                            />
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center"  basis={80}>
                            {serviceCommandButton}
                        </FlexView>
                    </FlexView>
                </Card>

                {itemList.map((item) => {
                    return(<TaskStatusView key={item.Id} itemId={item.Id} item={item}/>);
                })}

            </div>
        );
    }

    private serviceCommand(command){

        // Update these with every change
        switch(command)
        {
            case SERVICE_COMMAND_START:
                this.setState({
                    currentState: SERVICE_STATE_START_PENDING
                });
            break;

            case SERVICE_COMMAND_STOP:
                this.setState({
                    currentState: SERVICE_STATE_STOP_PENDING
                });
            break;

            default:
        }

        this.props.serviceCommand(command); 
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
      }

}

const mapStateToProps = ({service}) => {
    return {service}
};

const mapActionsToProps = {
    serviceGetState,
    taskStatusListGetAll,
    serviceCommand,
    taskCommand
};

export default connect(mapStateToProps, mapActionsToProps)(TaskStatusListView);
