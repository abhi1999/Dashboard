import * as React from 'react';
import { Button, Collapse, Container, Tooltip } from 'reactstrap';
import AddEditItem from './../form/AddEditItem'
import CarrierGrid from './../grid/CarrierGrid'

interface IHomeProps{
    loading:boolean,
    rows:any[],
    totalPages:number,
    loadCarriersData:(pageSize?:number, page?:number, sorted?:any[], filtered?:any[])=>Promise<any>,
    addUpdateDeleteCarrierItem:(data:any, mode:string)=>{}
}
interface IHomeState{
    addPanelHidden:boolean,
    tooltipOpen: boolean
}
class HomeView extends React.Component<IHomeProps, IHomeState> {
    constructor(props){
        super(props);
        this.state = {addPanelHidden:true, tooltipOpen:false};
    }
    public componentDidMount(){
        // to do something
    }
    public componentWillReceiveProps(next){
        console.log(next);
    }
    public render() {
        
        return (
            <Container>
                <Button id="AddItemButton" color="primary" size="sm" onClick={()=>{ this.setState({ addPanelHidden: !this.state.addPanelHidden })}} style={{ marginBottom: '1rem' }}>Add New</Button>
                <Tooltip  isOpen={this.state.tooltipOpen} target="AddItemButton" toggle={()=>{ this.setState({ tooltipOpen: !this.state.tooltipOpen })}}>
                    Click to add new item
                </Tooltip>
                <Collapse isOpen={!this.state.addPanelHidden}>
                    <AddEditItem addUpdateDeleteCarrierItem={this.props.addUpdateDeleteCarrierItem} handleCancel={()=>{ console.log(this.state);this.setState({ addPanelHidden: !this.state.addPanelHidden})}}/>
                </Collapse>
                <CarrierGrid {...this.props}/>
            </Container>
        );
    }
}

export default HomeView;
