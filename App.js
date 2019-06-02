import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";

export default class App extends Component {
  state = {
    places: []
  };

  placeSubmitHandler = placeName => {
    if (placeName.trim() === "") return;
    this.setState(prevState => {
      return {
        places: [...prevState.places, placeName]
      };
    });
  };

  placeDeleteHandler = placeId => {
    this.setState(prevState => {
      const places = prevState.places.filter((place, i) => i !== placeId);
      return { places: places };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput placeSubmit={this.placeSubmitHandler} />
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
