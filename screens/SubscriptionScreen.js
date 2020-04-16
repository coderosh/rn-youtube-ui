import React from 'react'
import { StyleSheet, Text, View, FlatList, Picker } from 'react-native'

import ChannelLists from '../components/ChannelsList'
import VideoItem from '../components/VideoItem'

const data = [
  {
    id: 'data1',
    title: 'Macbook Air review | Better choice ? ',
    channel: 'Dove Lee',
    avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
    views: '1M',
    time: '2 days ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373_960_720.jpg',
  },
  {
    id: 'data2',
    title: 'Painting Tutorial | Only Begineers',
    channel: 'Mr Fantastic',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    views: '1.2M',
    time: '1 day ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2013/03/23/23/10/brush-96240_960_720.jpg',
  },
  {
    id: 'data3',
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
    id: 'data4',
    title: 'Who was the guy behind the mask ?',
    channel: 'Mark It',
    avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
    views: '5.9M',
    time: '1 week ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2017/09/10/18/25/question-2736480_960_720.jpg',
  },
]

const SubscriptionScreen = () => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <VideoItem item={item} />}
        ListHeaderComponent={() => (
          <React.Fragment>
            <ChannelLists />
            <View style={styles.select}>
              <Picker mode='dropdown' style={styles.picker} selectedValue='vap'>
                <Picker.Item label='Videos and posts' name='vap' />
                <Picker.Item label='Videos only' name='vo' />
              </Picker>
            </View>
          </React.Fragment>
        )}
      />
    </View>
  )
}

export default SubscriptionScreen

const styles = StyleSheet.create({
  select: {
    padding: 15,
    backgroundColor: '#fff',
    fontFamily: 'roboto',
  },
  picker: {
    width: 200,
    height: 20,
  },
})
