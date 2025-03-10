<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import dataTheme from '../stores/data-theme';
	import { PUBLIC_BASE_API_URL } from '$env/static/public';
	import auth from '../stores/auth';
	import { onMount } from 'svelte';
	let { children } = $props();


  const getAuth = async () => {
    let res = await fetch(`${PUBLIC_BASE_API_URL}/auth/user`, {
      credentials: 'include'
    });

    if (!res.ok) {
      auth.set({ user: null, loggedId: false })
      return;
    }

    const data = await res.json();
    auth.set({user:data.user, loggedId:true})

  }

  onMount(async () => {
    await getAuth()
  })
</script>

<div data-theme={$dataTheme} class="flex flex-col min-h-screen gap-4 bg-base-100">
	<Header />
	<div class="flex-1 mt-[4.25rem] mb-[-1rem] w-full flex flex-col">
		{@render children()}
	</div>
	<Footer />
</div>
