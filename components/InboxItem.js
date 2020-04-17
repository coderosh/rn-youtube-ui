import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../constants/colors'

const InboxItem = (props) => {
  return (
    <TouchableNativeFeedback>
      <View style={{ padding: 10 }}>
        <View style={styles.item}>
          <Image style={styles.avatar} source={{ uri: props.item.avatar }} />
          <View style={styles.textContainer}>
            <Text>
              {props.item.channel} Uploaded: {props.item.title}
            </Text>
            <Text style={styles.time}>{props.item.time}</Text>
          </View>
          <Image style={styles.image} source={{ uri: props.item.thumbnail }} />
          <View style={styles.dots}>
            <MaterialCommunityIcons
              name='dots-vertical'
              size={20}
              color={colors.grey}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default InboxItem

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  textContainer: {
    width: '60%',
    paddingHorizontal: 5,
  },
  image: {
    width: '22%',
    height: 50,
    alignSelf: 'baseline',
  },
  time: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: 'roboto',
  },
  dots: {
    alignSelf: 'center',
    height: '50%',
  },
})
