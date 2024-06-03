import { View, Text, Button, TextInput, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import tailwind from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Tenball({ route, navigation }) {
  const { playerOneName, playerTwoName } = route.params || {};
  const [score1, setScoreOne] = useState(0);
  const [score2, setScoreTwo] = useState(0);

  const incrementScoreOne = () => setScoreOne(score1 + 1);
  const incrementScoreOneBy2 = () => setScoreOne(score1 + 2);
  const incrementScoreOneBy3 = () => setScoreOne(score1 + 3);
  const incrementScoreOneBy4 = () => setScoreOne(score1 + 4);
  const incrementScoreOneBy5 = () => setScoreOne(score1 + 5);
  const incrementScoreOneBy6 = () => setScoreOne(score1 + 6);
  const incrementScoreOneBy7 = () => setScoreOne(score1 + 7);
  const decrementOneBy5 = () => setScoreOne(score1 - 5);
  const decrementOneBy6 = () => setScoreOne(score1 - 6);
  const decrementOneBy7 = () => setScoreOne(score1 - 7);

  const incrementScoreTwoBy1 = () => setScoreTwo(score2 + 1);
  const incrementScoreTwoBy2 = () => setScoreTwo(score2 + 2);
  const incrementScoreTwoBy3 = () => setScoreTwo(score2 + 3);
  const incrementScoreTwoBy4 = () => setScoreTwo(score2 + 4);
  const incrementScoreTwoBy5 = () => setScoreTwo(score2 + 5);
  const incrementScoreTwoBy6 = () => setScoreTwo(score2 + 6);
  const incrementScoreTwoBy7 = () => setScoreTwo(score2 + 7);
  const decrementTwoBy5 = () => setScoreTwo(score2 - 5);
  const decrementTwoBy6 = () => setScoreTwo(score2 - 6);
  const decrementTwoBy7 = () => setScoreTwo(score2 - 7);


  
  const finishGame = async () => {
    let winner = '';
    if (score1 > score2) {
      winner = playerOneName;
    } else if (score2 > score1) {
      winner = playerTwoName;
    } else {
      winner = 'No one, it\'s a tie!';
    }
  
    const gameData = {
      title: 'Tenball', 
      players: [
        { name: playerOneName, score: score1 },
        { name: playerTwoName, score: score2 }
      ],
      winner,
      date: new Date().toISOString(),
    };
  
    try {
      const data = await AsyncStorage.getItem('gameHistory');
      const gameHistory = data ? JSON.parse(data) : [];
      gameHistory.push(gameData);
      await AsyncStorage.setItem('gameHistory', JSON.stringify(gameHistory));
      Alert.alert(
        'Game Over',
        `Congratulations ${winner}!`,
        [{ text: 'OK', onPress: () => navigation.goBack() }],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error saving game data:', error);
      Alert.alert('Error', 'There was an error saving the game data.');
    }
  }
  return (
    <ScrollView>
      <View>
        <View style={tailwind`bg-green-800 p-25`}>
          <Icon name='user' size={50} color="black" />
          <Text style={tailwind`text-white text-2xl`}>{playerOneName}</Text>
          <TextInput
            style={tailwind`border border-gray-300 rounded-lg p-2 text-black`}
            value={score1.toString()} // Convert score1 to string for TextInput value
            editable={false} // Disable editing of TextInput
          />
          <ScrollView horizontal={true} style={{ width: 500, paddingTop: 10 }}>
            <TouchableOpacity onPress={incrementScoreOne} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/red.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementScoreOneBy2} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/yellow.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementScoreOneBy3} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/green.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementScoreOneBy4} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/brown.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementScoreOneBy5} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/blue.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementScoreOneBy6} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/pink.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementScoreOneBy7} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/black.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
          </ScrollView>
          <ScrollView horizontal={true} style={{ width: 300, paddingTop: 10, paddingLeft: 10 }}>
            <TouchableOpacity onPress={decrementOneBy5}>
              <Text style={tailwind`text-black text-2xl`}>-5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decrementOneBy6}>
              <Text style={tailwind`text-black text-2xl pl-7`}>-6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decrementOneBy7}>
              <Text style={tailwind`text-black text-2xl pl-7`}>-7</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={tailwind`justify-center bg-white p-3`}></View>

        <View style={tailwind`bg-green-800 p-25`}>
          <Icon name='user' size={50} color="black" />
          <Text style={tailwind`text-white text-2xl`}>{playerTwoName}</Text>
          <TextInput
            style={tailwind`border border-gray-400 rounded-lg p-1 text-base w-full`}
            value={score2.toString()}
            editable={false}
          />
          <ScrollView horizontal={true} style={{ width: 500, paddingTop: 10 }}>
            <TouchableOpacity onPress={incrementScoreTwoBy1} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/red.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementScoreTwoBy2} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/yellow.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementScoreTwoBy3} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/green.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementScoreTwoBy4} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/brown.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementScoreTwoBy5} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/blue.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementScoreTwoBy6} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/pink.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementScoreTwoBy7} style={tailwind`p-1`}>
              <Image source={require('../MatchScreens/black.jpg')} style={{ height: 22, width: 30 }} />
            </TouchableOpacity>
          </ScrollView>
          <ScrollView horizontal={true} style={{ width: 300, paddingTop: 10, paddingLeft: 10 }}>
            <TouchableOpacity onPress={decrementTwoBy5}>
              <Text style={tailwind`text-black text-2xl`}>-5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decrementTwoBy6}>
              <Text style={tailwind`text-black text-2xl pl-7`}>-6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decrementTwoBy7}>
              <Text style={tailwind`text-black text-2xl pl-7`}>-7</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={tailwind`p-1`}>
          <Button title='Finish' onPress={finishGame} />
        </View>
      </View>
    </ScrollView>
  );
}
