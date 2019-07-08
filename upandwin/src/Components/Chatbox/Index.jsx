import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './MessageList';

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectedUser: '',
      currentRoom: {},
      messages: [],
    };
  }

  componentWillMount() {
    const { userAlias } = this.props;
    this.setState({
      connectedUser: userAlias,
    });
  }

  componentDidMount() {
    const { connectedUser } = this.state;
    console.log({ connectedUser });
    console.log(JSON.stringify({ connectedUser }));
    // Connect to ChatKit
    const tokenProvider = new Chatkit.TokenProvider({
      url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/6619e0b2-a522-446b-b5a2-010b103f70fc/token',
    });

    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:6619e0b2-a522-446b-b5a2-010b103f70fc',
      userId: connectedUser,
      tokenProvider,
    });
    chatManager
      .connect()
      .then(currentUser => currentUser.subscribeToRoom({
        roomId: '19423199',
        messageLimit: 100,
        hooks: {
          onMessage: (message) => {
            this.setState({
              messages: [...this.state.messages, message],
            });
            console.log('Received message:', message);
          },
        },
      }))
      .then((currentRoom) => {
        this.setState({
          currentRoom,
        });
      })
      .catch((error) => {
        console.error('error:', error);
      });
  }

  render() {
    const { userAlias } = this.props;
    const { connectedUser } = this.state;
    const { messages } = this.state;
    console.log({ connectedUser });
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
          <section>
            <MessageList
              messages={messages}
            />
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
