/**
*
* stylesheet.js
* Declare all style details.
*
* @author - Ahamed
* @date   - 26 August 2020
*
***/
// REACT NATIVE IMPORT
import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL SHARED FILES
import { Colors } from './colors';
import { Setting } from './setting';
import { Fonts } from './fonts';
import  * as Utils from './utils';

/* LAYOUT - STARTS */
const layoutStyle ={
	safeViewContainer: {
    	flex: 1,
    	backgroundColor: '#191e23',
		justifyContent: 'flex-start',
	    alignItems: 'flex-start',
	},
	body: {
		flex: 1,
		paddingTop: Utils.isIpad() ? RFValue(10) : 20,
		paddingBottom: Utils.isIpad() ? RFValue(10) : 20,
		paddingHorizontal: Utils.isIpad() ? RFValue(5) : 20,
        flexDirection: 'column',
    	backgroundColor: '#071119',
    	marginHorizontal: 15,
    	marginTop: 15,
    	marginBottom: 15,
    	borderTopRightRadius: 20,
 		borderTopLeftRadius: 20,
    	borderBottomRightRadius: 20,
 		borderBottomLeftRadius: 20,
 		overflow: 'hidden',
		justifyContent: 'flex-start',
	    alignItems: 'flex-start',
	},
	headerContainer: {
	    height: RFValue(55),
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	headerTitle: {
		...Setting.fontWeightBolder,
		fontSize: Setting.sTextSize,
		textTransform: 'uppercase',
		alignItems:'center',
		letterSpacing: 2,
		color: Colors.grayDarkest,
		fontFamily: 'System',
	}
}
/* LAYOUT - ENDS */
/* CRYPTO PAGE - STARTS */
const cryptoPage = {
	cryptoRow: {
		color: Colors.white,
		...Setting.fontWeight600,
		fontSize: Setting.nTextSize,
		paddingHorizontal: 4,
		paddingTop: 15,
		paddingBottom: 15,
		marginBottom: 10
	},
	cryptoLabel: {
		color: Colors.white,
		...Setting.fontWeight400,
		fontSize: Setting.h2TextSize,
		textAlign: "left"
	},
	cryptoCost: {
		color: Colors.white,
		...Setting.fontWeight400,
		fontSize: Setting.h2TextSize,
		textAlign: "right"
	}
}
/* CRYPTO PAGE - ENDS */
/* ALIGN - STARTS */
const alignStyle = {
	centerView: {
		alignItems: "center",
		justifyContent: "center"
	},
	row: {
		flex: 1,
		flexDirection: 'row',
	},
	rowDirection: {
		flexDirection: 'row'
	},
	column: {
		flex: 1,
		flexDirection: 'column'
	},
	columnDirection: {
		flexDirection: 'column'
	},
}
/* ALIGN - ENDS */
/* FLEX - STARTS */
const flexStyle = {
	flex1: {
		flex: 1
	},
	flex2: {
		flex: 2
	},
	flex3: {
		flex: 3
	},
	flex4: {
		flex: 4
	},
	flex5: {
		flex: 5
	},
	flex6: {
		flex: 6
	},
	flex7: {
		flex: 7
	}
}
/* FLEX - ENDS */
/* IMAGES - STARTS */
const imagesStyle = {
	img200: {
		width: Utils.isIpad() ? RFValue(200) : RFValue(150),
		height: Utils.isIpad() ? RFValue(200) : RFValue(150),
	},
	img120: {
		width: RFValue(120),
		height: RFValue(120)
	}
}
/* IMAGES - ENDS */
/* SPECIAL ICONS - STARTS */
const specialIconStyle = {
}
/* SPECIAL ICONS - ENDS */
export const styles = StyleSheet.create({
	...layoutStyle,
	...alignStyle,
	...imagesStyle,
	...cryptoPage,
	...specialIconStyle,
	...flexStyle
});
