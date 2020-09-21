/**
*
* utils.js
* Declare all application utils
*
* @author - Ahamed
* @date   - 20 September 2020
*
***/
// REACT NATIVE IMPORT
import React from 'react';
import { Alert, View, Text, Platform } from 'react-native';
import Device from 'react-native-device-detection';

// ALL SHARED FILES
import * as Constant from './constant';


/**
* Feature used to generate date
*
* @input  NA
* @return NA
*/
export const getFormattedDate = (now, days = 0) => {
  // MINUS DAYS
  now.setDate(now.getDate() - days);
  // GET FULL YEAR
  let year = now.getFullYear().toString();
  // GET FULL MONTH
  let month = parseInt(now.getMonth()) + 1;
  month = (month >= 10) ? month : "0" + month;
  // GET FULL DAY
  let day = parseInt(now.getDate());
  day = (day >= 10) ? day : "0" + day;
  // FORMATTED DATE
  let formattedDate = year.concat("-", month, "-", day);
  console.log("formattedDate: " + formattedDate);
  return formattedDate;
}


/**
* Feature used to find wheather its ipad or not
*
* @return Array   
*/
export const isIpad = () => {
  let isPad = false;
  if (Platform.OS === 'ios' && Device.isTablet) {
    isPad = true;
  }
  return isPad
}