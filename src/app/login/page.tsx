'use client';

import styles from './login-page.module.css';
import FormInput from '../components/formInput/FormInput';
import { useState } from 'react';

const LoginPage = () => {
	function handleSubmit(e: any) {
		e.preventDefault();
	}

	const [visible, setVisible] = useState(false);

	return (
		<div className={styles.loginPage}>
			<div className={styles.mindAppHeader}>
				<h2>Mind.</h2>
			</div>

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

				<button className={styles.signInButton}>Log in</button>
			</form>
		</div>
	);
};

export default LoginPage;
