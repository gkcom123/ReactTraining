import React from 'react';
import PropTypes from 'prop-types';

const HelloStateless = ({name}) => {
	const sayHi = (event) => {
		alert(`hi ${name}`);
	};
	return (
		<div> 
			<button href="#" onClick={sayHi}> Hello {name}</button>
		</div>
		);
};
HelloStateless.propTypes = {
	name: PropTypes.string.isRequired
};
export default HelloStateless;