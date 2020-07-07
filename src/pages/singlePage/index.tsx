// import Taro from '@tarojs/taro'
import Taro, { useRouter } from '@tarojs/taro'
import React, { Component,  useState, useEffect  } from 'react'
import { View, Text } from '@tarojs/components'

function SingleCV() {
  const [state, setState] = useState({
    pic: ''
  })

  const router = useRouter()

  useEffect(() => {
    console.log(router.params, 'router is')
  },[])

  return (
    <view>
      <view className='.title'>happy singleCV</view>
    </view>
  )
}

export default SingleCV
