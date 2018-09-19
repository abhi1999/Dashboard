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
// import 'antd/dist/antd.css'; // no need to add antd.css, appropraite styles will be included during build time
import { schedulerAdd, schedulerUpdate, schedulerDelete } from '../../actions/Scheduler/SchedulerAction';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import {DatePicker} from 'material-ui-pickers';
import {TimePicker} from 'material-ui-pickers';
import Scheduler from '../../constants/scheduler/scheduler';

export interface ISchedulerViewProps
{
    // Local
    itemId:string,
    item:Scheduler,
    isNew:boolean,
    toggleModal:any,
    // Redux
    settings:any, 
    scheduler:any, 
    network:any, 
    service:any
    getLastModified:any,
    schedulerAdd:any,
    schedulerUpdate:any,
    schedulerDelete:any
}

export interface ISchedulerViewState
{
    isExpanded:boolean,
    Field_Active:boolean,
    Field_Name:string,
    Field_Name_Error:boolean,
    Field_Name_Help:string,
    Field_Type:string,
    Field_OccursOn:string,
    Field_ExpiresAfter:string,
    Field_StartsAtDate:Date,
    Field_StartsAtTime:Date,
    Field_StartsAt:Date,
    Field_StopsAtDate:Date,
    Field_StopsAtTime:Date,
    Field_StopsAt:Date,
    [propName: string]: any, // This is so we can set by name dynamically
}

class SchedulerView extends React.Component<ISchedulerViewProps, ISchedulerViewState> {

    constructor(props:ISchedulerViewProps) {
      super(props);
      this.initState = this.initState.bind(this);
      this.isValid = this.isValid.bind(this);
      this.toggleActive = this.toggleActive.bind(this);
      this.packScheduler = this.packScheduler.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleStartsAtDateChange = this.handleStartsAtDateChange.bind(this);
      this.handleStartsAtTimeChange = this.handleStartsAtTimeChange.bind(this);
      this.handleStopsAtDateChange = this.handleStopsAtDateChange.bind(this);
      this.handleStopsAtTimeChange = this.handleStopsAtTimeChange.bind(this);
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
            <td style={{verticalAlign: 'top', paddingLeft:9, paddingTop: 8, paddingRight:8}}>
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
                                    <MenuItem value={'EveryMinute'}>EveryMinute</MenuItem>
                                    <MenuItem value={'EveryHour'}>EveryHour</MenuItem>
                                    <MenuItem value={'EveryDay'}>EveryDay</MenuItem>
                                    <MenuItem value={'EveryWeek'}>EveryWeek</MenuItem>
                                    <MenuItem value={'EveryMonth'}>EveryMonth</MenuItem>
                                    <MenuItem value={'EveryYear'}>EveryYear</MenuItem>
                                    <MenuItem value={'DayOfWeek'}>DayOfWeek</MenuItem>
                                    <MenuItem value={'DayOfMonth'}>DayOfMonth</MenuItem>
                                    <MenuItem value={'DayOfYear'}>DayOfYear</MenuItem>
                                    <MenuItem value={'WeekOfMonth'}>WeekOfMonth</MenuItem>
                                    <MenuItem value={'WeekOfYear'}>WeekOfYear</MenuItem>
                                    <MenuItem value={'MonthOfYear'}>MonthOfYear</MenuItem>
                                    </Select>
                                    <FormHelperText>Type</FormHelperText>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_OccursOn"
                                        value={StringChecker(this.state.Field_OccursOn)}
                                        onChange={this.handleInputChange}
                                        helperText="Occurs On"
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        name="Field_ExpiresAfter"
                                        value={StringChecker(this.state.Field_ExpiresAfter)}
                                        onChange={this.handleInputChange}
                                        helperText="Expires After Executions"
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Container>
                                <Row>
                                    <Col>
                                        <DatePicker
                                            name="Field_StartsAtDate"
                                            fullWidth={true}
                                            value={this.state.Field_StartsAtDate}
                                            onChange={this.handleStartsAtDateChange}
                                            animateYearScrolling={false}
                                            leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                            rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                            helperText="Starts at Date"
                                        />
                                    </Col>
                                    <Col>
                                        <TimePicker
                                            name="Field_StartsAtTime"
                                            fullWidth={true}
                                            value={this.state.Field_StartsAtTime}
                                            onChange={this.handleStartsAtTimeChange}
                                            helperText="Starts at Time"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <DatePicker
                                            name="Field_StopsAtDate"
                                            fullWidth={true}
                                            value={this.state.Field_StopsAtDate}
                                            onChange={this.handleStopsAtDateChange}
                                            animateYearScrolling={false}
                                            leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                            rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                            helperText="Stops at Date"
                                        />
                                    </Col>
                                    <Col>
                                        <TimePicker
                                            name="Field_StopsAtTime"
                                            fullWidth={true}
                                            value={this.state.Field_StopsAtTime}
                                            onChange={this.handleStopsAtTimeChange}
                                            helperText="Stops at Time"
                                        />
                                    </Col>
                                </Row>
                            </Container>
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
          Field_OccursOn:  StringChecker(this.props.item.OccursOn),
          Field_ExpiresAfter: StringChecker(this.props.item.ExpiresAfter),
          Field_StartsAtDate: new Date(this.props.item.StartsAtDate),
          Field_StartsAtTime: new Date(this.props.item.StartsAtTime),
          Field_StartsAt: new Date(this.props.item.StartsAt),
          Field_StopsAtDate: new Date(this.props.item.StopsAtDate),
          Field_StopsAtTime: new Date(this.props.item.StopsAtTime),
          Field_StopsAt: new Date(this.props.item.StopsAt)
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
            const scheduler:Scheduler = this.packScheduler();
            scheduler.Active = newActive; // This must be done because setState does not update synchronously
            this.props.schedulerUpdate(scheduler);
        }
    }

    private handleAdd() {
        const scheduler:Scheduler = this.packScheduler();
        this.props.schedulerAdd(scheduler);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const scheduler:Scheduler = this.packScheduler();
        this.props.schedulerUpdate(scheduler);
        this.setState({
            isExpanded: false
            });
    }

    private handleDelete() {
        const scheduler:Scheduler = this.packScheduler();
        this.props.schedulerDelete(scheduler);
        this.setState({
            isExpanded: false
            });
    }

    private packScheduler()
    {
        const { itemId } = this.props;
        
        let item:Scheduler = new Scheduler({ Id: itemId });
        if (!this.props.isNew)
        {
            item= this.props.scheduler.schedulerList.filter((selected) => selected.Id === itemId)[0];
        }

        item.Active = this.state.Field_Active;
        item.Name = this.state.Field_Name;
        item.Type = this.state.Field_Type;
        item.OccursOn = this.state.Field_OccursOn;
        item.ExpiresAfter = this.state.Field_ExpiresAfter;
        item.StartsAtDate = this.state.Field_StartsAtDate;
        item.StartsAtTime = this.state.Field_StartsAtTime;
        item.StartsAt = this.state.Field_StartsAt;
        item.StopsAtDate = this.state.Field_StopsAtDate;
        item.StopsAtTime = this.state.Field_StopsAtTime;
        item.StopsAt = this.state.Field_StopsAt;
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
            else if (this.props.scheduler.schedulerList.filter((item) => (item.Name === value)).length>0)
            {
                this.setState({
                    Field_Name_Error: true,
                    Field_Name_Help: 'Name - cannot be the same as another Scheduler.'
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

    private handleStartsAtDateChange = (value) => {
        this.setState({
            Field_StartsAtDate: value
        });
    };

    private handleStartsAtTimeChange = (value) => {
        this.setState({
            Field_StartsAtTime: value
        });
    };

    private handleStopsAtDateChange = (value) => {
        this.setState({
            Field_StopsAtDate: value
        });
    };

    private handleStopsAtTimeChange = (value) => {
        this.setState({
            Field_StopsAtTime: value
        });
    };

    private expansionChange = panel => (event, expanded) => {
        this.setState({
          isExpanded: !this.state.isExpanded
        });
      };
}

const mapStateToProps = ({settings, scheduler, service}) => {
    return {settings, scheduler, service}
};

const mapActionsToProps = {
    getLastModified,
    schedulerAdd,
    schedulerUpdate,
    schedulerDelete
};

export default connect(mapStateToProps, mapActionsToProps)(SchedulerView);
