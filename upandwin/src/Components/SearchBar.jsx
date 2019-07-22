import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
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

  render() {
    const { handleChange } = this.props;
    return (
      <div id="Filter-nav">
        <div className="SearchBarContainer">
          <input
            onChange={e => handleChange(e)}
            className="SearchBar"
            placeholder="Rechercher une vidéo"
            inputProps={{ 'aria-label': 'Search' }}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
