import React from 'react';
import ReactDom from 'react-dom';

import { connect } from 'react-redux';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>main</div>
    )
  }
}

export default connect(
  state => ({
    num: state.tabReducer.num
  })
)(Main);