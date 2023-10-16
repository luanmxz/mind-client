import { useState } from 'react';
import styles from './formInput.module.css';
import FormInputProps from './FormInputProps';

const FormInput = (props: FormInputProps) => {
	const [focused, setFocused] = useState(false);

	const handleFocus = (e) => {
		setFocused(true);
	};

	const { errorMessage, ...rest } = props;

	return (
		<div className={styles.formInput}>
			<label htmlFor={props.label}>{props.label}</label>
			<input
				{...rest}
				onBlur={handleFocus}
				onFocus={() => props.name === 'confirmPassword' && setFocused(true)}
				className={focused ? styles.focused : ''}
			/>
			<span className={focused ? styles.errorMessage : ''}>{errorMessage}</span>
		</div>
	);
};

export default FormInput;
