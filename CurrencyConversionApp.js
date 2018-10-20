import React, { Component } from 'react';
import axios from 'axios';
import CCInputFields from './components/CCInputFields';
import CCHistoryPlotter from './components/CCHistoryPlotter';
import CCFooter from './components/CCFooter';

class CurrencyConversionApp extends Component {

	constructor( props ) {
		super( props );

		const date = new Date();
		const startDate = parseFloat( ( date.getDate() < 10 ? '0' : '') + date.getDate() ) - 10;

		this.state = {
			baseCurrency: 'USD',
			counterCurrency: 'INR',
			startDate: `2018-10-${ startDate }`,
			endDate: date.toISOString().slice( 0,10 ),
			rates: {}
		}

		this.changeBaseCurrency = this.changeBaseCurrency.bind( this );
		this.changeCounterCurrency = this.changeCounterCurrency.bind( this );
	}

	componentDidMount() {
		this.getExchangeData()
	}

	/**
	 * Fetched the forex data from the API
	 */
	getExchangeData() {
		const {
			baseCurrency,
			counterCurrency,
			startDate,
			endDate
		} = this.state;

		const apiUrl = `https://api.exchangeratesapi.io/history?start_at=${ startDate }&end_at=${ endDate }&base=${ baseCurrency }&symbols=${ counterCurrency }`;

		axios
			.get( apiUrl )
			.then( response => {
				this.setState({
					rates: 	response.data.rates,
				});
			})
	}

	/**
	 * Fires when the Base Currency is changed.
	 */
	changeBaseCurrency( selectBox ) {
		this.setState({
			baseCurrency: selectBox.value,
		}, function() {
			this.getExchangeData()
		})
	}

	/**
	 * Fires when the Counter Currency is changed.
	 */
	changeCounterCurrency( selectBox ) {
		this.setState({
			counterCurrency: selectBox.value,
		}, function() {
			this.getExchangeData()
		})
	}

	render() {
		return (
			<div className="currency-conversion-app">

				{/* Component for select fields to change base and counter currencies */}
				<CCInputFields
					baseCurrency={ this.state.baseCurrency }
					counterCurrency={ this.state.counterCurrency }
					onBaseCurrencyChange={ this.changeBaseCurrency }
					onCounterCurrencyChange={ this.changeCounterCurrency }
				/>

				{/* The Graph Component. */}
				<CCHistoryPlotter
					ratesData={ this.state.rates }
					counterCurrency={ this.state.counterCurrency }
				/>

				{/* Component for footer */}
				<CCFooter />
			</div>
		);
	}
}

export default class CCUi extends Component {

	render() {
		return(
			<div className="cc-site">

				{/* The main currency conversion app. */}
				<CurrencyConversionApp />
			</div>
		);
	}
}