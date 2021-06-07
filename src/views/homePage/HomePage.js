import React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomePage = ({ navigation }) => {
    return (
        <View
        style={{
        display: 'flex',
          flexDirection: "column",
          flex: 1,
          justifyContent: 'center',
          padding: 50
        }}
      >
        <Button title="Mapa" onPress={() => navigation.navigate('TransportMap')} />
      </View>
    );
}

export default HomePage;