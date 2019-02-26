import React from 'react';
import './Header.scss';

import SearchBar from '../SearchBar/SearchBar.jsx';

/**
 * @constructor <Header />
 * @description 首顶部 banner
 */
class Header extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="home-header">
        <SearchBar />
        <img className="banner-img" src="//ms0.meituan.net/touch/img/download_banner.png"/>
      </div>
    )
  }
}

export default Header;