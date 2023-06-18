import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import teil3 from '../data/teil3';
import Timer from '../components/Timer';

const Teil3 = () => {
	const { pruefung, tns, tn } = useParams();
	const navigate = useNavigate();
	const initialState = {
		step: 1,
		turn: 'a',
		aufgabe: tn === 'a' ? Math.floor(Math.random() * teil3.length) : '',
		pruefung,
		tns,
		tn,
	};

	const [teil3State, setTeil3State] = useState(initialState);

	// console.log(teil3[teil3State.aufgabe].situation);
	// console.log(teil3State);
	useEffect(() => {
		if (teil3State.tns === '1') {
			setTeil3State({ ...teil3State, step: 2 });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<h1 className='pt-3 title px-3'>Übung Teil III</h1>
			<h1 className='pb-3 px-3'>Lösung finden</h1>
			<div className='col-11 mx-auto'>
				{teil3State.step === 1 ? (
					teil3State.tn === 'a' ? (
						<>
							<p className='text-light fs-5'>
								Bitte geben Sie Ihrem/er Partner/in die folgende Nummer, um die
								gleich Thema zu bekommen.
							</p>
							<div className='mx-auto col-6 p-4 my-5 h1 card-btn '>
								<p>{`${teil3State.aufgabe}`}</p>
							</div>
							<div
								className='col-8 mx-auto p-3 h2 card-btn my-4 text-dark'
								onClick={() => {
									setTeil3State({ ...teil3State, step: 2 });
								}}
							>
								weiter
							</div>
						</>
					) : (
						<>
							<p className='text-light fs-5'>
								Bitte geben Sie die Nummer ein, die Ihnen Ihr/e Partner/in
								mitteilt, um die gleich Thema zu bekommen.
							</p>
							<div className='mx-auto col-6 p-4 my-5 h1 card-btn '>
								<input
									placeholder='00'
									value={teil3State.aufgabe}
									onChange={(e) =>
										setTeil3State({ ...teil3State, aufgabe: e.target.value })
									}
								/>
							</div>
							<div
								className='col-8 mx-auto p-3 h2 card-btn my-4 text-dark'
								onClick={() => {
									setTeil3State({ ...teil3State, step: 2 });
								}}
							>
								weiter
							</div>
						</>
					)
				) : (
					<>
						<p className='text-light my-2 fs-6 col-10 mx-auto'>
							Bitte führen Sie ein Gespräch mit Ihrem/er Partner/ir, um eine
							Lösung zum folgende Situation zu finden.
						</p>
						<div className='mx-auto p-3 h4 card-btn my-2 d-flex flex-column justify-content-around align-items-center'>
							<p className='col-11 text-start text-font mx-auto'>
								<strong>Situation: </strong>
								{teil3[teil3State.aufgabe].situation}
							</p>
							<p className='col-11 text-start text-font mx-auto'>
								<strong>Aufgabe: </strong>
								{teil3[teil3State.aufgabe].aufgabe}
							</p>
							<p className='col-11 text-start text-font mx-auto fs-6'>
								<strong>{teil3[teil3State.aufgabe].stickpunkte[0][0]}: </strong>
								{teil3[teil3State.aufgabe].stickpunkte[0][1]}
							</p>
							<p className='col-11 text-start text-font mx-auto fs-6'>
								<strong>{teil3[teil3State.aufgabe].stickpunkte[1][0]}: </strong>
								{teil3[teil3State.aufgabe].stickpunkte[1][1]}
							</p>
							<p className='col-11 text-start text-font mx-auto fs-6'>
								<strong>{teil3[teil3State.aufgabe].stickpunkte[2][0]}: </strong>
								{teil3[teil3State.aufgabe].stickpunkte[2][1]}
							</p>
							<p className='col-11 text-start text-font mx-auto fs-6'>
								<strong>{teil3[teil3State.aufgabe].stickpunkte[3][0]}: </strong>
								{teil3[teil3State.aufgabe].stickpunkte[3][1]}
							</p>
						</div>
					</>
				)}

				<Timer />
				<div
					className='col-6 mx-auto p-3 h2 card-btn my-3 bg-danger'
					onClick={() => {
						navigate(`/`);
					}}
				>
					Benden
				</div>
			</div>
		</div>
	);
};

export default Teil3;
