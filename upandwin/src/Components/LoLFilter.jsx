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
      ShowFilters: false,
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
  };

  handleCheck = (event) => {
    const { dispatch } = this.props;
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;
    this.setState(
      {
        [name]: value,
      },
      () => {
        dispatch({
          type: 'HANDLE_CHECK',
          lolFilter: this.state,
        });
      },
    );
  };

  showFilters = () => {
    const { ShowFilters } = this.state;
    this.setState({
      ShowFilters: !ShowFilters,
    });
  };

  render() {
    const { videos } = this.props;
    const { ShowFilters } = this.state;
    const filters = [
      'ChoisirLane',
      'BotLane',
      'Jungle',
      'MidLane',
      'Support',
      'TopLane',
    ];
    return (
      <div id="Filter-nav">
        <button
          type="button"
          className={ShowFilters ? 'Filter-button-off' : 'Filter-button-on'}
          onClick={this.showFilters}
        />
        {ShowFilters && (
          <div className="Filter-nav-list-container">
            <div className="Filter-nav-list">
              <h2>Filtrer par</h2>
              {filters.map(filter => (
                <div className="Filter-nav-row" key={filter}>
                  <div>
                    {filter}
                    <span className="Orange">
                      &nbsp;(
                      {
                        videos.filter(video => video.lane.includes(filter))
                          .length
                      }
                      ) &nbsp;
                    </span>
                  </div>
                  <label htmlFor={filter} className="switch">
                    <input
                      id={filter}
                      type="checkbox"
                      onChange={this.handleCheck}
                      // eslint-disable-next-line react/destructuring-assignment
                      checked={this.state[filter]}
                    />
                    <span className="slider round" />
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lolFilter: state.lolFilter,
});

const LoLFilter = connect(mapStateToProps)(LoLFilterComponent);

export default LoLFilter;
