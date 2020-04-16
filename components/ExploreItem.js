import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableNativeFeedback,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ExploreItem = (props) => {
  return (
    <TouchableNativeFeedback useForeground={true}>
      <View style={styles.item}>
        <ImageBackground
          source={{
            uri: props.image,
          }}
          style={styles.image}
        >
          <View style={styles.textContainer}>
            <MaterialCommunityIcons name={props.icon} color='#fff' size={25} />
            <Text style={styles.text}>{props.text}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  )
}

export default ExploreItem

const styles = StyleSheet.create({
  item: {
    width: '45%',
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    height: '100%',
    alignItems: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  text: {
    fontFamily: 'roboto',
    color: '#fff',
    textAlign: 'left',
    fontSize: 18,
    paddingLeft: 10,
  },
})
