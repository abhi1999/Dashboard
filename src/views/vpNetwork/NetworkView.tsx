import * as  React from 'react';
import { StringChecker } from '../../utils/Conversion';
import { connect } from "react-redux";
import { Form, Input, Select, Button, Checkbox, Divider } from 'antd';
import { vpnetworkAdd, vpnetworkUpdate } from '../../actions/VpNetworksAction';
import { INetwork } from "../../constants/edidb";

import { Container, Row, Col } from 'reactstrap';
import { LimitLength, IsRequired } from '../../utils/UIValidation';
import * as XNetwork from '../../constants/edidb/CNetwork';


export interface INetworkViewProps
{
    // Local
    itemId:string,
    item:INetwork,
    isNew:boolean,
    toggleModal:any,
    // Redux
    network:INetwork,
    vpnetworkAdd:any,
    vpnetworkUpdate:any,
    vpnetworksReducer:any
}

export interface INetworkViewState
{
    isExpanded:boolean,
    isNew:boolean,
    networkEdit : INetwork,
    Field_Network_Van_ID:string,
    Field_Network_Van_ID_ErrorText:string,
    Field_Network_VanExt:string,
    Field_Network_VanPassive:boolean,
    Field_Network_VanBinary:boolean,
    Field_Network_VanAppendCRLF:number,
    Field_Network_VanType:number,
    Field_Network_VanConfig:string,
    Field_Network_VanFTPsite:string,
    Field_Network_VanPass:string,
    Field_Network_VanMailbox:string,
    Field_Network_VanSdown:string,
    Field_Network_VanSup:string,
    Field_Network_VanSdir:string,
    Field_Network_UploadFilePattern:string,
    configOptionList : string[],
    ddNetworkConfigOpen : boolean,
    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class NetworkView extends React.Component<INetworkViewProps, INetworkViewState> {

    constructor(props:any) {
      super(props);

      this.initState = this.initState.bind(this);
      this.isValid = this.isValid.bind(this);
      this.packNetwork = this.packNetwork.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleVanConfigChange = this.handleVanConfigChange.bind(this);
      this.handleVanTypeChange = this.handleVanTypeChange.bind(this);
      this.handleVanAppendCRLFChange = this.handleVanAppendCRLFChange.bind(this);
    }

    public componentWillMount() {
        this.initState();
    }

    public render() {  

        let actionButtons =
        <div>
            <Button icon='arrow-left' shape="circle" style={{marginLeft:8}} onClick={() =>
                    {
                        this.initState();
                        this.props.toggleModal();
                    }} />

            <Button style={{marginLeft:8}} type="primary" onClick={() =>
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
            <Button icon='arrow-left' shape="circle" style={{ marginLeft:8}} onClick={() =>
                    {
                        this.initState();
                        this.props.toggleModal();
                    }} />
            <Button style={{marginLeft:8}} type="primary" onClick={() =>
                    {
                        if(this.isValid())
                        {
                            this.handleAdd();
                            this.props.toggleModal();
                        }
                    }}>
                Add
            </Button>
        </div>
    }

        return (
            <div style={{width: '100%', marginBottom: 20,marginLeft:10 }}>
                {actionButtons}
                <Divider/>
                <div style={{width: '100%'}}>
                    <Form>
                        <Container>
                            <Row><Col>
                                <Form.Item label="Network" validateStatus={IsRequired(this.state.Field_Network_Van_ID, this.state.Field_Network_Van_ID_ErrorText)}
                                    help={this.state.Field_Network_Van_ID_ErrorText}
                                    >
                                    <Input
                                        type='text'
                                        name="Field_Network_Van_ID"
                                        value={StringChecker(this.state.Field_Network_Van_ID)}
                                        onChange={this.handleInputChange}
                                        style={{ maxWidth: 350 }}
                                    />
                                </Form.Item>
                            </Col></Row>
                            <Row><Col>
                                <Form.Item validateStatus={IsRequired(this.state.Field_Network_VanExt, '')}
                                    label="File Extension"
                                >
                                    <Input
                                        name="Field_Network_VanExt"
                                        value={StringChecker(this.state.Field_Network_VanExt)}
                                        onChange={this.handleInputChange}
                                        style={{ maxWidth: 60 }}
                                    />
                                </Form.Item>
                            </Col></Row>
                            <Row><Col>
                                <Form.Item
                                    label="Passive Mode"
                                >
                                    <Checkbox
                                        name="Field_Network_VanPassive"
                                        checked={this.state.Field_Network_VanPassive}
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item
                                    label="Binary Transfers"
                                >
                                    <Checkbox
                                        name="Field_Network_VanBinary"
                                        checked={this.state.Field_Network_VanBinary}
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                <Form.Item
                                    label="Terminator Suffix"
                                    >
                                    <Select
                                        style={{ maxWidth: 80 }}
                                        value={this.state.Field_Network_VanAppendCRLF}
                                        onChange={this.handleVanAppendCRLFChange}
                                    >
                                        <Select.Option key={0} value={0}>None</Select.Option>
                                        <Select.Option key={1} value={1}>CR</Select.Option>
                                        <Select.Option key={2} value={2}>LF</Select.Option>
                                        <Select.Option key={3} value={3}>CRLF</Select.Option>
                                    </Select>
                                </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item
                                        label="Type"
                                    >
                                        <Select
                                            style={{ maxWidth: 180 }}
                                            value={this.state.Field_Network_VanType}
                                            onChange={this.handleVanTypeChange}
                                        >
                                            <Select.Option key={0} value={0}>FTP</Select.Option>
                                            <Select.Option key={1} value={1}>Folder Exchange</Select.Option>
                                            <Select.Option key={2} value={2}>FTPS (FTP/SSL)</Select.Option>
                                            <Select.Option key={3} value={3}>SFTP (FTP/SSH)</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item label="Network Configuration"
                                        >
                                        <Container>
                                            <Row><Col>
                                                    <Select
                                                    style={{ maxWidth: 350 }}
                                                     onChange={this.handleVanConfigChange} value={this.state.Field_Network_VanConfig} >
                                                        {this.state.configOptionList.map((ent: string) => {
                                                            return <Select.Option key={ent}>{ent}</Select.Option>;
                                                        })}
                                                    </Select>
                                                    <Input
                                                    style={{ maxWidth: 350 }}
                                                    type='text' name="Field_Network_VanConfig" id="Field_Network_VanConfig"
                                                        value={StringChecker(this.state.Field_Network_VanConfig)}
                                                        required={true}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item validateStatus={IsRequired(this.state.Field_Network_VanFTPsite, '')}
                                        label="Host Name"
                                        >
                                        <Input
                                            name="Field_Network_VanFTPsite"
                                            value={StringChecker(this.state.Field_Network_VanFTPsite)}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item validateStatus={IsRequired(this.state.Field_Network_VanMailbox, '')}
                                        label="Mailbox / Login"
                                    >
                                        <Input
                                            name="Field_Network_VanMailbox"
                                            value={StringChecker(this.state.Field_Network_VanMailbox)}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item validateStatus={IsRequired(this.state.Field_Network_VanPass, '')}
                                        label="Password"
                                    >
                                        <Input
                                            name="Field_Network_VanPass"
                                            value={StringChecker(this.state.Field_Network_VanPass)}
                                            onChange={this.handleInputChange}
                                            type='password'
                                        />
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item validateStatus={IsRequired(this.state.Field_Network_VanSdown, '')}
                                        label="Download Location"
                                    >
                                        <Input
                                            name="Field_Network_VanSdown"
                                            value={StringChecker(this.state.Field_Network_VanSdown)}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item validateStatus={IsRequired(this.state.Field_Network_VanSup, '')}
                                        label="Upload Location"
                                    >
                                        <Input
                                            name="Field_Network_VanSup"
                                            value={StringChecker(this.state.Field_Network_VanSup)}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item validateStatus={IsRequired(this.state.Field_Network_VanSdir, '')}
                                        label="Directory / List Location"
                                    >
                                        <Input
                                            name="Field_Network_VanSdir"
                                            value={StringChecker(this.state.Field_Network_VanSdir)}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col></Row>
                                <Row><Col>
                                    <Form.Item
                                        label="Upload File Pattern"
                                        >
                                        <Input
                                            name="Field_Network_UploadFilePattern"
                                            value={StringChecker(this.state.Field_Network_UploadFilePattern)}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col></Row>
                        </Container>
                  </Form>
                </div>
            </div>
    )};


    private initState()
    {
        this.setState({
            form : this,
            configOptionList : this.props.vpnetworksReducer.networkConfigList,
            isNew : this.props.isNew,
            networkEdit : this.props.item,
            Field_Network_UploadFilePattern : StringChecker(this.props.item.UploadFilePattern),
            Field_Network_Van_ID : StringChecker(this.props.item.Van_ID),
            Field_Network_Van_ID_ErrorText : '',
            Field_Network_VanAppendCRLF : this.props.item.VanAppendCRLF,
            Field_Network_VanBinary : this.props.item.VanBinary,
            Field_Network_VanConfig : StringChecker(this.props.item.VanConfig),
            Field_Network_VanExt : StringChecker(this.props.item.VanExt),
            Field_Network_VanFTPsite : StringChecker(this.props.item.VanFTPsite),
            Field_Network_VanMailbox : StringChecker(this.props.item.VanMailbox), 
            Field_Network_VanPass : StringChecker(this.props.item.VanPass),
            Field_Network_VanPassive : this.props.item.VanPassive,
            Field_Network_VanSdir : StringChecker(this.props.item.VanSdir),
            Field_Network_VanSdown : StringChecker(this.props.item.VanSdown),
            Field_Network_VanSup : StringChecker(this.props.item.VanSup),
            Field_Network_VanType : this.props.item.VanType,
        })
    }

    private handleAdd() {
        const network = this.packNetwork();
        this.props.vpnetworkAdd(network);
        this.props.toggleModal();
    }

    private handleUpdate() {
        const network = this.packNetwork();
        this.props.vpnetworkUpdate(network);
        this.props.toggleModal();
    }


    private packNetwork() : INetwork
    {
        const item:INetwork = new XNetwork.CNetwork();

        item.Van_ID = StringChecker(this.state.Field_Network_Van_ID);
        item.UploadFilePattern = StringChecker(this.state.Field_Network_UploadFilePattern);
        item.VanAppendCRLF = this.state.Field_Network_VanAppendCRLF;
        item.VanBinary = this.state.Field_Network_VanBinary;
        item.VanConfig = StringChecker(this.state.Field_Network_VanConfig);
        item.VanExt = StringChecker(this.state.Field_Network_VanExt);
        item.VanFTPsite = StringChecker(this.state.Field_Network_VanFTPsite);
        item.VanMailbox = StringChecker(this.state.Field_Network_VanMailbox);
        item.VanPass =  StringChecker(this.state.Field_Network_VanPass);
        item.VanPassive = this.state.Field_Network_VanPassive;
        item.VanSdir = StringChecker(this.state.Field_Network_VanSdir);
        item.VanSdown = StringChecker(this.state.Field_Network_VanSdown);
        item.VanSup = StringChecker(this.state.Field_Network_VanSup);
        item.VanType = this.state.Field_Network_VanType;
        
        return item;
    }

    private handleVanConfigChange(optVal : string) {
        this.setState( { Field_Network_VanConfig : optVal });
    }

    private handleVanTypeChange(optVal : number) {
        this.setState( { Field_Network_VanType : optVal });
    }

    private handleVanAppendCRLFChange(optVal : number) {
        this.setState( { Field_Network_VanAppendCRLF : optVal });
    }

    private handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // Read-only if not a new record
        if(name === 'Field_Network_Van_ID'  && !this.state.isNew) { return };

        if (this!==undefined) {
            this.setState({
                [name]: value
            });
        }

        switch(name)
        {
            case 'Field_Network_VanExt':
                LimitLength(name, value, XNetwork.INetwork_VanExt_length, this);
                break;

            case 'Field_Network_Van_ID':
                if (this.state.isNew) {
                    LimitLength(name, value, XNetwork.INetwork_Van_ID_length, this);
                    const netList: INetwork[] = this.props.vpnetworksReducer.networkList;
                    if (netList.filter((item) => (item.Van_ID === value)).length > 0) {
                        this.setState({ Field_Network_Van_ID_ErrorText : "Must be unique"});
                    }
                    else {
                        this.setState({ Field_Network_Van_ID_ErrorText : ''});
                    }
                }
                break;

            case 'Field_Network_VanConfig':
                LimitLength(name, value, XNetwork.INetwork_VanConfig_length, this);
                break;

            case 'Field_Network_VanFTPsite':
                LimitLength(name, value, XNetwork.INetwork_VanFTPsite_length, this);
                break;

            case 'Field_Network_VanMailbox':
                LimitLength(name, value, XNetwork.INetwork_VanMailbox_length, this);
                break;

            case 'Field_Network_VanPass':
                LimitLength(name, value, XNetwork.INetwork_VanPass_length, this);
                break;

            case 'Field_Network_VanSup':
                LimitLength(name, value, XNetwork.INetwork_VanSup_length, this);
                break;

            case 'Field_Network_VanSdir':
                LimitLength(name, value, XNetwork.INetwork_VanSdir_length, this);
                break;

            case 'Field_Network_UploadFilePattern':
                LimitLength(name, value, XNetwork.INetwork_UploadFilePattern_length, this);
                break;
        }

        
    }

    private isValid()
    {
        // Check mandatory fields
        if (this.state.Field_Network_Van_ID.length === 0) { return false };
        if (this.state.Field_Network_VanExt.length === 0) { return false };
        if (this.state.Field_Network_VanConfig.length === 0) { return false };
        if (this.state.Field_Network_VanFTPsite.length === 0) { return false };
        if (this.state.Field_Network_VanMailbox.length === 0) { return false };
        if (this.state.Field_Network_VanPass.length === 0) { return false };
        if (this.state.Field_Network_VanSup.length === 0) { return false };
        if (this.state.Field_Network_VanSdir.length === 0) { return false };      

        return true;
    }
    
}

const mapStateToProps = ({vpnetworksReducer}) => {
    return {vpnetworksReducer}
};

const mapActionsToProps = {
    vpnetworkAdd,
    vpnetworkUpdate
};

export default connect(mapStateToProps, mapActionsToProps)(NetworkView);
