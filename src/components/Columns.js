import React from 'react';
import styles from './Column.css';
import Column from './Column';
import classNames from 'classnames';

export default class Columns extends React.Component {
	constructor(props) {
    	super(props);
    	this.gapless = props.gapless;
    	this.multiline = props.multiline;
    	let defaultClass = styles.columns;
    	let columnsClass = styles.columns;
    	if(this.gapless) {
    		columnsClass = classNames(defaultClass, styles['is-gapless']);
    	}
    	if(this.multiline) {
    		columnsClass = classNames(columnsClass, styles['is-gapless']);
    	}
		this.columnsClass = columnsClass;
  	}
	render () {
		return (
			<div className= {this.columnsClass} >
				{ this.props.children }
  			</div>
			);
	}
}