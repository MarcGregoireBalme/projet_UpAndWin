import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import StarRating from './StarRating';


class ModalRating extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: true,
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
        <Modal id="modalRating" show={show} onHide={this.handleClose}>
          <Modal.Header id="modalHeader" closeButton>
            <Modal.Title><p id="victory">Donnez votre avis</p></Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">
            <StarRating />
            <span>
            Merci pour votre vote !
            </span>
          </Modal.Body>
          <Modal.Footer id="modalFoot">
            <NavLink to="./">
              <Button onClick={this.handleClose}>
                <NavLink to="./">Je vote</NavLink>
              </Button>
            </NavLink>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalRating;
