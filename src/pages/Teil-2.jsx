import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Loading from '../components/Loading/Loading';

import teil2 from '../data/teil2';

const Teil2 = () => {
	const { pruefung, tns, tn } = useParams();
	const navigate = useNavigate();
	const initialState = {
		turn: 'a',
		frage: null,
		pruefung,
		tns,
		tn,
	};

	const [teil2State, setTeil2State] = useState(initialState);

	// console.log(teil2State);

	useEffect(() => {
		const frage = Math.floor(Math.random() * teil2.length);
		setTeil2State({ ...teil2State, frage });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (teil2State.frage) {
		return (
			<div>
				<h1 className='pt-3 title px-3'>Übung Teil II</h1>
				<h1 className='pb-3 px-3'>Kollegen Gespräch</h1>
				{teil2State.tn === teil2State.turn ? (
					<div className='my-2 col-9 mx-auto'>
						{teil2State.tns === '2' ? (
							<h4 className='text-light '>
								Bitte lesen Sie den folgende Text vor und unterhalten Sie ca. 2
								min{' '}
							</h4>
						) : (
							<h4 className='text-light '>
								Überlegen Sie, wie Sie diese Frage beantworten würden, um ein
								Gespräch zu beginnen.
							</h4>
						)}

						<div className='mx-auto p-3 h4 card-btn my-2 d-flex flex-column justify-content-around align-items-center'>
							<p className='fs-4'>{teil2[teil2State.frage]}</p>
						</div>

						{((teil2State.pruefung === 'a' &&
							teil2State.tns === '2' &&
							teil2State.turn === 'a') ||
							(teil2State.pruefung === '2' &&
								teil2State.tns === '2' &&
								teil2State.turn === 'a')) && (
							<div
								className='col-8 mx-auto p-3 h2 card-btn my-4 text-dark'
								onClick={() => {
									setTeil2State({ ...teil2State, turn: 'b' });
								}}
							>
								weiter
							</div>
						)}
						{((teil2State.pruefung === 'a' && teil2State.tns === '1') ||
							(teil2State.pruefung === 'a' &&
								teil2State.tns === '2' &&
								teil2State.turn === 'b')) && (
							<div
								className='col-8 mx-auto p-3 h2 card-btn my-4 text-dark'
								onClick={() => {
									navigate(`/teil-3/a/${teil2State.tns}/${teil2State.tn}`);
								}}
							>
								weiter
							</div>
						)}
						<div
							className='col-6 mx-auto p-3 h2 card-btn my-3 bg-danger'
							onClick={() => {
								navigate(`/`);
							}}
						>
							Ende
						</div>
					</div>
				) : (
					<div>
						<h2 className='text-light my-5 col-10 mx-auto'>
							Bitte achten Sie auf die Frage Ihres Partners, um eine
							Antwort zu geben und eine Gespräch ca. 2 min zu führen.
						</h2>
						<div
							className='col-8 mx-auto p-3 h2 card-btn my-5 text-dark'
							onClick={() => {
								teil2State.turn === 'a'
									? setTeil2State({ ...teil2State, turn: 'b' })
									: teil2State.pruefung === 'a'
									? navigate(`/teil-3/a/${teil2State.tns}/${teil2State.tn}`)
									: navigate(`/`);
							}}
						>
							weiter
						</div>
                        <div
							className='col-6 mx-auto p-3 h2 card-btn my-3 bg-danger'
							onClick={() => {
								navigate(`/`);
							}}
						>
							Ende
						</div>
					</div>
				)}
			</div>
		);
	} else {
		return <Loading />;
	}
};

export default Teil2;
