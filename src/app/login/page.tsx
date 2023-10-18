import React from 'react';
import LoginForm from '../../components/login/Form';

const LoginPage = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-screen text-center py-2 '>
			<h1 className='text-6xl'>Sign in to Mind</h1>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
