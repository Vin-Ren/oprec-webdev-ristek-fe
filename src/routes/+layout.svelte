<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import dataTheme from '$lib/data-theme';
	let { children } = $props();
</script>

<div data-theme={$dataTheme} class="flex flex-col h-screen w-screen">
	<Header />
	<div class="flex-1">
		{@render children()}
	</div>
	<Footer />
</div>
