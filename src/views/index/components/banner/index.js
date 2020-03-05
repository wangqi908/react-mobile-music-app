import React, { Component } from "react";
import { connect } from "react-redux";
import { getBannerAction } from "@/store/actions";
import { Carousel } from 'antd-mobile';
import './style.less';

class Banner extends Component {
  state = {
    imgHeight: 176
  }

  componentDidMount() {
    const { list } = this.props
    if (list.length === 0) this.props.getBannerAction()
  }

  render() {
    const { list } = this.props

    return (
      <div className='banner-box'>
        {
          list.length ?
          <Carousel
            autoplay
            infinite
            autoplayInterval={1000}
          >
            {list.map(item => (
              <div
                key={item.targetId}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={item.imageUrl}
                  style={{ width: '100%', verticalAlign: 'top' }}
                  alt="图片"
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </div>
            ))}
          </Carousel>
           :
          null
        }

      </div>
    );
  }
}

const mapState = state => {
  return {
    list: state.home.bannerList
  };
};

export default connect(mapState, { getBannerAction })(Banner);
