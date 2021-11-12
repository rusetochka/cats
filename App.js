import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const getRandom = () => {
  return Math.round(Math.random() * 255);
};

const generateRGBcolor = () => {
  const red = getRandom().toString();
  const green = getRandom().toString();
  const blue = getRandom().toString();
  return 'rgb(' + red + ',' + green + ',' + blue + ')';

};

const Page1 = ({ navigation }) => {
  //background changing
  const [backgroundColor, setBackground] = useState('green');
  const changeBackground = () => {
    const newColor = generateRGBcolor();
    setBackground(newColor);
  };

  //sound properties
  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./audio/meow1.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>

      <Text style={styles.text}>Zzz...</Text>
      <Text style={styles.imageContainer} onPress={changeBackground}>
        <Image style={styles.image} source={require('./img/rsz_pinkcat.png')} />
      </Text>
      <Icon.Button
        name="music"
        style={styles.soundButton}
        backgroundColor='transparent'
        iconStyle={{ margin: 0, fontSize: 30 }}
        color='#fb416d'
        onPress={playSound}
      />
      <Button title="next cat" onPress={() => navigation.navigate('Page2')} />

    </View>
  );
};

const Page2 = ({ navigation }) => {
  //background changing
  const [backgroundColor, setBackground] = useState('steelblue');
  const changeBackground = () => {
    const newColor = generateRGBcolor();
    setBackground(newColor);
  };

  //sound properties
  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./audio/meow2.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={styles.text}>Что я могу поесть?</Text>
      <Text style={styles.imageContainer} onPress={changeBackground}>
        <Image style={styles.image} source={require('./img/rsz_hungrycat.png')} />
      </Text>
      <Icon.Button
        name="music"
        style={styles.soundButton}
        backgroundColor='transparent'
        iconStyle={{ margin: 0, fontSize: 30 }}
        color='yellow'
        onPress={playSound}
      />
      <Button title="next cat" color='black' onPress={() => navigation.navigate('Page3')} />
    </View>
  )
}

const Page3 = ({ navigation }) => {
  //background changing
  const [backgroundColor, setBackground] = useState('burlywood');
  const changeBackground = () => {
    const newColor = generateRGBcolor();
    setBackground(newColor);
  };

  //sound properties
  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./audio/meow3.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={styles.text}>Поиграй со мной!</Text>
      <Text style={styles.imageContainer} onPress={changeBackground}>
        <Image style={styles.image} source={require('./img/rsz_happycat.png')} />
      </Text>
      <Icon.Button
        name="music"
        style={styles.soundButton}
        backgroundColor='transparent'
        iconStyle={{ margin: 0, fontSize: 30 }}
        color='black'
        onPress={playSound}
      />
      <Button title="next cat" color='black' onPress={() => navigation.navigate('Page1')} />
    </View>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Page1" component={Page1} options={{ title: 'Pink Cat' }} />
        <Stack.Screen name="Page2" component={Page2} options={{ title: 'Hungry Cat' }} />
        <Stack.Screen name="Page3" component={Page3} options={{ title: 'Happy Cat' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'AppleSDGothicNeo-Bold',
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  soundButton: {
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
