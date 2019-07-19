import React, { Component } from 'react';
import { connect } from 'react-redux';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import Video from './Video';

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
                <Video video={video} />
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
