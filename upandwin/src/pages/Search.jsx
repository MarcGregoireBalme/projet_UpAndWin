import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import DisplayVideo from '../Components/DisplayVideo';
import 'bootstrap/dist/css/bootstrap.css';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3005/videos')
      .then((res) => {
        this.setState({ videos: res.data });
      });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <div>
          <Topnav />
        </div>
        <div>
          <h1 style={{ paddingTop: '10vh' }}>Search</h1>
          <DisplayVideo videos={videos} />
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Search;
