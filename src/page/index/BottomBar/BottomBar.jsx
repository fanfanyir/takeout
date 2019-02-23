import React from 'react';

import { connect } from 'react-redux';

/**
 * @constructor <BottomBar>
 * @description 首页底部 tab 栏
 */

 class BottomBar extends React.Component {
   constructor(props) {
     super(props)
   }
   renderItems() {
     let tabs = ['首页', '订单', '我的'];

     tabs.map((item, index) => {
       return (
         <div key = {index} className="btn-item">
           <div className="tab-icon"></div>
           <div className="btn-name"></div>
         </div>
       )
     })
   }

   render() {
     <div className="bottom-bar">
        {this.renderItems()}
     </div>
   }
 }