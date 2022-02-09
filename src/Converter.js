import React, {useState, useEffect, useMemo} from 'react';

const Converter = () => {

	const [firstValue, setFirtsValue] = useState('UAH')
	const [secondValue, setSecondValue] = useState('USD')
	const [firstInput, setFirstInput] = useState(1)
	const [secondInput, setSecondInput] = useState(1)
	const [rate, setRate] = useState(0)

	

	const getConvertedValue = async () => {
		await fetch(`https://api.fastforex.io/fetch-one?from=${firstValue}&to=${secondValue}&api_key=645c5d4126-d8f523bde8-r6yjey`)
		.then(res => res.json()) 
		.then(data  => {
			return setRate(+Object.values(data.result))
		})

	}

	const getConvertedInput1 = () => {
			setSecondInput(firstInput * rate)
	}

	const getConvertedInput2 = () => {
		setFirstInput(secondInput / rate)
}

	useEffect(() => {
		getConvertedValue()
		getConvertedInput1()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [firstInput, firstValue, rate])

	useEffect(() => {
		getConvertedValue()
		getConvertedInput2()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [secondValue, secondInput])

	useMemo(() => {
		getConvertedValue()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rate])

	console.log(firstValue,secondValue, rate)

	return (
		<div className='userInputs'>
			<div>
				<input type="number" value={firstInput} onChange={e => setFirstInput(e.target.value)}/>
				<select onChange={e => setFirtsValue(e.target.value)}>
					<option value="UAH">UAH</option>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
				</select>
			</div>
			<div>
				<input type="number" value={secondInput} onChange={e => setSecondInput(e.target.value)}/>
				<select onChange={e => setSecondValue(e.target.value)}>
					<option value="USD">USD</option>
					<option value="UAH">UAH</option>
					<option value="EUR">EUR</option>
			</select>
			</div>
		</div>
	);
};

export default Converter;