import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({ placeName: val });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='An awesome place'
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button title='ADD' style={styles.placeButton} onPress={() => this.props.placeSubmit(this.state.placeName)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
export default PlaceInput;
