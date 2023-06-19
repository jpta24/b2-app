import { useState } from 'react';
import { FiUser, FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const Home = () => {
	const navigate = useNavigate();
	const initialState = {
		step: 1,
		tns: '',
		tn: '',
		showModal: false,
	};
	const [homeState, setHomeState] = useState(initialState);

	const randomNumber = () => {
		const options = ['A', 'B'];
		const randomOption = Math.floor(Math.random() * options.length);
		return options[randomOption];
	};
	return (
		<div>
			<h1 className='py-4 title px-3'>DTB B2 Mündliche Trainer</h1>
			{homeState.step === 1 ? (
				<div className='my-3 col-9 mx-auto'>
					<div
						className='col-10 mx-auto p-3 h2 card-btn my-5'
						onClick={() => setHomeState({ ...homeState, step: 2 })}
					>
						Los geht's
					</div>
					<div
						className='col-10 mx-auto p-3 h2 card-btn my-5'
						onClick={() => navigate('/bewertung')}
					>
						Bewertung
					</div>
					<div>
						<img className='col-4 col-md-2' src={process.env.PUBLIC_URL + '/B2-app.png'} alt="" />
					</div>
				</div>
			) : homeState.step === 2 ? (
				<div className='my-3 col-11 mx-auto'>
					<h3 className='text-light'>üben Sie alleine oder mit Partner/in?</h3>
					<div className='d-flex'>
						<div
							className='col-5 mx-auto p-3 h4 card-btn my-5 d-flex flex-column justify-content-around align-items-center'
							onClick={() => {
								setHomeState({ ...homeState, step: 3, tns: 1,tn:'a' });
							}}
						>
							{' '}
							Alleine
							<FiUser />
						</div>
						<div
							className='col-5 mx-auto p-3 h4 card-btn my-5 d-flex flex-column justify-content-around align-items-center'
							onClick={() => {
								setHomeState({ ...homeState, showModal: true });
							}}
						>
							{' '}
							Mit Partner/in
							<FiUsers />
						</div>
					</div>
					<div
						className='col-6 mx-auto p-3 h2 card-btn my-5 bg-danger'
						onClick={() => {
							setHomeState(initialState);
						}}
					>
						Cancel
					</div>
				</div>
			) : (
				<div className='my-3 col-9 mx-auto'>
					<div
						className='col-8 mx-auto p-3 h2 card-btn my-5'
						onClick={() => navigate(`/teil-1/a/${homeState.tns}/${homeState.tn}`)}
					>
						Alle Teile
					</div>
					<div
						className='col-6 mx-auto p-3 h4 card-btn my-2'
						onClick={() => navigate(`/teil-1/1/${homeState.tns}/${homeState.tn}`)}
					>
						Teil I
					</div>
					<div
						className='col-6 mx-auto p-3 h4 card-btn my-2'
						onClick={() => navigate(`/teil-2/2/${homeState.tns}/${homeState.tn}`)}
					>
						Teil II
					</div>
					<div
						className='col-6 mx-auto p-3 h4 card-btn my-2'
						onClick={() => navigate(`/teil-3/3/${homeState.tns}/${homeState.tn}`)}
					>
						Teil III
					</div>
					<div
						className='col-6 mx-auto p-3 h2 card-btn my-5 bg-danger'
						onClick={() => {
							setHomeState(initialState);
						}}
					>
						Cancel
					</div>
				</div>
			)}
			<Modal
				show={homeState.showModal}
				onHide={() => setHomeState({ ...homeState, showModal: false })}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Bitte </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Wählen Sie, ob Sie Teilnehmer A oder B sind.</p>
					<p>{`Wir empfehlen ${randomNumber()}, aber es könnte die gleiche Empfehlung von Ihrem Partner sein.`}</p>
					<div
						className='col-5 mx-auto p-3 h4 card-btn my-5 d-flex flex-column justify-content-around align-items-center'
						onClick={() => {
							setHomeState({
								step: 3,
								tns: 2,
								tn: 'a',
								showModal: false,
							});
						}}
					>
						A
					</div>
					<div
						className='col-5 mx-auto p-3 h4 card-btn my-5 d-flex flex-column justify-content-around align-items-center'
						onClick={() => {
							setHomeState({
								step: 3,
								tns: 2,
								tn: 'b',
								showModal: false,
							});
						}}
					>
						B
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Home;
