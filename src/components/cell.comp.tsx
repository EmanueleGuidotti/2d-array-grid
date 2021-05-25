import React, { Component } from 'react';
import {TouchableOpacity, StyleSheet, GestureResponderEvent} from 'react-native';

interface CellProps {
	bit: number;
	whSize: number;
    checkAdjacent: (event: GestureResponderEvent) => void;
}

class CellComponent extends Component<CellProps> {

	render() {
		const { bit, whSize, checkAdjacent } = this.props;
		return (
			<TouchableOpacity
				style={[
					styles.button,
					bit > 0 ? styles.btnFilled : styles.btnEmpty,
					{ width: whSize },
					{ height: whSize }
				]}
				onPress={checkAdjacent}
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
