import React, { Component } from 'react';
import { connect } from 'react-redux';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import RatingStar from './StarRating';

class LolVideosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filteredVideos = (videos) => {
    const { lolFilter } = this.props;
    let filtered = [];
    Object.entries(lolFilter).forEach(([key, value]) => {
      if (value === true) {
        filtered = [...filtered, ...videos.filter(video => video.lane.includes(key))];
      }
    });
    if (filtered.length === 0) {
      return [...videos.filter(video => video)];
    }
    return filtered;
  };

  render() {
    const { videos } = this.props;
    console.log(this.filteredVideos(videos));
    return (
      <div className="container-fluid">
        <div className="row videoDisplay">
          {this.filteredVideos(videos)
            .map(video => (
              <div key={video._id} className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                <h3>{video.titre}</h3>
                <div>
                  <RatingStar />
                  <span className="nbVote">
                    votes :
                    {video.notes.length - 1}
                  </span>
                </div>
                <iframe
                  title={video.titre}
                  width="100%"
                  height="250px"
                  src={video.lien}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  lolFilter: state.lolFilter,
});

const LolVideos = connect(mapStateToProps)(LolVideosComponent);

export default LolVideos;
