import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { recursiveCheck } from '../shared/utils';
import {grid5} from "../shared/data";

interface CellProps {
	bit: number;
	index: number;
	whSize: number;
	Xcoordinate: number;
	Ycoordinate: number;
    data: number[][];
}

interface recursiveArguments {
	x: number;
	y: number;
	bit: number;
}

class CellComponent extends Component<CellProps> {
	checkPosition = (args: recursiveArguments) => {
		recursiveCheck.reset(this.props.data);
		const result = recursiveCheck.init(args.x, args.y);
	};

	render() {
		const { bit, whSize, Xcoordinate, Ycoordinate } = this.props;
		return (
			<TouchableOpacity
				style={[
					styles.button,
					bit > 0 ? styles.btnFilled : styles.btnEmpty,
					{ width: whSize },
					{ height: whSize }
				]}
				onPress={() =>
					this.checkPosition({ y: Ycoordinate, x: Xcoordinate, bit: bit })
				}
			/>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		flexBasis: 'auto',
		flexShrink: 1,
		flexGrow: 1,
		margin: 0,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#cccccc'
	},
	btnEmpty: {
		backgroundColor: '#ffffff'
	},
	btnFilled: {
		backgroundColor: '#000000'
	}
});

export default CellComponent;
