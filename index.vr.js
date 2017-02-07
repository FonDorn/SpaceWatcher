import React from 'react';
import {
  AppRegistry,
} from 'react-vr';

import App from './vr/Components/App';

class SpaceWatcher extends React.Component {
  constructor() {
    super('');
  }

  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('SpaceWatcher', () => SpaceWatcher);
