import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import bewertung from '../data/bewertung';

const Bewertung = () => {
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
    console.log(table);

	return (
		<div>
			<h1 className='py-3 title px-3'>Bewertung</h1>
			<h4 className='text-dark my-4'>
				Bitte geben Sie die Bewertung ein, die Ihnen Ihr Bewerter gegeben hat
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
								className={`border border-dark ${
									table[i] === 0 ? 'bg-dark' : 'bg-light'
								}`}
								onClick={() => setTable({ ...table, [bewertung[3][i]]: 0 })}
							></td>
							<td
								className={`border border-dark ${
									table[i] === 1 ? 'bg-dark' : 'bg-light'
								}`}
								onClick={() => setTable({ ...table, [bewertung[3][i]]: 1 })}
							></td>
							<td
								className={`border border-dark ${
									table[i] === 2 ? 'bg-dark' : 'bg-light'
								}`}
								onClick={() => setTable({ ...table, [bewertung[3][i]]: 2 })}
							></td>
							<td
								className={`border border-dark ${
									table[i] === 3 ? 'bg-dark' : 'bg-light'
								}`}
								onClick={() => setTable({ ...table, [bewertung[3][i]]: 3 })}
							></td>
							<td
								className={`border border-dark ${
									table[i] === 4 ? 'bg-dark' : 'bg-light'
								}`}
								onClick={() => setTable({ ...table, [bewertung[3][i]]: 4 })}
							></td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Bewertung;
