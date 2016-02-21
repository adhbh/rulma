import React from 'react';
import styles from './App.css';
import Button from './Button';

export default class App extends React.Component {
	render () {
		let primary = {color: 'primary'};
		let info = {color: 'info'};
		let success = {color: 'success'};
		let warning = {color: 'warning'};
		let danger = {color: 'danger'};
		let primaryBig = { size: 'large'}
		let dangerLargeLoading = {color:'primary', size:'large', style: 'loading'}
		return (
				<div>
					<h1>Rulma!</h1>
					<Button type= {primary} />
					<Button type= {info} />
					<Button type= {success} />
					<Button type= {warning} />
					<Button type= {danger} />
					<Button type= {primaryBig} />
					<Button type= {dangerLargeLoading} />
				</div>
			);
	}
}