import * as React from "react";
import { connect } from 'react-redux'
import DatabaseView from './DatabaseView';
import { databaseGetAll } from '../../actions/Scheduler/DatabaseAction';
import { networkGetAll } from '../../actions/Scheduler/NetworkAction';
import { FaPlusCircle } from 'react-icons/fa';
import { FaCircleNotch } from 'react-icons/fa'; 
import { FaCheckCircle } from 'react-icons/fa';
import FlexView from 'react-flexview';
import { Card } from 'reactstrap';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Database from '../../constants/scheduler/database';
import { Modal } from 'antd';

export interface IDatabaseListViewProps
{
  // Redux
  database:any,
  databaseGetAll:any,
  networkGetAll:any,
}

export interface IDatabaseListViewState
{
  activeOnly:boolean,
  detailView:boolean,
  Field_Filter:string,
  newItem:Database,
  [propName: string]: any, // This is so we can set by name dynamically
}

class DatabaseListView extends React.Component <IDatabaseListViewProps,IDatabaseListViewState>{

    constructor(props:IDatabaseListViewProps) {
      super(props);
      this.state = {
        activeOnly: true,
        detailView: false,
        Field_Filter: '',
        newItem: new Database()
      };
      this.toggleActiveOnly = this.toggleActiveOnly.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    public componentWillMount() {
      this.props.databaseGetAll();
      this.props.networkGetAll();
    }

    public render() {
      const { database } = this.props;

      let activeOnlyIcon = <FaCircleNotch size={36} color='Green' onClick={ () => { this.toggleActiveOnly(); }} />;
      if (this.state.activeOnly)
      {
        activeOnlyIcon = <FaCheckCircle size={36} color='Green' onClick={ () => { this.toggleActiveOnly(); }} />;
      }

      let itemList = database.databaseList;
      if (this.state.activeOnly)
      {
        itemList = itemList.filter(item => item.Active === true);
      }
      if(this.state.Field_Filter.length > 0)
      {
        itemList = itemList.filter(item => item.Name.toLowerCase().includes(this.state.Field_Filter.toLowerCase()));
      }
      itemList = itemList.map((item) =>
        <DatabaseView key={item.Id} itemId={item.Id} item={item} isNew={false} />
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

          <Modal
            title="Add New Database"
            visible={this.state.detailView}
            footer={null}
            onCancel={(e)=>this.toggleModal()}>
              <DatabaseView itemId={this.state.newItem.Id} item={this.state.newItem} isNew={true} toggleModal={this.toggleModal} />
          </Modal>
          { itemList }
        </div>
    )};

    private toggleModal() {
      this.setState({
        detailView: !this.state.detailView
      });
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

const mapStateToProps = ({database}) => {
    return {database}
};

const mapActionsToProps = {
    databaseGetAll,
    networkGetAll
};

export default connect(mapStateToProps, mapActionsToProps)(DatabaseListView);
