<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import dataTheme from '../stores/data-theme';
	let { children } = $props();
</script>

<div data-theme={$dataTheme} class="flex flex-col min-h-screen w-screen gap-4">
	<Header />
	<div class="flex-1 mt-[4.25rem]">
		{@render children()}
	</div>
	<Footer />
</div>
