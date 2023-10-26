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

export interface CardProps {
	cardTitle: string;
	cardDescription: string;
	cardFooter: string;
}

const CardColumn = ({ cards }: { cards: CardProps[] }) => {
	return (
		<div
			draggable
			className='self-center md:self-baseline flex flex-col gap-4 mr-2 p-4 pb-8 h-5/6 bg-card-column items-center w-72 aspect-auto overflow-x-hidden overflow-y-auto scroll-smooth'>
			<h1 className='text-primary pt-3 ml-1 text-xl self-start'>
				Column name 1
			</h1>
			{cards.map((card, index) => {
				return (
					<Card
						draggable='true'
						key={index}
						className='h-fit min-w-fit border-l-green-600 hover:transform hover:scale-105 hover:duration-75 hover:ease-linear'>
						<CardHeader>
							<CardTitle>{card.cardTitle}</CardTitle>
							<CardDescription>{card.cardDescription}</CardDescription>
						</CardHeader>
						<CardFooter>
							<p>{card.cardFooter}</p>
						</CardFooter>
					</Card>
				);
			})}
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
