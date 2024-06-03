import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ScoreScreen({ route, navigation }) {
  const { playerKey, playerName, updateScore, currentScore } = route.params;
  const [score, setScore] = useState(currentScore);

  const handleScoreChange = (scoreChange) => {
  
    setScore(score + scoreChange);
   
    updateScore(playerKey, scoreChange);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Score for {playerName}</Text>
      <Text style={styles.currentScore}>Current Score: {score}</Text>
      <View style={styles.buttonContainer}>
        {[2, 3, 4, 5, 6, 7, 10].map((value) => (
          <Button key={value} title={`+${value}`} onPress={() => handleScoreChange(value)} color="#1e90ff" />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {[-5, -10].map((value) => (
          <Button key={value} title={`${value}`} onPress={() => handleScoreChange(value)} color="#dc143c" />
        ))}
      </View>
     
      <View style={styles.goBackButton}>
        <Button title="Go Back" onPress={handleGoBack} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  currentScore: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '100%',
  },
  goBackButton: {
    marginTop: 20,
    width: '100%',
  },
});
