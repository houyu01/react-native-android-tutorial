/*
 * @file searchArea/style.js
 * @author houyu
 * @desc 模拟手百的搜索框区域
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';

const headminiStyle = StyleSheet.create({
    topBar: {
        flex: 9,
        //height: 90,
        flexDirection: 'column',
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#f2f2f2',
    },
    searchbox: {
        marginTop: 7,
        marginLeft: 9,
        marginRight: 9,
        flex: 5,
        // height: 90,
        borderColor: '#d0d2d5',
        borderWidth: 1,
    },
    toolBar: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 9,
        marginRight: 9,
    },
    toIndex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    topBarHomeIcon: {
        resizeMode: Image.resizeMode.contain,
        height: 27,
        width: 27,
        marginRight: 5,
    },
    topBarRefreshIcon: {
        resizeMode: Image.resizeMode.contain,
        height: 45,
        width: 45,
    },
});

module.exports.headminiStyle = headminiStyle;
