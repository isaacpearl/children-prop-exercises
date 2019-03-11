import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function ErrorBox({ children }) {
	return(
		<div className="error-box">
			<span className="alert-icon"><i className="fas fa-exclamation-triangle"/></span>
			<span className="text">{children}</span>
		</div>
	);
}

function Nav ({ children }) {
	return(
		<div className="nav-bar">
			{children.map((child, i) => <div key={i}> {child} </div>)}
		</div>
	);
}
/*
the below function is from https://stackoverflow.com/questions/27366077/only-allow-children-of-a-specific-type-in-a-react-component, 
understand this better before moving on!
*/
Nav.propTypes = {
	children: function (props, propName, componentName) {
	    const prop = props[propName]

	    var error = null;
	    React.Children.forEach(prop, function (child) {
	      if (child.type !== NavItem) {
	        error = new Error('`' + componentName + '` children should be of type `NavItem`.');
	      }
	    })
	    return error
  }
}

function NavItem({ url, children }) {
	return (	
		<a className="nav-item" href={url}>{children}</a>
	);
}

ReactDOM.render(
	<div>
		<ErrorBox>
			The world is ending
		</ErrorBox>
		<Nav>
			<NavItem url='/'>Home</NavItem>
			<NavItem url='/about'>About</NavItem>
			<NavItem url='/contact'>Contact</NavItem>
		</Nav>
	</div>,
	document.querySelector('#root'));