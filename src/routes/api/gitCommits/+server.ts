import type { RequestHandler } from './$types';

export const GET = (async () => {
	const res = await fetch(
		'https://api.github.com/repos/engageintellect/sveltekit-pocketbase/commits?per_page=1'
	);
	const json = await res.json();
	console.log(json);
	return new Response(JSON.stringify(json, null, 2));
}) satisfies RequestHandler;
