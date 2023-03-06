<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import PocketBase from 'pocketbase';

	let title = '';
	let artist = '';
	let genre = '';

	const handleSubmit = async () => {
		const pb = new PocketBase('http://45.56.88.245:8090');
		// example create data
		const albumData = {
			name: title,
			artist: artist,
			genre: genre,
			year: 'test'
		};

		const record = await pb.collection('albums').create(albumData);

		console.log('Data:', albumData);
		console.log('Record:', record);
		console.log('Record Added!');
	};
</script>

<div>
	<div>
		{#each data.records as item}
			<div class="my-5">
				<div class="">Name: {item.name}</div>
				<div class="">Artist: {item.artist}</div>
				<div class="">Genre: {item.genre}</div>
			</div>
		{/each}

		<div class="flex flex-col my-10">
			<div>
				<strong>Title:</strong>
				{title}
			</div>
			<div>
				<strong>Artist:</strong>
				{artist}
			</div>
			<div>
				<strong>Genre:</strong>
				{genre}
			</div>
		</div>

		<div class="flex flex-col gap-5">
			<div class="flex flex-col lg:flex-row max-w-lg gap-5">
				<input type="text" placeholder="title" bind:value={title} />
				<input type="text" placeholder="artist" bind:value={artist} />
				<input type="text" placeholder="genre" bind:value={genre} />
			</div>
			<div class="">
				<button on:click={() => handleSubmit()} class="bg-zinc-900 text-white text-xl py-2 px-4"
					>clik me</button
				>
			</div>
		</div>
	</div>
</div>
