import React, { Component } from 'react';
import './LoLFilter.css';

class LoLFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      TopLaneCheckbox: false,
      MidLaneCheckbox: false,
      BotLaneCheckbox: false,
      JungleCheckbox: false,
      SupportCheckbox: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('Filter-nav').style.top = '84px';
    } else {
      document.getElementById('Filter-nav').style.top = '0px';
    }
    this.setState({
      prevScrollpos: currentScrollPos,
    });
  }

  handleCheck = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      TopLaneCheckbox, MidLaneCheckbox, BotLaneCheckbox, JungleCheckbox, SupportCheckbox,
    } = this.state;
    return (
      <div id="Filter-nav">
        <div className="Top-nav-left">
          <div className="Filter-logo" />
        </div>
        <div>
          TopLane &nbsp;&nbsp;
          <input
            name="TopLaneCheckbox"
            type="checkbox"
            checked={TopLaneCheckbox}
            onChange={this.handleCheck}
          />
          <br />
          MidLane &nbsp;&nbsp;
          <input
            name="MidLaneCheckbox"
            type="checkbox"
            checked={MidLaneCheckbox}
            onChange={this.handleCheck}
          />
          <br />
          BotLane &nbsp;&nbsp;
          <input
            name="BotLaneCheckbox"
            type="checkbox"
            checked={BotLaneCheckbox}
            onChange={this.handleCheck}
          />
          <br />
          Jungle &nbsp;&nbsp;
          <input
            name="JungleCheckbox"
            type="checkbox"
            checked={JungleCheckbox}
            onChange={this.handleCheck}
          />
          <br />
          Support &nbsp;&nbsp;
          <input
            name="SupportCheckbox"
            type="checkbox"
            checked={SupportCheckbox}
            onChange={this.handleCheck}
          />
          <br />
        </div>
        <div className="Top-nav-right">
          <div className="Filter-button" />
        </div>
      </div>
    );
  }
}

export default LoLFilter;
