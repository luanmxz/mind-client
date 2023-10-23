import CardColumn from '@/components/dashboard/cardColumn';
import getUser from '@/operations/getUserLogged';

const Dashboard = async () => {
	const user = await getUser();

	return (
		<div className='h-full px-4 lg:px-6'>
			<h1 className='py-8 font-bold text-xl'>MIND PROJECT</h1>
			<div className='flex flex-row gap-6'>
				<CardColumn />
				<CardColumn />
				<CardColumn />
			</div>
		</div>
	);
};

export default Dashboard;
