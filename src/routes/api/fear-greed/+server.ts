import type { RequestHandler } from './$types';

export const GET = (async () => {
	const res = await fetch('https://api.alternative.me/fng/');
	const json = await res.json();
	console.log(json);
	return new Response(JSON.stringify(json, null, 2));
}) satisfies RequestHandler;
