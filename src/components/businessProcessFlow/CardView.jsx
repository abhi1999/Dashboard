import _ from 'lodash';
import * as  React from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row, Table } from 'reactstrap';

import ProcessStepCard from "./ProcessStepCard";
import ProcessStepCardAlt from "./ProcessStepCardAlt";

class CardView extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        const {data} = this.props;
        const sortedData = _.orderBy(_.orderBy(data, "GroupOrder","asc"), "ControlOrder", "asc")
        const groupedData = _.groupBy(sortedData, "GroupName");
        return <div className="business-flow-card-container">
                { this.getGroupRows(groupedData)}
                { this.getGroupRowsAlt(groupedData)}
            </div>
    }
    getGroupRows(groupedData) {
        let rows =[]
        for(var key in groupedData){
            if(groupedData.hasOwnProperty(key)){
                rows.push(<React.Fragment key={"fragment-"+key}>
                        <h2 key={"header"+key}>{groupedData[key][0].GroupName}</h2>
                        <Row key={key}> {groupedData[key].map((d, index)=> 
                                            <Col xl={2} lg={3} md={4} sm={6} xs={12} key={index} className={key.toLocaleLowerCase().replace(/ /gi,"-")} >
                                                <ProcessStepCard item={d}/>
                                            </Col>)}
                        </Row>
                    </React.Fragment>
                )
            }
        }
        return rows;
    }
    getGroupRowsAlt(groupedData) {
        let rows =[]
        rows.push(<h2 key={"old"}>Old </h2>);
        for(var key in groupedData){
            if(groupedData.hasOwnProperty(key)){
                rows.push(<React.Fragment key={"fragment-alt-"+key}>
                        <h2 key={"header-alt-"+key}>{groupedData[key][0].GroupName}</h2>
                        <Row key={"alt-"+key}> {groupedData[key].map((d, index)=> 
                                                        <Col xl={2} lg={3} md={4} sm={6} xs={12} key={index}>
                                                            <ProcessStepCardAlt item={d}/>
                                                        </Col>)}
                        </Row>
                    </React.Fragment>
                )
            }
        }
        return rows.length>2?rows:[];
    }
}
export default CardView;
