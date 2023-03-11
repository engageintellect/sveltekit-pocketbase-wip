import type { RequestHandler } from './$types';

const Person = {
	name: 'josh',
	title: 'dev',
	food: 'pizza',
	year: 2023
};

export const GET = (() => {
	return new Response(JSON.stringify(Person));
}) satisfies RequestHandler;
