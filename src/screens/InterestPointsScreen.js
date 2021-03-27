import React from 'react';
import { StyleSheet, Text, LogBox, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import SlideMenu from '../components/SlideMenu'

const TrackListScreen = ({ navigation }) => {

  LogBox.ignoreAllLogs();

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.text}>Interest Points</Text>

      <ScrollView
        vertical
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <SlideMenu 
          header = 'For you'
          imagePath1= '/Users/user/Development/React-Native /mobile-v_map/assets/image1.jpg'
          imagePath2= '/Users/user/Development/React-Native /mobile-v_map/assets/image2.jpg'
          imagePath3= '/Users/user/Development/React-Native /mobile-v_map/assets/image3.jpg'
          name1 = ''
          name2 = ''
          name3 = ''
        />

        <SlideMenu
          header = 'Popular in the city'
          imagePath1='/Users/user/Development/React-Native /mobile-v_map/assets/image1.jpg'
          imagePath2='/Users/user/Development/React-Native /mobile-v_map/assets/image2.jpg'
          imagePath3='/Users/user/Development/React-Native /mobile-v_map/assets/image3.jpg'
        />

        <SlideMenu
          header = 'New comers'
          imagePath1='/Users/user/Development/React-Native /mobile-v_map/assets/image1.jpg'
          imagePath2='/Users/user/Development/React-Native /mobile-v_map/assets/image2.jpg'
          imagePath3='/Users/user/Development/React-Native /mobile-v_map/assets/image3.jpg'
        />
      </ScrollView>

    </SafeAreaView>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    alignSelf: 'center'
  } 
});

export default TrackListScreen;
