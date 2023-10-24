import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import AddCircleIcon from '../shared/addCircleIcon';

const CardColumn = () => {
	return (
		<div className='self-center md:self-baseline flex flex-col gap-4 mr-2 p-4 h-5/6 bg-slate-200 bg-opacity-50 items-center'>
			<h1 className='text-primary pt-3 ml-1 text-xl self-start'>
				Column name 1
			</h1>
			<Card className='h-fit min-w-fit border-l-green-600 hover:transform hover:scale-105 hover:duration-75 hover:ease-linear'>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card description</CardDescription>
				</CardHeader>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
			<Card className='h-fit min-w-fit  border-l-green-600 hover:transform hover:scale-105 hover:duration-75 hover:ease-linear'>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card description</CardDescription>
				</CardHeader>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
			<Button
				variant='ghost'
				className='flex gap-1 mt-3 text-center pr-8 w-64 md:w-72 text-slate-500 hover:bg-transparent hover:text-secondary'>
				<AddCircleIcon height={36} width={36} />
				Add new card
			</Button>
		</div>
	);
};

export default CardColumn;
