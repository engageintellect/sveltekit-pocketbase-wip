<script>
	import '../app.css';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="w-screen h-screen">
	<div class="">
		<div class="">
			<Nav />
		</div>
		<div class=" max-w-5xl mx-auto p-5">
			<slot />
		</div>
		<div>
			<Footer />
		</div>
	</div>
</div>
