'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import MindIcon from '../shared/mindIcon';

export function MainNav({
	className,
	toggleDashboardSidemenu,
	...props
}: {
	className?: string;
	toggleDashboardSidemenu: () => void;
} & React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				'flex items-center space-x-2 md:space-x-4 lg:space-x-6',
				className
			)}
			{...props}>
			<Button onClick={toggleDashboardSidemenu}>
				<MindIcon fill='white' />
			</Button>
			<Link
				href='/'
				className='font-bold text-2xl transition-colors hover:text-primary'>
				Mind
			</Link>
			<Link
				href='/login'
				className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
				Login
			</Link>
			<Link
				href='/register'
				className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
				Register
			</Link>
			<Link
				href='/not-found'
				className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
				Docs
			</Link>
		</nav>
	);
}
