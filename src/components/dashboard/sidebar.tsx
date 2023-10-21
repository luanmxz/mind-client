import Image from 'next/image';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { icons } from '@/public/svg/svg';

const DashboardSidebar = () => {
	return (
		<>
			<div
				className={cn(
					'pb-12 bg-primary-foreground rounded-tr-3xl rounded-br-3xl text-primary'
				)}>
				<div className='space-y-4 py-4  border-gray-900'>
					<div className='px-3 py-2'>
						<h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
							Workspaces
						</h2>
						<div className='space-y-1'>
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
					<div className='px-3 py-2'>
						<h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
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
					<div className='px-3 py-2'>
						<h2 className='mb-2 px-4 relative  text-lg font-semibold tracking-tight'>
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
				</div>
			</div>
		</>
	);
};

export default DashboardSidebar;
