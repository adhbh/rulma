import React from 'react';
import styles from './Column.css';
import classNames from 'classnames';

export default class Column extends React.Component {
	constructor(props) {
    	super(props);
    	this.size = props.type.size;
    	this.number = props.type.number;
    	let defaultClass = styles.column;
    	let columnClass = "";
    	switch (this.color) {
		  	case 'half':
		  		columnClass = classNames(defaultClass, styles['is-half']);
		    	break;
		 	 case 'third':
		  		columnClass = classNames(defaultClass, styles['is-third']);
		    	break;
		  	case 'quarter':
		  		columnClass = classNames(defaultClass, styles['is-quarter']);
		    	break;
		  	default:
		    	columnClass = defaultClass;
		   		break;
		}

		switch (this.number) {
		  	case 2:
		  		columnClass = classNames(columnClass, styles['is-2']);
		    	break;
		  	case 3:
		  		columnClass = classNames(columnClass, styles['is-3']);
		    	break;
		  	case 4:
		  		columnClass = classNames(columnClass, styles['is-4']);
		    	break;
		  	case 5:
		  		columnClass = classNames(columnClass, styles['is-5']);
		    	break;
		  	case 6:
		  		columnClass = classNames(columnClass, styles['is-6']);
		    	break;
		  	case 7:
		  		columnClass = classNames(columnClass, styles['is-7']);
		  		break;
		    case 8:
		  		columnClass = classNames(columnClass, styles['is-8']);
		    	break;
		    case 9:
		  		columnClass = classNames(columnClass, styles['is-9']);
		    	break;
		    case 10:
		  		columnClass = classNames(columnClass, styles['is-10']);
		    	break;
		    case 11:
		  		columnClass = classNames(columnClass, styles['is-11']);
		    	break;
		    case 12:
		  		columnClass = classNames(columnClass, styles['is-12']);
		    	break;
		  	default:
		    	columnClass = columnClass;
		   		break;
		}

		this.columnClass = columnClass;
  	}
	render () {
		return (
			<div className= {this.columnClass} >
    			{ this.props.children }
  			</div>
			);
	}
}