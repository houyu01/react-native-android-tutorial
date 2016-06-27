/*
 * @file searchArea/index.js
 * @author houyu
 * @desc 模拟手百的搜索框区域
 */
'use strict'
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ListView
} from 'react-native';
import {contentStyle} from './style.js';

class Content extends Component {

    constructor(props) {
        super(props);
        var list = [
            {
                title: '英国首相卡梅伦辞职"脱欧派"灵魂人物或接任',
                from: '搜狐新闻',
                time: '3分钟前',
                tag: '视频',
                images: ['http://static.oschina.net/uploads/user/588/1177792_100.jpg?t=1465096324000']
            },
            {
                title: '2.英国首相卡梅伦辞职"脱欧派"灵魂人物或接任',
                from: '搜狐新闻',
                time: '3分钟前',
                tag: '视频',
                images: ['http://static.oschina.net/uploads/user/588/1177792_100.jpg?t=1465096324000']
            },
            {
                title: '3.英国首相卡梅伦辞职"脱欧派"灵魂人物或接任',
                from: '搜狐新闻',
                time: '3分钟前',
                tag: '视频',
                images: ['http://static.oschina.net/uploads/user/588/1177792_100.jpg?t=1465096324000']
            },
            {
                title: '4.英国首相卡梅伦辞职"脱欧派"灵魂人物或接任',
                from: '搜狐新闻',
                time: '3分钟前',
                tag: '视频',
                images: ['http://static.oschina.net/uploads/user/588/1177792_100.jpg?t=1465096324000']
            },
            {
                title: '5.英国首相卡梅伦辞职"脱欧派"灵魂人物或接任',
                from: '搜狐新闻',
                time: '3分钟前',
                tag: '视频',
                images: ['http://static.oschina.net/uploads/user/588/1177792_100.jpg?t=1465096324000']
            },
        ];
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(list)
        };
    }

    renderOneRow(rowData) {
        return <View style={contentStyle.itemContainer}>
            <View style={contentStyle.itemContent}>
                <View style={contentStyle.textArea}>
                    <Text style={contentStyle.textContent}>
                        {rowData.title}
                    </Text>
                    <View style={contentStyle.tagArea}>
                        <View style={contentStyle.tags}>
                            <View style={contentStyle.tagContainer}>
                                <Text style={contentStyle.tagEntity}>
                                    {rowData.tag}
                                </Text>
                            </View>
                            <Text style={contentStyle.srcNet}>
                                {rowData.from}
                            </Text>
                        </View>
                        <View style={contentStyle.closeTag}>
                            <Text style={contentStyle.closeTagText}>X</Text>
                        </View>
                    </View>
                </View>
                <View style={contentStyle.imgArea}>
                    <Image
                        source={{uri: rowData.images[0]}}
                        style={contentStyle.rightImg}
                    />
                </View>
            </View>
        </View>;
    }
    
    render() {
        return (
            <View style={contentStyle.content}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderOneRow}
                />
            </View>
        );
    }
}

module.exports = Content;
