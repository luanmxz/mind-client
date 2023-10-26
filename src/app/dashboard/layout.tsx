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
			<div className='flex flex-col md:grid md:grid-cols-[350px_minmax(0,_1fr)] h-full'>
				<DashboardSideMenu
					className={cn(
						isDashboardSidemenuVisible
							? 'fixed flex z-10 md:relative h-full'
							: 'hidden'
					)}
				/>
				<div
					className={cn(
						'h-full mt-0 overflow-x-auto bg-background flex flex-col shadow-gray-300  md:overflow-y-hidden pb-6 md:mt-0'
					)}>
					<div
						className={cn(
							isDashboardSidemenuVisible
								? 'block fixed z-[5] h-full w-full  bg-gray-800 bg-opacity-40 md:hidden'
								: 'hidden'
						)}></div>
					{children}
				</div>
			</div>
		</div>
	);
}
