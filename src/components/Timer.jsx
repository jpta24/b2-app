import React, { useState, useEffect } from 'react';
import { BsPlayCircle,BsPauseCircle } from 'react-icons/bs';
import { MdRestartAlt } from 'react-icons/md';


const Timer = () => {
	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);

	useEffect(() => {
		let intervalId;

		if (running) {
			intervalId = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [running]);

	const formatTime = () => {
		const minutes = Math.floor(time / 60)
			.toString()
			.padStart(2, '0');
		const seconds = (time % 60).toString().padStart(2, '0');
		return `${minutes}:${seconds}`;
	};

	const handlePlayClick = () => {
		setRunning(!running);
	};

	return (
		<div className='col-8 mx-auto py-3 text-dark h1 card-btn my-3 d-flex justify-content-center'>
			{running ? (
				<span className='mx-3' onClick={handlePlayClick}>
                    <BsPauseCircle/>
				</span>
			) : (
				<span className='mx-3' onClick={handlePlayClick}>
					<BsPlayCircle/>
				</span>
			)}

			<div className='col-4'>{formatTime()}</div>
			{!running &&
				<span className='mx-3' onClick={()=>setTime(0)}>
					<MdRestartAlt/>
				</span>
			}
		</div>
	);
};

export default Timer;
