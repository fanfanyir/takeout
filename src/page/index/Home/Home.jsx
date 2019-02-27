import React from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header';
import Category from './Category/Category';

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
      </div>
    )
  }
}

export default connect()(Home);