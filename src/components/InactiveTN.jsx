import { useNavigate } from 'react-router-dom';

const InactiveTN = ({ teil1State, setTeil1State }) => {
	const navigate = useNavigate();
	return (
		<>
			<h2 className='text-light my-5 col-10 mx-auto'>
				Bitte achten Sie auf die Präsentation Ihres Partners, um eine Frage zu
				stelle.
			</h2>
			<p>
				Drücken Sie 'Weiter', wenn Ihr Partner seine Präsentation abgeschlossen
				und die Frage beantwortet hat.
			</p>
			<div
				className='col-8 mx-auto p-3 h2 card-btn my-5 text-dark'
				onClick={() => {
					teil1State.turn === 'a'
						? setTeil1State({ ...teil1State, turn: 'b' })
						: teil1State.pruefung === 'a'
						? navigate(`/teil-2/a/${teil1State.tns}/${teil1State.tn}`)
						: navigate(`/`);
				}}
			>
				weiter
			</div>
		</>
	);
};

export default InactiveTN;
