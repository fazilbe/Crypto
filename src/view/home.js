/**
*
* home.js
* Game start screen
*
* @author - Ahamed
* @date   - 26 August 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL SHARED FILES
import * as Utils from '../shared/utils';
import * as Constant from '../shared/constant';
import { styles } from '../shared/stylesheet';
import * as API from '../service/api';
import { Chart } from '../component/complex/chart';

// ALL PAGE FILES
//import { MHeader  } from '../layout/header';

export const HomeScreen = ({ navigation }) => {

  const [state, setState] = useState({});
  const [currentBTC, setCurrentBTC] = useState({});

  useEffect(() => {
    getCurrentBTC();
    getBTCHistory(30);
  }, [])

  /**
  * GET CURRENT BTC
  *
  * @input  NA
  * @return NA
  */
 const getCurrentBTC = () => {
    // FETCH ALL DATA 
    API.get({URL: Constant.URL.BTC_CURRENT}).then((result) => {
      // FORMAT DATA
      setCurrentBTC(result.bpi.USD);
      // HIDE LOADER
      //setIsLoading(false);
    }).catch((error) => {
      // HIDE LOADER
      //setIsLoading(false);
    });
  }

  /**
  * GET BTC HISTORY
  *
  * @input  NA
  * @return NA
  */
 const getBTCHistory = (days) => {
  var now = new Date();//2013-09-01
  var startDate = Utils.getFormattedDate(now);
  var endDate = Utils.getFormattedDate(now, days);
  
  // FETCH ALL DATA 
  API.get({URL: Constant.URL.BTC_HISTORY + "?start=" + endDate + "&end=" + startDate}).then((result) => {
    // FORMAT DATA
      setState(result.bpi);
    // HIDE LOADER
    //setIsLoading(false);
  }).catch((error) => {
    // HIDE LOADER
    //setIsLoading(false);
  });
}

  // RENDER HTML 
  return (
    <>
      <SafeAreaView style={[styles.safeViewContainer]}>
        <ScrollView style={[styles.body, styles.p0, styles.pt5]}>
          <View style={[styles.row, styles.cryptoRow]}>
            <View style={[styles.flex1]}>
              <Text style={[styles.cryptoLabel]}>BTC</Text>
            </View>
            <View style={[styles.flex2]}>
              <Text style={[styles.cryptoCost]}>$ {currentBTC.rate}</Text>
            </View>
          </View>
          <Text style={[styles.trackLabel]}>Last 30 days</Text>
		      <ScrollView horizontal={true}>
          <Chart chartData = {state}/>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
