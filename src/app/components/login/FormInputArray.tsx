import FormInputProps from './FormInputProps';

const FormInputArray: FormInputProps[] = [
	{
		id: 'email',
		label: '',
		placeholder: 'Email',
		name: 'email',
		type: 'email',
		errorMessage: 'Email invalid!',
		pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}',
		required: true,
	},
	{
		id: 'password',
		label: '',
		placeholder: 'Password',
		name: 'password',
		type: 'password',
		errorMessage: 'Password invalid!',
		pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
		required: true,
	},
];

export default FormInputArray;
