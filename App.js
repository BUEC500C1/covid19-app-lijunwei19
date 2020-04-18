import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle}
          initialRegion={{
              latitude: 40.758896, //the loaction of New York City
              longitude:  -73.985130,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
          }}
        >
        <MapView.Marker
            coordinate={{latitude: 40.758896,
            longitude: -73.985130}}
            title={"marker"}
            description={"times square"}
         />
      </MapView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});