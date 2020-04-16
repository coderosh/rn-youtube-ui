import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  Picker,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import colors from '../constants/colors'

const LibraryItem = (props) => (
  <View style={styles.libraryItem}>
    <View style={styles.libraryLogo}>
      <MaterialIcons name={props.icon} size={25} color='#777' />
    </View>
    <View>
      <Text style={styles.libraryText}>{props.text}</Text>
      {props.subtext && <Text style={styles.subText}>{props.subtext}</Text>}
    </View>
  </View>
)

const PlayListItem = (props) => (
  <TouchableNativeFeedback>
    <View style={styles.libraryItem}>
      <View style={styles.playListImage}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: props.image }}
        />
      </View>
      <View>
        <Text>{props.name}</Text>
        <Text style={styles.subText}>
          {props.author} · {props.count} videos
        </Text>
      </View>
    </View>
  </TouchableNativeFeedback>
)

const LibraryScreen = () => {
  return (
    <ScrollView>
      <View style={styles.libraryItems}>
        <LibraryItem text='History' icon='history' />
        <LibraryItem text='Downloads' icon='file-download' subtext='8 videos' />
        <LibraryItem text='Your Videos' icon='ondemand-video' />
        <LibraryItem
          text='Watch Later'
          icon='watch-later'
          subtext='2 unwatched videos'
        />
      </View>
      <View style={styles.playlists}>
        <View style={styles.playlistText}>
          <Text style={{ fontSize: 16, flex: 2 }}>Playlists</Text>
          <Picker mode='dropdown' style={{ height: 20, flexGrow: 1 }}>
            <Picker.Item label='Recently Added' />
            <Picker.Item label='A-Z' />
          </Picker>
        </View>

        <TouchableNativeFeedback>
          <View style={styles.libraryItem}>
            <View style={styles.libraryLogo}>
              <MaterialIcons name='add' size={30} color='blue' />
            </View>
            <View>
              <Text style={{ color: 'blue', fontSize: 16 }}>New playlist</Text>
            </View>
          </View>
        </TouchableNativeFeedback>

        <PlayListItem
          name='Js Projects'
          image='https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png'
          author='Bestein Jeiber'
          count={123}
        />
        <PlayListItem
          name='Best Songs 2020'
          author='Allen Mery'
          image='https://cdn.pixabay.com/photo/2015/05/15/14/30/guitarist-768532_960_720.jpg'
          count={357}
        />

        <TouchableNativeFeedback>
          <View style={styles.libraryItem}>
            <View
              style={{
                ...styles.playListImage,
                width: 50,
                alignItems: 'center',
              }}
            >
              <Ionicons name='md-thumbs-up' size={40} color='#777' />
            </View>
            <View>
              <Text style={styles.text}>Liked Videos</Text>
              <Text style={styles.subText}>50 videos</Text>
            </View>
          </View>
        </TouchableNativeFeedback>

        <PlayListItem
          name='Funny Videos'
          author='Allen Mery'
          image='https://cdn.pixabay.com/photo/2018/05/31/15/06/not-hear-3444212_960_720.jpg'
          count={207}
        />
        <PlayListItem
          name='Nepali Songs Collection'
          author='Nepali Thito'
          image='https://cdn.pixabay.com/photo/2018/12/04/13/07/rice-3855535_960_720.jpg'
          count={47}
        />
        <PlayListItem
          name='Live Concerts'
          author='Thomas Holland'
          image='https://cdn.pixabay.com/photo/2014/07/31/23/04/smartphone-407108_960_720.jpg'
          count={47}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  libraryItem: {
    flexDirection: 'row',
    padding: 13,
    alignItems: 'center',
  },
  libraryItems: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  libraryLogo: {
    paddingHorizontal: 15,
  },
  libraryText: {
    fontSize: 16,
  },
  subText: {
    fontSize: 13,
    color: colors.grey,
  },
  playlists: {
    padding: 13,
    backgroundColor: '#fff',
    flex: 1,
  },
  playlistText: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playListImage: {
    marginRight: 20,
  },
})

export default LibraryScreen
