import React from 'react';
import './ListItem.scss';
import { connect } from 'react-redux';
class ListItem extends React.Component {
  constructor(props){
    super(props);
  }

  /**
   * 渲染具体菜品
   * @param {*} data 
   */
  renderProduct() {

  }

  /**
   * 评价按钮
   * @param {*} data 
   */
  renderComment() {

  }

  render() {
    return (
      <div className="order-item">
        <div className="order-item-inner">
          <img className="item-img" src=""/>
          <div className="item-right">
            <div className="item-top">
              <p className="order-name"></p>
              <div className="arrow">xx</div>
              <div className="order-state"></div>
            </div>
            <div className="item-bottom">
              {this.renderProduct()}
            </div>
          </div>
        </div>
        {this.renderComment()}
      </div>
    )
  }
}

export default connect()(ListItem);