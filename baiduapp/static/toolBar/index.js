/*
 * @file searchArea/index.js
 * @author houyu
 * @desc 模拟手百的底部工具栏区域
 */
'use strict'
import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
// 引入底部工具栏的样式
import {ToolBarStyle} from './style.js';
// 底部工具栏暂时不做，使用一张大的图片代替
let bottomBanner = require('./bottom_banner.png');

class ToolBar extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={ToolBarStyle.bottomBar}>
                <Image 
                    source={bottomBanner}
                    style={ToolBarStyle.bottomBanner}
                />  
            </View>
        );
    }
}
// 导出组件
module.exports = ToolBar;
