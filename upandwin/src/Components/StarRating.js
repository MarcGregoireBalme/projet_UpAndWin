import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './StarRating.css';
import axios from 'axios';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    const { moyenne, videoId } = this.props;
    this.state = {
      rating: Math.round(moyenne),
      vId: videoId,
    };
    this.onStarClick = this.onStarClick.bind(this);
    this.onStarHover = this.onStarHover.bind(this);
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  onStarHover(nextValue) {
    this.setState({ rating: nextValue });
  }

  handleSubmit = () => {
    const {
      rating,
    } = this.state;
    const { vId } = this.state;
    axios
      // eslint-disable-next-line react/destructuring-assignment
      .put(`http://localhost:3005/videosnotes/${vId}`, {
        note: rating,
      }).then(res => console.log(res));
  };

  onClick = () => {
    this.onStarClick();
    this.handleSubmit();
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <StarRatingComponent
          className="Stars"
          name="rate1"
          starCount={5}
          value={rating}
          onStarHover={this.onStarHover}
          onStarClick={this.onClick}
        />
      </div>
    );
  }
}

export default StarRating;
