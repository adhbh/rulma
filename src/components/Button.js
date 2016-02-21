import React from 'react';
import styles from './Button.css';
import classNames from 'classnames';

export default class Button extends React.Component {
	constructor(props) {
    	super(props);
    	this.color = props.type.color;
    	this.size = props.type.size;
    	this.style = props.type.style;
    	let defaultClass = styles.button;
    	let buttonClass = "";
    	switch (this.color) {
		  case 'primary':
		  	buttonClass = classNames(defaultClass, styles['is-primary']);
		    break;
		  case 'info':
		  	buttonClass = classNames(defaultClass, styles['is-info']);
		    break;
		  case 'success':
		  	buttonClass = classNames(defaultClass, styles['is-success']);
		    break;
		  case 'warning':
		  	buttonClass = classNames(defaultClass, styles['is-warning']);
		    break;
		  case 'danger':
		  	buttonClass = classNames(defaultClass, styles['is-danger']);
		    break;
		  default:
		    buttonClass = defaultClass;
		   	break;
		}
		switch (this.size) {
		  case 'small':
		  	buttonClass = classNames(buttonClass, styles['is-small']);
		    break;
		  case 'medium':
		  	buttonClass = classNames(buttonClass, styles['is-medium']);
		    break;
		  case 'large':
		  	buttonClass = classNames(buttonClass, styles['is-large']);
		    break;
		  default:
		    buttonClass = buttonClass;
		   	break;
		}

		switch (this.style) {
		  case 'outlined':
		  	buttonClass = classNames(buttonClass, styles['is-outlined']);
		    break;
		  case 'loading':
		  	buttonClass = classNames(buttonClass, styles['is-loading']);
		    break;
		  case 'disabled':
		  	buttonClass = classNames(buttonClass, styles['is-disabled']);
		    break;
		  default:
		    buttonClass = buttonClass;
		   	break;
		}

		this.buttonClass = buttonClass;
  	}
	render () {
		return (
				<a className = {this.buttonClass}>
  					Button
				</a>
			);
	}
}