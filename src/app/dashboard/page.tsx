import getUser from '@/operations/getUserLogged';

const Dashboard = async () => {
	const user = await getUser();

	return (
		<>
			<div className='col-start-2 col-end-7 flex justify-center  bg-slate-100'>
				<h1 className='mt-20'>Implementing</h1>
			</div>
		</>
	);
};

export default Dashboard;
