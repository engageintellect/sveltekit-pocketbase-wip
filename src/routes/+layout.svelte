<script>
	import '../app.css';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="w-screen h-screen">
	<div class="bg-zinc-300">
		<div class="">
			<Nav />
		</div>
		<div class=" max-w-5xl mx-auto">
			<slot />
		</div>
		<div>
			<Footer />
		</div>
	</div>
</div>
