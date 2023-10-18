'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

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

const LoginForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		//TODO call api to login

		console.log(values);
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-6 flex flex-col pt-12 w-1/5 min-w-fit h-full'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Email'
										{...field}
										className='text-2xl py-8 w-full border-slate-700'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										type='password'
										placeholder='Password'
										{...field}
										className='text-2xl py-8 w-full  border-slate-700'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit' className='text-3xl py-10 w-full'>
						Submit
					</Button>

					<p>or</p>

					<Button className='text-3xl py-10 w-full'>
						Continue with Google
					</Button>
				</form>
			</Form>
		</>
	);
};

export default LoginForm;
