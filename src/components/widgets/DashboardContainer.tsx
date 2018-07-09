import classnames from "classnames";
import * as  React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row } from 'reactstrap';
 
interface IDashboardContainerProps{
    colSize:number
    maxColSize?:number
    children?:any;
    headerTitle?:string
    badgeText?:string
    onMaximize?:(isMaximized:boolean)=>{}
}
interface IDashboardContainerState{
    colSize:number
}
class DashboardContainer extends React.Component<IDashboardContainerProps, IDashboardContainerState>{
    private containerRef:any;
    public constructor(props) {
        super(props);
        this.state = {
          colSize:3
        };
        this.containerRef = React.createRef()
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
        return <Col xs={this.state.colSize} > 
                <Card>
                <CardHeader>
                  {this.props.headerTitle} {this.props.badgeText !== undefined? <Badge pill={true} color="info">{this.props.badgeText}</Badge>:""}
                  <div className="card-header-actions" ref={this.containerRef}>
                    <a className="card-header-action btn"  onClick={this.toggleColSize}><i className={classnames({"icon-size-fullscreen":this.state.colSize!== this.getMaxColSize()}, {"icon-size-actual":this.state.colSize === this.getMaxColSize()})}/></a>
                  </div>
                </CardHeader>
                <Collapse isOpen={true} id="collapseExample">
                  <CardBody>
                    {this.props.children}
                  </CardBody>
                </Collapse>
              </Card>
            </Col>
            
    }
    private toggleColSize() {
        let isMaximized= false;
        let colSize;
        if( this.state.colSize === this.props.colSize){
            isMaximized= true;
            colSize = this.getMaxColSize();
        }
        else{
            isMaximized= false;
            colSize = this.props.colSize
        }

        this.setState({ colSize }, ()=>{
            setTimeout(()=>{scrollToComponent(this.containerRef.current, { offset:-200, align:'top', duration: 150, ease:'inCirc'})},500)
        })
        if(this.props.onMaximize) {
            this.props.onMaximize(isMaximized)
        }
    }
    private getMaxColSize(){
        return this.props.maxColSize ? this.props.maxColSize: 12;
    }
    
}

export default DashboardContainer;
