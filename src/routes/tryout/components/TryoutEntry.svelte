<script lang="ts">
	import formatDuration from "$lib/formatDuration";
	import { Info } from "@lucide/svelte";

  let {tryout} = $props()
  let opensAt = $derived(new Date(tryout.opensAt))
  let closesAt = $derived(new Date(tryout.closesAt))
</script>

<a href={`/tryout/${tryout.id}`} class="hover:opacity-80 hover:shadow-md">
<div class="flex flex-col gap-2 border-2 border-neutral p-4">
  <div class="flex flex-row justify-between">
    <h2 class="text-lg font-bold">{tryout.name}</h2>
    <Info/>
  </div>
  <h2 class="">Opens at: {opensAt.toLocaleString()}</h2>
  <h2 class="">Closes at: {closesAt.toLocaleString()}</h2>
  <h2 class="">Duration: {formatDuration(tryout.duration)}</h2>
</div>
</a>