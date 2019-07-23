import React, { Component } from 'react';
import axios from 'axios';
import Topnav from '../Components/Topnav';
import SearchBar from '../Components/SearchBar';
import Video from '../Components/Video';
import BottomNav from '../Components/BottomNav';

class Search extends Component {
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
        <Topnav />
        <SearchBar handleChange={this.handleChange} className="searchbar" />
        <div className="Page">
          <div className="container-fluid">
            <div className="row videoDisplay">
              {videos.filter(
                test => test.titre.toLowerCase().indexOf(searchtext.toLowerCase()) !== -1,
              )
                .map(video => (
                  <div key={video.titre}>
                    <Video video={video} />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Search;
