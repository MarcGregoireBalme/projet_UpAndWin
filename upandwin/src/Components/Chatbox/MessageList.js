/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';

class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      ul: {
        listStyle: 'none',
        height: '80vw',
        overflow: 'scroll',
      },
      li: {
        marginTop: 13,
        marginBottom: 13,
      },
      senderUsername: {
        fontWeight: 'bold',
        color: '#eb3a0f',
      },
      message: { fontSize: 15 },
    };
    const { style } = this.props;
    return (
      <div
        style={{
          ...style,
          ...styles.container,
        }}
      >
        <ul style={styles.ul}>
          {this.props.messages.map((message, index) => (
            <li key={index.id} style={styles.li}>
              <div>
                <span style={styles.senderUsername}>
                  {' '}
                  {message.senderId}
                </span>
                {' '}
              </div>
              <p style={styles.message}>{message.text}</p>
            </li>
          ))
          }
        </ul>
      </div>
    );
  }
}

export default MessagesList;
