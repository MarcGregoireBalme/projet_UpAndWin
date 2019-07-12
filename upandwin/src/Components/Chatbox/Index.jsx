/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import WhosOnlineList from './WhosOnlineList';
import './Index.css';

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      currentRoom: {},
      messages: [],
      usersWhoAreTyping: [],
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.sendTypingEvent = this.sendTypingEvent.bind(this);
  }

  componentWillMount() {
    this.setState({
      currentUser: sessionStorage.getItem('alias'),
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
          messageLimit: 10,
          hooks: {
            onMessage: (message) => {
              this.setState({
                messages: [...this.state.messages, message],
              });
            },
          },
          onPresenceChange: () => this.forceUpdate(),
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

  sendTypingEvent() {
    this.state.currentUser
      .isTypingIn({ roomId: this.state.currentRoom.id })
      .catch(error => console.error('error', error));
  }

  render() {
    const { userAlias } = this.props;
    const { messages } = this.state;
    console.log({ messages });
    return (
      <div>
        <WhosOnlineList
          currentUser={this.state.currentUser}
          users={this.state.currentRoom.users}
        />
        <div>
          <div>
            <MessageList
              messages={messages}
            />
          </div>
          <div>
            <SendMessageForm onSubmit={this.sendMessage} onChange={this.sendTypingEvent} />
          </div>
        </div>
      </div>
    );
  }
}

function mstp({ users }) {
  return { userAlias: users.alias };
}

export default connect(mstp)(ChatBox);
