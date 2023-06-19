import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import bewertung from '../data/bewertung';

const Bewertung = () => {
	const navigate = useNavigate();
	const initialState = {
		'1a': '',
		'1b': '',
		'1c': '',
		2: '',
		3: '',
		kii: '',
		kiii: '',
		kiv: '',
	};
	const [table, setTable] = useState(initialState);
	// console.log(!Object.values(table).includes(''));
	const initialBewerbungState = {
		showModal: false,
		step: 1,
	};

	const [bewertungState, setBewertungState] = useState(initialBewerbungState);

	// const totalPunkte = Object.values(table).filter(elem=>elem !==4).reduce((a,b)=>{return (a*1)+(b*1)})
	const erreichtPunkte = bewertung[0]
		.map(
			(item, i) => bewertung[1][bewertung[3][i]][table[bewertung[3][i]]]

			// {`${} / ${bewertung[1][bewertung[3][i]][table[bewertung[3][0]]]}`}
		)
		.filter((elem) => elem !== 'X')
		.reduce((a, b) => {
			return a * 1 + b * 1;
		});
	const totalPunkte = bewertung[0]
		.map((item, i) => bewertung[1][bewertung[3][i]][table[bewertung[3][i]]])
		.map((elem, i) => {
			if (elem !== 'X') {
				return bewertung[1][bewertung[3][i]][table[bewertung[3][0]]];
			} else {
				return 0;
			}
		})
		.reduce((a, b) => {
			return a * 1 + b * 1;
		});
	// console.log(totalPunkte);

	return (
		<div>
			<h1 className='py-3 title px-3'>Bewertung</h1>
			{bewertungState.step === 1 ? (
				<>
					<h4 className='text-dark my-4 col-11 mx-auto'>
						Bitte geben Sie die Bewertung ein, die Ihnen Ihr Bewerter gegeben
						hat. Wenn etwas Nicht bewert wurde, markieren Sie "X" ein.
					</h4>
					<table className='bg-light col-11 mx-auto'>
						<thead>
							<tr>
								<th className='border border-dark col-6'>Aufgabe</th>
								<th className='border border-dark'>A</th>
								<th className='border border-dark'>B</th>
								<th className='border border-dark'>C</th>
								<th className='border border-dark'>D</th>
								<th className='border border-dark'>X</th>
							</tr>
						</thead>
						<tbody>
							{bewertung[0].map((item, i) => (
								<tr key={uuidv4()}>
									<td
										className={`text-start border border-dark p-2`}
									>{`${bewertung[0][i]} ${bewertung[2][i]}`}</td>
									<td
										className={`border border-dark  ${
											table[bewertung[3][i]] === 0 ? 'bg-warning' : 'bg-light'
										}`}
										onClick={() => setTable({ ...table, [bewertung[3][i]]: 0 })}
									>
										{}
									</td>
									<td
										className={`border border-dark ${
											table[bewertung[3][i]] === 1 ? 'bg-warning' : 'bg-light'
										}`}
										onClick={() => setTable({ ...table, [bewertung[3][i]]: 1 })}
									></td>
									<td
										className={`border border-dark ${
											table[bewertung[3][i]] === 2 ? 'bg-warning' : 'bg-light'
										}`}
										onClick={() => setTable({ ...table, [bewertung[3][i]]: 2 })}
									></td>
									<td
										className={`border border-dark ${
											table[bewertung[3][i]] === 3 ? 'bg-warning' : 'bg-light'
										}`}
										onClick={() => setTable({ ...table, [bewertung[3][i]]: 3 })}
									></td>
									<td
										className={`border border-dark ${
											table[bewertung[3][i]] === 4 ? 'bg-warning' : 'bg-light'
										}`}
										onClick={() => setTable({ ...table, [bewertung[3][i]]: 4 })}
									></td>
								</tr>
							))}
						</tbody>
					</table>
					<div
						className='col-8 mx-auto p-3 h2 card-btn my-4 text-dark'
						onClick={() => {
							Object.values(table).includes('')
								? setBewertungState({ ...bewertungState, showModal: true })
								: setBewertungState({ ...bewertungState, step: 2 });
						}}
					>
						weiter
					</div>
				</>
			) : (
				<>
					<h4 className='text-dark my-4 col-11 mx-auto'>Sie haben erreicht:</h4>
					<div className='mx-auto col-11 px-1 py-4 h4 card-btn my-2'>
						<ul>
							{bewertung[0].map((item, i) => (
								<li
									key={uuidv4()}
									className={`text-start fs-3 py-1 d-flex justify-content-between col-11`}
								>
									<span>{`${bewertung[0][i]} ${bewertung[2][i]}`}</span>
									<span>{`${
										bewertung[1][bewertung[3][i]][table[bewertung[3][i]]]
									} / ${
										bewertung[1][bewertung[3][i]][table[bewertung[3][0]]]
									}`}</span>
								</li>
							))}
						</ul>

						<h2>{`TOTAL ${erreichtPunkte} / ${totalPunkte}`}</h2>
						<h2>{`${(erreichtPunkte / totalPunkte) * 100}%`}</h2>
					</div>
				</>
			)}
			<div
				className='col-6 mx-auto p-3 h2 card-btn my-5 bg-danger text-dark'
				onClick={() => {
					navigate(`/`);
				}}
			>
				Benden
			</div>
			<Modal
				show={bewertungState.showModal}
				onHide={() =>
					setBewertungState({ ...bewertungState, showModal: false })
				}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Bitte </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						Markieren Sie alle Bewertungen Teil ein, wenn etwas Nicht bewert
						wurde, markieren Sie "X" ein.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='danger'
						onClick={() =>
							setBewertungState({ ...bewertungState, showModal: false })
						}
					>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Bewertung;
