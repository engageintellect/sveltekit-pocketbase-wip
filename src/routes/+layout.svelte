<script>
	import '../app.css';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen w-screen bg-zinc-100">
	<div class="sticky top-0">
		<Nav />
	</div>
	<div class="min-h-screen max-w-5xl mx-auto p-2 py-10">
		<slot />
	</div>
	<div>
		<Footer />
	</div>
</div>
