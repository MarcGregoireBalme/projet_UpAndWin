import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtext: '',
    };
  }

  render() {
    const { videos } = this.props;
    console.log(videos);
    return (
      <Paper className="WinRoot">
        <InputBase
          className="WinInput"
          placeholder="Search"
          inputProps={{ 'aria-label': 'Search' }}
        />
        <IconButton className="WinIconButton" aria-label="Search">
          <SearchIcon />
        </IconButton>
        <Divider className="WinDivider" />
      </Paper>
    );
  }
}

export default SearchBar;
