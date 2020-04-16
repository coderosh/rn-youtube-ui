import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import InboxItem from '../components/InboxItem'

const data = [
  {
    id: 'data1-',
    title: 'Macbook Air review | Better choice ? ',
    channel: 'Dove Lee',
    avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
    views: '1M',
    time: '2 days ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373_960_720.jpg',
  },
  {
    id: 'data2-',
    title: 'Painting Tutorial | Only Begineers',
    channel: 'Mr Fantastic',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    views: '1.2M',
    time: '1 day ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2013/03/23/23/10/brush-96240_960_720.jpg',
  },
  {
    id: 'data3-',
    title: 'The future of AI | Oopisa',
    channel: 'Chap Tech',
    avatar:
      'https://cdn.pixabay.com/photo/2018/06/07/16/49/vr-3460451_960_720.jpg',
    views: '930k',
    time: '1 day ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2017/12/10/17/00/robot-3010309_960_720.jpg',
  },
  {
    id: 'data4-',
    title: 'Who was the guy behind the mask ?',
    channel: 'Mark It',
    avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
    views: '5.9M',
    time: '1 week ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2017/09/10/18/25/question-2736480_960_720.jpg',
  },
  {
    id: 'data1',
    title: 'OnePlus 8 Review: Better than S20 Ultra ?',
    channel: 'MKB720p',
    avatar:
      'https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317_960_720.png',
    views: '350k',
    time: '3 days ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2016/05/07/05/13/china-1377067_960_720.jpg',
  },
  {
    id: 'data2',
    title: 'Where Do I Work | My Coding Setup',
    channel: 'Coder Queen',
    avatar:
      'https://cdn.pixabay.com/photo/2015/12/22/20/42/face-1104763_960_720.jpg',
    views: '1.2M',
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
    views: '5.9M',
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
    views: '600k',
    time: '1 week ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2017/07/15/19/42/manipulation-smartphone-2507499_960_720.jpg',
  },
]

const InboxScreen = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <InboxItem item={item} />}
      />
    </View>
  )
}

export default InboxScreen

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    padding: 4,
  },
})
