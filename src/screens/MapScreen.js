import React, { useContext, useCallback } from 'react';
import { StyleSheet, LogBox } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import SearchBar from '../components/SearchBar';

const TrackCreateScreen = ({ isFocused }) => {

  const { state, addLocation } = useContext(LocationContext);

  LogBox.ignoreAllLogs();

  const callback = useCallback(
    location => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [err] = useLocation(isFocused, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>

      <SearchBar

      />

      <Map />

      {err ? <Text>Please enable location services</Text> : null}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
