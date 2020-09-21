/**
*
* CHART.js
* Chart component
*
* @author - Ahamed
* @date   - 20 September 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, StatusBar, ScrollView, Dimensions} from 'react-native';
import {LineChart} from "react-native-chart-kit";

export const Chart = (props) => {

	// STATE VARIABLE DECLARE
	const [label, setLabel] = useState(["None"]);
	const [value, setValue] = useState([5]);
	
	useEffect(() => {
		// GENERATING LABLE AND VALUE DATA LIST
		let labelList = [];
		let valueList = [];
		for (var key in props.chartData) {
			if (props.chartData.hasOwnProperty(key)) {
				labelList.push(key);
				valueList.push(props.chartData[key]);
			}
		}
		// SETTING INSIDE THE STATE
		setLabel(labelList);
		setValue(valueList);
	}, [])
	return (
		<>
			<LineChart
				data={{
				labels: [...label],
				datasets: [
					{
					data: [...value]
					}
				]
				}}
				width={ value.length < 3 ? Dimensions.get("window").width : value.length * 100} // from react-native
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
		</>
	)
}