import React from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import './videoForm.css';
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
    quizz_id: '5d08ef30e3dfb9241fb360f7',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      // eslint-disable-next-line camelcase
      titre, auteur, lien, duree, categorie, jeu, quizz_id,
    } = this.state;

    axios
      .post('http://localhost:3005/videos', {
        titre,
        auteur,
        lien,
        duree,
        categorie,
        jeu,
        quizz_id,
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

        <div className="VideoFormContainer">
          <h3 style={{ textAlign: 'left' }}>Ajouter une vidéo</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="Row">
              Titre
              <input
                placeholder="Titre"
                type="text"
                id="titre"
                name="titre"
                value={titre}
                onChange={this.handleChange}
              />
            </div>
            <div className="Row">
              Auteur
              <input
                placeholder="Auteur"
                type="text"
                name="auteur"
                value={auteur}
                onChange={this.handleChange}
              />
            </div>
            <div className="Row">
              Lien YouTube
              <input
                placeholder="Lien YouTube"
                type="text"
                name="lien"
                value={lien}
                onChange={this.handleChange}
              />
            </div>
            <div className="Row">
              Durée
              <input
                placeholder="Durée"
                type="text"
                name="duree"
                value={duree}
                onChange={this.handleChange}
              />
            </div>
            <div className="Row">
              Jeu
              <input
                placeholder="Jeu"
                type="text"
                name="jeu"
                value={jeu}
                onChange={this.handleChange}
              />
            </div>
            <div className="Row">
              Catégorie
              <input
                placeholder="Catégorie"
                type="text"
                name="categorie"
                value={categorie}
                onChange={this.handleChange}
              />
            </div>
            <div className="RowButton">
              <button type="submit" className="Button">Ajouter</button>
            </div>
          </form>
        </div>

        <div className="Divider" />

        <div>
          <div className="Row">
            <Modal id="modalAlerte" show={show} onHide={this.handleClose}>
              <Modal.Header closeButton />
              <Modal.Body id="modalBody">
                <div className="Row">
                  <h4>
                    La vidéo
                    {titre}
                     a été ajoutée avec succès !
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
