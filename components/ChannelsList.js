import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import ChannelItem from './ChannelItem'

const channels = [
  {
    id: 'ch1',
    name: 'Dove Lee',
    image: 'https://randomuser.me/api/portraits/men/37.jpg',
  },
  {
    id: 'ch2',
    name: 'MrFantastic',
    image: 'https://randomuser.me/api/portraits/men/28.jpg',
  },
  {
    id: 'ch3',
    name: 'Chap Tech',
    image:
      'https://cdn.pixabay.com/photo/2018/06/07/16/49/vr-3460451_960_720.jpg',
  },
  {
    id: 'ch4',
    name: 'Mark It',
    image: 'https://randomuser.me/api/portraits/men/30.jpg',
  },
  {
    id: 'ch5',
    name: 'Indie Devlogs',
    image: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: 'ch6',
    name: 'Graphics',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
]

const ChannelLists = () => {
  return (
    <View style={styles.channels}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={channels}
        renderItem={({ item }) => (
          <ChannelItem name={item.name} image={item.image} />
        )}
      />
      <TouchableOpacity>
        <Text style={styles.allText}>ALL</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChannelLists

const styles = StyleSheet.create({
  channels: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  allText: {
    paddingHorizontal: 20,
    fontFamily: 'roboto-bold',
    textAlign: 'center',
    color: 'blue',
  },
})
