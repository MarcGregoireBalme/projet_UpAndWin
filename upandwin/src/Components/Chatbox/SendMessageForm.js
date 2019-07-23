/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { Send } from '@material-ui/icons';

class SendMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({ text: e.target.value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render() {
    const styles = {
      form: {
        display: 'flex',
      },
      input: {
        color: 'inherit',
        background: 'none',
        outline: 'none',
        border: 'none',
        flex: 1,
        fontSize: 16,
      },
    };
    return (
      <div>
        <div className="WinSendMessageForm">
          <form onSubmit={this.onSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onChange}
              value={this.state.text}
              style={styles.input}
            />
            <button type="button" onClick={this.onSubmit} className="SendButton">
              <Send />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SendMessageForm;
