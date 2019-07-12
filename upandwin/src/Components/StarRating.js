import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './StarRating.css';
import axios from 'axios';

const reducer = (accumulator, currentValue) => accumulator + currentValue;

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    const { video } = this.props;
    const moyenne = video.notes[0]
      ? Math.round(video.notes.reduce(reducer) / (video.notes.length))
      : 3;
    this.state = {
      rating: moyenne,
      // eslint-disable-next-line no-underscore-dangle
      vId: video._id,
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
      .put(`/videosnotes/${vId}`, {
        note: rating,
      });
  };

  onClick = () => {
    this.onStarClick();
    this.handleSubmit();
  }

  render() {
    const { rating } = this.state;
    const { video, vue } = this.props;
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
        <span style={{ marginBottom: '30px' }}>
          (
          {video.notes.length}
          )
        </span>
        <div>
          {vue}
          {' '}
          Vues
          {' '}
        </div>
      </div>
    );
  }
}

export default StarRating;
