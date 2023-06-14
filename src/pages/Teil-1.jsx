import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Loading from '../components/Loading/Loading';
import teil1 from '../data/teil1';

const Teil1 = () => {
	const { pruefung, tn } = useParams();
	const navigate = useNavigate();
	// console.log(teil1);
	const [step, setStep] = useState(1);

	const [themas, setThemas] = useState(null);
	const [themaSelected, setThemaSelected] = useState(null);

	useEffect(() => {
		const thema1 = Math.floor(Math.random() * teil1.length);
		let thema2 = Math.floor(Math.random() * teil1.length);

		while (thema2 === thema1) {
			thema2 = Math.floor(Math.random() * teil1.length);
		}

		setThemas([thema1, thema2]);
	}, []);

	if (themas) {
		return (
			<div>
				<h1 className='py-4 title px-3'>Übung Teil I</h1>
				{step === 1 ? (
					<div className='my-3 col-9 mx-auto'>
						<h3 className='text-light'>Bitte wählen Sie ein Thema aus</h3>
						<div className='d-flex flex-column'>
							<div
								className='mx-auto p-3 h4 card-btn my-3 d-flex flex-column justify-content-around align-items-center'
								onClick={() => {
									setStep(2);
									setThemaSelected(themas[0]);
								}}
							>
								<h5>{`Thema Nummer: ${teil1[themas[0]].nummer}`}</h5>
								<p className='fs-5'>{`${teil1[themas[0]].text}`}</p>
							</div>
							<h4 className='text-light'>oder</h4>
							<div
								className='mx-auto p-3 h4 card-btn my-3 d-flex flex-column justify-content-around align-items-center'
								onClick={() => {
									setStep(2);
									setThemaSelected(themas[1]);
								}}
							>
								<h5>{`Thema Nummer: ${teil1[themas[1]].nummer}`}</h5>
								<p className='fs-5'>{`${teil1[themas[1]].text}`}</p>
							</div>
						</div>
						<div
							className='col-6 mx-auto p-3 h2 card-btn my-5 bg-danger'
							onClick={() => {
								navigate(`/`)
							}}
						>
							Cancel
						</div>
					</div>
				) : step === 2 ? (
					<div className='my-3 text-light col-9 mx-auto'>
						<h4 className='text-dark my-4'>
							Bitte presentieren Sie einen Vortrag (ca. 2 min)
						</h4>
						<h3 className='my-3'>{`Thema Nummer: ${teil1[themaSelected].nummer}`}</h3>
						<p className='fs-4'>{`${teil1[themaSelected].text}`}</p>
						<div
							className='col-8 mx-auto p-2 h2 card-btn my-5 text-dark'
							onClick={() => {
								setStep(3);
							}}
						>
							Frage
						</div>
						<div
							className='col-6 mx-auto p-3 h2 card-btn my-5 bg-danger'
							onClick={() => {
								setStep(1);
							}}
						>
							Cancel
						</div>
					</div>
				) : (
					<div className='my-3 text-light col-9 mx-auto'>
						{tn === '2' && (
							<>
								<h4 className='text-dark my-4'>
									Bitten Sie Ihr/e Partner/in um eine Frage über die Thema zu
									stellen
								</h4>
								<p className='fs-4'>oder</p>
							</>
						)}
						<h4 className='text-dark'>
							Bitte Antworten Sie die folgende Frage:
						</h4>

						{themaSelected && <h3 className='my-3'>{`${
							teil1[themaSelected].fragen[
								Math.floor(Math.random() * teil1[themaSelected].fragen.length)
							]
						}`}</h3>}
						{pruefung === 'a' && (
							<div
								className='col-8 mx-auto p-3 h2 card-btn my-5 text-dark'
								onClick={() => {
									navigate(`/teil-2/a/${tn}`)
								}}
							>
								weiter
							</div>
						)}
						<div
							className='col-6 mx-auto p-2 h2 card-btn my-5 bg-danger'
							onClick={() => {
								setStep(1);
							}}
						>
							Ende
						</div>
					</div>
				)}
			</div>
		);
	} else {
		<Loading />;
	}
};

export default Teil1;
