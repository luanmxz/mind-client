'use client';

import { Calendar } from '@/components/ui/calendar';

export default function Home() {
	return (
		<div className='w-full h-full flex flex-col items-center justify-center'>
			<Calendar className='w-fit border-2 rounded-sm self-center border-secondary'></Calendar>
		</div>
	);
}
