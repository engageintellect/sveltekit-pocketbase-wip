import type { RequestHandler } from './$types';

export const GET = (() => {
	return new Response(JSON.stringify([{ msg: 'Hello, World!' }]), { status: 200 });
}) satisfies RequestHandler;
