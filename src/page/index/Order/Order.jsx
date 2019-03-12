import React from 'react';
import './Order.scss';

import { connect } from 'react-redux';
import { getOrderData } from '../actions/orderAction';

import ScrollView from 'component/ScrollView/ScrollView.jsx';
import ListItem from './ListItem/ListItem.jsx';
/**
 * @constructor <Order />
 * @description 订单 tab 代码
 */

class Order extends React.Component {

  constructor(props){
    super(props);
    
    // 标记分页
    this.page = 0;

    // 标识页面是否还可以滚动加载
    this.state = {
      isend: false
    };

    this.fetchData(this.page);   // 同步请求的话不要写在这里，会阻塞 render， 异步的话可以写在这儿，提前请求数据
  }

  // componentDidMount(){
  //   this.fetchData();    执行时期在 render() 函数执行之后，迟于 constructor
  // }

  fetchData(page){
    this.props.dispatch(getOrderData(page));
  }

  loadPage(){
    this.page++;

    // 最多滚动3页3次
    if (this.page > 3) {
        this.setState({
            isend: true
        });
    } else {
        this.fetchData(this.page);
      }
  }

  renderList() {
    let list = this.props.list;

    return list.map((item, index) => {
      return <ListItem itemData={item} key={index}></ListItem>
    })
  }

  render() {
    return (
      <div className="order">
        <div className="header">订单</div>
        <ScrollView loadCallback={this.loadPage.bind(this)} isend={this.state.isend}>
          <div className="order-list">{this.renderList()}</div>
        </ScrollView>
      </div>
    )
  }
}

export default connect(
  state => ({
    list: state.orderReducer.list
  })
)(Order);