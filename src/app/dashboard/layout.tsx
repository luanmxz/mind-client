'use client';

import { DashboardNav } from '@/components/dashboard/DashboardNav';
import DashboardSideMenu from '@/components/dashboard/dashboardSideMenu';
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
		<div className='h-screen w-screen'>
			<DashboardNav
				className='mx-3'
				toggleDashboardSidemenu={toggleDashboardSidemenu}
			/>
			<div className='flex flex-col lg:grid lg:grid-cols-6 h-full'>
				<DashboardSideMenu
					className={cn(
						isDashboardSidemenuVisible ? 'fixed flex md:relative' : 'hidden'
					)}
				/>
				<div
					className={cn(
						isDashboardSidemenuVisible ? 'lg:col-start-2' : 'lg:col-start-1',
						'h-full mt-0 overflow-x-auto bg-slate-100 flex flex-col shadow-gray-300 lg:col-end-7 lg:overflow-y-hidden pb-6 lg:mt-0'
					)}>
					{children}
				</div>
			</div>
		</div>
	);
}
