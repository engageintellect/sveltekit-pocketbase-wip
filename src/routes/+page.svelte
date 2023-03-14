<script lang="ts">
	import PocketBase from 'pocketbase';
	import Card from '$lib/components/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let title: string;
	let artist: string;
	let genre: string;
	let year: string;

	const handleCreate = async () => {
		const pb = new PocketBase('http://45.56.88.245:8090');
		const albumData = {
			name: title,
			artist: artist,
			genre: genre,
			year: year
		};

		if (!title || !artist || !genre || !year) {
			alert('Please fill out all fields');
			return;
		} else {
			const record = await pb.collection('albums').create(albumData);

			// console.log('Data:', albumData);
			// console.log('Record:', record);
			// console.log('Record Added!');
			location.reload();
		}
	};
</script>

<div class="min-h-screen">
	<div class="">
		<div class="bg-zinc-300 p-2 lg:p-5 sticky top-0">
			<div class="text-4xl drop-shadow-lg  font-semibold  py-5">Records</div>
			<div class="flex flex-col w-full justify-center items-center">
				<div class="flex flex-col md:flex-row gap-5 w-full">
					<div>
						<label for="hello world" class="">Title:</label>
						<input class="p-2 w-full" type="text" bind:value={title} />
					</div>
					<div>
						<label for="hello world" class="">Artist:</label>
						<input class="p-2 w-full" type="text" bind:value={artist} />
					</div>
					<div>
						<label for="hello world" class="">Genre:</label>
						<input class="p-2 w-full" type="text" bind:value={genre} />
					</div>
					<div>
						<label for="hello world" class="">Year:</label>
						<input class="p-2 w-full" type="text" bind:value={year} />
					</div>
				</div>
				<button
					on:click={() => handleCreate()}
					class="w-full bg-zinc-900 flex justify-center mt-5 text-white text-xl py-2 px-4"
					>Submit</button
				>
			</div>
		</div>

		<div class="lg:p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
			{#each data.records as item}
				<div class="">
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
