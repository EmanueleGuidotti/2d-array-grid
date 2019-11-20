import React, { Component } from "react";
import GridComponent from "../components/grid.comp";
import { View, Text, StyleSheet } from "react-native";

class MainContainer extends Component {
  render() {
    return (
      <View>
        <Text style={styles.h1}>Title</Text>
        <GridComponent></GridComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10
  }
});

export default MainContainer;
