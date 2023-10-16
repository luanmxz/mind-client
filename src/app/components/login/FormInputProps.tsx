export default interface FormInputProps {
	id: string;
	label?: string;
	name: string;
	type: string;
	placeholder?: string;
	errorMessage?: string;
	onChange?: (e: any) => void;
	pattern?: string;
	required: boolean;
}
