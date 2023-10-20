import LoginForm from '@/components/login/form';

const LoginPage = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-screen text-center py-2 bg-background'>
			<h1 className='text-4xl font-bold'>Sign in to Mind</h1>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
