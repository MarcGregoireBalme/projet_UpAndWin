import React, { Component } from 'react';

class AddToFav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    console.log('1234');
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
