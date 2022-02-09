import React from 'react';

const Header = (props) => {

	const {value1, value2} = props

	return (
		<div className='head'>
			<div className="course" >Курс USD: {Number.parseFloat(value1.UAH).toFixed(2)}</div>
			<div className="course" >Курс EUR: {Number.parseFloat(value2.UAH).toFixed(2)}</div>
		</div>
	);
};

export default Header;