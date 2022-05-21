import React, {useState}from 'react'

const Movie = ({name}) => {
	const [like,setLike] = useState(0);

	const increment = () => {
		setLike(like + 1);
	}

	return (
		<div className="">
			<h1>{name}</h1>
			<button onClick={increment}>Like!</button><p>{like}</p>
		</div>
	)
}

export default Movie
