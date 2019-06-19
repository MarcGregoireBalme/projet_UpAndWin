import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './StarRating.css';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    this.state = {
      rating: 1, // this.props.video,

      // Math.floor(video.notes.reduce(reducer) / (video.notes.length - 1)),
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
    // console.log(this.props.video)

    return (
      <div>
        <StarRatingComponent
          className="Stars"
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

export default StarRating;
