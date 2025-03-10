<script lang="ts">
	import formatDuration from '$lib/formatDuration.js';
	import { ArrowLeft } from '@lucide/svelte';
	import auth from '../../../stores/auth.js';
	import { PUBLIC_BASE_API_URL } from '$env/static/public';
  import { page } from '$app/state';  
	import { goto } from '$app/navigation';

	let { data } = $props();
	let tryout = $derived(data.tryout);
	let opensAt = $derived(new Date(tryout.opensAt));
	let closesAt = $derived(new Date(tryout.closesAt));
	let createdAt = $derived(new Date(tryout.createdAt));
	let updatedAt = $derived(new Date(tryout.updatedAt));

  const onEdit = async () => {
    goto(`${page.params.id}/edit`)
  }

  const onDelete = async () => {
    const res = await fetch(`${PUBLIC_BASE_API_URL}/tryout/${page.params.id}`, {
      method: 'DELETE',
      credentials: 'include'
    })

    if (res.ok) {
      goto('/tryout')
    }
  }
</script>

<div class="m-4 flex-1 text-lg">
	<a class="btn btn-base rounded-[0] px-2 text-lg" href="/tryout"><ArrowLeft /> Back</a>
	<h2 class="mt-4 text-xl font-bold">Tryout: {tryout.name}</h2>
	<div class="divider"></div>
	<h2 class="text-xl font-semibold">Properties</h2>
	<p>Description: {tryout.description}</p>
	<p>Opens at: {opensAt.toLocaleString()}</p>
	<p>Closes at: {closesAt.toLocaleString()}</p>
	<p>Tryout duration: {formatDuration(tryout.duration)}</p>
	<p>Visibility: {tryout.visibility}</p>
  {#if tryout?.ownerId}
	<p>Owner id: {tryout.ownerId}</p>
	<p>Editable: {tryout.editable}</p>
	<p>Question shuffle: {tryout.shuffled}</p>
  <p>Question ordering: {tryout.questionOrder}</p>
  {/if}
	<p>Created at: {createdAt.toLocaleString()}</p>
	<p>Updated at: {updatedAt.toLocaleString()}</p>

  {#if (tryout?.ownerId === $auth.user?.id )|| ($auth.user?.role==='Admin')}
    <div class="mt-4 flex flex-col gap-4 w-fit">
      <h2 class="text-lg font-semibold">Available Actions</h2>
      {#if tryout.editable}
      <button onclick={onEdit} class="btn btn-secondary">Edit</button>
      {/if}
      <button onclick={onDelete} class="btn btn-error">Delete</button>
    </div>
  {/if}
</div>
