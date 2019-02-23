import React from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../actions/tabAction.js';

import BottomBar from '../BottomBar/BottomBar.jsx';
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let num = this.props.num;
    return (
      <div>
        <BottomBar />
      </div>
    )
  }
}

export default connect(
  state => ({
  })
)(Main);