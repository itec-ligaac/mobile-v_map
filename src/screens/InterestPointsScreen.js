import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, LogBox, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import MasterList from '../components/MasterList'

const TrackListScreen = ({ navigation }) => {

  LogBox.ignoreAllLogs();

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.text}>Interest Points</Text>

      <MasterList

      />

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
