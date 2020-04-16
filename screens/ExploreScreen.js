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
    id: 'data1',
    title: 'OnePlus 8 Review: Better than S20 Ultra ?',
    channel: 'MKB720p',
    avatar:
      'https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317_960_720.png',
    views: '350k',
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
