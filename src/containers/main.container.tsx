import React, { Component } from "react";
import GridComponent from "../components/grid.comp";
import { View, Text } from "react-native";

class MainContainer extends Component {
  render() {
    return (
      <View>
        <Text>Title</Text>
        <GridComponent></GridComponent>
      </View>
    );
  }
}

export default MainContainer;
