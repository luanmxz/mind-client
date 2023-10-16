import './globals.css';
import type { Metadata } from 'next';
import { Young_Serif } from 'next/font/google';

const youngSerif = Young_Serif({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Mind - Organize yourself',
	description: 'Your secundary mind helping you to organize your life',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={youngSerif.className}>
				<main className='flex min-h-screen flex-col items-center justify-between'>
					{children}
				</main>
			</body>
		</html>
	);
}
