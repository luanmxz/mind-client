import CardColumn from '@/components/dashboard/cardColumn';
import getUser from '@/operations/getUserLogged';

const Dashboard = async () => {
	const user = await getUser();

	return (
		<div className='h-full px-4 lg:px-6'>
			<nav className='bg-primary-foreground border-b'>
				<h1 className='py-8 font-bold text-xl'>MIND PROJECT</h1>
			</nav>
			<div className='flex flex-row h-full'>
				<CardColumn />
				<CardColumn />
				<CardColumn />
			</div>
		</div>
	);
};

export default Dashboard;
