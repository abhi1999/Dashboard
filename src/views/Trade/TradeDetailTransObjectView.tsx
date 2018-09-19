import * as React from "react";
import { StringChecker } from '../../utils/Conversion';
import { Form, Input, InputNumber, Checkbox, Button, Row, Col } from 'antd'
import { connect } from "react-redux";
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { tradeUpdate, tradeDelete } from '../../actions/Trade';
import Trade from "../../constants/implementations/Trade";

export interface ITradeDetailTransObjectViewProps {
    // Local
    itemId: string,
    item: Trade,
    isNew: boolean,
    toggleModal: any,

    // Redux
    trade: any,
    tradeUpdate: any,
    tradeDelete: any
}

export interface ITradeDetailTransObjectViewState {
    viewMode: string
    [propName: string]: any, // Lastly, this is so we can set by name dynamically
}

class TradeDetailTransObjectView extends React.Component<ITradeDetailTransObjectViewProps, ITradeDetailTransObjectViewState>  {

    constructor(props: any) {
        super(props);

        this.initState = this.initState.bind(this);
        this.isValid = this.isValid.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.togglePartner = this.togglePartner.bind(this);

    }

    public componentWillMount() {
        this.initState();
    };

    public render() {

        const actionButtons =
            <div>
                <Button 
                    onClick={() => {
                        this.props.toggleModal();
                    }}>
                    Cancel
            </Button>
                <Button 
                    onClick={() => {
                        this.handleDelete();
                    }}>
                    Delete
            </Button>
                <Button  
                    type="primary"
                    onClick={() => {
                        if (this.isValid()) {
                            this.handleUpdate();
                        }
                    }}>
                    Update
            </Button>
            </div>;

        return (
            <div style={{ width: '100%', marginBottom: 20 }}>
                {actionButtons}
                <Divider />
                <Form>
                    <Row>
                        Hello World!
                    </Row>
                </Form>
            </div>
        )
    };

    private isValid() {
        return true;
    }

    private setViewMode(mode: string) {
        if (this.state.viewMode === mode) {
            this.setState({ viewMode: "None" })
        }
        else {
            this.setState({ viewMode: mode })
        }
    }

    private togglePartner() {
        this.setState({isPartnerDropdownOpen: !this.state.isPartnerDropdownOpen})

    }
    private initState() {
        this.setState({
            viewMode: "General",
            isPartnerDropdownOpen:false
        });
    }

    private handleUpdate() {
//        this.props.tradeUpdate(trade);
        this.props.toggleModal();
    }

    private handleDelete() {
//         this.props.tradeDelete(trade);
        this.props.toggleModal();
    }


    private handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (this !== undefined) {
            this.setState({
                [name]: value
            });
        }
        // Field Validation
        // if (name === 'Field_Frt_Code') {
        //     if (value.length < 1) {
        //         this.setState({
        //             Field_Frt_Code_Error: true,
        //             Field_Frt_Code_Help: 'Freight Code - cannot be blank.'
        //         });
        //     }
        //     else {
        //         this.setState({
        //             Field_Frt_Code_Error: false,
        //             Field_Frt_Code_Help: 'Freight Code'
        //         });
        //     }
        // }
        // else if (name === 'Field_NMFC') {
        //     if (value.length < 1) {
        //         this.setState({
        //             Field_NMFC_Error: true,
        //             Field_NMFC_Help: 'Freight Code NMFC - cannot be blank.'
        //         });
        //     }
        //     else {
        //         this.setState({
        //             Field_NMFC_Error: false,
        //             Field_NMFC_Help: 'Freight Code NMFC'
        //         });
        //     }
        // }
    }
}

const mapStateToProps = ({ trade }) => {
    return { trade }
};

const mapActionsToProps = {
    tradeUpdate,
    tradeDelete
};

export default connect(mapStateToProps, mapActionsToProps)(TradeDetailTransObjectView);
