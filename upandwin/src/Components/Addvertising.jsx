import React, { Component } from 'react';
import './Addvertising.css';
import {
  Button, Modal, ModalBody,
} from 'reactstrap';
import LogoJeu from '../Images/League_of_Legends_Logo.png';
import Form from './Form';

class Addvertising extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  toggleNested() {
    const { nestedModal } = this.state;
    this.setState({
      nestedModal: !nestedModal,
      closeAll: false,
    });
  }

  toggleAll() {
    const { nestedModal } = this.state;
    this.setState({
      nestedModal: !nestedModal,
      closeAll: true,
    });
  }

  render() {
    const { modal } = this.state;
    const { className } = this.props;
    const { nestedModal } = this.state;
    const { closeAll } = this.state;
    return (
      <div>
        <div className="Addvertising-img">
          <div className="Addvertising">
            <img src={LogoJeu} className="Logo-jeu" alt="" />
            <p className="AddvertisingTitle">
              <span className="Text-background">
                Les tutos
                {' '}
                <span className="Semi-bold-Italic">League of Legends</span>
                {' '}
                sont maintenant disponibles sur Up&Win !
              </span>
            </p>
            <button type="button" className="Button" onClick={this.toggle}>
              Go !
            </button>
          </div>
        </div>
        <div>
          <Modal isOpen={modal} toggle={this.toggle} className={className}>
            <div className="Logo" />
            <ModalBody>
              <Button color="primary" onClick={this.toggleNested}>Subscribe</Button>
              {' '}
              <Button color="secondary" onClick={this.toggleNested}>Connexion</Button>
              <br />
              <Modal isOpen={nestedModal} toggle={this.toggleNested} onClosed={closeAll ? this.toggle : undefined}>
                <Form />
              </Modal>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Addvertising;
