import _ from 'lodash';
import * as  React from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row, Table } from 'reactstrap';

import ProcessStepCard from "./ProcessStepCard";

class CardView extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        const {data} = this.props;
        const sortedData = _.orderBy(_.orderBy(data, "GroupOrder","asc"), "ControlOrder", "asc")
        const groupedData = _.groupBy(sortedData, "GroupName");
        console.log("groupedData::",groupedData)

        return <div className="business-flow-card-container">
                { this.getGroupRows(groupedData)}
            </div>
    }
    getGroupRows(groupedData) {
        let rows =[]
        for(var key in groupedData){
            if(groupedData.hasOwnProperty(key)){
                rows.push(<React.Fragment>
                        <h2 key={"header"+key}>{groupedData[key][0].GroupName}</h2>
                        <Row key={key}> {groupedData[key].map(d=> <Col xl={2} lg={3} md={4} sm={6} xs={12} className={key.toLocaleLowerCase().replace(" ","-")} ><ProcessStepCard item={d}/></Col>)}</Row>
                    </React.Fragment>
                )
            }
        }
        return rows;
    }
}
export default CardView;
