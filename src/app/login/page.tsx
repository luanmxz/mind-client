'use client';

import styles from './login-page.module.css';
import FormInput from '../components/formInput/FormInput';
import { useState } from 'react';

const LoginPage = () => {
	function handleSubmit(e: any) {
		console.log(e);
		const email = e.target.elements[0].value;
		const password = e.target.elements[1].value;
		e.preventDefault();
		fetch('http://localhost:3333/auth/signIn', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});
	}

	const [visible, setVisible] = useState(false);

	return (
		<div className={styles.loginPage}>
			<h1 className={styles.loginPageTitle}>Sign in to Mind</h1>

			<form className={styles.loginForm} onSubmit={handleSubmit}>
				<FormInput label='' type='email' placeholder='Email' />
				<div className={styles.passwordInputWrapper}>
					<FormInput
						label=''
						type={visible ? 'text' : 'password'}
						placeholder='Password'
					/>
					<button
						className={styles.showHideButton}
						onClick={() => setVisible(!visible)}>
						T
					</button>
				</div>

				<div className={styles.loginButtons}>
					<button className={styles.signInButton}>Log in</button>

					<h3>or</h3>

					<button className={styles.signInButton}>Continue with Google</button>
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
