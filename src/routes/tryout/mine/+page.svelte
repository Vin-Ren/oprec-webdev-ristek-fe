<script lang="ts">
	import { Plus } from '@lucide/svelte';
  import TryoutEntry from '../components/TryoutEntry.svelte';

	const { data } = $props();
</script>

{#each data.tryouts as tryout (tryout.id)}
<TryoutEntry tryout={tryout}/>
{/each}
{#if data.tryouts.length ==0}
<div class="col-span-4">You haven't created any tryout yet.</div>
{/if}

