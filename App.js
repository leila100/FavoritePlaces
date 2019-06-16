import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import { addPlace, deletePlace, selectPlace, deselectPlace } from "./src/store/actions/index";

class App extends Component {
  placeAddedHandler = placeName => {
    this.props.addPlace(placeName);
    console.log("place added!", { placeName });
  };

  placeDeletedHandler = () => {
    this.props.deletePlace();
  };

  modalClosedHandler = () => {
    this.props.deselectPlace();
  };

  placeSelectedHandler = key => {
    this.props.selectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

export default connect(
  mapStateToProps,
  { addPlace, deletePlace, selectPlace, deselectPlace }
)(App);
