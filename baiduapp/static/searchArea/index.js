/*
 * @file searchArea/index.js
 * @author houyu
 * @desc 模拟手白的搜索框区域
 */
'use strict'
import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import headStyle from './style.js';

let homeIcon = require('./icn_feed_go_home.png');
let refreshIcon = require('./icn_feed_refresh.png');

class SearchArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headStyle: headStyle.headminiStyle
        };
    }
    
    render() {
        return (
            <View style={this.state.headStyle.topBar}>
                <View style={this.state.headStyle.searchbox}></View>
                <View style={this.state.headStyle.toolBar}>
                    <View style={this.state.headStyle.toIndex}>
                        <Image
                            source={homeIcon}
                            style={this.state.headStyle.topBarHomeIcon}
                        />
                        <Text>首页</Text>
                    </View>
                    <View style={this.state.headStyle.refresh}>
                        <Image
                            source={refreshIcon}
                            style={this.state.headStyle.topBarRefreshIcon}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

module.exports = SearchArea;
