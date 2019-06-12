import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RatingStar extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
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
