import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/comments/1`);
	const item = await res.json();

	console.log({ item });
	return { item };
}) satisfies PageLoad;
