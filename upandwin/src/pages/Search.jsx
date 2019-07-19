import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';
import SearchBar from '../Components/SearchBar';

const Search = () => (

  <div>
    <Topnav />
    <div className="Page">
      <SearchBar className="searchbar" />
    </div>
    <BottomNav />
  </div>
);

export default Search;
