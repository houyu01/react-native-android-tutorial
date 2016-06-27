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
    ListView,
    Image,
    NativeModules
} from 'react-native';

console.disableYellowBox = true;

const SearchArea = require('./static/searchArea');
const Content = require('./static/content');
const ToolBar = require('./static/toolBar');

class hellowReact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <SearchArea />
                <Content />
                <ToolBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
});

AppRegistry.registerComponent('hellowReact', () => hellowReact);
