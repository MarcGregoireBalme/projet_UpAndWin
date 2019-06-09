import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    titre: '',
    auteur: '',
    lien: '',
    duree: '',
    categorie: '',
    jeu: '',
  }

  handleChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      titre, auteur, lien, duree, categorie, jeu,
    } = this.state;

    axios.post('/videos', {
      titre, auteur, lien, duree, categorie, jeu,
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    const {
      titre, auteur, lien, duree, categorie, jeu,
    } = this.state;
    return (
      <div>
        <h3 style={{ textAlign: 'left' }}>Ajouter une vidéo</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            Titre :
            <input type="text" name="titre" value={titre} onChange={this.handleChange} />
          </div>
          <div>
            Auteur :
            <input type="text" name="auteur" value={auteur} onChange={this.handleChange} />
          </div>
          <div>
            Lien (embed) :
            <input type="text" name="lien" value={lien} onChange={this.handleChange} />
          </div>
          <div>
            Durée :
            <input type="text" name="duree" value={duree} onChange={this.handleChange} />
          </div>
          <div>
            Catégorie :
            <input type="text" name="categorie" value={categorie} onChange={this.handleChange} />
          </div>
          <div>
            Jeu  :
            <input type="text" name="jeu" value={jeu} onChange={this.handleChange} />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
