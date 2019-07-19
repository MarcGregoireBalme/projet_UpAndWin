/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import Video from './Video';

class DisplayVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: 10,
    };
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    const { range } = this.state;
    this.setState({
      range: range + 5,
    });
  }

  loopVideos() {
    const { range } = this.state;
    const { videos } = this.props;
    for (let i = 0; i < range; i++) {
      return (
        videos.filter((video, id) => id < range).map(video => (
          <div key={video._id} className="col-xl-3 col-lg-4 col-sm-6 col-xs-12" style={{ minWidth: '320px' }}>
            <Video video={video} />
          </div>
        ))
      );
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row videoDisplay">
          {this.loopVideos()}
          <button type="button" onClick={() => this.showMore()} className="Showmorebutton">Voir plus</button>
        </div>
      </div>
    );
  }
}

export default DisplayVideos;
