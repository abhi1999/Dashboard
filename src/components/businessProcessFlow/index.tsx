<<<<<<< HEAD
import _ from "lodash";
=======
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
import * as  React from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row, Table } from 'reactstrap';
import Chart from "./../charts";
import { GridContainer, LoadingOrErrorComponent } from "./../widgets/"
<<<<<<< HEAD
import CardView from "./CardView";
=======
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
import GridView from "./GridView";
interface IBusinessProcessFlowViewProps{
    dashboardMenuItemDetails:any[]
    dashboardMenuItems:any[]
    error:boolean,
    loading:boolean
    match:any
}

class BusinessProcessFlowView extends React.Component<IBusinessProcessFlowViewProps, any>{
    public constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.getGroupedData = this.getGroupedData.bind(this);
        this.getChartData = this.getChartData.bind(this);
        this.getPageTitle = this.getPageTitle.bind(this);
        console.log(this.props.match.params.ShortCutID)
    }
<<<<<<< HEAD
 
=======
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
    public render(){
        return <div> 
            <Card>
                <CardHeader>
                  {this.getPageTitle()}
                </CardHeader>
                <Collapse isOpen={true} id="collapseExample">
                  <CardBody>
                    <LoadingOrErrorComponent {...this.props}/>  
                    {this.props.loading || this.props.error? "":
<<<<<<< HEAD
                        <Chart data={this.getChartData()} chartSettings={{"height":300,}} chartOptions={{ scales:{xAxes:[{ticks:{beginAtZero:true,
                            userCallback: (label, index, labels)=> {
                            if (Math.floor(label) === label) {
                                return label;
                            }
                        },}}]}}} type="horizontalbar"/>
=======
                        <Chart data={this.getChartData()} chartOptions={{"height":400, scales:{xAxes:[{ticks:{beginAtZero:true}}]}}} type="horizontalbar"/>
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
                    }
                  </CardBody>
                </Collapse>
              </Card>
<<<<<<< HEAD
              <CardView data={this.getData()}/>  
        </div>
    }
    /* {this.props.loading || this.props.error || this.getData().length === 0? "":
        <GridContainer>
            <GridView data={this.getData()} />
        </GridContainer>    
    }*/
=======
              <GridContainer>
                  <GridView data={this.getData()} groupField="GroupName"/>
               </GridContainer>
        </div>
    }
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
    private getData(){
        const {dashboardMenuItemDetails, match} = this.props;
        const data = dashboardMenuItemDetails.find(i=> i.ShortCutID.toString() === match.params.ShortCutID)
        return data && data.values ? data.values : [];
    }
    private getGroupedData(){
<<<<<<< HEAD
        const data = _.sortBy(this.getData(),"GroupOrder");
=======
        const data = this.getData();
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
        const groupedData:any ={};
        data.forEach(element => {
            if(groupedData[element.GroupName] === undefined){
                groupedData[element.GroupName] = [];
            }
            groupedData[element.GroupName].push({...element});
        });
        return groupedData;
    }
    private getChartData(){
        const data = this.getGroupedData()
        const chartData :any=[];
        for(const key in data){
            if(data.hasOwnProperty(key)){
                chartData.push({label:key, value: data[key].length })
            }
        }
        return chartData;
    }
    private getPageTitle(){
        const {dashboardMenuItems, match} = this.props;
        const item = dashboardMenuItems.find(i=> i.ShortCutID.toString() === match.params.ShortCutID)
        return item && item.Caption? item.Caption :"Loading.."
    }
}
export default BusinessProcessFlowView;
