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
          imagePath1= 'https://lh5.googleusercontent.com/p/AF1QipP9GkxnWpm35-Hx-jxwFkbg8wxUW3rqJcHvAq6q=w426-h240-k-no'
          imagePath2= 'https://lh5.googleusercontent.com/p/AF1QipO6yV7dk5tZOjt9lRLRF9emWfghxjq0BcWa6N4-=w427-h240-k-no'
          imagePath3= 'https://lh5.googleusercontent.com/p/AF1QipO4ng-Oon3K077DOtBZ34zyzEoKMKeaChIAs5FZ=w408-h270-k-no'
          name1 = 'Burghria Tomis'
          name2 = 'Restaurant Toscana'
          name3 = 'Alta locatie XD'
        />

        <SlideMenu
          header = 'Popular in the city'
          imagePath1='/Users/user/Development/React-Native /mobile-v_map/assets/image1.jpg'
          imagePath2='/Users/user/Development/React-Native /mobile-v_map/assets/image2.jpg'
          imagePath3='/Users/user/Development/React-Native /mobile-v_map/assets/image3.jpg'
          name1='Burghria Tomis'
          name2='Restaurant Toscana'
          name3='Alta locatie XD'
        />

        <SlideMenu
          header = 'New comers'
          imagePath1='/Users/user/Development/React-Native /mobile-v_map/assets/image1.jpg'
          imagePath2='/Users/user/Development/React-Native /mobile-v_map/assets/image2.jpg'
          imagePath3='/Users/user/Development/React-Native /mobile-v_map/assets/image3.jpg'
          name1='Burghria Tomis'
          name2='Restaurant Toscana'
          name3='Alta locatie XD'
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
