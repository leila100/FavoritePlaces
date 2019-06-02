import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";

export default class App extends Component {
  state = {
    places: []
  };

  placeAddHandler = placeName => {
    if (placeName.trim() === "") return;
    this.setState(prevState => {
      return {
        places: [...prevState.places, { key: Math.random().toString(), value: placeName }]
      };
    });
  };

  placeDeleteHandler = placeKey => {
    this.setState(prevState => {
      const places = prevState.places.filter(place => place.key !== placeKey);
      return { places: places };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput placeAdd={this.placeAddHandler} />
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeleteHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "100%"
  }
});
