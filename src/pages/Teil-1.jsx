import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Loading from '../components/Loading/Loading';

import Teil1active from '../components/Teil-1-active';
import teil1 from '../data/teil1';
import InactiveTN from '../components/InactiveTN';
import Timer from '../components/Timer';

const Teil1 = () => {
	const { pruefung, tns, tn } = useParams();
	const navigate = useNavigate();
	const initialState = {
		step: 1,
		turn: 'a',
		themas: null,
		themaSelected: null,
		pruefung,
		tns,
		tn,
	};

	const [teil1State, setTeil1State] = useState(initialState);

	// console.log(teil1State);
	const textWithStrong = (testArray) => {
		let finalText = ``;

		for (let i = 0; i < testArray.length; i++) {
			const elem = testArray[i];
			const elemTyp = elem[0];
			const elemText = elem[1];

			if (elemTyp === 2) {
				finalText += ` <strong>${elemText}</strong> `;
			} else {
				finalText += elemText;
			}
		}

		return finalText;
	};

	useEffect(() => {
		const thema1 = Math.floor(Math.random() * teil1.length);
		let thema2 = Math.floor(Math.random() * teil1.length);

		while (thema2 === thema1) {
			thema2 = Math.floor(Math.random() * teil1.length);
		}
		setTeil1State({ ...teil1State, themas: [thema1, thema2] });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (teil1State.themas) {
		return (
			<div>
				<h1 className='py-3 title px-3'>Übung Teil I</h1>
				{teil1State.step === 1 ? (
					(teil1State.tn === 'a' && teil1State.turn === 'a') ||
					(teil1State.tn === 'b' && teil1State.turn === 'b') ? (
						<Teil1active
							teil1State={teil1State}
							setTeil1State={setTeil1State}
							textWithStrong={textWithStrong}
						/>
					) : (
						<InactiveTN teil1State={teil1State} setTeil1State={setTeil1State} />
					)
				) : teil1State.step === 2 ? (
					<div className='my-3 text-light col-9 mx-auto'>
						<h4 className='text-dark my-4'>
							Bitte presentieren Sie einen Vortrag (ca. 2 min)
						</h4>
						<div className='mx-auto p-3 h4 card-btn my-2 d-flex flex-column justify-content-around align-items-center text-dark'>
							<h3 className='my-3'>{`Thema Nummer: ${
								teil1[teil1State.themaSelected].nummer
							}`}</h3>
							<p
								className='fs-6'
								dangerouslySetInnerHTML={{
									__html: textWithStrong(teil1[teil1State.themaSelected].text),
								}}
							></p>
						</div>
						<Timer/>

						<div
							className='col-8 mx-auto p-2 h2 card-btn my-5 text-dark'
							onClick={() => {
								setTeil1State({ ...teil1State, step: 3 });
							}}
						>
							Frage
						</div>
						<div
							className='col-6 mx-auto p-3 h2 card-btn my-5 bg-danger text-dark'
							onClick={() => {
								setTeil1State({ ...teil1State, step: 1 });
							}}
						>
							Cancel
						</div>
					</div>
				) : (
					<div className='my-3 text-light col-9 mx-auto'>
						{teil1State.tns === '2' && (
							<>
								<h4 className='text-dark my-4'>
									Bitten Sie Ihr/e Partner/in um eine Frage über die Thema zu
									stellen
								</h4>
								<p className='fs-4'>und/oder</p>
							</>
						)}
						<h4 className='text-dark py-2'>
							Bitte Antworten Sie die folgende Frage:
						</h4>

						{teil1State.themaSelected && (
							<div className='mx-auto p-3 h4 card-btn my-2 d-flex flex-column justify-content-around align-items-center text-dark'>
								<h3 className='my-3'>{`${
									teil1[teil1State.themaSelected].fragen[
										Math.floor(
											Math.random() *
												teil1[teil1State.themaSelected].fragen.length
										)
									]
								}`}</h3>
							</div>
						)}
						{teil1State.tns === '1' && teil1State.pruefung === 'a' ? (
							<div
								className='col-8 mx-auto p-3 h2 card-btn my-4 text-dark'
								onClick={() => {
									navigate(`/teil-2/a/${teil1State.tns}/${teil1State.tn}`);
								}}
							>
								weiter
							</div>
						) : teil1State.pruefung === 'a' && teil1State.turn === 'a' ? (
							<div
								className='col-8 mx-auto p-3 h2 card-btn my-4 text-dark'
								onClick={() => {
									setTeil1State({ ...teil1State, turn: 'b', step: 1 });
								}}
							>
								weiter
							</div>
						) : teil1State.pruefung === 'a' && teil1State.turn === 'b' ? (
							<div
								className='col-8 mx-auto p-3 h2 card-btn my-4 text-dark'
								onClick={() => {
									navigate(`/teil-2/a/${teil1State.tns}/${teil1State.tn}`);
								}}
							>
								weiter
							</div>
						) : (
							<div
								className='col-8 mx-auto p-3 h2 card-btn my-4 text-dark'
								onClick={() => {
									setTeil1State({ ...teil1State, turn: 'b', step: 1 });
								}}
							>
								weiter
							</div>
						)}
						<div
							className='col-6 mx-auto p-3 h2 card-btn my-5 bg-danger text-dark'
							onClick={() => {
								navigate(`/`);
							}}
						>
							Benden
						</div>
					</div>
				)}
			</div>
		);
	} else {
		return <Loading />;
	}
};

export default Teil1;
