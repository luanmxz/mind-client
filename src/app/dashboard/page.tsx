import CardColumn from '@/components/dashboard/cardColumn';
import AddCircleIcon from '@/components/shared/addCircleIcon';
import FilterIcon from '@/components/shared/filterIcon';
import LockIcon from '@/components/shared/lockIcon';
import ShareIcon from '@/components/shared/shareIcon';
import { Button } from '@/components/ui/button';
import { Search } from '@/components/ui/search';
import getUser from '@/operations/getUserLogged';

const Dashboard = async () => {
	const user = await getUser();

	return (
		<div className='h-full flex flex-col'>
			<nav className='bg-primary-foreground border-b border-l px-6 flex flex-row items-center justify-between fixed w-full lg:relative'>
				<h1 className='py-6 font-bold text-xl'>MIND PROJECT</h1>

				<div className='flex flex-row cursor-pointer items-center gap-px'>
					<Button
						variant='ghost'
						className='flex gap-1 hover:bg-transparent hover:text-secondary'>
						<FilterIcon />
						<h3 className='hidden md:block'>Filter</h3>
					</Button>
					<Button
						variant='ghost'
						className='flex gap-1 hover:bg-transparent hover:text-secondary'>
						<ShareIcon />
						<h3 className='hidden md:block'>Share</h3>
					</Button>
					<Button
						variant='ghost'
						className='flex gap-1 hover:bg-transparent hover:text-secondary'>
						<LockIcon />
						<h3 className='hidden md:block'>Lock workspace</h3>
					</Button>
				</div>
			</nav>
			<div className='flex flex-row h-full mt-6 p-4 lg:px-6'>
				<CardColumn />
				<CardColumn />
				<CardColumn />
				<Button
					variant='outline'
					className='fixed bottom-4 right-5 h-fit w-fit hover:bg-transparent hover:scale-105 flex gap-2 hover:text-secondary'>
					<AddCircleIcon />
					Add list
				</Button>
			</div>
		</div>
	);
};

export default Dashboard;
