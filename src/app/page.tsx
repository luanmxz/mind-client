'use client';

import { Button } from '@/components/ui/button';
import { permanentRedirect, redirect } from 'next/navigation';

export default function Home() {
	return (
		<>
			<Button onClick={() => permanentRedirect('/login')}>Redirect GO</Button>
		</>
	);
}
