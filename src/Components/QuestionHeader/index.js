import React from 'react'
import { View, Text } from 'react-native'

export default function index({ questionCounter, allquestionsLen }) {
    return (
        <View >
            <Text style={{ textAlign: 'right', right: 10 }}>{questionCounter + 1}/{allquestionsLen} </Text>
        </View>
    )
}
