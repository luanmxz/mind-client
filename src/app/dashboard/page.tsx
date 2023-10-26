import CardColumn, { CardProps } from '@/components/dashboard/cardColumn';
import AddCircleIcon from '@/components/shared/addCircleIcon';
import FilterIcon from '@/components/shared/filterIcon';
import LockIcon from '@/components/shared/lockIcon';
import ShareIcon from '@/components/shared/shareIcon';
import { Button } from '@/components/ui/button';
import getUser from '@/operations/getUserLogged';

const cards1: CardProps[] = [
	{
		cardTitle: 'Card Title 1',
		cardDescription: 'Card Description 1',
		cardFooter: 'Card Footer 1',
	},
	{
		cardTitle: 'Card Title 2',
		cardDescription: 'Card Description 2',
		cardFooter: 'Card Footer 2',
	},
];

const cardsOverflow: CardProps[] = [
	{
		cardTitle: 'Card Title 1',
		cardDescription: 'Card Description 1',
		cardFooter: 'Card Footer 1',
	},
	{
		cardTitle: 'Card Title 2',
		cardDescription: 'Card Description 2',
		cardFooter: 'Card Footer 2',
	},
	{
		cardTitle: 'Card Title 1',
		cardDescription: 'Card Description 1',
		cardFooter: 'Card Footer 1',
	},
	{
		cardTitle: 'Card Title 2',
		cardDescription: 'Card Description 2',
		cardFooter: 'Card Footer 2',
	},
	{
		cardTitle: 'Card Title 1',
		cardDescription: 'Card Description 1',
		cardFooter: 'Card Footer 1',
	},
	{
		cardTitle: 'Card Title 2',
		cardDescription: 'Card Description 2',
		cardFooter: 'Card Footer 2',
	},
];
const Dashboard = async () => {
	const user = await getUser();

	return (
		<div className='h-full flex flex-col'>
			<nav className='bg-background border-b border-l px-6 flex flex-row items-center justify-between fixed w-full md:relative'>
				<h1 className='py-6 font-bold  text-md md:text-xl'>MIND PROJECT</h1>

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
			<div className='overflow-y-auto bg-background flex flex-row h-full pt-6 p-4 lg:px-6 items-start mt-2'>
				<CardColumn cards={cardsOverflow} />
				<CardColumn cards={cards1} />
				<CardColumn cards={cards1} />
				<div className='flex justify-center items-center p-4 pb-8 h-5/6 bg-card-column w-72 aspect-auto border-dashed border-2 border-gray-400'>
					<Button
						variant='ghost'
						className='flex gap-1 mt-3 h-full w-full text-center text-slate-500 hover:bg-transparent hover:text-secondary'>
						<AddCircleIcon height={42} width={42} />
						Add new list
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
