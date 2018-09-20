import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { Form, Modal, Input, InputNumber, Row, Col, Collapse } from 'antd'
import { Select, Button, Icon, message } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';

import { packageGetAll } from '../../actions/PackageAction'
import { packageLabelGetAll } from '../../actions/PackageLabelAction'
import { pseudoTradeGetAll } from '../../actions/PseudoTradeAction'
import { partnerDocGroupGetAll, partnerDocGroupDelete } from '../../actions/PartnerDocGroupAction'
import { apiTransObjectGetAll } from '../../actions/ApiTransObjectAction'
import { tradeUpdate, tradeDelete, tradeUpdateMaps } from '../../actions/Trade';
import Trade from "../../constants/implementations/Trade";

// import { IPartnerDocGroup } from '../../constants/edidb'
import PartnerDocGroupModel from '../../constants/implementations/PartnerDocGroupModel'

import { IApiTransObject } from '../../constants/edidb'
import { enumTransformationType, enumTransformationUpdateStatus, MapSetting } from '../../constants/MapSetting'

import TradeDetailGeneralPanelView from "./TradeDetailGeneralPanelView"
import TradeDetailSettingsPanelView from "./TradeDetailSettingsPanelView"
import TradeDetailConfigurationPanelView from "./TradeDetailConfigurationPanelView"
import TradeDetailUserFieldsPanelView from "./TradeDetailUserFieldsPanelView"
import TradeDetailSystemPanelView from "./TradeDetailSystemPanelView"
import TradeDetailDocumentsUsedView from "./TradeDetailDocumentsUsedView"
import TradeDetailTransObjectView from "./TradeDetailTransObjectView"
import TradeDetailMapUpdateStatusView from "./TradeDetailMapUpdateStatusView"

const Panel = Collapse.Panel;
const FormItem = Form.Item;
const Option = Select.Option;



export interface ITradeDetailViewProps {
    // Local
    itemId: string,
    item: Trade,
    isNew: boolean,
    // isInit:boolean,
    toggleViewMode: any,
    statusList: any,
    partnerList: any,
    networkList:any,
    ediDocGroupList:any,

    // Redux
    packageSet: any,
    packageGetAll: any,
    packageLabelSet: any,
    packageLabelGetAll: any,
    pseudoTradeSet: any,
    pseudoTradeGetAll: any,
    partnerDocGroupSet:any,
    partnerDocGroupGetAll:any,
    partnerDocGroupDelete:any,
    apiTransObjectSet:any,
    apiTransObjectGetAll,
    trade: any,
    tradeUpdate: any,
    tradeUpdateMaps:any,
    tradeDelete: any
}

export interface ITradeDetailViewState {
    TradingPartner: Trade,
    FieldStatus: any,
    packageLabelList: any,
    expanded:{},
    viewModalMapStatus:boolean, 
    modalForm:string,
    // partnerDocGroup:IPartnerDocGroup,
    partnerDocGroup:PartnerDocGroupModel,
    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class TradeDetailView extends React.Component<ITradeDetailViewProps, ITradeDetailViewState>  {

    constructor(props: any) {
        super(props);
        this.initState = this.initState.bind(this);
        this.isValid = this.isValid.bind(this);
        this.query = this.query.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleKitTypeChange = this.handleKitTypeChange.bind(this);
        this.handleUseDeptChange = this.handleUseDeptChange.bind(this);
        this.handleUseN1StChange = this.handleUseN1StChange.bind(this);
        this.handleDropDownChange = this.handleDropDownChange.bind(this);
        this.handlePackageChange = this.handlePackageChange.bind(this);
        this.handlePriceMethodChange = this.handlePriceMethodChange.bind(this);
        this.handlePSPOMethodChange = this.handlePSPOMethodChange.bind(this);
        this.handlePseudoTPPartIDtChange = this.handlePseudoTPPartIDtChange.bind(this);
        this.handlePseudoIDChange = this.handlePseudoIDChange.bind(this);
        this.handlePseudoSegmentNameChange = this.handlePseudoSegmentNameChange.bind(this);
        this.handleGetApiTransObjectList = this.handleGetApiTransObjectList.bind(this);
        this.handleNetworkChange = this.handleNetworkChange.bind(this);
        this.handleExpandedChange = this.handleExpandedChange.bind(this);
        this.handleDocumentsUsedEdit = this.handleDocumentsUsedEdit.bind(this);
        this.handleTransObjectEdit = this.handleTransObjectEdit.bind(this);
        this.handleDocumentsUsedAdd = this.handleDocumentsUsedAdd.bind(this);
        this.handleDocumentsUsedDelete = this.handleDocumentsUsedDelete.bind(this);
        this.handleGetLatestMaps = this.handleGetLatestMaps.bind(this);
        this.toggleMapUpdateStatus = this.toggleMapUpdateStatus.bind(this);
        
    }

    public componentWillMount() {
        this.initState();
    };

    public componentDidMount() {
        this.query()
    }

    public render() {

        console.log("TRADE FROM TRADE DETAIL VIEW", this.props.trade)

        const packageList = this.props.packageSet.packageList
        const packageLabelList = this.props.packageLabelSet.packageLabelList
        const packageLabelRowCount = packageLabelList.length
        const pseudoTradeList = this.props.pseudoTradeSet.pseudoTradeList
        const partnerDocGroupList = this.props.partnerDocGroupSet.partnerDocGroupList
        const partnerDocGroupRowCount = partnerDocGroupList.length
        const apiTransObjectList = this.props.apiTransObjectSet.apiTransObjectList
        
        
        const apiTransObjectRowCount = apiTransObjectList.length

        const actionButtons =
            <div>
                <Button size="default"
                    onClick={() => {
                        this.initState();
                        this.props.toggleViewMode();
                    }}>
                    Cancel
            </Button>
                <Button size="default" 
                    onClick={() => {
                        this.handleDelete();
                    }}>
                    Delete
            </Button>
                <Button size="default" 
                    type="primary"
                    onClick={() => {
                        if (this.isValid()) {
                            this.handleUpdate();
                        }
                    }}>
                    Update
            </Button>
            </div>;

        return (
            <div style={{ width: '100%', marginBottom: 20 }}>
                {actionButtons}
                <Divider />
                <Form name="DetailForm" id="DetailForm" style={{ width: '100%' }}>x
                    <Collapse accordion={true} defaultActiveKey={["General"]} >
                        <Panel header="General / Maps" key="General">
                            <TradeDetailGeneralPanelView
                                handleInputChange={this.handleInputChange}
                                tradingPartner={this.state.TradingPartner}
                                fieldStatus={this.state.FieldStatus}
                                partnerList={this.props.partnerList}
                                handleKitTypeChange={this.handleKitTypeChange}
                                statusList={this.props.statusList}
                                handleStatusChange={this.handleStatusChange}
                                toggleViewMode={this.toggleModal}
                                handleDocumentsUsedEdit={this.handleDocumentsUsedEdit}
                                handleDocumentsUsedAdd={this.handleDocumentsUsedAdd}
                                handleDocumentsUsedDelete={this.handleDocumentsUsedDelete}
                                partnerDocGroupList={partnerDocGroupList}
                                partnerDocGroupRowCount={partnerDocGroupRowCount}
                                handleTransObjectEdit={this.handleTransObjectEdit}
                                apiTransObjectList={apiTransObjectList}
                                handleGetApiTransObjectList={this.handleGetApiTransObjectList}
                                apiTransObjectRowCount={apiTransObjectRowCount}
                                expanded={this.state.expanded}
                                handleExpandedChange={this.handleExpandedChange}
                                handleGetLatestMaps={this.handleGetLatestMaps}
                            />
                        </Panel>
                        <Panel header="Settings" key="Settings">
                            <TradeDetailSettingsPanelView
                                handleInputChange={this.handleInputChange}
                                tradingPartner={this.state.TradingPartner}
                                packageList={packageList}
                                handleUseDeptChange={this.handleUseDeptChange}
                                handleUseN1StChange={this.handleUseN1StChange}
                                handlePackageChange={this.handlePackageChange}
                            />
                        </Panel>
                        <Panel header="Configuration" key="Configuration">
                            <TradeDetailConfigurationPanelView
                                handleInputChange={this.handleInputChange}
                                tradingPartner={this.state.TradingPartner}
                                packageLabelList={packageLabelList}
                                packageLabelRowCount={packageLabelRowCount}
                                handlePriceMethodChange={this.handlePriceMethodChange}
                                handlePSPOMethodChange={this.handlePSPOMethodChange}
                            />
                        </Panel>
                        <Panel header="User Fields" key="UserFields">
                            <TradeDetailUserFieldsPanelView
                                handleInputChange={this.handleInputChange}
                                tradingPartner={this.state.TradingPartner}
                            />

                        </Panel>
                        <Panel header="System / Redirect" key="System">
                            <TradeDetailSystemPanelView
                                handleInputChange={this.handleInputChange}
                                tradingPartner={this.state.TradingPartner}
                                pseudoTradeList={pseudoTradeList}
                                handlePseudoTPPartIDtChange={this.handlePseudoTPPartIDtChange}
                                handlePseudoIDChange={this.handlePseudoIDChange}
                                handlePseudoSegmentNameChange={this.handlePseudoSegmentNameChange}
                                networkList={this.props.networkList}
                                handleNetworkChange={this.handleNetworkChange}
                            />
                        </Panel>
                    </Collapse>
                </Form>
                <Modal visible={(this.state.modalForm === "DocumentsUsed" ? true : false)} 
                       title="Trading Partner Documents Used"
                       footer={null}
                       closable={false}
                       destroyOnClose={true}
                       >
                        <TradeDetailDocumentsUsedView 
                            toggleModal={this.toggleModal} 
                            isNew={this.state.isNew}
                            item={this.state.partnerDocGroup} 
                            networkList={this.props.networkList}
                            ediDocGroupList={this.props.ediDocGroupList}                                
                         />
                    
                </Modal>
                <Modal visible={(this.state.modalForm === "TransObject" ? true : false)} title="Trading Partner Transformation Objects">
                        <TradeDetailTransObjectView toggleModal={this.toggleModal} />
                </Modal>
                <Modal visible={(this.props.trade.mapList.length > 0 && this.state.viewModalMapStatus ? true : false)} 
                        title="Map Update Status"
                        closable={false}
                        destroyOnClose={true}
                        footer={[
                            <Button key="Ok" onClick={this.toggleMapUpdateStatus}> Ok</Button>
                        ]}
                        >
                        <TradeDetailMapUpdateStatusView 
                            mapList ={this.props.trade.mapList} />
                </Modal>
                
            </div>
        )
    };

    private isValid() {
        return true;
    }
    private query() {
        // const top: number = this.state.pageSize;
        // const skip: number = (this.state.page - 1) * this.state.pageSize; // The pagination component is 1-based
        // const params: ODataParams = { top, skip, sorted: this.state.sorted, filtered: this.state.filtered };
        this.props.pseudoTradeGetAll();
        this.props.packageLabelGetAll(this.state.TradingPartner.TP_PartID)
        this.props.packageGetAll();
        this.props.partnerDocGroupGetAll(this.state.TradingPartner.TP_PartID)
    }

    private initState() {
        this.setState({
            TradingPartner: this.props.item,
            FieldStatus: [{ field: "TP_Name", value: "success", max: 30 },
                          { field: "TP_ID", value: "success", max: 100 }],
            modalForm:"Detail",
            viewModalMapStatus:false,

        });
    }

    private toggleModal(modified:boolean) {
        
        // if record was modified then refresh the partner groups to show changes in proper sort order
        if (modified) {
            this.props.partnerDocGroupGetAll(this.state.TradingPartner.TP_PartID)
        }
        
        // Closes either modal form 
        this.setState({
            modalForm: "Detail"
        });
    }

    // private handleDocumentsUsedEdit(partnerDocGroup:IPartnerDocGroup) {
    private handleDocumentsUsedEdit(partnerDocGroup:PartnerDocGroupModel) {
        // Open the TradeDetailDocumentsUsedView form
        this.setState({
            partnerDocGroup,
            modalForm: "DocumentsUsed",
            isNew: false
        });
    }

    private handleDocumentsUsedAdd() {
        // Open the TradeDetailDocumentsUsedView form
        const newPartnerDocGroup = new PartnerDocGroupModel
        newPartnerDocGroup.TP_PartID = this.state.TradingPartner.TP_PartID
        newPartnerDocGroup.PartnerID = this.state.TradingPartner.TP_PartID
        newPartnerDocGroup.GroupID = this.state.TradingPartner.TP_GroupID
        newPartnerDocGroup.TestProdInd = this.state.TradingPartner.TP_Status
        newPartnerDocGroup.PartnerQual = this.state.TradingPartner.TP_PartQ
        newPartnerDocGroup.Van_ID = this.state.TradingPartner.Van
        newPartnerDocGroup.CipherKey = this.state.TradingPartner.CipherKey
        
        this.setState({
            partnerDocGroup: newPartnerDocGroup,
            modalForm: "DocumentsUsed",
            isNew: true
        });
    }

    private handleDocumentsUsedDelete(partnerDocGroup:PartnerDocGroupModel) {
        this.props.partnerDocGroupDelete(partnerDocGroup)
    }

    private handleTransObjectEdit(apiTransObject:IApiTransObject) {
        // Open the TradeDetailTransObjectView form
        this.setState({
            modalForm: "TransObject",
            isNew: false
        });
    }

    private handleDropDownChange(field: string, value: any) {
        this.setState(prevState => ({
            TradingPartner: {
                ...prevState.TradingPartner,
                [field]: value
            }
        }))
    }

    private handleStatusChange(value: string) {
        this.handleDropDownChange("TP_Status", value)
    }

    private handleKitTypeChange(value: number) {
        this.handleDropDownChange("KitTypeID", value)
    }

    private handleUseDeptChange(value: string) {
        this.handleDropDownChange("TP_UseDept", value)
    }

    private handleUseN1StChange(value: string) {
        this.handleDropDownChange("TP_UseN1ST", value)
    }

    private handlePackageChange(value: string) {
        this.handleDropDownChange("PKG_ID", value)
    }

    private handlePriceMethodChange(value: number) {
        this.handleDropDownChange("PrcMethod", value)
    }

    private handlePSPOMethodChange(value: number) {
        this.handleDropDownChange("PSPOMethod", value)
    }

    private handlePseudoTPPartIDtChange(value:string) {
        this.handleDropDownChange("Pseudo_TPPartID", value)
    }

    private handlePseudoIDChange(value:string) {
        this.handleDropDownChange("Pseudo_ID", value)
    }

    private handlePseudoSegmentNameChange(value:string) {
        this.handleDropDownChange("Pseudo_Segname", value)
    }

    private handleGetApiTransObjectList(dgid:string, tppartid:string){
        this.props.apiTransObjectGetAll({ dgid, tppartid})
    }

    private handleGetLatestMaps(apiTransObject:IApiTransObject) {
        // mapSettings[0] =  
        //     new MapSettings({MapName:apiTransObject.TDocName,
        //                      Type:enumTransformationType.Map})
        
        this.props.trade.mapList = [];

        const mapSettingsList: MapSetting[] = [];
        
        // map
        mapSettingsList.push(new MapSetting({MapName:apiTransObject.TDocName,
                                             Type:enumTransformationType.Map,
                                             Status:enumTransformationUpdateStatus.Same}))
        
        // loop
        mapSettingsList.push(new MapSetting({MapName:apiTransObject.TransID,
                                             Type:enumTransformationType.Loop,
                                             Status:enumTransformationUpdateStatus.Same}))

        // token
        mapSettingsList.push(new MapSetting({MapName:"tokendef",
                                             Type:enumTransformationType.Token,
                                             Status:enumTransformationUpdateStatus.Same}))

        // console.log("MAP SETTINGS", mapSettingsList)    
        this.props.tradeUpdateMaps(JSON.parse(JSON.stringify(mapSettingsList)))
        
        this.setState({
            viewModalMapStatus:true
        })
    }

    private toggleMapUpdateStatus() {
        
        this.props.trade.mapList=[];
        this.setState({
            viewModalMapStatus:false
        })
    }

    private handleNetworkChange(value:string) {
        this.handleDropDownChange("Van", value)
    }

    private handleExpandedChange(newExpanded, index, event) {
        this.setState({ 
            expanded: { [index]: newExpanded[index] }
        })
    }

    private handleUpdate() {
        this.props.tradeUpdate(this.state.TradingPartner)
        this.props.toggleViewMode();
    }

    private handleDelete() {
        this.props.tradeDelete(this.state.TradingPartner);
        this.props.toggleViewMode();
    }

    // private handleInputChange(event) {

    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     if (this !== undefined) {
    //         this.setState({
    //             [name]: value
    //         });
    //     }
    // }

    private handleInputChange(event) {

        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const current = this.state.FieldStatus.find(item => item.field === name)

        // determine if there is a max field length and if so, set it
        if (current !== undefined) {
            if (current.max !== undefined) {
                value = (value as string).substring(0, current.max)
            }
        }

        this.setState(prevState => ({
            TradingPartner: {
                ...prevState.TradingPartner,
                [name]: value
            }
        }))


        // field validation
        switch (name) {
            case 'TP_ID':
                let result
                if (value.length < 1) {
                    result = { field: name, value: "error", max: current.max }
                }
                else {
                    result = { field: name, value: "success", max: current.max }
                }
                this.setState({
                    FieldStatus: this.state.FieldStatus.map((status) =>
                        status.field === name ? result : status)
                })

        }
    }
}

const mapStateToProps = ({ trade, packageSet, packageLabelSet, pseudoTradeSet, partnerDocGroupSet, apiTransObjectSet }) => {
    return { trade, packageSet, packageLabelSet, pseudoTradeSet, partnerDocGroupSet, apiTransObjectSet }
};

const mapActionsToProps = {
    packageGetAll,
    packageLabelGetAll,
    pseudoTradeGetAll,
    partnerDocGroupGetAll,
    partnerDocGroupDelete,
    apiTransObjectGetAll,
    tradeUpdate,
    tradeDelete,
    tradeUpdateMaps
};

export default connect(mapStateToProps, mapActionsToProps)(TradeDetailView);
