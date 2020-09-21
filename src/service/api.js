/**
*
* api.js
* Handle API Service
*
* @author - Faizal
* @date   - 20 September 2020
*
***/
// REACT NATIVE IMPORT
import React from 'react';

/**
* Post API
*
* @input  String URL
* @input  String Body
* @return NA
*/
export const post = ({URL, body}) => {
	let token = "1234567890";
	return new Promise((resolve, reject) => {
		// FETCH REQUEST
		fetch(URL, {
			method: 'POST', // or 'PUT'
	      	body: JSON.stringify({...body, token: token}),
			headers: {
		        'Cache-Control': 'no-cache'
		    }
		})
		.then((response) => response.json())
		.then((data) => {
			resolve(data);
		}).catch((error) => {
			console.log(error);
			reject(error);
		});
	});	
};

/**
* Get API
*
* @input  String URL
* @return NA
*/
export const get = ({URL}) => {
	return new Promise((resolve, reject) => {
		// FETCH REQUEST
		fetch(URL, {
			headers: {
				'Cache-Control': 'no-cache'
			}
		})
		.then((response) => response.json())
		.then((data) => {
			// SAVE THE PROMISE RESOLVE
			resolve(data);
		}).catch((error) => {
			reject(error);
		});
	});	
};


/**
* Get API
*
* @input  String URL
* @return NA
*/
export const local = (jsonPath) => {
	return new Promise((resolve, reject) => {
		// FETCH REQUEST
		fetch(jsonPath, {
			headers: {
				'Cache-Control': 'no-cache'
			}
		})
		.then((response) => response.json())
		.then((data) => {
			// SAVE THE PROMISE RESOLVE
			resolve(data);
		}).catch((error) => {
			reject(error);
		});
	});	
};