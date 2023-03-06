<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>{data.item.id}</h1>
<h1>{data.item.email}</h1>
<h1>{data.item.body}</h1>
