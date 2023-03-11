<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	import PocketBase from 'pocketbase';

	let title: string;
	let artist: string;
	let genre: string;
	let year: string;

	const handleSubmit = async () => {
		const pb = new PocketBase('http://45.56.88.245:8090');
		// example create data
		const albumData = {
			name: title,
			artist: artist,
			genre: genre,
			year: year
		};

		if (!title || !artist || !genre) {
			alert('Please fill out all fields');
			return;
		} else {
			const record = await pb.collection('albums').create(albumData);

			console.log('Data:', albumData);
			console.log('Record:', record);
			console.log('Record Added!');
			location.reload();
		}
	};
</script>

<div class="h-screen">
	<div class="bg-zinc-200">
		<div class="bg-zinc-500 p-2">
			<div class="text-4xl text-center text-white py-5">hello world</div>
			<div class="flex flex-col w-full justify-center items-center">
				<div class="flex flex-col md:flex-row gap-5 w-full">
					<input class="p-2 w-full" type="text" placeholder="title" bind:value={title} />
					<input class="p-2 w-full" type="text" placeholder="artist" bind:value={artist} />
					<input class="p-2 w-full" type="text" placeholder="genre" bind:value={genre} />
				</div>
				<button
					on:click={() => handleSubmit()}
					class="w-full bg-zinc-900 flex justify-center text-white text-xl py-2 px-4">Submit</button
				>
			</div>
		</div>

		<div class="h-[50vh] overflow-auto p-2">
			{#each data.records as item}
				<div class="my-5">
					<Card
						id={item.id}
						name={item.name}
						artist={item.artist}
						genre={item.genre}
						year={item.year}
					/>
				</div>
			{/each}
		</div>
	</div>
</div>
