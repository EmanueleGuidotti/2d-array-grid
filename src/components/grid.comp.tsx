import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import CellComponent from './cell.comp';
import { recursiveCheck } from '../shared/utils';

interface DataProps {
	data: number[][];
}
interface GridState {
	data: number[][];
	board: number;
	whSize: number;
	result: number;
}
interface recursiveArguments {
	x: number;
	y: number;
}

class GridComponent extends Component<DataProps, GridState> {
	state: GridState = {
		data: [],
		board: 0,
		whSize: 0,
		result: 0
	};

	componentDidMount(): void {
		if (this.props.data.length) this.saveGridData(this.props.data);
	}

	componentDidUpdate(prevProps): void {
		if (prevProps.data !== this.props.data) {
			this.saveGridData(this.props.data);
		}
	}

	saveGridData = (grid: number[][]): void => {
		const board = grid.map(i => i.length).reduce((p, n) => p + n);
		this.setState({
			data: grid,
			board: board,
			whSize: Dimensions.get('window').width / grid.length + 1
		});
	};

	_checkAdjacent = (args: recursiveArguments): void => {
		recursiveCheck.reset(this.props.data);
		const result = recursiveCheck.init(args.x, args.y);
		this.setState({ result });
	};

	render() {
		const { data, whSize, result } = this.state;
		if (!data.length) return <View/>;
		else
			return (
				<>
					<View style={styles.grid}>
						{data.map((bitList, i) => {
							return (
								<View key={i} style={styles.row}>
									{bitList.map((bit, j) => {
										return (
											<CellComponent
												bit={bit}
												checkAdjacent={() =>
													this._checkAdjacent({ y: j, x: i })
												}
												whSize={whSize}
												key={j}
											/>
										);
									})}
								</View>
							);
						})}
					</View>
					<View>
						<Text style={styles.info}>Adjacent elements: {result}</Text>
					</View>
				</>
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
	},
    info: {
	    fontSize: 20,
        paddingVertical: 20,
        textAlign: 'center'
    }
});

export default GridComponent;
