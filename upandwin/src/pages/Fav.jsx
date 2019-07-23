import React, { Component } from 'react';
import axios from 'axios';
import Topnav from '../Components/Topnav';
import DisplayVideo from '../Components/DisplayVideo';
import BottomNav from '../Components/BottomNav';
import Bad from '../Images/bad.png';

class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentWillMount() {
    const userId = sessionStorage.getItem('user_id');
    return axios.post('http://localhost:3005/givefavs', {
      userId,
    }).then((res) => {
      this.setState({ videos: res.data });
    });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <Topnav />
        <div className="Page">
          <h1>Vidéos favorites</h1>
          {videos.length < 1 ? (
            <div>
              <div className="ImageContainer">
                <img src={Bad} alt="" />
              </div>
              <div className="Add-title">
                Vous n’avez aucune vidéo favorite...
              </div>
            </div>
          ) : (
            <DisplayVideo videos={videos} />
          )
          }
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Fav;
