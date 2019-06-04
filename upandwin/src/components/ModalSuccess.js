import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class ModalSuccess extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <Modal id="modalAlerte" show={show} onHide={this.handleClose}>
          <Modal.Header id="sasa" closeButton>
            <Modal.Title><p id="victory">Sucess !</p></Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">
            <div>
              coucou
            </div>
          </Modal.Body>
          <Modal.Footer id="modalFoot">
            <NavLink to="./">
              <Button onClick={this.handleClose}>
                <NavLink to="/Profil">Mon Profil</NavLink>
              </Button>
              <Button onClick={this.handleClose}>
              Retour
              </Button>
            </NavLink>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalSuccess;
