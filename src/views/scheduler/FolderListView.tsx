import * as React from "react";
import { connect } from 'react-redux'
import FolderView from './FolderView';
import { folderGetAll } from '../../actions/Folder';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import uuid from 'uuid-v4';
import { FaPlusCircle } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import FlexView from 'react-flexview';
import { Card } from 'reactstrap';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Folder from '../../constants/scheduler/folder';

export interface IFolderListViewProps
{
  // Redux
  folder:any,
  folderGetAll:any,
}

export interface IFolderListViewState
{
  activeOnly:boolean,
  modal:boolean,
  Field_Filter:string,
  newItem:Folder,
  [propName: string]: any, // This is so we can set by name dynamically
}

class FolderListView extends React.Component<IFolderListViewProps,IFolderListViewState> {

    constructor(props) {
      super(props);
      this.state = {
        activeOnly: true,
        modal: false,
        Field_Filter: '',
        newItem: new Folder({
          "Id": uuid(),
          "Name": "new Folder"
        }),
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    public componentWillMount() {
      this.props.folderGetAll();
    }

    public toggleModal() {
      this.setState({
        modal: !this.state.modal
      });
    }

    public render() {
      const { folder } = this.props;

      let activeOnlyIcon = <FaCircle size={36} color='Green' onClick={ () => { this.toggleActiveOnly(); }} />;
      if (this.state.activeOnly)
      {
        activeOnlyIcon = <FaCheckCircle size={36} color='Green' onClick={ () => { this.toggleActiveOnly(); }} />;
      }

      let itemList = folder.folderList;
      if (this.state.activeOnly)
      {
        itemList = itemList.filter(item => item.Active === true);
      }
      if(this.state.Field_Filter.length > 0)
      {
        itemList = itemList.filter(item => item.Name.toLowerCase().includes(this.state.Field_Filter.toLowerCase()));
      }
      itemList = itemList.map((item) =>
        <FolderView key={item.Id} itemId={item.Id} item={item} isNew={false} />
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

          <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Add New Folder</ModalHeader>
            <ModalBody>
              <FolderView itemId={this.state.newItem.Id} item={this.state.newItem} isNew={true} toggleModal={this.toggleModal} />
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
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      if (this!==undefined) {
          this.setState({
              [name]: value
          });
      }
    }
}

const mapStateToProps = ({folder}) => {
    return {folder}
};

const mapActionsToProps = {
    folderGetAll
};

export default connect(mapStateToProps, mapActionsToProps)(FolderListView);
