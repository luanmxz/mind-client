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
import { User } from '@/models/User';
import { Session } from '@/models/Session';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const resp = fetch('http://localhost:3333/auth/signIn', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(values),
		});

		const data: { user: User | null; session: Session | null } =
			await resp.then((data) => data.json());

		if (data.session) {
			window.sessionStorage.setItem('token', data.session.access_token);
			router.push('/dashboard');
		} else {
			form.setError('password', {
				message: 'Email or password is incorrect.',
				type: '400',
			});
		}
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-5 flex flex-col pt-12 w-1/5 min-w-max'>
					<Button
						variant='outline'
						className='text-3xl py-10 w-full rounded-lg'>
						Continue with Google
					</Button>

					<p className='text-md text-gray-500 py-2'>or</p>

					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										autoComplete='email'
										placeholder='Email'
										{...field}
										className='text-2xl py-8 w-full border-slate-700'
									/>
								</FormControl>
								<FormMessage className='pl-2 text-start text-base' />
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
										autoComplete='current-password'
										type='password'
										placeholder='Password'
										{...field}
										className='text-2xl py-8 w-full  border-slate-700'
									/>
								</FormControl>
								<FormMessage className='pl-2 text-start text-base' />
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						variant='secondary'
						className='text-3xl py-10 w-full rounded-lg'>
						Login
					</Button>
				</form>
			</Form>
		</>
	);
};

export default LoginForm;
