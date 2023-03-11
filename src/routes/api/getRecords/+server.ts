import type { RequestHandler } from './$types';
import PocketBase, { RecordService } from 'pocketbase';

const pb = new PocketBase('http://45.56.88.245:8090');

export const GET = (async () => {
	const records = await pb.collection('albums').getFullList(200, {
		sort: '-created'
	});
	return new Response(JSON.stringify(records, null, 2));
}) satisfies RequestHandler;
