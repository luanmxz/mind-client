import Image from 'next/image';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { icons } from '@/public/svg/svg';

const DashboardSideMenu = ({ className }: { className?: string }) => {
	return (
		<>
			<div
				className={cn(
					'bg-primary-foreground text-primary shadow-lg shadow-gray-400',
					className
				)}>
				<div className='space-y-[0.1rem] md:space-y-4 py-4 mt-1 w-full  border-gray-900'>
					<div className='px-3 py-2'>
						<h2 className='mb-0 px-2 text-sm md:mb-2 md:px-4 md:text-lg font-semibold tracking-tight'>
							Workspaces
						</h2>
						<div className='space-y-1 mt-1'>
							<Button variant='outline' className='w-full justify-start pl-5'>
								<Image
									src={icons.workspacesIcon}
									alt='Lock icon'
									width={20}
									height={20}
									className='pr-1'
								/>
								My workspace
							</Button>
							<Button
								variant='ghost'
								className='w-full justify-start pl-5  hover:text-secondary hover:font-bold'>
								<Image
									src={icons.settingsIcon}
									alt='Lock icon'
									width={20}
									height={20}
									className='pr-1'
								/>
								Settings
							</Button>
						</div>
					</div>
					<div className='py-0 px-3 md:py-2'>
						<h2 className='mb-0 px-2 text-sm md:mb-2 md:px-4 md:text-lg font-semibold tracking-tight'>
							Notes
						</h2>
						<div className='space-y-1'>
							<Button
								variant='ghost'
								className='w-full justify-start pl-5 hover:text-secondary hover:font-bold'>
								<Image
									src={icons.notesIcon}
									alt='Lock icon'
									width={20}
									height={20}
									className='pr-1'
								/>
								My notes
							</Button>
							<Button
								variant='ghost'
								className='w-full justify-start pl-5 hover:text-secondary hover:font-bold'>
								<Image
									src={icons.workspacesIcon}
									alt='Lock icon'
									width={20}
									height={20}
									className='pr-1'
								/>
								By workspaces
							</Button>
						</div>
					</div>
					<div className='py-0 px-3 md:py-2'>
						<h2 className='mb-0 px-2 text-sm md:mb-2 md:px-4 md:text-lg relative font-semibold tracking-tight'>
							Shelter
						</h2>
						<div className='space-y-1'>
							<Button
								variant='ghost'
								className='w-full justify-start hover:text-secondary hover:font-bold'>
								<Image
									src={icons.lockIcon}
									alt='Lock icon'
									width={20}
									height={20}
									className='pr-1'
								/>
								Passwords
							</Button>
							<Button
								variant='ghost'
								className='w-full justify-start pl-5 hover:text-secondary hover:font-bold'>
								<Image
									src={icons.workspacesIcon}
									alt='Lock icon'
									width={20}
									height={20}
									className='pr-1'
								/>
								By workspaces
							</Button>
						</div>
					</div>
					<div className='py-0 px-3 md:py-2'>
						<h2 className='mb-0 px-2 text-sm md:mb-2 md:px-4 md:text-lg relative font-semibold tracking-tight'>
							Calendar
						</h2>
						<div className='space-y-1'>
							<Button
								variant='ghost'
								className='w-full justify-start hover:text-secondary hover:font-bold'>
								<Image
									src={icons.lockIcon}
									alt='Lock icon'
									width={20}
									height={20}
									className='pr-1'
								/>
								Passwords
							</Button>
							<Button
								variant='ghost'
								className='w-full justify-start pl-5 hover:text-secondary hover:font-bold'>
								<Image
									src={icons.workspacesIcon}
									alt='Lock icon'
									width={20}
									height={20}
									className='pr-1'
								/>
								By workspaces
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardSideMenu;
