import React, { Component } from 'react';
import './SearchBar.css';
import axios from 'axios';
import Video from './Video';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtext: '',
      videos: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3005/videos')
      .then((res) => {
        this.setState({ videos: res.data });
      });
  }

  handleChange(event) {
    this.setState({ searchtext: event.target.value });
  }

  render() {
    const { videos, searchtext } = this.state;

    return (
      <div>
        <div>
          <div className="WinInputContainer">
            <input
              onChange={e => this.handleChange(e)}
              className="WinInput"
              placeholder="Rechercher une vidéo"
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <div className="container-fluid">
            <div className="row videoDisplay">
              {videos.filter(
                test => test.titre.toLowerCase().indexOf(searchtext.toLowerCase()) !== -1,
              )
                .map(video => (
                  <div key={video.titre} className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                    <Video video={video} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
