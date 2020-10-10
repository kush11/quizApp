import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function QuizScreen() {

  const questions = [
    {
      question: 'This is first Question with long This is first Question with long This is first Question with long',
      correctAnswer: 'option1',
      Options: {
        option1: 'option1',
        option2: 'option2',
        option3: 'option3',
        option4: 'option4',
        option5: 'option4',
        option6: 'option1',
        option7: 'option2',
        option8: 'option3',
        option9: 'option4',
        option10: 'option4',
        option11: 'option1',
        option12: 'option2',
        option13: 'option3',
        option14: 'option4',
        option15: 'option4'

      },
    },
    {
      question: 'This is Second Option',
      correctAnswer: 'option1',
      Options: {
        option1: 'option1',
        option2: 'option2',
        option3: 'option3',
        option4: 'option4',
      },
    },
    {
      question: 'This is Third  Option',
      correctAnswer: 'option1',
      Options: {
        option1: 'option1',
        option2: 'option2',
        option3: 'option3',
        option4: 'option4',
      },
    },
  ];

  const [questionCounter, setQuestionCounter] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[0])
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)

  const [allquestions, setAllQuestions] = useState(questions)




  const answerFun = (choice, index) => {
    console.log('index=>', index)
    console.log('choice=>', choice)
    console.log('allquestions.length=>', allquestions.length)
    if (correctAnswerCount === allquestions.length) {
      console.log('all done')
    }
    else {
      setTimeout(() => {
        setCorrectAnswerCount(correctAnswerCount + 1)
        setCurrentQuestion(allquestions[correctAnswerCount])
      }, 5000)
    }
  }

  const QuestionOption = ({ options }) => {
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
  };

  const QuestionHeader = () => {
    return (
      <View>
        <Text style={{ textAlign: 'right', right: 10 }}>{correctAnswerCount}/{allquestions.length} </Text>
      </View>
    )
  }

  const Question = () => {
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: 'gray',
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
        }}>
        <QuestionHeader />
        <Text style={{ textAlign: 'center' }}>{currentQuestion.question || ''}</Text>
        <ScrollView>
          <QuestionOption options={currentQuestion.Options || ''} />
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.questionContainer}>
      <Question question={'This is first Question'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    display: 'flex',
    flex: 1,
    padding: 10,

  },
});
