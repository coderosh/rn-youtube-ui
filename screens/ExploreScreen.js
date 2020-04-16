import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import ExploreItem from '../components/ExploreItem'
import VideoItem from '../components/VideoItem'

const data = [
  {
    id: 'data2',
    title: 'Impossible - Shontelle (Cover)',
    channel: 'Blessinger',
    avatar: 'https://randomuser.me/api/portraits/men/98.jpg',
    views: '119M',
    time: '1 month ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2016/09/10/11/11/musician-1658887_960_720.jpg',
  },
  {
    id: 'data1',
    title: 'Mobile Photography | Complete Tutorial for begineers',
    channel: 'Photo Queen',
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    views: '100M',
    time: '3 weeks ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2016/02/10/16/39/girl-1192032_960_720.jpg',
  },
  {
    id: 'data3',
    title: 'Closer - Chainsmokers (Cover)',
    channel: 'TheProGuitarist',
    avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
    views: '99M',
    time: '2 weeks ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg',
  },
  {
    id: 'data4',
    title: 'Gelena Somez - Feel Me (Live from the Kathmandu)',
    channel: 'Gelena Somez',
    avatar:
      'https://cdn.pixabay.com/photo/2016/01/14/06/09/guitar-1139397_960_720.jpg',
    views: '50.9M',
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
    views: '40M',
    time: '1 week ago',
    thumbnail:
      'https://cdn.pixabay.com/photo/2017/07/15/19/42/manipulation-smartphone-2507499_960_720.jpg',
  },
]

const ExploreScreen = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <VideoItem item={itemData.item} />}
        ListHeaderComponent={() => {
          return (
            <React.Fragment>
              <View style={styles.items}>
                <ExploreItem
                  text='Music'
                  icon='music'
                  image='https://cdn.pixabay.com/photo/2017/08/06/12/54/headphones-2592263_960_720.jpg'
                />
                <ExploreItem
                  text='Gaming'
                  icon='youtube-gaming'
                  image='https://cdn.pixabay.com/photo/2017/04/05/22/52/xbox-one-controller-2206687_960_720.jpg'
                />
              </View>
              <View style={{ elevation: 5 }}>
                <View style={styles.trendingItem}>
                  <Text style={styles.trendingText}>Trending videos</Text>
                  <TouchableOpacity>
                    <Text style={styles.seeAll}>SEE ALL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </React.Fragment>
          )
        }}
      />
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  trendingItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  trendingText: {
    fontSize: 15,
  },
  seeAll: {
    color: 'blue',
    fontFamily: 'roboto-bold',
  },
})
