import React from 'react'
import { View, Text } from 'react-native'

export default function index({ score }) {
    return (
        <View style={{ display: 'flex', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text>Your score is {score}</Text>
        </View>
    )
}
