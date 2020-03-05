import React, { Component } from "react";
import { Banner, Personalized } from './components'
import './style.less';

export default class Index extends Component {
  render() {
    return (
      <div className='index'>
        <Banner />
        <div className="title">
          推荐歌单
        </div>
        <Personalized />
      </div>
    );
  }
}
