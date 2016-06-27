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

const ToolBarStyle = StyleSheet.create({
    bottomBar: {
        flex: 5,
        backgroundColor: '#ff0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomBanner: {
        flex: 1,
        resizeMode: Image.resizeMode.contain,
    },
});

module.exports.ToolBarStyle = ToolBarStyle;
