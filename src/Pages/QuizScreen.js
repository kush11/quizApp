import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions
} from 'react-native';
import * as Progress from 'react-native-progress';
import ScoreScreen from '../Components/Result'
import Question from '../Components/Question'
import questions from '../Utils/question.json'
export default function QuizScreen() {

  const windowWidth = Dimensions.get('window').width

  const [questionCounter, setQuestionCounter] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[0])
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)

  const [allquestions, setAllQuestions] = useState(questions)

  const [indeterminate, setIndeterminate] = useState(false)
  const [progressBar, setProgress] = useState(0.10)

  let progressBarTimer;
  let progressBaxInterval;

  useEffect(() => {
    let progress = 0.10
    progressBarTimer = setTimeout(() => {
      setIndeterminate(false)
      progressBaxInterval = setInterval(() => {
        progress += 0.10;
        if (progress > 1) {
          progress = 1;
        }
        console.log(progress)
        setProgress(progress)
      }, 1100);
    }, 5000);
  }, [currentQuestion])

  let oneMinutTimer;
  const minutTime = 10000;

  useEffect(() => {
    oneMinutTimer = setTimeout(() => {
      answerFun('unanswered', '')
    }, minutTime)
  }, [questionCounter])


  const calculateAnswer = (choice, index) => {
    console.log('choice', choice)
    console.log('index', index)
    if (choice !== 'unanswered') {
      allquestions[questionCounter].correctAnswer === choice && setCorrectAnswerCount(correctAnswerCount + 1)
    }
  }

  const answerFun = (choice, index) => {
    calculateAnswer(choice, index)
    if (questionCounter === allquestions.length) {
      console.log('all done')
      clearInterval(oneMinutTimer);
    }
    else {
      setTimeout(() => {
        setQuestionCounter(questionCounter + 1)
        setCurrentQuestion(questionCounter ? allquestions[questionCounter] : allquestions[questionCounter + 1])
        clearTimeout(progressBarTimer)
        setProgress(0.10)
        setIndeterminate(false)
        clearInterval(progressBaxInterval)
      }, 5000)
    }
  }

  return (
    <SafeAreaView style={styles.questionContainer}>
      {allquestions.length > questionCounter ?
        <>
          <Progress.Bar
            width={windowWidth - 20}
            progress={progressBar}
            indeterminate={indeterminate}
          />
          <Question
            currentQuestion={currentQuestion.question}
            questionCounter={questionCounter}
            allquestionsLen={allquestions.length}
            options={currentQuestion.Options || ''}
            answerFun={(option, index) => answerFun(option, index)}
          />
        </> : <ScoreScreen score={correctAnswerCount} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    display: 'flex',
    flex: 1,
    padding: 10
  },
});
