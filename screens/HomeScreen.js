import React from 'react'
import { View, FlatList } from 'react-native'

import VideoItem from '../components/VideoItem'

const data = [
  {
    id: 'data1',
    title: 'OnePlus 8 Review: Better than S20 Ultra ?',
    channel: 'MKB720p',
    avatar:
      'https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317_960_720.png',
    views: '930k',
    time: '1 day ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2016/05/07/05/13/china-1377067_960_720.jpg',
  },
  {
    id: 'data2',
    title: 'Where Do I Work | My Coding Setup',
    channel: 'Coder Queen',
    avatar:
      'https://cdn.pixabay.com/photo/2015/12/22/20/42/face-1104763_960_720.jpg',
    views: '930k',
    time: '1 day ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg',
  },
  {
    id: 'data3',
    title: 'Garbage or Treasure: Worth 20k $',
    channel: 'Hasdeli',
    avatar:
      'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg',
    views: '930k',
    time: '1 day ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2012/12/19/18/12/scrapyard-70908_960_720.jpg',
  },
  {
    id: 'data4',
    title: 'Gelena Somez - Feel Me (Live from the Kathmandu)',
    channel: 'Gelena Somez',
    avatar:
      'https://cdn.pixabay.com/photo/2016/01/14/06/09/guitar-1139397_960_720.jpg',
    views: '930k',
    time: '1 week ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_960_720.jpg',
  },
  {
    id: 'data5',
    title: 'Photoshop Manipulation Tutorial',
    channel: 'Pro Editor',
    avatar:
      'https://cdn.pixabay.com/photo/2017/08/06/09/03/cameraman-2590491_960_720.jpg',
    views: '930k',
    time: '1 week ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2017/07/15/19/42/manipulation-smartphone-2507499_960_720.jpg',
  },
]

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoItem item={item} />}
      />
    </View>
  )
}

export default HomeScreen
