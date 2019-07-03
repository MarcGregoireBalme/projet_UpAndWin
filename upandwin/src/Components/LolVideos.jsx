import React, { Component } from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import RatingStar from './StarRating';

class LolVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filteredVideos = (videos) => {
    const lolFilters = this.props;
    // for (let i = 0; i < Object.keys(filters).length; i += 1) {
    //   if (filters[Object.keys(filters)[i]] === true) {
    //      v.filter(video => video.lane.includes(String(Object.keys(filters)[i])));
    //   }
    //   // return v;
    // }

    let filtered = [];
    Object.entries(lolFilters).forEach(([key, value]) => {
      console.log('loop', key, value);
      if (value === true) {
        filtered = [...filtered, ...videos.filter(video => video.lane.includes(key))];
      }
    });
    return filtered;

    // let output = [];
    // Object.entries(filters).forEach((key, value) => {
    //   if (value) {
    //     output = [...output, v.filter(video => video.lane.includes(key))];
    //   }
    // });

    // return output;
  };

  render() {
    const { videos } = this.props;
    console.log(videos, this.filteredVideos(videos));
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

export default LolVideos;
