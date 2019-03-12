import React from 'react';
import './ListItem.scss';
import { connect } from 'react-redux';
class ListItem extends React.Component {
  constructor(props){
    super(props);
  }
  /**
   * 渲染每个菜品的总计
   * @param {*} data 
   */
  renderTotalPrice(data, index) {
    return (
      <div key={index} className="product-item">
        <span>...</span>
        <div className="p-total-count">
          总计{data.product_count}个菜，实付
          <span className="total-price">￥{data.total}</span>
        </div>
      </div>
    )
  }
  /**
   * 渲染具体菜品
   * @param {*} data 
   */
  renderProduct(data) {
    let list = data.product_list;

    // push 一个用来计算总计的{type: more}
    list.push({type: 'more'});

    return list.map((item, index) => {
      if(item.type === 'more') {
        return this.renderTotalPrice(data, index)
      }
      return (
        <div className="product-item" key={index}>
          {item.product_name}
          <div className="p-count">
            x {item.product_count}
          </div>
        </div>
      )
    })
  }

  /**
   * 评价按钮
   * @param {*} data 
   */
  renderComment(data) {
    let evaluation = !data.is_comment;

    if(evaluation){
      return (
        <div className="evaluation clearfix">
          <div className="evaluation-btn">评价</div>
        </div>
      )
    }
    return null;
  }

  render() {
    let data = this.props.itemData;
    return (
      <div className="order-item">
        <div className="order-item-inner">
          <img className="item-img" src={data.poi_pic}/>
          <div className="item-right">
            <div className="item-top">
              <p className="order-name one-line">{data.poi_name}</p>
              <div className="arrow"></div>
              <div className="order-state">{data.status_description}</div>
            </div>
            <div className="item-bottom">
              {this.renderProduct(data)}
            </div>
          </div>
        </div>
        {this.renderComment(data)}
      </div>
    )
  }
}

export default connect()(ListItem);