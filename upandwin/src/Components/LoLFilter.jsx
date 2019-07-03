import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoLFilter.css';

class LoLFilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      ChoisirLane: false,
      TopLane: false,
      MidLane: false,
      BotLane: false,
      Jungle: false,
      Support: false,
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
    const { dispatch } = this.props;
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    },
    () => {
      dispatch({
        type: 'HANDLE_CHECK',
        lolFilter: this.state,
      });
    });
  }

  render() {
    const { videos } = this.props;
    const filters = ['ChoisirLane', 'BotLane', 'Jungle', 'MidLane', 'Support', 'TopLane'];
    return (
      <div id="Filter-nav">
        <div className="Top-nav-left">
          <div className="Filter-logo" />
        </div>
        <div>

          {filters
            .map(filter => (
              <div key={filter}>
                {filter}
                &nbsp;(
                {(videos.filter(video => video.lane.includes(filter)).length)}
                ) &nbsp;
                <input
                  name={filter}
                  type="checkbox"
                  checked={window[filter]}
                  onChange={this.handleCheck}
                />
                <br />
              </div>
            ))
          }

        </div>
        <div className="Top-nav-right">
          <div className="Filter-button" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lolFilter: state.lolFilter,
});

const LoLFilter = connect(mapStateToProps)(LoLFilterComponent);

export default LoLFilter;
