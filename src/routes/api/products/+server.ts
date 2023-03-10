export const GET = () => {
	const data = {
		name: 'josh',
		title: 'dev',
		food: 'pizza'
	};

	return new Response(JSON.stringify(data, null, 2));
};
