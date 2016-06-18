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
    NativeModules,
    WebView
} from 'react-native';

class hellowReact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.shadowBlock, styles.back1]}>
                    <Text>Hello1</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    shadowBlock: {
        height: 100,
        width: 100,
        backgroundColor: '#0f0',
    },
    back1: {
        elevation: 5,
    },
});

AppRegistry.registerComponent('hellowReact', () => hellowReact);
