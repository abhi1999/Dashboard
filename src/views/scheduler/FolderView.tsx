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
import { folderAdd, folderUpdate, folderDelete } from '../../actions/Folder';
import Folder from '../../constants/scheduler/folder';

export interface IFolderViewProps
{
    // Local
    itemId:string,
    item:Folder,
    isNew:boolean,
    toggleModal:any,
    // Redux
    settings:any, 
    folder:any, 
    service:any
    getLastModified:any,
    folderAdd:any,
    folderUpdate:any,
    folderDelete:any
}

export interface IFolderViewState
{
    isExpanded:boolean,
    Field_Active:boolean,
    Field_Name:string,
    Field_Name_Error:boolean,
    Field_Name_Help:string,
    Field_Path:string,
    [propName: string]: any, // This is so we can set by name dynamically
}

class FolderView extends React.Component<IFolderViewProps, IFolderViewState> {

    constructor(props:IFolderViewProps) {
      super(props);
      this.initState = this.initState.bind(this);
      this.isValid = this.isValid.bind(this);
      this.toggleActive = this.toggleActive.bind(this);
      this.packFolder = this.packFolder.bind(this);
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
                              <TextField
                                     margin="normal"
                                     fullWidth={true}
                                     name="Field_Path"
                                     value={StringChecker(this.state.Field_Path)}
                                     onChange={this.handleInputChange}
                                     helperText="Path"
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
          Field_Path: this.props.item.Path
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
            const folder:Folder = this.packFolder();
            folder.Active = newActive; // This must be done because setState does not update synchronously
            this.props.folderUpdate(folder);
        }
    }

    private handleAdd() {
        const folder:Folder = this.packFolder();
        this.props.folderAdd(folder);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const folder:Folder = this.packFolder();
        this.props.folderUpdate(folder);
        this.setState({
            isExpanded: false
            });
    }

    private handleDelete() {
        const folder:Folder = this.packFolder();
        this.props.folderDelete(folder);
        this.setState({
            isExpanded: false
            });
    }

    private packFolder()
    {
        const { itemId } = this.props;
        
        let item:Folder = new Folder({ Id: itemId });
        if (!this.props.isNew)
        {
            item= this.props.folder.folderList.filter((selected) => selected.Id === itemId)[0];
        }

        item.Active = this.state.Field_Active;
        item.Name = this.state.Field_Name;
        item.Path = this.state.Field_Path;
        item.ClientId = this.props.service.clientId;
        item.LastModified =  this.props.getLastModified(uuid()).payload;

        return item;
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
            else if (this.props.folder.folderList.filter((item) => (item.Name === value)).length>0)
            {
                this.setState({
                    Field_Name_Error: true,
                    Field_Name_Help: 'Name - cannot be the same as another Folder.'
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

const mapStateToProps = ({settings, folder, service}) => {
    return {settings, folder, service}
};

const mapActionsToProps = {
    getLastModified,
    folderAdd,
    folderUpdate,
    folderDelete
};

export default connect(mapStateToProps, mapActionsToProps)(FolderView);
