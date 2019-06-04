import React from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';

const DisplayVideo = () => (
  <div className="container-fluid">
    <h1>Guide du Noob</h1>
    <div className="row">
      <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
        <h3>Les bases</h3>
        <iframe
          title="Les bases"
          width="100%"
          height="250px"
          src="https://www.youtube.com/embed/WD9qgO0jo-M?rel=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
        <h3>Choisir son champion</h3>
        <iframe
          title="Choisir son champion"
          width="100%"
          height="250px"
          src="https://www.youtube.com/embed/-PUTqQN2C4M"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
        <h3>Objets et statistiques</h3>
        <iframe
          title="Objets et statistiques"
          width="100%"
          height="250px"
          src="https://www.youtube.com/embed/r2khGGQYvsI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
        <h3>Les Runes</h3>
        <iframe
          title="Les Runes"
          width="100%"
          height="250px"
          src="https://www.youtube.com/embed/1IDhBD7bw0M"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
);

export default DisplayVideo;
