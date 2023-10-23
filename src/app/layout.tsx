import './globals.css';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Mind - Organize yourself',
	description: 'Your personal organizer',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body
				className={`${poppins.variable} font-poppins h-screen w-screen bg-background antialiased overflow-hidden`}>
				<main className='w-full h-full'>{children}</main>
			</body>
		</html>
	);
}
