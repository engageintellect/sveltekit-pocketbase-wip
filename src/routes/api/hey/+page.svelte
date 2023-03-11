<script lang="ts">
	let res: {};
	async function GET() {
		const response = await fetch('/api/hello');
		res = await response.json();
		return res;
	}
</script>

<div>{JSON.stringify(res) || 'No Data'}</div>

<button class="py-2 px-4 bg-slate-500" on:click={GET}>Click to get data</button>
