import  * as moment from "moment";
import * as  React from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardTitle, Col, Collapse, Fade, Row } from 'reactstrap';
import { INewsFeedItem } from "./../../domain/DataModel"

interface INewsFeedItemProps{
    item:INewsFeedItem
}
interface INewsFeedItemState{
    collapse:boolean
    fadeIn:boolean
    timeout:number
}
class NewsFeedItem extends React.Component<INewsFeedItemProps, INewsFeedItemState>{
    private momentInstance:any;
    public constructor(props) {
        super(props);
        this.momentInstance = moment;
        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
          collapse: false,
          fadeIn: true,
          timeout: 300
        };
    }
    public render(){
        let createdAt = "";
        if(this.props.item && this.props.item.date){
            createdAt = this.momentInstance(this.props.item.date).format("d MMM Y h:m A");
        }
        return <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card className="news-feed-list-item">
                <CardTitle> 
                    {this.props.item.title}
                    <div className="card-header-actions">
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className={this.state.collapse?"icon-arrow-up":"icon-arrow-down"}/></a>
                    <a className="card-header-action btn btn-minimize" onClick={()=>{window.open(this.props.item.guid)}}><i className="icon-action-redo" title="View Post"/></a>
                  </div>
                </CardTitle>
                <CardSubtitle> <small className="text-muted">{createdAt}</small></CardSubtitle>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <div dangerouslySetInnerHTML={{ __html: this.props.item.contentEncoded }} />
                   </CardBody>
                  <CardFooter>
                      <small className="text-muted">Categories: {this.props.item.categories.join(';')}</small>
                  </CardFooter>
                </Collapse>
              </Card>
            </Fade>
    }
    private toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    
    private toggleFade() {
        this.setState( {fadeIn: !this.state.fadeIn });
    }
}

export default NewsFeedItem;
