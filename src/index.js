import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import WeatherWidget from 'weather-widget-react';

class Weather extends React.Component {
	render() {

		return (
		  	<WeatherWidget
    			apiKey='7cc0a3060e58f17a24e70b46ad9ed851'
    			position='top-left'
    			location='London'
    			units='metric'
    			lang='eng'
			/>	
		)
	}
}


ReactDOM.render(
	<WeatherWidget />,
	document.getElementById('root')
	);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
