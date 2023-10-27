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
import { ScrollArea } from '../ui/scroll-area';

export interface CardProps {
	cardTitle: string;
	cardDescription: string;
	cardFooter: string;
}

const CardColumn = ({ cards }: { cards: CardProps[] }) => {
	return (
		<div
			draggable
			className='self-center md:self-baseline flex flex-col gap-4 mr-2 p-4 pb-8 h-5/6 bg-card-column items-center w-72'>
			<h1 className='text-primary pt-3 ml-1 text-xl self-start'>
				Column name 1
			</h1>
			<ScrollArea className='h-full w-72'>
				<div className='flex flex-col gap-4 items-center justify-center'>
					{cards.map((card, index) => {
						return (
							<Card
								draggable='true'
								key={index}
								className='h-fit min-w-fit w-64 border-l-green-600 hover:border-l-[12px] hover:transform hover:duration-75 hover:ease-linear'>
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
				</div>
			</ScrollArea>
			<Button
				variant='ghost'
				className='flex gap-1 mt-2 text-center pr-8 w-64 md:w-72 text-slate-500 hover:bg-transparent hover:text-secondary'>
				<AddCircleIcon height={36} width={36} />
				Add new card
			</Button>
		</div>
	);
};

export default CardColumn;
