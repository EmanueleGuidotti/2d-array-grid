import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

interface CellProps {
	bit: number;
	index: number;
	whSize: number;
}

class CellComponent extends Component<CellProps> {
	render() {
		const { bit, whSize } = this.props;
		return (
			<TouchableOpacity
				style={[
					styles.button,
					bit > 0 ? styles.btnFilled : styles.btnEmpty,
					{ width: whSize },
					{ height: whSize }
				]}
				onPress={() => console.log(bit)}
			></TouchableOpacity>
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
