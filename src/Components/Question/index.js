import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import QuestionHeader from '../QuestionHeader'
import QuestionOption from '../QuestionOption'

export default function index({ currentQuestion, questionCounter, allquestionsLen, options, answerFun }) {
    return (
        <View
            style={{
                width: '100%',
                backgroundColor: 'gray',
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
            }}>
            <QuestionHeader questionCounter={questionCounter} allquestionsLen={allquestionsLen} />
            <Text style={{ textAlign: 'center' }}>{currentQuestion}</Text>
            <ScrollView>
                <QuestionOption options={options} answerFun={answerFun} />
            </ScrollView>
        </View>
    );
}

