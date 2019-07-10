/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import './TypingIndicator.css';

class TypingIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.usersWhoAreTyping.length > 0) {
      return (
        <div className="Typing">
          {`${this.props.usersWhoAreTyping
            .slice(0, 2)
            .join(' and ')} is typing`}
        </div>
      );
    }
    return <div />;
  }
}

export default TypingIndicator;
