import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function index({ options, answerFun }) {
    return Object.keys(options).map((option, index) => (
        <>
            <View key={index * 10} style={{ padding: 10 }}>
                <TouchableOpacity onPress={() => answerFun(options[option], index)}
                    style={{
                        flexDirection: 'row',
                        padding: 10,
                        backgroundColor: '#f0f8ff',
                        borderRadius: 10,
                    }}>
                    <View style={{}}>
                        <Text>
                            Option {index + 1}
                            {':'}{' '}
                        </Text>
                    </View>
                    <Text>{options[option]}</Text>
                </TouchableOpacity>
            </View>
        </>
    ));
}
