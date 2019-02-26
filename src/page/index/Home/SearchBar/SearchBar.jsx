import React from 'react';
import './SearchBar.scss';

/**
 * @constructor <SearchBar />
 * @description 顶部 search
 */
class SearchBar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="home-search-bar">
        <div className="bar-location">
          <div className="location-icon"></div>
          <div className="location-text">郑州市</div>
        </div>
        <div className="search-btn">
          <p className="place-holder">鸡翅</p>
        </div>
      </div>
    )
  }
}

export default SearchBar;