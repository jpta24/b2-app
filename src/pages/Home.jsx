import { useState } from 'react';
import { FiUser, FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
const Home = () => {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);
	const [tn, setTn] = useState('');
	return (
		<div>
			<h1 className='py-4 title px-3'>B2 Mündliche Prüfung Übung</h1>
			{step === 1 ? (
				<div className='my-3'>
					<div
						className='col-8 mx-auto p-3 h2 card-btn my-5'
						onClick={() => setStep(2)}
					>
						Los geht
					</div>
					<div
						className='col-8 mx-auto p-3 h2 card-btn my-5'
						onClick={() => navigate('/bewertung')}
					>
						Bewertung
					</div>
				</div>
			) : step === 2 ? (
				<div className='my-3'>
					<h3 className='text-light'>üben Sie alleine oder mit Partner/in?</h3>
					<div className='d-flex'>
						<div
							className='col-5 mx-auto p-3 h4 card-btn my-5 d-flex flex-column justify-content-around align-items-center'
							onClick={() => {
								setTn(1);
								setStep(3);
							}}
						>
							{' '}
							Alleine
							<FiUser />
						</div>
						<div
							className='col-5 mx-auto p-3 h4 card-btn my-5 d-flex flex-column justify-content-around align-items-center'
							onClick={() => {
								setTn(2);
								setStep(3);
							}}
						>
							{' '}
							Mit Partner/in
							<FiUsers />
						</div>
					</div>
					<div
						className='col-4 mx-auto p-3 h2 card-btn my-5 bg-danger'
						onClick={() => {
							setStep(1)
						}}
					>
						Cancel
					</div>
				</div>
			):(
                <div className='my-3'>
					<div
						className='col-8 mx-auto p-3 h2 card-btn my-5'
						onClick={() => navigate(`/teil-1/a/${tn}`)}
					>
						Alle Teile
					</div>
					<div
						className='col-6 mx-auto p-3 h4 card-btn my-2'
						onClick={() => navigate(`/teil-1/1/${tn}`)}
					>
						Teil I
					</div>
                    <div
						className='col-6 mx-auto p-3 h4 card-btn my-2'
						onClick={() => navigate(`/teil-1/2/${tn}`)}
					>
						Teil II
					</div>
                    <div
						className='col-6 mx-auto p-3 h4 card-btn my-2'
						onClick={() => navigate(`/teil-1/3/${tn}`)}
					>
						Teil III
					</div>
                    <div
						className='col-4 mx-auto p-3 h2 card-btn my-5 bg-danger'
						onClick={() => {
							setStep(1)
						}}
					>
						Cancel
					</div>
				</div>
                
            )}
		</div>
	);
};

export default Home;
