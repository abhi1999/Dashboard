import * as React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle} from 'reactstrap';
import { Form, FormFeedback, FormGroup, FormText, Input, Label} from 'reactstrap';
import { Col, Row } from 'reactstrap';
import validator from "validator";
import { IItemDataModel } from './../../domain/DataModel'

interface IAddEditItemProps{
    item?:IItemDataModel,
    addUpdateDeleteCarrierItem:(data:any, mode:string)=>{}
    handleCancel?:()=>void
}

interface IAddEditItemState{
    data?:any,
    errors?:any,
    mode:string
}

class AddEditItem extends React.Component<IAddEditItemProps, IAddEditItemState> {
    private formRef:any;
    constructor(props){
        super(props);
        this.handleSubmit  = this.handleSubmit.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state={mode:'add'}
        if(this.props.item){
            this.state ={data:this.props.item, mode:'update'}
        }
        this.formRef = React.createRef();
    }
    public componentDidMount(){
        // to do something
       
    }

    public render() {
        return (
            <Card>
                <CardHeader>Carrier Details</CardHeader>
                <CardBody>
                    <Form inline={false} onSubmit={this.handleSubmit} ref={this.formRef}>
                        <FormGroup row={true}>
                            <Label for="Ship_Via_Name" sm={2}>Carrier Name</Label>
                            <Col sm={10}>
                                <Input {...this.inputProps("Ship_Via_Name")}/>
                                <FormFeedback valid={true}>Sweet! this is good</FormFeedback>
                                <FormFeedback valid={false}>Some Validation Error</FormFeedback>
                            </Col>
                        </FormGroup>   
                        <Row>
                            <Col sm={4}>
                                <FormGroup row={true}>
                                    <Label for="Ship_Via_ID" sm={4}>Carrier ID</Label>
                                    <Col sm={8}>
                                        <Input {...this.inputProps("Ship_Via_ID")} placeholder="Enter Carrier ID" />
                                        <FormFeedback valid={true}>Sweet! this is good</FormFeedback>
                                        <FormFeedback valid={false}>Some Validation Error</FormFeedback>
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup row={true}>
                                    <Label for="SCAC" sm={4}>SCAC</Label>
                                    <Col sm={8}>
                                        <Input {...this.inputProps("SCAC")} placeholder="Enter SCAC" />
                                        <FormFeedback valid={true}>Sweet! this is good</FormFeedback>
                                        <FormFeedback valid={false}>Some Validation Error</FormFeedback>
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup row={true}>
                                    <Label for="Ship_Via_Type" sm={4}>Type</Label>
                                    <Col sm={8}>
                                    <Input {...this.inputProps("Ship_Via_Type")} placeholder="Enter Carrier Type" />
                                        <FormFeedback valid={true}>Sweet! this is good</FormFeedback>
                                        <FormFeedback valid={false}>Some Validation Error</FormFeedback>
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <FormGroup row={true}>
                                    <Label for="User1" sm={4}>User-Defined Field 1</Label>
                                    <Col sm={8}>
                                        <Input {...this.inputProps("User1")} placeholder="" />
                                        <FormFeedback valid={true}>Sweet! this is good</FormFeedback>
                                        <FormFeedback valid={false}>Some Validation Error</FormFeedback>
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup row={true}>
                                    <Label for="User2" sm={4}>User-Defined Field 2</Label>
                                    <Col sm={8}>
                                        <Input {...this.inputProps("User2")} placeholder="" />
                                        <FormFeedback valid={true}>Sweet! this is good</FormFeedback>
                                        <FormFeedback valid={false}>Some Validation Error</FormFeedback>
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup row={true}>
                                    <Label for="User3" sm={4}>User-Defined Field 3</Label>
                                    <Col sm={8}>
                                        <Input {...this.inputProps("User3")} placeholder="" />
                                        <FormFeedback valid={true}>Sweet! this is good</FormFeedback>
                                        <FormFeedback valid={false}>Some Validation Error</FormFeedback>
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <FormGroup row={true}>
                                    <Label for="User4" sm={4}>User-Defined Field 4</Label>
                                    <Col sm={8}>
                                        <Input {...this.inputProps("User4")} placeholder="" />
                                        <FormFeedback valid={true}>Sweet! this is good</FormFeedback>
                                        <FormFeedback valid={false}>Some Validation Error</FormFeedback>
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup row={true}>
                                    <Label for="User5" sm={4}>User-Defined Field 5</Label>
                                    <Col sm={8}>
                                        <Input {...this.inputProps("User5")} placeholder="" />
                                        <FormFeedback valid={true}>Sweet! this is good</FormFeedback>
                                        <FormFeedback valid={false}>Some Validation Error</FormFeedback>
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
                <CardFooter>
                    {(this.state.mode === "add")?
                        <Button color="primary" size="sm" onClick={this.handleSubmit}>Create</Button>:""
                    }
                    {(this.state.mode === "update")?
                        (<React.Fragment><Button color="primary" size="sm" onClick={this.handleSubmit}>Update</Button>{" "}<Button color="secondary" size="sm" onClick={this.handleDelete}>Delete</Button></React.Fragment>):""
                    }
                    {(this.props.handleCancel)? <React.Fragment>{" "}<Button color="secondary" size="sm" onClick={this.handleCancel}>Cancel</Button></React.Fragment>:""}
                </CardFooter>
            </Card>
        );
    }


    private onFieldChange(args){
        const obj = args.target;
        const errors = this.state.errors? this.state.errors :{};
        const state = this.state.data? this.state.data :{};
        state[obj.name] = obj.value;    
        
        errors[obj.name]= obj && validator.isAlphanumeric(validator.blacklist(obj.value, ' '))
        switch(obj.name){
            case "Ship_Via_Type":
                errors[obj.name]= (obj.value.length > 2)? false:true;
                break;
        }
        this.setState({errors,data:state});
    }
    private inputProps(inputName){
        const props:any={"type":"text", name:inputName, id:inputName, onChange:this.onFieldChange};
        props.value= this.state && this.state.data && this.state.data[inputName]? this.state.data[inputName] : "";
        props.valid = this.state && this.state.errors &&  this.state.errors[inputName] !== undefined? this.state.errors[inputName] : undefined;
        props.invalid = props.valid!== undefined? !props.valid: undefined
        return props;
    }
    private handleSubmit(){
        console.log(this.state.mode);
        this.props.addUpdateDeleteCarrierItem(this.state.data, this.state.mode);
    }
    private handleDelete(){
        this.props.addUpdateDeleteCarrierItem(this.state.data, "delete");
    }
    private handleCancel(){
        if(this.props.handleCancel){
            this.props.handleCancel();
        }
    }
}

export default AddEditItem;
