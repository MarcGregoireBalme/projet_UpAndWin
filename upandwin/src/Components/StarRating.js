import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RatingStar extends React.Component {
  constructor(props) {
    super(props);
    const { moyenne } = this.props;
    this.state = {
      rating: moyenne,
    };
    this.onStarClick = this.onStarClick.bind(this);
    this.onStarHover = this.onStarHover.bind(this);
    // this.onStarHoverOut = this.onStarHoverOut.bind(this);
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  onStarHover(nextValue) {
    this.setState({ rating: nextValue });
  }


  //  onStarHoverOut() {
  //    this.setState({ rating: 1 });
  //  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarHover={this.onStarHover}
          // onStarHoverOut={this.onStarHoverOut}
          onStarClick={this.onStarClick}
        />
      </div>
    );
  }
}

export default RatingStar;
