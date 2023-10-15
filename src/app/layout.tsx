import './globals.css';
import type { Metadata } from 'next';
import { Young_Serif } from 'next/font/google';

//const inter = Inter({ subsets: ['latin'] })
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
			<body className={youngSerif.className}>{children}</body>
		</html>
	);
}
