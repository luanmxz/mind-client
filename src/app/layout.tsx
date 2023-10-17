import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600'],
	variable: '--font-poppins',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body
				className={`${poppins.variable} font-poppins min-h-screen bg-background antialiased`}>
				<main>{children}</main>
			</body>
		</html>
	);
}
