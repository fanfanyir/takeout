import React from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header';
import Category from './Category/Category';

import ContentList from './ContentList/ContentList.jsx';

/**
 * @constructor <Home />
 * @description 首页 tab 代码
 */

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Category />
        <ContentList />
      </div>
    )
  }
}

export default connect()(Home);