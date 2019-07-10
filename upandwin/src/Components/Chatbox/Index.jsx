/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  chatContainer: {
    display: 'flex',
    flex: 1,
  },
  whosOnlineListContainer: {
    width: '300px',
    flex: 'none',
    padding: 20,
    backgroundColor: '#2c303b',
    color: 'white',
  },
  chatListContainer: {
    padding: 20,
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
  },
};

const DUMMY_DATA = [
  {
    senderId: 'perborgen',
    text: 'Hey, how is it going?',
  },
  {
    senderId: 'janedoe',
    text: 'Great! How about you?',
  },
  {
    senderId: 'perborgen',
    text: 'Good to hear! I am great as well',
  },
];

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      currentRoom: {},
      messages: [],
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentWillMount() {
    const { userAlias } = this.props;
    this.setState({
      currentUser: userAlias,
    });
  }

  componentDidMount() {
    const { currentUser } = this.state;
    console.log({ currentUser });
    console.log(JSON.stringify({ currentUser }));
    // Connect to ChatKit
    const tokenProvider = new Chatkit.TokenProvider({
      url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/6619e0b2-a522-446b-b5a2-010b103f70fc/token',
    });

    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:6619e0b2-a522-446b-b5a2-010b103f70fc',
      userId: currentUser,
      tokenProvider,
    });
    chatManager
      .connect()
      .then((currentUser) => {
        this.setState({ currentUser });
        return currentUser.subscribeToRoom({
          roomId: '19423199',
          messageLimit: 100,
          hooks: {
            onMessage: (message) => {
              this.setState({
                messages: [...this.state.messages, message],
              });
            },
          },
        });
      })
      .then((currentRoom) => {
        this.setState({ currentRoom });
      })
      .catch(error => console.error('error', error));
  }

  sendMessage(text) {
    const { currentUser, currentRoom } = this.state;
    currentUser.sendSimpleMessage({
      text,
      roomId: currentRoom.id,
    });
  }

  render() {
    const { userAlias } = this.props;
    const { messages } = this.state;
    console.log({ messages });
    return (
      <div>
        <div>
          <aside>
            <h4>
              Welcome to the chat
              {' '}
              {userAlias}
              !
            </h4>
          </aside>
          <section style={styles.chatListContainer}>
            <MessageList
              messages={messages}
            />
          </section>
          <section>
            <SendMessageForm onSubmit={this.sendMessage} />
          </section>
        </div>
      </div>
    );
  }
}

function mstp({ users }) {
  return { userAlias: users.alias };
}

export default connect(mstp)(ChatBox);
