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
		<div className='flex flex-col gap-4 bg-gradient-to-b from-secondary-darken to-secondary-lighter mr-2 p-4 rounded-sm h-max shadow-sm shadow-slate-400'>
			<h1 className='text-primary-foreground pt-3 text-xl'>Column name 1</h1>
			<Card className='h-fit min-w-fit w-72'>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card description</CardDescription>
				</CardHeader>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
			<Card className='h-fit min-w-fit w-72'>
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
