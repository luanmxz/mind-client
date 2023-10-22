'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MainNav } from '@/components/dashboard/mainNav';
import { Search } from '@/components/ui/search';
import { Button } from '@/components/ui/button';
import DashboardSidebar from '@/components/dashboard/sidebar';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isDashboardSidemenuVisible, setDashboardSidemenuVisible] =
		useState(true);
	const toggleDashboardSidemenu = () => {
		setDashboardSidemenuVisible(!isDashboardSidemenuVisible);
	};

	return (
		<>
			<div>
				<div className='hidden flex-col md:flex'>
					<div className='border-b'>
						<div className='flex h-16 items-center px-4'>
							<MainNav
								className='mx-3'
								toggleDashboardSidemenu={toggleDashboardSidemenu}
							/>
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
				{isDashboardSidemenuVisible && <DashboardSidebar />}
				<div
					className={cn(
						isDashboardSidemenuVisible ? 'col-start-2' : 'col-start-1',
						'col-end-7 px-16 bg-slate-100 flex flex-col shadow-gray-300 shadow-md'
					)}>
					{children}
				</div>
			</div>
		</>
	);
}
