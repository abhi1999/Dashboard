import classnames from 'classnames';
import * as  React from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader,CardSubtitle, CardText, CardTitle,  Col, Collapse, Fade, Row, Table } from 'reactstrap';

interface IProcessStepCardProps{
    item:any
}
interface IProcessStepCardState{
    favSelected:boolean
}

class ProcessStepCardAlt extends React.Component<IProcessStepCardProps, IProcessStepCardState>{
    public constructor(props) {
        super(props);
        this.state ={
            favSelected:false
        }
        this.favClicked = this.favClicked.bind(this);
    }
    public render(){
        const {item} = this.props;
        return <Card key={item.ControlID}  outline={false}>
                <CardTitle style={{"backgroundColor":this.getHexColor(item.GroupColor)}}>
                    <div className="card-header-actions">
                        <a className="card-header-action btn" onClick={this.favClicked}><i className={classnames("fa", {"fa-star-o":!this.state.favSelected}, {"fa-star":this.state.favSelected})}/></a>
                        <a className="card-header-action btn" onClick={this.closeClicked}><i className={classnames("fa fa-close")}/></a>
                    </div>
                </CardTitle>
                <CardBody>
                    <CardText>{item.Title}</CardText>
                </CardBody>
            </Card>
    }
   private getHexColor(nonHexColor:string){
        return "#" +nonHexColor.substring(nonHexColor.length-6,nonHexColor.length)  
   }
   private favClicked(){
        this.setState({favSelected:!this.state.favSelected})
   }
   private closeClicked(){
       // do something
   }
}
export default ProcessStepCardAlt;
