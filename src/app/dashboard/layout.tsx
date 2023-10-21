import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MainNav } from '@/components/dashboard/mainNav';
import { Search } from '@/components/ui/search';
import { Button } from '@/components/ui/button';
import DashboardSidebar from '@/components/dashboard/sidebar';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div>
				<div className='hidden flex-col md:flex'>
					<div className='border-b'>
						<div className='flex h-16 items-center px-4'>
							<MainNav className='mx-3' />
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
			</div>
			<div className='grid lg:grid-cols-6 h-screen'>
				<DashboardSidebar />
				{children}
			</div>
		</>
	);
}
