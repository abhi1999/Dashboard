import * as React from "react";
import { connect } from 'react-redux'
import TaskView from './TaskView';
import { taskGetAll } from '../../actions/Scheduler/TaskAction';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import uuid from 'uuid-v4';
import { FaPlusCircle, FaCircle, FaCheckCircle } from 'react-icons/fa';
import FlexView from 'react-flexview';
import { Card } from 'reactstrap';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Task from '../../constants/scheduler/task';

export interface ITaskListViewProps
{
  // Redux
  task:any,
  taskGetAll:any,
}

export interface ITaskListViewState
{
  activeOnly:boolean,
  modal:boolean,
  Field_Filter:string,
  newItem:Task,
  [propName: string]: any, // This is so we can set by name dynamically
}

class TaskListView extends React.Component <ITaskListViewProps,ITaskListViewState>{

    constructor(props:ITaskListViewProps) {
      super(props);
      this.state = {
        activeOnly: true,
        modal: false,
        Field_Filter: '',
        newItem: new Task({
          "Linkage": "Object",
          "Terminate": true,
          "Timeout": 0,
          "Id": uuid(),
          "Name": "new Task",
          "Active": true,
        })
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    public componentWillMount() {
      this.props.taskGetAll();
    }

    public toggleModal() {
      this.setState({
        modal: !this.state.modal
      });
    }

    public render() {
      const { task } = this.props;

      let activeOnlyIcon = <FaCircle size={36} color='Green' onClick={ () => { this.toggleActiveOnly(); }} />;
      if (this.state.activeOnly)
      {
        activeOnlyIcon = <FaCheckCircle size={36} color='Green' onClick={ () => { this.toggleActiveOnly(); }} />;
      }

      let itemList = task.taskList;
      if (this.state.activeOnly)
      {
        itemList = itemList.filter(item => item.Active === true);
      }
      if(this.state.Field_Filter.length > 0)
      {
        itemList = itemList.filter(item => item.Name.toLowerCase().includes(this.state.Field_Filter.toLowerCase()));
      }
      itemList = itemList.map((item) =>
        <TaskView key={item.Id} itemId={item.Id} item={item} isNew={false} />
      );

      return (
        <div>
          <Card>
            <FlexView width='100%' style={{padding: 9}}>
                <FlexView hAlignContent="left" vAlignContent="center">
                  { activeOnlyIcon }
                  <FaPlusCircle size={36} color="Green" onClick={this.toggleModal} style={{marginLeft: 12}}/>
                </FlexView>
                <FlexView hAlignContent="center" vAlignContent="center" grow={true}>
                  <span/>
                </FlexView>
                <FlexView hAlignContent="right" vAlignContent="center" grow={true}>
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
            </FlexView>
          </Card>

          <Modal isOpen={this.state.modal} toggle={this.toggleModal} size="lg">
            <ModalHeader toggle={this.toggleModal}>Add New Task</ModalHeader>
            <ModalBody>
              <TaskView itemId={this.state.newItem.Id} item={this.state.newItem} isNew={true} toggleModal={this.toggleModal} />
            </ModalBody>
          </Modal>

          { itemList }
        </div>
      )
    }

    private toggleActiveOnly() {
      this.setState({
        activeOnly: !this.state.activeOnly
      });
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

const mapStateToProps = ({task}) => {
    return {task}
};

const mapActionsToProps = {
    taskGetAll
};

export default connect(mapStateToProps, mapActionsToProps)(TaskListView);
