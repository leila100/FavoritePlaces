import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
  return (
    <ScrollView style={styles.listContainer}>
      {props.places.map((place, i) => (
        <ListItem key={i} placeName={place} onItemPressed={() => props.onItemDeleted(i)} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
export default PlaceList;
