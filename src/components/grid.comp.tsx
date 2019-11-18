import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import CellComponent from "./cell.comp";
import { grid } from "../shared/utils";

interface GridState {
  data: number[][];
}

class GridComponent extends Component<{}, GridState> {
  state: GridState;

  constructor(props) {
    super(props);
    this.state = {
      data: grid
    };
  }

  render() {
    const { data } = this.state;
    return (
      <View style={styles.grid}>
        {data.map((bitList, i) => {
          const whSize = Dimensions.get("window").width / data.length + 1;
          return (
            <View key={i} style={styles.row}>
              {bitList.map((bit, index) => {
                return (
                  <CellComponent
                    bit={bit}
                    whSize={whSize}
                    key={index}
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
