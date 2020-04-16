import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../constants/colors'
const ChannelItem = (props) => {
  return (
    <View style={styles.channel}>
      <Image
        source={{
          uri: props.image,
        }}
        style={styles.image}
      />
      <Text numberOfLines={1} style={styles.name}>
        {props.name}
      </Text>
    </View>
  )
}

export default ChannelItem

const styles = StyleSheet.create({
  channel: {
    overflow: 'hidden',
    height: 80,
    width: 80,
    justifyContent: 'space-between',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 60,
    width: 60,
    height: 60,
  },
  name: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: 'roboto',
  },
})
