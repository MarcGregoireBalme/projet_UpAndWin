import React, { Component } from 'react';
import axios from 'axios';

class AddToFav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = () => {
    const { vId } = this.props;
    const userId = sessionStorage.getItem('user_id');
    axios.put(`http://localhost:3005/addfav/${userId}`, {
      video_id: vId,
    });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.handleClick()}>Favoris</button>
      </div>
    );
  }
}

export default AddToFav;
