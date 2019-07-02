import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';
import SearchBar from '../Components/SearchBar';

const Search = () => (

  <div>
    <div>
      <Topnav />
    </div>
    <div className="searchbar">
      <SearchBar />
    </div>
    <BottomNav />
  </div>
);

export default Search;
