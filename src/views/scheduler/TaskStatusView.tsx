import * as React from "react";
import { connect } from "react-redux";
import { Card } from 'reactstrap';
import { StringChecker, StripAtSign, StripScheduler } from '../../utils/Conversion';
import { COMMAND_START, COMMAND_PAUSE, COMMAND_CONTINUE, COMMAND_TERMINATE } from '../../constants/ServiceParameters';
import { TYPE_TASK, TYPE_WORKFLOW, STATE_BUSY, STATE_IDLE, STATE_PAUSED, STATE_TERMINATED } from '../../constants/ServiceParameters';
import { FaMoon, FaHourglass, FaTimesCircle, FaPlayCircle, FaPauseCircle, FaStopCircle } from 'react-icons/fa';
import { taskCommand } from '../../actions/Scheduler/ServiceAction';
import FlexView from 'react-flexview';
import TaskState from '../../constants/scheduler/taskState';
import WorkflowTask from '../../constants/scheduler/workflowTask';

export interface ITaskStatusViewProps
{
    // Local
    itemId:string,
    item:WorkflowTask,
    // Redux
    service:any,
    taskCommand:any,
}

export interface ITaskStatusViewState
{
    itemId:string,
    Field_Id:string,
    Field_Name:string,
    Field_Status:string,
    Field_RunCount:number,
    Field_LastRun:string,
    Field_Duration:string,
    Field_Fresh:boolean,
    Field_Event:string,
    Field_Type:number,
}

class TaskStatusView extends React.Component<ITaskStatusViewProps,ITaskStatusViewState>
{
    constructor(props) {
        super(props);
        const item = props.item;
        this.state = {
            itemId: props.itemId,
            Field_Id: item.Id,
            Field_Name: StripAtSign(item.Name),
            Field_Type: item.Type,
            Field_Status: item.Status,
            Field_Event: StripScheduler(item.Event),
            Field_RunCount: item.RunCount,
            Field_Duration:  item.Duration,
            Field_LastRun: item.LastRun,
            Field_Fresh: true
        };
    }

    public componentWillReceiveProps(newProps) {

        const { itemId } = this.state;

        const filtered = newProps.service.taskStatusList.filter((item) => item.Id === itemId);

        if (filtered.length === 1)
        {
            const updated = filtered[0];

            this.setState({
                Field_Id: updated.Id,
                Field_Name: StripAtSign(updated.Name),
                Field_Type: updated.Type,
                Field_Status: updated.Status,
                Field_Event: StripScheduler(updated.Event),
                Field_RunCount: updated.RunCount,
                Field_Duration:  updated.Duration,
                Field_LastRun: updated.LastRun
            });
        }
    }

    public render() {
        // Determine whether a "W" or a "T" is shown
        const workflowTaskType = this.state.Field_Type;
        let typeIcon = <span/>;

        switch( workflowTaskType ) {
        case TYPE_TASK:
            typeIcon = <span style={{background: '#33cc4d', color: '#CCC', padding: '6px 11px', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold', height: '36px', width: '36px'}}>T</span>;
            break;
        case TYPE_WORKFLOW:
            typeIcon =  <span style={{background: '#3366cc', color: '#CCC', padding: '6px 9px', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold', height: '36px', width: '36px'}}>W</span>;
            break;
        }

        // Determine which status icon and command buttons will be shown
        const status = StringChecker(this.state.Field_Status).toLowerCase();
        let statusIcon = <span/>;
        let buttonOne = <span/>;
        let buttonTwo = <span/>;

        switch( status ) {
            case STATE_IDLE:
                statusIcon = <FaMoon size={36} color='#777' />; 
                buttonOne = <FaPlayCircle size={36} color='#777' onClick={() => { this.props.taskCommand(this.state.Field_Id, COMMAND_START); }} />;
                break;

            case STATE_BUSY:
                statusIcon = <FaHourglass size={36} color='#777' />;
                buttonOne = <FaPauseCircle size={36} color='#777' onClick={() => { this.props.taskCommand(this.state.Field_Id, COMMAND_PAUSE); }}/>;
                buttonTwo = <FaStopCircle size={36} color='#777' onClick={() => { this.props.taskCommand(this.state.Field_Id, COMMAND_TERMINATE); }}/>;
                break;

            case STATE_PAUSED:
                statusIcon = <FaPauseCircle size={36} color='#777' />;
                buttonOne = <FaPlayCircle size={36} color='#777' onClick={() => { this.props.taskCommand(this.state.Field_Id, COMMAND_CONTINUE);}}/>;
                buttonTwo = <FaStopCircle size={36} color='#777' onClick={() => { this.props.taskCommand(this.state.Field_Id, COMMAND_TERMINATE); }}/>;
                break;

            case STATE_TERMINATED:
                statusIcon = <FaTimesCircle size={36} color='#777' />;
                buttonOne = <FaPlayCircle size={36} color='#777' onClick={() => { this.props.taskCommand(this.state.Field_Id, COMMAND_START); }} />;
                break;
            }

            return (
                <Card key={ this.props.item.Id }>
                    <FlexView width='100%' style={{padding: 3}}>
                        <FlexView hAlignContent="left" vAlignContent="center"  basis={80}>
                            { typeIcon }
                            { statusIcon }
                        </FlexView>
                        <FlexView hAlignContent="left" vAlignContent="center" grow={true} >
                            <div style={{fontWeight: 'bold', padding: 10}}>{ this.state.Field_Name}</div>
                        </FlexView>
                        <FlexView column={true} hAlignContent="left" vAlignContent="center" style={{paddingRight: 10}} width={180}>
                            <small>{ (this.state.Field_LastRun) ? (<div>Last Run: {this.state.Field_LastRun}</div>) : <br/> }</small>
                            <small>{ (this.state.Field_Duration) ? (<div>Duration: {this.state.Field_Duration}</div>) : <br/> }</small>
                        </FlexView>
                        <FlexView column={true} hAlignContent="left" vAlignContent="center" style={{paddingRight: 10}} width={160}>
                            <small>{ (this.state.Field_RunCount) ? (<div>Run Count: {this.state.Field_RunCount}</div>) : <br/> }</small>
                            <small>{ (this.state.Field_Event) ? (<div>{this.state.Field_Event}</div>) : <br/> }</small>
                        </FlexView>
                        <FlexView hAlignContent="right" vAlignContent="center" basis={80}>
                            { buttonOne }
                            { buttonTwo }
                        </FlexView>
                    </FlexView>
                </Card>
            );
        };
    }

    const mapStateToProps = ({service}) => {
        return {service}
    };

    const mapActionsToProps = {
        taskCommand
    };

export default connect(mapStateToProps, mapActionsToProps)(TaskStatusView);
