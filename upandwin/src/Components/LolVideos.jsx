import React, { Component } from 'react';
import { connect } from 'react-redux';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import Video from './Video';

class LolVideosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: 5,
    };
    this.showMore = this.showMore.bind(this);
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

  showMore() {
    const { range } = this.state;
    this.setState({
      range: range + 5,
    });
  }

  render() {
    const { videos } = this.props;
    const { range } = this.state;
    console.log(this.filteredVideos(videos));
    return (
      <div className="container-fluid">
        <div className="row videoDisplay">
          {this.filteredVideos(videos).filter((video, id) => id < range)
            .map(video => (
              <div key={video._id} className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                <Video video={video} />
              </div>
            ))}
          <button type="button" onClick={() => this.showMore()} className="Showmorebutton">Voir plus</button>
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
