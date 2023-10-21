import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				'flex items-center space-x-2 md:space-x-4 lg:space-x-6',
				className
			)}
			{...props}>
			<Button>Icon</Button>
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
