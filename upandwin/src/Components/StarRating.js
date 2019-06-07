import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RatingStar extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
      name: '',
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating, name } = this.state;
    return (
      <div>
        <h2>
          Rating from state:
          {rating}
        </h2>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick}
        />
      </div>
    );
  }
}

export default RatingStar;
