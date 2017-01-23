import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

class SpaceWatcher extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('space-bg.png')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('SpaceWatcher', () => SpaceWatcher);
