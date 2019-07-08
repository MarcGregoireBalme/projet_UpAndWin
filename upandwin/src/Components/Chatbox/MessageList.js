import React, { Component } from 'react';

class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      container: {
        overflowY: 'scroll',
        flex: 1,
      },
      ul: {
        listStyle: 'none',
      },
      li: {
        marginTop: 13,
        marginBottom: 13,
      },
      senderUsername: {
        fontWeight: 'bold',
      },
      message: { fontSize: 15 },
    };
    const { style } = this.props;
    const { messages } = this.props;
    return (
      <div
        style={{
          ...style,
          ...styles.container,
        }}
      >
        <ul style={styles.ul}>
          {messages.map((message, index) => (
            <li key={index.id} style={styles.li}>
              <div>
                <span style={styles.senderUsername}>{message.senderId}</span>
                {' '}
              </div>
              <p style={styles.message}>{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MessagesList;
