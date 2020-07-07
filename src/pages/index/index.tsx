import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button className='.happyBtn' onClick={() => {Taro.navigateTo({url: '/pages/homePage/index'})}}>to home</Button>
      </View>
    )
  }
}
