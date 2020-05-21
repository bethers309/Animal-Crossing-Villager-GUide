import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import './Form.css';

class addForm extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            tempName: "",
            tempGender: "",
            tempPersonality: "",
            tempSpecies: "",
            tempBday: "",
            tempPhrase: "",
            tempPic: "",
            show: false,

        }
    }

    validate() {
        return (this.state.tempName !== ""
            && this.state.tempGender !== ""
            && this.state.tempPersonality !== ""
            && this.state.tempSpecies !== ""
            && this.state.tempBday !== ""
            && this.state.tempPhrase !== ""
            && this.state.tempPic !== "");
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
                <Button variant='primary' style={{'backgroundColor': '#E8CA1F'}}onClick={() => this.handleShow()}>Add a villager!</Button>
                <Modal aria-labelledby="basicModal" data-backdrop = "true" show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header>
                        <Modal.Title as="h2">Add A New Villager!!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form">
                            <p>Enter Villager Name </p>
                            <input type="text" className='form-control' name="tempName" placeholder='ie. Skye' onChange={this.handleChange}></input>
                            
                            <p>Enter Villager Gender </p>
                            <input type="text" className='form-control' placeholder='ie Female' name="tempGender" onChange={this.handleChange}></input>

                            <p>Enter Villager Personality Type </p>
                            <input type="text" className='form-control' placeholder='ie Normal' name="tempPersonality" onChange={this.handleChange}></input>
                            
                            <p>Enter Villager Species </p>
                            <input type="text" className='form-control' placeholder='ie Wolf' name="tempSpecies" onChange={this.handleChange}></input>
                           
                            <p>Enter Villager Birthday </p>
                            <input type="text" className='form-control' placeholder='ie March 24th' name="tempBday" onChange={this.handleChange}></input>
                            
                            <p>Enter Villager's Catchphrase </p>
                            <input type="text" className='form-control' placeholder='ie airmail' name="tempPhrase" onChange={this.handleChange}></input>
                            
                            <p>Enter linke to Villager Photo</p>
                            <input type="text" className='form-control' placeholder='Enter link' name="tempPic" onChange={this.handleChange}></input>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='primary' style={{'backgroundColor': '#E8CA1F'}} onClick={() => this.handleClose()}>
                            Close
                        </Button>
                        <Button variant='primary' style={{'backgroundColor': '#E8CA1F'}}onClick={
                            () => {
                                if (this.validate()) {
                                    this.props.handleSubmit(this.state.tempName, this.state.tempGender, this.state.tempPersonality, this.state.tempSpecies, this.state.tempBday, this.state.tempPhrase, this.state.tempPic)
                                }
                                else {
                                    alert("Please fill out all fields!!");
                                }
                                this.handleClose();
                            }}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default addForm;
