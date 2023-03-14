import type { PageLoad } from './$types';

export const load = (async () => {
	const res = await fetch('https://api.alternative.me/fng/');
	const data = res.json();

	return { data };
}) satisfies PageLoad;
