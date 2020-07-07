import Taro from "@tarojs/taro";
import React, { Component, useState, useEffect } from "react";
import { View, Button, Text, Swiper, SwiperItem } from "@tarojs/components";
import { getBanner } from "../utils/apiStore";

function Home() {
  const [state, setState] = useState({
    banner: []
  });

  useEffect(() => {
    const initBanner = () => {
      const transformBanner = res => {
        if (res.code === 200) {
          setState({ banner: res.banners });
        }
      };
      getBanner().then(res => transformBanner(res));
    };
    initBanner();
  }, []);

  return (
    <view>
      <view className='.title'>happy home</view>
      <Swiper className='test-h' indicatorColor='#999' indicatorActiveColor='#333' vertical circular indicatorDots autoplay={true}>
        {state.banner.map((val:string, i) => {
          <SwiperItem>
            <a key={i} style={{ display: 'inline-block', width: '100%', height: '150px'}}></a>
            <img src={val.imageUrl} alt="" style={{ width: '100%', verticalAlign: 'top',  height: '150px'}} onLoad={() => {window.dispatchEvent(new Event('resize'))}}/>
          </SwiperItem>
        })}
              </Swiper>
      <Button className='.happyBtn' onClick={() => {Taro.navigateTo({ url: "/pages/menuPage/index" })}}>to menu</Button>
    </view>
  );
}

export default Home;
