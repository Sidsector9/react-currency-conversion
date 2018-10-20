import React, { Component } from 'react';
import supportedCurrenices from '../supported-countries';
import Select from 'react-select';

const ccSelectTheme = ( theme ) => {
	return {
		...theme,
		borderRadius: 0,
		colors: {
			...theme.colors,
			primary25: '#eee',
			primary: '#444'
		}
	}
}

export default class CCInputFields extends Component {

	/**
	 * Returns array of object for <option> tags.
	 */
	supportedCurrencyList() {
		return supportedCurrenices.map( ( currency, index ) => {
			return {
				value: currency,
				label: currency,
			}
		})
	}

	render() {
		
		return (
			<div className="cc-form-fields">
				<div className="cc-select-fields">
					<Select
						onChange={ this.props.onBaseCurrencyChange }
						options={ this.supportedCurrencyList() }
						placeholder="USD"
						theme={ ccSelectTheme }
					/>

					<div><i className="material-icons">keyboard_arrow_right</i></div>

					<Select
						onChange={ this.props.onCounterCurrencyChange }
						options={ this.supportedCurrencyList() }
						placeholder="INR"
						theme={ ccSelectTheme }
					/>
				</div>
			</div>
		)
	}
}
