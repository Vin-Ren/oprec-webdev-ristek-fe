<script lang="ts">
  import { page } from '$app/state';  
	import { Plus } from '@lucide/svelte';
	import auth from '../../stores/auth';
  let { children } = $props();

</script>

{#if ['/tryout', '/tryout/mine'].includes(page.url.pathname)}
<div class="m-4 flex-1 flex flex-col justify-start gap-8">
  <div class="flex flex-row items-center justify-between mt-2 ml-[-1rem]">
    <div role="tablist" class="tabs tabs-border border-primary">
      <a role="tab" href="/tryout" class={`tab text-lg font-bold ${page.url.pathname=='/tryout' ? 'tab-active': ''}`}>Public Tryouts</a>
      {#if $auth.loggedId === true}
      <a role="tab" href="/tryout/mine" class={`tab text-lg font-bold ${page.url.pathname=='/tryout/mine' ? 'tab-active': ''}`}>Your Tryouts</a>
      {/if}
    </div>
    <a class="text-lg font-semibold btn btn-primary rounded-[0] flex flex-row items-center justify-center self-center" href="/tryout/create">
      Create
      <Plus/>
    </a>
  </div>
  <div class="grid sm:max-md:grid-cols-2 md:max-lg:grid-cols-3 lg:grid-cols-4 gap-4">
    {@render children()}
  </div>
</div>
{:else}
{@render children()}
{/if}
