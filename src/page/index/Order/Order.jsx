import React from 'react';
import './Order.scss';

import { connect } from 'react-redux';
import { getOrderData } from '../actions/orderAction';
import ListItem from './ListItem/ListItem.jsx';
/**
 * @constructor <Order />
 * @description 订单 tab 代码
 */

class Order extends React.Component {

  constructor(props){
    super(props);
    this.page = 0;
    this.fetchData(this.page);   // 同步请求的话不要写在这里，会阻塞 render， 异步的话可以写在这儿，提前请求数据
  }

  // componentDidMount(){
  //   this.fetchData();    执行时期在 render() 函数执行之后，迟于 constructor
  // }

  fetchData(page){
    this.props.dispatch(getOrderData(page));
  }

  renderList() {
    let list = this.props.list;

    return list.map((item, index) => {
      return <ListItem itemData={item} key={index}/>
    })
  }

  render() {
    return (
      <div className="order">
        <div className="header">订单</div>
        <div className="order-list">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    list: state.orderReducer.list
  })
)(Order);