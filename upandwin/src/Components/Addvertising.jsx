import React, { Component } from 'react';
import './Addvertising.css';
import {
  Button, Modal, ModalBody,
} from 'reactstrap';
import LogoJeu from '../Images/League_of_Legends_Logo.png';
import Form from './Form';
import ConnexionForm from './ConnexionForm';

class Addvertising extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal2: false,
      nestedModal: false,
      nestedModal2: false,
      // closeAll: false,
      // closeAll2: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleNested2 = this.toggleNested2.bind(this);
    // this.toggleAll = this.toggleAll.bind(this);
    // this.toggleAll2 = this.toggleAll2.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  toggle2() {
    this.setState(prevState => ({
      modal2: !prevState.modal2,
    }));
  }

  toggleNested() {
    const { nestedModal } = this.state;
    this.setState({
      nestedModal: !nestedModal,
      // closeAll: false,
    });
  }

  toggleNested2() {
    console.log('je pase ici');
    const { nestedModal2 } = this.state;
    this.setState({
      nestedModal2: !nestedModal2,
      // closeAll: false,
    });
  }

  // toggleAll() {
  //   const { nestedModal } = this.state;
  //   this.setState({
  //     nestedModal: !nestedModal,
  //     closeAll: true,
  //   });
  // }

  // toggleAll2() {
  //   const { nestedModal2 } = this.state;
  //   this.setState({
  //     nestedModal2: !nestedModal2,
  //     closeAll2: true,
  //   });
  // }

  render() {
    const { modal } = this.state;
    const { className } = this.props;

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
            <div className="Logomodal" />
            <h4 className="accroche">Bienvenue sur Up & Win</h4>
            <ModalBody>
              <Button onClick={this.toggleNested}>S’enregistrer</Button>
              {' '}
              <Button onClick={this.toggleNested2}>S’identifier</Button>
              <br />
              {
                this.state.nestedModal ? <Form /> : ''
              }
              {
                this.state.nestedModal2 ? <ConnexionForm /> : ''
              }
              {/* <Modal
                isOpen={nestedModal}
                toggle={this.toggleNested}
                onClosed={closeAll ? this.toggle : undefined}
              >
                <Form />
              </Modal>
              <Modal
                isOpen={nestedModal2}
                toggle={this.toggleNested2}
                onClosed={closeAll2 ? this.toggle2 : undefined}
              >
                <ConnexionForm />
              </Modal> */}
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Addvertising;
