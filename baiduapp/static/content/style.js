/*
 * @file searchArea/style.js
 * @author houyu
 * @desc 模拟手百的搜索框区域
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';

const contentStyle = StyleSheet.create({
    content: {
        flex: 41, 
        backgroundColor: '#fff',
    },
    itemContainer: {
        height: 100,
        paddingHorizontal: 10,
    },
    itemContent: {
        height: 99,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    textArea: {
        flex: 1,
        height: 70,
        paddingRight: 12,
    },
    tagArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tags: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagContainer: {
        marginRight: 10,
        width: 25,
        height: 15,
        borderColor: '#f8dcdc',
        borderWidth: 1,
        borderRadius: 5,
    },
    tagEntity: {
        fontSize: 10,
        textAlign: 'center',
        lineHeight: 15,
        color: '#f83740',
    },
    srcNet: {
        fontSize: 12,
    },
    closeTag: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 15,
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 8,
    },
    closeTagText: {
        color: '#eee',
    },
    textContent: {
        flex: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    imgArea: {
        height: 85,
        width: 110,
    },
    rightImg: {
        height: 85,
        width: 110,
        backgroundColor: '#000',
        resizeMode: Image.resizeMode.cover,
    },
});

module.exports.contentStyle = contentStyle;
