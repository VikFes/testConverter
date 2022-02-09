import React, { useState, useEffect} from 'react';
import './App.css';
import Converter from './Converter';
import Header from './Header';


function App() {

	const [value1, setVaue1] = useState({});
	const [value2, setVaue2] = useState({});

	const fething = async () => {
		await fetch(`https://api.fastforex.io/fetch-one?from=USD&to=UAH&api_key=645c5d4126-d8f523bde8-r6yjey`)
		.then(res => res.json())
		 .then( data => setVaue1(data.result))

		await fetch(`https://api.fastforex.io/fetch-one?from=EUR&to=UAH&api_key=645c5d4126-d8f523bde8-r6yjey`)
		.then(res => res.json())
		.then( data => setVaue2(data.result))
	}

	useEffect( () =>   {
		fething()
			setVaue1({});
			setVaue2({})

	}, [])

  return (
    <div>
		<Header value1={value1} value2={value2}/>
		<Converter/>
    </div>
  );
}

export default App;