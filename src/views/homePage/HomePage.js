import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

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