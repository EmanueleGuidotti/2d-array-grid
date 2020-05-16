import React, { Component } from 'react';
import GridComponent from '../components/grid.comp';
import { View, Text, StyleSheet } from 'react-native';
import { grid5 } from '../shared/data';

interface MainState {
	grid: number[][];
}

class MainContainer extends Component<{}, MainState> {
	state: MainState = {
		grid: grid5
	};

	render() {
		return (
			<View>
				<Text style={styles.h1}>Tap an element</Text>
				<GridComponent data={this.state.grid} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	h1: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingVertical: 10
	}
});

export default MainContainer;
