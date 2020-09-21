/**
*
* constants.js
* Declare all Constant variable
*
* @author - Ahamed
* @date   - 26 August 2020
*
***/

// DECLARE GENERIC CONSTANT
export const GENERIC = {
	CARD_PAIRS_VALUE: [10,13, 43, 89, 67, 52, 10,13, 43, 89, 67, 52], 
	TOTAL_CARD      : 12,
	DISABLE_LOG     : true,
	STATUS_BAR: 'dark-content',
	CLICK_AUDIO: require('../../assets/audio/clicked.mp3'),
	FLIP_AUDIO: require('../../assets/audio/flip.mp3'),
	CORRECT_AUDIO: require('../../assets/audio/correct.mp3'),
	WINNER_AUDIO: require('../../assets/audio/winner.mp3'),
	RESTART_AUDIO: require('../../assets/audio/restart.mp3'),
	WRONG_AUDIO: require('../../assets/audio/wrong.mp3')
}

export const URL = {
	BTC_CURRENT: "https://api.coindesk.com/v1/bpi/currentprice/USD.json",
	BTC_HISTORY: "https://api.coindesk.com/v1/bpi/historical/close.json",//?start=2020-09-21&end=2020-08-22
}