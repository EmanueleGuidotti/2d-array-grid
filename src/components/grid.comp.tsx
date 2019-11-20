import React, { Component } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import CellComponent from "./cell.comp";
import { grid } from "../shared/utils";

interface GridState {
  data: number[][];
}

class GridComponent extends Component<{}, GridState> {
  state: GridState = {
    data: grid
  };

  render() {
    const { data } = this.state;
    const whSize: number = Dimensions.get("window").width / data.length + 1;
    return (
      <View style={styles.grid}>
        {data.map((bitList, i) => {
          return (
            <View key={i} style={styles.row}>
              {bitList.map((bit, j) => {
                return (
                  <CellComponent
                    bit={bit}
                    index={j}
                    whSize={whSize}
                    key={j}
                  ></CellComponent>
                );
              })}
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "column",
    flexWrap: "wrap"
  },
  row: {
    display: "flex",
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
    flexWrap: "nowrap"
  }
});

export default GridComponent;
