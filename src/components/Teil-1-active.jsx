import { useNavigate } from 'react-router-dom';

import teil1 from '../data/teil1';

const Teil1active = ({ teil1State, setTeil1State,textWithStrong }) => {
	const navigate = useNavigate();
	return (
		<div className='my-2 col-9 mx-auto'>
			<h3 className='text-light'>Bitte wählen Sie ein Thema aus</h3>
			<div className='d-flex flex-column'>
				<div
					className='mx-auto p-3 h4 card-btn my-2 d-flex flex-column justify-content-around align-items-center'
					onClick={() => {
                        setTeil1State({ ...teil1State, step: 2, themaSelected: teil1State.themas[0] });
					}}
				>
					<h5>{`Thema Nummer: ${teil1[teil1State.themas[0]].nummer}`}</h5>
					<p className='fs-6' dangerouslySetInnerHTML={{ __html: textWithStrong(teil1[teil1State.themas[0]].text) }}></p>
				</div>
				<h4 className='text-light'>oder</h4>
				<div
					className='mx-auto p-3 h4 card-btn my-2 d-flex flex-column justify-content-around align-items-center'
					onClick={() => {
                        setTeil1State({ ...teil1State, step: 2, themaSelected: teil1State.themas[1] });
					}}
				>
					<h5>{`Thema Nummer: ${teil1[teil1State.themas[1]].nummer}`}</h5>
					<p className='fs-6' dangerouslySetInnerHTML={{ __html: textWithStrong(teil1[teil1State.themas[1]].text) }}></p>
				</div>
			</div>
			<div
				className='col-6 mx-auto p-3 h2 card-btn my-3 bg-danger'
				onClick={() => {
					navigate(`/`);
				}}
			>
				Cancel
			</div>
		</div>
	);
};

export default Teil1active;
