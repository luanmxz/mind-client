import CardColumn from '@/components/dashboard/cardColumn';
import getUser from '@/operations/getUserLogged';

const Dashboard = async () => {
	const user = await getUser();

	return (
		<>
			<h1 className='py-10 font-bold text-xl'>MIND PROJECT</h1>
			<div className='flex flex-row gap-10 pb-8 h-full'>
				<CardColumn />
				<CardColumn />
				<CardColumn />
			</div>
		</>
	);
};

export default Dashboard;
