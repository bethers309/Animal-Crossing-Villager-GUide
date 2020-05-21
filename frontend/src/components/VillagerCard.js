import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Card.css';

class VillagerCard extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            show: false,
        }
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

    setGender(gen) {
        if (gen === "Male") {
            return ("https://png2.cleanpng.com/sh/eea606512fc9ca64537fa7503f42c9b1/L0KzQYm3U8MyN5RqfZH0aYP2gLBuTfdmdpVqip98eX3lf720hvVuaZ1qReVyZ36wfbLzhb02aZQ1SaU8Nkm1QomCWb42PmU8TKs9NkG4QoO8U8czP2E6UaoCLoDxd1==/kisspng-gender-symbol-female-sign-male-5ac01336922899.5647494615225372705987.png");
        }
        else {
            return ("https://png2.cleanpng.com/sh/7c9dc86b3e1c7e33aebf9fefc1c5365e/L0KzQYm3VcEyN5dtfZH0aYP2gLBuTgN6dZN0hJ9Cb33kfn7qjB1xfaVqip9yY3Bxg368gfY2apYATtZsZUG3RHA5WcI6PGQ1TqMAMkazRYW8VcA6OGU8RuJ3Zx==/kisspng-symbol-woman-computer-icons-5af5be96dce144.2929430615260545509047.png");
        }
    }

    render() {
        return (
            <div>
                <Button className="card-button" style={{ 'backgroundColor': '#E8CA1F' }} onClick={() => this.handleShow()}>View Details</Button>
                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header >
                        <Button variant="primary" className="btn form-btn" onClick={() => this.handleClose()}>
                            Close
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <span className='info row'>
                            <div className='id_container column left'>
                                <img src={this.props.pic} className='card-photo' alt={this.props.name}></img>
                                <p className='caption'>{this.props.name}</p>
                                <img src={this.setGender(this.props.gender)} className='gender-photo' alt={this.props.gender} />
                                <img alt = 'dialog box' className = 'dialog'src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/78432f89-d59e-4f44-a074-f8b51a30b63d/db10wqs-f3b257e2-8d89-4150-84af-0106d97eb88c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi83ODQzMmY4OS1kNTllLTRmNDQtYTA3NC1mOGI1MWEzMGI2M2QvZGIxMHdxcy1mM2IyNTdlMi04ZDg5LTQxNTAtODRhZi0wMTA2ZDk3ZWI4OGMucG5nIn1dXX0.D-TyhtdXrIgX8F15G1teKlzMW0Ma198bPwgToUqJ3Uo'></img>
                                <p className = 'phrase'>{this.props.phrase}</p>
                            </div>
                            <div classNames='text column right'>
                                <p className="v-name">{this.props.name}</p>
                                <p>Personality Type: </p>
                                <p><strong>{this.props.personality}</strong></p>
                                <p>Species:</p>
                                <p><strong>{this.props.species}</strong></p>
                                <p>Birthday:</p>
                                <p><strong>{this.props.bday}</strong></p>
                            </div>
                        </span>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="primary" className="btn form-btn" onClick={() => this.handleClose()}>
                            Close
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        )
    }
}

export default VillagerCard;