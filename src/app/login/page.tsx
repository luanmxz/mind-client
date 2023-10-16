'use client';

import styles from './login-page.module.css';
import FormInput from '../components/login/FormInput';
import { useState } from 'react';
import handleSubmit from './handleSubmit';
import FormInputArray from '../components/login/FormInputArray';

const LoginPage = () => {
	const [visible, setVisible] = useState(false);

	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const onChange = (e: any) => {
		setValues({ ...values, [e.target.name]: e.target.value });
		console.log(values);
	};

	return (
		<div className={styles.loginPage}>
			<form onSubmit={handleSubmit}>
				<h1>Sign in to Mind</h1>
				{FormInputArray.map((input) => (
					<FormInput key={input.id} {...input} onChange={onChange} />
				))}

				<div className={styles.loginButtons}>
					<button>Log in</button>
					<h3>or</h3>
					<button>Continue with Google</button>
				</div>

				<div className={styles.otherOptions}>
					<h3>Forgot password?</h3>
					<h3>First time here? Create account</h3>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
