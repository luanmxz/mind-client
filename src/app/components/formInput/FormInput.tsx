import styles from './formInput.module.css';

interface FormInputProps {
	label?: string;
	type: string;
	placeholder?: string;
}

const FormInput = (props: FormInputProps) => {
	return (
		<div className={styles.formInputWrapper}>
			<label className={styles.formLabel} htmlFor={props.label ?? ''}>
				{props.label}
			</label>
			<input
				className={styles.formInput}
				type={props.type}
				placeholder={props.placeholder ?? ''}
			/>
		</div>
	);
};

export default FormInput;
