/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

class hellowReact extends Component {
  constructor(props) {
    super(props);
    var list = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      list: list.cloneWithRows(['hello', 'react', 'this', 'is', 'my', 'listView'])
    };
  }
  oneRow(oneItem) {
    return <Text>{oneItem}</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.list}
          renderRow={this.oneRow}
        />
      </View>
    );
  }
}

class detail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View>
            <Text>detail!!!</Text>
        </View>;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('hellowReact', () => hellowReact);
AppRegistry.registerComponent('detail', () => detail);
