import RegisterForm from '@/components/register/Form';

const RegisterPage = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-screen text-center py-2 bg-background'>
			<h1 className='text-6xl'>Sign up to Mind</h1>
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
