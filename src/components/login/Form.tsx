'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '../ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import formSchema from './formSchema';

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
					className='space-y-5 flex flex-col pt-12 w-1/5 min-w-max'>
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
								<FormMessage className='pl-1 text-start' />
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
								<FormMessage className='pl-1 text-start' />
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						variant='secondary'
						className='text-3xl py-10 w-full rounded-lg'>
						Login
					</Button>

					<p>or</p>

					<Button
						variant='secondary'
						className='text-3xl py-10 w-full rounded-lg'>
						Continue with Google
					</Button>
				</form>
			</Form>
		</>
	);
};

export default LoginForm;
