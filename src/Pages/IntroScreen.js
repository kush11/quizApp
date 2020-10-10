import React, { useState } from 'react';
import { CheckBox, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import QuizPageScreen from './QuizScreen'

const App = () => {
  const [isSelected, setSelection] = useState(false);
  const [quizPage, steQuizPage] = useState(false)
  if (quizPage) {
    return (<><QuizPageScreen /></>)
  }
  else
    return (
      <View style={styles.container}>
        <View style={{ display: 'flex', borderWidth: 1, padding: 10 }}>
          <Text>There are 15 Question </Text>
          <Text>Each Question has a time limit of 1 minutes </Text>
          <Text>
            If you Miss / Unanswer any question there will be no negative marking{' '}
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Do you Agree</Text>
        </View>
        <TouchableOpacity
          onPress={() => steQuizPage(true)}
          disabled={!isSelected}
          style={{
            height: 50,
            width: 100,
            backgroundColor: !isSelected ? '#F1FBF1' : 'green',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}>
          <Text>Procees</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  button: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  }
});

export default App;
