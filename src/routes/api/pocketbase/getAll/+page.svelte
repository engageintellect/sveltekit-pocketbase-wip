<script lang="ts">
	import type { PageData } from './$types';

	import { count } from '$lib/store';

	export let data: PageData;
</script>

<div class="p-2">
	<div class="w-full break-words text-xs">
		<div>{JSON.stringify(data)}</div>
		<div>{$count + 20}</div>
	</div>
</div>
