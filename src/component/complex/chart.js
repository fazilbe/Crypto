/**
*
* card.js
* Card component
*
* @author - Ahamed
* @date   - 26 August 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, StatusBar, ScrollView, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {LineChart} from "react-native-chart-kit";

// ALL SHARED FILES
import * as Utils from '../../shared/utils';
import * as Constant from '../../shared/constant';
import { styles } from '../../shared/stylesheet';
import * as Sound from '../../shared/sound';
import { Colors } from '../../shared/colors';

export const Chart = (props) => {
	const [label, setLabel] = useState(["None"]);
	const [value, setValue] = useState([5]);
	
	useEffect(() => {
		let labelList = [];
		let valueList = [];
		for (var key in props.chartData) {
			if (props.chartData.hasOwnProperty(key)) {
				labelList.push(key);
				valueList.push(props.chartData[key]);
			}
		}
		setLabel(labelList);
		setValue(valueList);
	}, [])
	return (
		
			<LineChart
				data={{
				labels: [...label],
				datasets: [
					{
					data: [...value]
					}
				]
				}}
				width={1000} // from react-native
				height={220}
				yAxisLabel="$"
				yAxisInterval={1} // optional, defaults to 1
				chartConfig={{
				backgroundColor: "#0f253b",
				backgroundGradientFrom: "#0f253b",
				backgroundGradientTo: "#0f253b",
				color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
				labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
				style: {
					borderRadius: 16
				},
				propsForDots: {
					r: "6",
					strokeWidth: "2",
					stroke: "#ffa726"
				}
				}}
				bezier
			/>
	)
}