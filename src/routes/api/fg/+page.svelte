<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="text-4xl">Fear & Greed Index</div>

{#each data.data.data as item (item.id)}
	<!-- <div class="text-2xl">{JSON.stringifyitem.name}</div> -->
	{#if item.value > 50}
		<div class="text-6xl font-bold text-green-500">{item.value}</div>
	{:else}
		<div class="text-6xl font-bold text-red-500">{item.value}</div>
	{/if}
{/each}

<!-- <div class="text-6xl font-bold">{data.data.data[0].value}</div> -->
