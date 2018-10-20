import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';

export default class CCHistoryPlotter extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			"ratesData": [],
		};
	}

	componentWillReceiveProps( nextProps ) {
		this.restructureGraphData( nextProps.ratesData )
	}

	/**
	 * Restructure Graph Data for plotting Line Graph.
	 */
	restructureGraphData( ratesData ) {

		let sortedRatesData = this.sortObjectByKey( ratesData );

		let ratesDataArray = [];

		for( let year in sortedRatesData ) {
			ratesDataArray.push({
				"x": year,
				"y": parseFloat( sortedRatesData[ year ][ this.props.counterCurrency ] ).toFixed( 3 ),
			})
		}

		this.setState({
			ratesData: [{
				"id": "INR",
				"data": ratesDataArray,
			}]
		});
	}

	/**
	 * Sorts object array by its key.
	 */
	sortObjectByKey( o ) {
		var sorted = {},
		key, a = [];
	
		for ( key in o ) {
			if ( o.hasOwnProperty( key ) ) {
				a.push( key );
			}
		}
	
		a.sort();
	
		for ( key = 0; key < a.length; key++ ) {
			sorted[ a[ key ] ] = o[ a[ key ] ];
		}

		return sorted;
	}

	render() {
		const graphPlotterCss = {
			width: '100%',
			'height': '600px',
		}

		return(
			<div className="cc-graph-plotter" style={ graphPlotterCss }>
				<ResponsiveLine
					data={ this.state.ratesData }
					margin={{
						"top": 50,
						"right": 60,
						"bottom": 50,
						"left": 60
					}}
					xScale={{
						"type": "point"
					}}
					yScale={{
						"type": "linear",
						"stacked": true,
						"min": "auto",
						"max": "auto"
					}}
					minY="auto"
					maxY="auto"
					stacked={false}
					axisBottom={{
						"orient": "bottom",
						"tickSize": 5,
						"tickPadding": 5,
						"tickRotation": 0,
						"legend": "Dates",
						"legendOffset": 46,
						"legendPosition": "center"
					}}
					axisLeft={{
						"orient": "left",
						"tickSize": 5,
						"tickPadding": 5,
						"tickRotation": 0,
						"legend": "Value",
						"legendOffset": -50,
						"legendPosition": "center"
					}}
					colors="#1f78b4"
					dotSize={10}
					dotColor="inherit:darker(0.3)"
					dotBorderWidth={2}
					dotBorderColor="#ffffff"
					enableDotLabel={true}
					dotLabel="y"
					dotLabelYOffset={-12}
					animate={true}
					motionStiffness={90}
					motionDamping={15}
					legends={[
						{
							"anchor": "bottom-right",
							"direction": "column",
							"justify": false,
							"translateX": 100,
							"translateY": 0,
							"itemsSpacing": 0,
							"itemDirection": "left-to-right",
							"itemWidth": 80,
							"itemHeight": 20,
							"itemOpacity": 0.75,
							"symbolSize": 12,
							"symbolShape": "circle",
							"symbolBorderColor": "rgba(0, 0, 0, .5)",
							"effects": [
								{
									"on": "hover",
									"style": {
										"itemBackground": "rgba(0, 0, 0, .03)",
										"itemOpacity": 1
									}
								}
							]
						}
					]}
				/>
			</div>
		)
	}
}
