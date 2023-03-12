<script lang="ts">
	let data = '';

	export const GET = async () => {
		const res = await fetch('/api/gitCommits');
		data = await res.json();

		console.log(data);
		return data;
	};

	const handleClick = () => {
		GET();
	};
</script>

<div>
	<div>hello world</div>
</div>

<button
	on:click={() => {
		handleClick();
	}}>click me</button
>

{#each data as item}
	<div>{JSON.stringify(item)}</div>
{/each}
