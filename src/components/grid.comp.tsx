import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import CellComponent from './cell.comp';

interface DataProps {
	data: number[][];
}
interface GridState {
	data: number[][];
	board: number;
	whSize: number;
}

class GridComponent extends Component<DataProps, GridState> {
	state: GridState = {
		data: [],
		board: 0,
		whSize: 0
	};

	componentDidMount(): void {
		if (this.props.data.length) this.saveGridData(this.props.data);
	}

	componentDidUpdate(prevProps): void {
		if (prevProps.data !== this.props.data) {
			this.saveGridData(this.props.data);
		}
	}

	saveGridData = (grid: number[][]) => {
		const data = grid;
		const board = data.map(i => i.length).reduce((p, n) => p + n);
		this.setState({
			data: data,
			board: board,
			whSize: Dimensions.get('window').width / data.length + 1
		});
	};

	render() {
		const { data, whSize } = this.state;
		if (!data.length) return <View></View>;
		else
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
		flexDirection: 'column',
		flexWrap: 'wrap'
	},
	row: {
		display: 'flex',
		width: Dimensions.get('window').width,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'stretch',
		flexWrap: 'nowrap'
	}
});

export default GridComponent;
