import * as React from "react";
import ReactTable from "react-table";
import { Button, Card, CardBody, CardHeader, CardTitle} from 'reactstrap';
import { Form, FormGroup, Input, Label} from 'reactstrap';
import { Col, Collapse, Container, Row } from 'reactstrap';
import { AddItem, DeleteItem, GetItemSet, UpdateItem } from './controller/CarrierController';

import { StringChecker } from "./common/Conversion";

interface ICarrierViewState {
    collapseAddNew?: boolean,
    data?: any,
    expanded?: any,
    editRowIndex?: any,
    Field_New_SCAC?: any,
    Field_New_Ship_Via_ID?: any,
    Field_New_Ship_Via_Name?: any,
    Field_New_Ship_Via_Type?: any,
    Field_New_User1?: any,
    Field_New_User2?: any,
    Field_New_User3?: any,
    Field_New_User4?: any,
    Field_New_User5?: any,
    Field_Ship_Via_ID?: any,
    Field_Ship_Via_Name?: any,
    Field_Ship_Via_Type?: any,
    Field_User1?: any,
    Field_User2?: any,
    Field_User3?: any,
    Field_User4?: any,
    Field_User5?: any,
    Field_SCAC?:any,
    loading?: boolean,   
    pages?: any   
};
export default class CarrierView extends React.Component<{},ICarrierViewState> {
    constructor(props) {
        super(props);
        this.state = {
            collapseAddNew: false,
            data: [],
            expanded: {},
            loading: true,
            pages: null
        };
        this.fetchData = this.fetchData.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleAddNew = this.handleAddNew.bind(this);
    }
    public render() {
        const { data, pages, loading } = this.state;
        return (
            <div style={{ margin: '1rem' }}>
                <Card>
                    <CardTitle>
                        <Container style={{ margin: '1rem' }}>
                            <Row>
                                <Col xs="6">
                                    Carriers
                                </Col>
                                <Col xs={{ size: '2', offset: 4 }}>
                                    <Button color="primary" size="sm"  style={{ marginBottom: '1rem' }}
                                            onClick={() =>
                                            {
                                                this.toggle();
                                            }}>
                                        Add New
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </CardTitle>
                    <CardBody>
                        <Collapse isOpen={this.state.collapseAddNew}>
                            <div>
                                <Card>
                                    <CardHeader>Carrier Details</CardHeader>
                                    <CardBody>
                                        <Form onSubmit={this.handleAddNew}>
                                            <Container>
                                                <Row>
                                                    <Col xs="4">
                                                        <FormGroup>
                                                            <Label for="Ship_Via_Name">Carrier Name</Label>
                                                            <Input type="text" name="New_Ship_Via_Name" id="New_Ship_Via_Name"
                                                                   value={StringChecker(this.state.Field_New_Ship_Via_Name)}
                                                                   onChange={this.handleInputChange} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="2">
                                                        <FormGroup>
                                                            <Label for="Ship_Via_ID">Carrier ID</Label>
                                                            <Input type="text" name="New_Ship_Via_ID" id="New_Ship_Via_ID"
                                                                   value={StringChecker(this.state.Field_New_Ship_Via_ID)}
                                                                   onChange={this.handleInputChange} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="2">
                                                        <FormGroup>
                                                            <Label for="SCAC">SCAC</Label>
                                                            <Input type="text" name="New_SCAC" id="New_SCAC"
                                                                   value={StringChecker(this.state.Field_New_SCAC)}
                                                                   onChange={this.handleInputChange} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="2">
                                                        <FormGroup>
                                                            <Label for="Ship_Via_Type">Type</Label>
                                                            <Input type="text" name="New_Ship_Via_Type" id="New_Ship_Via_Type"
                                                                   value={StringChecker(this.state.Field_New_Ship_Via_Type)}
                                                                   onChange={this.handleInputChange} />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2">
                                                        <FormGroup>
                                                            <Label for="User1">User-Defined Field 1</Label>
                                                            <Input type="text" name="New_User1" id="New_User1"
                                                                   value={StringChecker(this.state.Field_New_User1)}
                                                                   onChange={this.handleInputChange} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="2">
                                                        <FormGroup>
                                                            <Label for="User2">User-Defined Field 2</Label>
                                                            <Input type="text" name="New_User2" id="New_User2"
                                                                   value={StringChecker(this.state.Field_New_User2)}
                                                                   onChange={this.handleInputChange} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="2">
                                                        <FormGroup>
                                                            <Label for="User3">User-Defined Field 3</Label>
                                                            <Input type="text" name="New_User3" id="New_User3"
                                                                   value={StringChecker(this.state.Field_New_User3)}
                                                                   onChange={this.handleInputChange} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="2">
                                                        <FormGroup>
                                                            <Label for="User4">User-Defined Field 4</Label>
                                                            <Input type="text" name="New_User4" id="New_User4"
                                                                   value={StringChecker(this.state.Field_New_User4)}
                                                                   onChange={this.handleInputChange} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="2">
                                                        <FormGroup>
                                                            <Label for="User5">User-Defined Field 5</Label>
                                                            <Input type="text" name="New_User5" id="New_User5"
                                                                   value={StringChecker(this.state.Field_New_User5)}
                                                                   onChange={this.handleInputChange} />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="2">
                                                        <Button color="success" size="sm">Save</Button>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </div>
                        </Collapse>
                        <ReactTable
                            columns={[
                                {
                                    Header: "ID",
                                    accessor: "Ship_Via_ID"
                                },
                                {
                                    Header: "Carrier Name",
                                    accessor: "Ship_Via_Name",
                                    minWidth: 250
                                },
                                {
                                    Header: "SCAC",
                                    accessor: "SCAC"
                                },
                                {
                                    Header: "Type",
                                    accessor: "Ship_Via_Type"
                                },
                                {
                                    Header: "User1",
                                    accessor: "User1"
                                },
                                {
                                    Header: "User2",
                                    accessor: "User2"
                                },
                                {
                                    Header: "User3",
                                    accessor: "User3"
                                },
                                {
                                    Header: "User4",
                                    accessor: "User4"
                                },
                                {
                                    Header: "User5",
                                    accessor: "User5"
                                }
                            ]}
                            manual={true} // Forces table not to paginate or sort automatically, so we can handle it server-side
                            data={data}
                            pages={pages} // Display the total number of pages
                            loading={loading} // Display the loading overlay when we need it
                            onFetchData={this.fetchData} // Request new data when things change
                            filterable={true}
                            defaultPageSize={10}
                            defaultSorted={[
                                {
                                    desc: false,
                                    id: "Ship_Via_Name"
                                }
                            ]}
                            className="-striped -highlight"
                            SubComponent={row => {
                                return (
                                    <div>
                                        <Card>
                                            <CardHeader>Carrier Details</CardHeader>
                                            <CardBody>
                                                <Form onSubmit={this.handleUpdate}>
                                                    <Container>
                                                        <Row>
                                                            <Col xs="4">
                                                                <FormGroup>
                                                                    <Label for="Ship_Via_Name">Carrier Name</Label>
                                                                    <Input type="text" name="Ship_Via_Name" id="Ship_Via_Name"
                                                                           value={StringChecker(this.state.Field_Ship_Via_Name)}
                                                                           onChange={this.handleInputChange} />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col xs="2">
                                                                <FormGroup>
                                                                    <Label for="Ship_Via_ID">Carrier ID</Label>
                                                                    <Input type="text" name="Ship_Via_ID" id="Ship_Via_ID"
                                                                           value={StringChecker(this.state.Field_Ship_Via_ID)}
                                                                           onChange={this.handleInputChange} />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col xs="2">
                                                                <FormGroup>
                                                                    <Label for="SCAC">SCAC</Label>
                                                                    <Input type="text" name="SCAC" id="SCAC"
                                                                           value={StringChecker(this.state.Field_SCAC)}
                                                                           onChange={this.handleInputChange} />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col xs="2">
                                                                <FormGroup>
                                                                    <Label for="Ship_Via_Type">Type</Label>
                                                                    <Input type="text" name="Ship_Via_Type" id="Ship_Via_Type"
                                                                           value={StringChecker(this.state.Field_Ship_Via_Type)}
                                                                           onChange={this.handleInputChange} />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs="2">
                                                                <FormGroup>
                                                                    <Label for="User1">User-Defined Field 1</Label>
                                                                    <Input type="text" name="User1" id="User1"
                                                                           value={StringChecker(this.state.Field_User1)}
                                                                           onChange={this.handleInputChange} />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col xs="2">
                                                                <FormGroup>
                                                                    <Label for="User2">User-Defined Field 2</Label>
                                                                    <Input type="text" name="User2" id="User2"
                                                                           value={StringChecker(this.state.Field_User2)}
                                                                           onChange={this.handleInputChange} />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col xs="2">
                                                                <FormGroup>
                                                                    <Label for="User3">User-Defined Field 3</Label>
                                                                    <Input type="text" name="User3" id="User3"
                                                                           value={StringChecker(this.state.Field_User3)}
                                                                           onChange={this.handleInputChange} />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col xs="2">
                                                                <FormGroup>
                                                                    <Label for="User4">User-Defined Field 4</Label>
                                                                    <Input type="text" name="User4" id="User4"
                                                                           value={StringChecker(this.state.Field_User4)}
                                                                           onChange={this.handleInputChange} />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col xs="2">
                                                                <FormGroup>
                                                                    <Label for="User5">User-Defined Field 5</Label>
                                                                    <Input type="text" name="User5" id="User5"
                                                                           value={StringChecker(this.state.Field_User5)}
                                                                           onChange={this.handleInputChange} />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs="2">
                                                                <Button color="success" size="sm">Update</Button>
                                                            </Col>
                                                            <Col xs={{ size: '2', offset: 6 }}>
                                                                <Button color="secondary" size="sm"
                                                                        onClick={() =>
                                                                        {
                                                                            this.deleteRow(row);
                                                                        }
                                                                        }>
                                                                    Delete
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Form>
                                            </CardBody>
                                        </Card>
                                    </div>
                                );
                            }}
                            expanded={this.state.expanded}
                            onExpandedChange={(newExpanded, index, event) => this.handleRowExpanded(newExpanded, index, event)}
                        />
                    </CardBody>
                </Card>
            </div>
        );
    }
    private toggle() {
        this.setState({ collapseAddNew: !this.state.collapseAddNew });
    }

    private fetchData(state) {
        this.setState({ loading: true });

        GetItemSet(
            state.pageSize,
            state.page,
            state.sorted,
            state.filtered
        ).then(res => {
            this.setState({
                data: res.rows,
                loading: false,
                pages: res.pages
            });
        });
    }

    private handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = "Field_" + target.name;

        if (this!==undefined) {
            this.setState({
                [name]: value
            });
        }
    }

    private handleAddNew(event) {
        event.preventDefault();

        const ShipVia = {
            SCAC: StringChecker(this.state.Field_New_SCAC),
            Ship_Via_ID: StringChecker(this.state.Field_New_Ship_Via_ID),
            Ship_Via_Name: StringChecker(this.state.Field_New_Ship_Via_Name),
            Ship_Via_Type : StringChecker(this.state.Field_New_Ship_Via_Type),
            User1: StringChecker(this.state.Field_New_User1),
            User2 : StringChecker(this.state.Field_New_User2),
            User3 : StringChecker(this.state.Field_New_User3),
            User4 : StringChecker(this.state.Field_New_User4),
            User5 : StringChecker(this.state.Field_New_User5)
        };

        AddItem(ShipVia)
            .then(()=>{
                const data = this.state.data;
                data.push(ShipVia);
                this.setState({ data });

                this.setState({ collapseAddNew: false });
            });
    }

    private handleUpdate(event) {
        event.preventDefault();

        const ShipVia = {
            SCAC: StringChecker(this.state.Field_SCAC),
            Ship_Via_ID: StringChecker(this.state.Field_Ship_Via_ID),
            Ship_Via_Name: StringChecker(this.state.Field_Ship_Via_Name),
            Ship_Via_Type : StringChecker(this.state.Field_Ship_Via_Type),
            User1: StringChecker(this.state.Field_User1),
            User2 : StringChecker(this.state.Field_User2),
            User3 : StringChecker(this.state.Field_User3),
            User4 : StringChecker(this.state.Field_User4),
            User5 : StringChecker(this.state.Field_User5)
        };

        UpdateItem(ShipVia)
            .then(()=>{
                const data = this.state.data;
                data[this.state.editRowIndex] = ShipVia;
                this.setState({ data });
                this.setState({expanded: {[this.state.editRowIndex]: false} });
            });
    }

    private deleteRow (row)
    {
        this.setState({editRowIndex: row.index});

        const rowData = row.original;

        DeleteItem(rowData.Ship_Via_ID)
            .then(()=>{
                const data = this.state.data;
                data.splice(this.state.editRowIndex, 1);
                this.setState({ data });
                this.setState({expanded: {[this.state.editRowIndex]: false} });
            });
    }

    private handleRowExpanded(newExpanded, index, event) {

        if (this.state.editRowIndex!==undefined && Number(this.state.editRowIndex) === Number(index))
        {
            this.setState({editRowIndex: -1});
            this.setState({expanded: {[index]: false} });
        }
        else
        {
            const rowData = this.state.data[index];
            this.setState({Field_Ship_Via_ID: StringChecker(rowData.Ship_Via_ID)});
            this.setState({Field_Ship_Via_Name: StringChecker(rowData.Ship_Via_Name)});
            this.setState({Field_SCAC: StringChecker(rowData.SCAC)});
            this.setState({Field_Ship_Via_Type: StringChecker(rowData.Ship_Via_Type)});
            this.setState({Field_User1: StringChecker(rowData.User1)});
            this.setState({Field_User2: StringChecker(rowData.User2)});
            this.setState({Field_User3: StringChecker(rowData.User3)});
            this.setState({Field_User4: StringChecker(rowData.User4)});
            this.setState({Field_User5: StringChecker(rowData.User5)});

            this.setState({editRowIndex: index});
            this.setState({expanded: {[index]: true} });
        }
    }
}