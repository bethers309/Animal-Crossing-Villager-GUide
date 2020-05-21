import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Form.css'
class delForm extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            tempName: "",
            show: false
        }
    }

    validate() {
        return (this.state.tempName !== "");
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    setShow(tf) {
        this.setState({ show: tf });
    }

    handleClose() {
        this.setShow(false);
    }

    handleShow() {
        this.setShow(true);
    }

    render() {
        return (
            <div>
                <Button variant='primary' style={{ 'backgroundColor': '#E8CA1F' }} onClick={() => this.handleShow()}>Delete a villager</Button>
                <Modal className="delModal" show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header>
                        <h2>Delete a Villager :(</h2>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="form-group">
                            <input type='text' className='form-control' placeholder='Enter villager name' name="tempName" onChange={this.handleChange} />
                            <p className="text-muted">Please refresh after saving changes to see update </p>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant='primary' style={{ 'backgroundColor': '#E8CA1F' }} onClick={() => this.handleClose()}>
                            Close
                            </Button>
                        <Button variant='primary' style={{ 'backgroundColor': '#E8CA1F' }} onClick={
                            () => {
                                if (this.validate()) {
                                    this.props.handleDel(this.state.tempName)
                                    this.handleClose();
                                }
                                else {
                                    alert("Please fill out the Name field!");
                                }

                            }
                        }>Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            </div >

        )
    }
}

export default delForm;
