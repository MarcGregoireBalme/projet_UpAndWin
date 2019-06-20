import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './StarRating.css';
import axios from 'axios';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    const { moyenne } = this.props;
    this.state = {
      rating: Math.round(moyenne),
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

    axios
      .post('/videos/video_id/:notes', {
        rating,
      });
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
          onStarClick={
            this.onClick
          }
        />
      </div>
    );
  }
}

export default StarRating;
