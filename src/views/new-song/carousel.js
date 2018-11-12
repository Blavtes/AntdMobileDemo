import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
export default class CustomeCarousel extends Component {
  static defaultProps = {
    banner: []
  }
  render() {
    
    {this.props.banner.map(val => (
      console.log(" ### val.id " + val.id + " val.imgurl " + val.imgurl)
      ));
    }
    return (
      <Carousel
        autoplay={false}
        infinite
      >
        {this.props.banner.map(val => (
          <a
            key={val.id}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: 'auto'}}
          >
            <img
              src={val.imgurl}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
    )
  }
}
