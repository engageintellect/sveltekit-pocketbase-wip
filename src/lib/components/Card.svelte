<script lang="ts">
	export let name: string;
	export let artist: string;
	export let genre: string;
	export let year: string;
</script>

<div class="bg-zinc-50 p-2 rounded-md">
	<div class="flex justify-between">
		<div>
			<div><strong>Album:</strong> {name}</div>
			<div><strong>Artist:</strong> {artist}</div>
			<div><strong>Genre:</strong> {genre}</div>
			<div><strong>YEar:</strong> {year}</div>
		</div>
		<div>Delete</div>
	</div>
</div>
