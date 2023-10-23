import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import MindIcon from '../shared/mindIcon';
import { Search } from '../ui/search';
import { Avatar, AvatarFallback } from '../ui/avatar';

export function DashboardNav({
	className,
	toggleDashboardSidemenu,
	...props
}: {
	className?: string;
	toggleDashboardSidemenu: () => void;
} & React.HTMLAttributes<HTMLElement>) {
	return (
		<div className='flex-col md:flex'>
			<div className='border-b'>
				<div className='flex items-center px-4'>
					<nav
						className={cn(
							'flex items-center justify-center py-5 space-x-2 md:space-x-4 lg:space-x-6 md:py-4',
							className
						)}
						{...props}>
						<Button onClick={toggleDashboardSidemenu}>
							<MindIcon fill={'white'} />
						</Button>
						<Link
							href='/'
							className='hidden md:flex font-bold text-2xl transition-colors hover:text-primary'>
							Mind
						</Link>
						<Link
							href='/login'
							className='hidden md:flex  text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
							Login
						</Link>
						<Link
							href='/register'
							className='hidden md:flex  text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
							Register
						</Link>
						<Link
							href='/not-found'
							className='hidden md:flex  text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
							Docs
						</Link>
					</nav>

					<div className='ml-auto flex items-center space-x-6'>
						<Button variant='outline'>Create</Button>
						<Search />
					</div>

					<Avatar className='mx-4'>
						<AvatarFallback className='bg-secondary text-primary-foreground'>
							LM
						</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</div>
	);
}
