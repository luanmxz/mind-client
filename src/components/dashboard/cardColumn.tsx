import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const CardColumn = () => {
	return (
		<div className='flex flex-col gap-4 mr-2 p-4 h-5/6 bg-slate-200 bg-opacity-50'>
			<h1 className='text-primary pt-3 text-xl'>Column name 1</h1>
			<Card className='h-fit min-w-fit w-72 border-l-green-600 hover:transform hover:scale-105 hover:duration-75 hover:ease-linear'>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card description</CardDescription>
				</CardHeader>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
			<Card className='h-fit min-w-fit w-72 border-l-green-600 hover:transform hover:scale-105 hover:duration-75 hover:ease-linear'>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card description</CardDescription>
				</CardHeader>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default CardColumn;
