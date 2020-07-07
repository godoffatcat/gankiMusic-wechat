import Taro from '@tarojs/taro'
import React, { Component,  useState, useEffect  } from 'react'
import { View, Button, Text } from '@tarojs/components'

function Menu() {
  const [state, setState] = useState({
    pic: ''
  })

  return (
    <view>
      <view className='.title'>happy menu</view>
      <Button className='.happyBtn' onClick={() => {Taro.navigateTo({url: '/pages/singlePage/index?id=5'})}}>to single</Button>
    </view>
  )
}

export default Menu
