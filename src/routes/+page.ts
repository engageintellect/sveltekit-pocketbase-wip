import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://45.56.88.245:8090');

export const load = (async () => {
	// you can also fetch all records at once via getFullList
	const records = await pb.collection('albums').getFullList(200 /* batch size */, {
		sort: '-created'
	});

	console.log('hey hey hey');

	// console.log({ records });
	return { records };
}) satisfies PageLoad;
