import React, { Component } from 'react';
import axios from 'axios';
import { Favorite } from '@material-ui/icons';
import './AddToFav.css';

class AddToFav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testbdd: true,
    };
  }

  componentWillMount = () => {
    const userId = sessionStorage.getItem('user_id');
    axios.get(`http://localhost:3005/addfavas/${userId}`).then((res) => {
      this.testBol(res.data);
      // console.log(videos);
    });
  };

  testBol = (data) => {
    const { vId } = this.props;
    if (data.includes(vId)) {
      this.setState({ testbdd: true });
    } else {
      this.setState({ testbdd: false });
    }
  };

  handleClick = () => {
    const { vId } = this.props;
    const { testbdd } = this.state;
    const userId = sessionStorage.getItem('user_id');
    axios.put(`http://localhost:3005/addfav/${userId}`, {
      video_id: vId,
    });
    this.setState({ testbdd: !testbdd });
  };

  deleteFav = () => {
    const { vId } = this.props;
    const { testbdd } = this.state;
    const userId = sessionStorage.getItem('user_id');
    axios.put(`http://localhost:3005/addfave/${userId}`, {
      video_id: vId,
    });
    this.setState({ testbdd: !testbdd });
  };

  modifFav = () => {
    const { testbdd } = this.state;
    if (testbdd) {
      this.deleteFav();
    } else {
      this.handleClick();
    }
  };

  render() {
    const { testbdd } = this.state;
    return (
      <div className="fav">
        <Favorite
          className={testbdd ? 'FavOn' : 'FavOff'}
          onClick={() => this.modifFav()}
        />
      </div>
    );
  }
}

export default AddToFav;
