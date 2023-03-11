<script lang="ts">
	import PocketBase from 'pocketbase';
	export let name: string;
	export let artist: string;
	export let genre: string;
	export let year: string;
	export let id: string;

	const pb = new PocketBase('http://45.56.88.245:8090');

	const handleDelete = async () => {
		await pb.collection('albums').delete('bfd8an4qkopzk83');
	};
</script>

<div class="bg-zinc-50 p-2 rounded-md">
	<div class="flex justify-between">
		<div>
			<div><strong>ID:</strong> {id}</div>
			<div><strong>Album:</strong> {name}</div>
			<div><strong>Artist:</strong> {artist}</div>
			<div><strong>Genre:</strong> {genre}</div>
			<div><strong>Year:</strong> {year}</div>
		</div>
		<div>
			<button
				on:click={() => {
					handleDelete();
				}}
				class="p-3 bg-black text-white">Delete</button
			>
		</div>
	</div>
</div>
