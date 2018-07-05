import classnames from "classnames";
import  * as moment from "moment";
import * as  React from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row } from 'reactstrap';

interface IDashboardContainerProps{
    colSize:number
    maxColSize?:number
    children?:any;
    headerTitle?:string
}
interface IDashboardContainerState{
    colSize:number
}
class DashboardContainer extends React.Component<IDashboardContainerProps, IDashboardContainerState>{
    public constructor(props) {
        super(props);
        this.state = {
          colSize:3
        };
        this.toggleColSize = this.toggleColSize.bind(this);
        this.getMaxColSize = this.getMaxColSize.bind(this);
    }
    public componentDidLoad(){
        this.setState({colSize:this.props.colSize})
    }
    public componentWillReceiveProps(nextProps){
        this.setState({colSize:nextProps.colSize})
    }
    public render(){
        return<Col xs={this.state.colSize}> 
                <Card>
                <CardHeader>
                  {this.props.headerTitle}
                  <div className="card-header-actions">
                    <a className="card-header-action btn"  onClick={this.toggleColSize}><i className={classnames({"icon-size-fullscreen":this.state.colSize!== this.getMaxColSize()}, {"icon-size-actual":this.state.colSize === this.getMaxColSize()})}/></a>
                  </div>
                </CardHeader>
                <Collapse isOpen={true} id="collapseExample">
                  <CardBody>
                    {this.props.children}
                  </CardBody>
                  <CardFooter>
                      footer
                  </CardFooter>
                </Collapse>
              </Card>
            </Col>
            
    }
    private toggleColSize() {
        this.setState({ colSize: this.state.colSize === this.props.colSize ? this.getMaxColSize(): this.props.colSize });
    }
    private getMaxColSize(){
        return this.props.maxColSize ? this.props.maxColSize: 12;
    }
    
}

export default DashboardContainer;
