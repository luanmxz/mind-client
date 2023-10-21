import CardColumn from '@/components/dashboard/cardColumn';
import getUser from '@/operations/getUserLogged';

const Dashboard = async () => {
	const user = await getUser();

	return (
		<div className='col-start-2 col-end-7 px-16 bg-slate-100 flex flex-col shadow-gray-300 shadow-md'>
			<h1 className='py-10 font-bold text-xl'>MIND PROJECT</h1>
			<div className='flex flex-row gap-10 pb-8 h-full'>
				<CardColumn />
				<CardColumn />
				<CardColumn />
			</div>
		</div>
	);
};

export default Dashboard;
