import React from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import './videoForm.scss';
import Create from '../containers/Create';

export default class VideoForm extends React.Component {
  state = {
    titre: '',
    auteur: '',
    lien: '',
    duree: '',
    categorie: '',
    jeu: '',
    show: false,
    newVidId: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      titre, auteur, lien, duree, categorie, jeu,
    } = this.state;

    axios
      .post('http://localhost:3005/videos', {
        titre,
        auteur,
        lien,
        duree,
        categorie,
        jeu,
      })
      .then(res => this.setState({
        newVidId: res.data,
        show: true,
      }));
  };

  handleClose = () => {
    this.setState({ show: false });
  }

  render() {
    const {
      titre, auteur, lien, duree, categorie, jeu, show, newVidId,
    } = this.state;
    return (
      <div>
        <div>
          <h3 style={{ textAlign: 'left' }}>Ajouter une vidéo</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              Titre :
              <input
                type="text"
                name="titre"
                value={titre}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Auteur :
              <input
                type="text"
                name="auteur"
                value={auteur}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Lien (embed) :
              <input
                type="text"
                name="lien"
                value={lien}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Durée :
              <input
                type="text"
                name="duree"
                value={duree}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Catégorie :
              <input
                type="text"
                name="categorie"
                value={categorie}
                onChange={this.handleChange}
              />
            </div>
            <div>
              Jeu :
              <input
                type="text"
                name="jeu"
                value={jeu}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Add</button>
          </form>
          <div>
            <Modal id="modalAlerte" show={show} onHide={this.handleClose}>
              <Modal.Header closeButton />
              <Modal.Body id="modalBody">
                <div>
                  <h4>
                    A video was submitted:
                    {titre}
                  </h4>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <Create videoId={newVidId} />
      </div>
    );
  }
}
