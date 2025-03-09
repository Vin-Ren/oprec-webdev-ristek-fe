<script lang="ts">
	import TryoutEntry from './TryoutEntry.svelte';

	const { data } = $props();
</script>

<div class="m-4 flex-1 flex justify-center">
  <div class="grid grid-cols-4 gap-4">
    {#each data.tryouts as tryout (tryout.id)}
      <TryoutEntry tryout={tryout}/>
    {/each}
  </div>
</div>
