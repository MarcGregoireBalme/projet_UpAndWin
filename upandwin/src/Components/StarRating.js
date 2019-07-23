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
      videoNotees: [],
    };
    this.onStarHover = this.onStarHover.bind(this);
  }

  onStarHover(nextValue) {
    this.setState({ rating: nextValue });
  }

  handleSubmit = () => {
    const { rating, vId, videoNotees } = this.state;
    axios
      .put(`http://localhost:3005/videosnotes/${vId}`, {
        note: rating,
      });
    videoNotees.push(vId);
  };

  onClick = (nextValue) => {
    const { videoNotees, vId } = this.state;
    if (!videoNotees.includes(vId)) {
      this.handleSubmit();
      this.setState({ rating: nextValue });
    }
  }

  render() {
    const { rating } = this.state;
    const { video, vue } = this.props;
    return (
      <div className="VideoInfos">
        <div className="VideoInfos">
          <StarRatingComponent
            className="Stars"
            name="rate1"
            starCount={5}
            value={rating}
            onStarHover={this.onStarHover}
            onStarClick={this.onClick}
          />
          <div className="Info">
            (
            {video.notes.length}
            )
          </div>
        </div>
        <div className="Info">
          |
        </div>
        {
          vue > 1 ? (
            <div className="Info">
              {vue}
              {' '}
              vues
            </div>
          ) : (
            <div className="Info">
              {vue}
              {' '}
                vue
            </div>
          )
        }
        <div className="Info">
          |
        </div>
      </div>
    );
  }
}

export default StarRating;
