/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';

class WhosOnlineList extends Component {
  renderUsers() {
    return (
      <div className="WinWhosOnlineList">
        {this.props.users.map((user, index) => {
          if (user.id === this.props.currentUser.id) {
            return (
              <div>
                <div className="WinProfil" />
                <WhosOnlineListItem key={index.id} presenceState="online">
                  {user.name}
                  {' '}
                  (You)
                </WhosOnlineListItem>
              </div>
            );
          }
          return (
            <div>
              <div className="WinProfil" />
              <WhosOnlineListItem key={index.id} presenceState={user.presence.state}>
                {user.name}
              </WhosOnlineListItem>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    if (this.props.users) {
      return this.renderUsers();
    }
    return <p>Loading...</p>;
  }
}

class WhosOnlineListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      li: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 2,
        paddingBottom: 2,
      },
      div: {
        borderRadius: '50%',
        width: 11,
        height: 11,
        marginRight: 10,
      },
    };
    return (
      <div style={styles.li}>
        <div
          style={{
            ...styles.div,
            backgroundColor:
              this.props.presenceState === 'online' ? '#539eff' : '#414756',
          }}
        />
        {this.props.children}
      </div>
    );
  }
}

export default WhosOnlineList;
