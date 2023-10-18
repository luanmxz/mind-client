import { z } from 'zod';

const formSchema = z.object({
	email: z.string().email({ message: 'Please input a valid email.' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters.' })
		.max(20, { message: 'Password must be at most 20 characters.' })
		.regex(/[A-Z]/, {
			message: 'Password must contain at least one upper case letter.',
		})
		.regex(/[a-z]/, {
			message: 'Password must contain at least one lower case letter.',
		})
		.regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/, {
			message: 'Password must contain at least one special character.',
		})
		.regex(/\d/, { message: 'Password must contain at least one number' }),
});

export default formSchema;
