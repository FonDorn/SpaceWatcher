import React from 'react';
import {
  asset,
  Pano,
  View,
} from 'react-vr';

class App extends React.Component {
  constructor() {
    super('');
  }

  render() {
    return (
      <View>
        <Pano source={asset('space-bg.png')} />
      </View>
    );
  }
}

module.exports = App;
