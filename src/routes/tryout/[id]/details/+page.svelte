<script lang="ts">
	import formatDuration from '$lib/formatDuration.js';

  let { data } = $props()
  let tryout = $derived(data.tryout)
  let opensAt = $derived(new Date(tryout.opensAt))
  let closesAt = $derived(new Date(tryout.closesAt))
  let createdAt = $derived(new Date(tryout.createdAt))
  let updatedAt = $derived(new Date(tryout.updatedAt))
</script>
<div class="m-4 flex-1 text-lg">
  <h2 class="text-xl font-bold">Tryout: {tryout.name}</h2>
  <div class="divider"></div>
  <h2 class="text-xl font-semibold">Properties</h2>
  <p>ID: {tryout.id}</p>
  <p>Description: {tryout.description}</p>
  <p>Auto shuffle order of questions: {tryout.shuffled}</p>
  <p>Opens at: {opensAt.toLocaleString()}</p>
  <p>Closes at: {closesAt.toLocaleString()}</p>
  <p>Tryout duration: {formatDuration(tryout.duration)}</p>
  <p>Owner id: {tryout.ownerId}</p>
  <p>Visibility: {tryout.visibility}</p>
  <p>Passphrase: {tryout.passphrase}</p>
  <p>Editable: {tryout.editable}</p>
  <p>Created at: {createdAt.toLocaleString()}</p>
  <p>Updated at: {updatedAt.toLocaleString()}</p> 
</div>
<!-- owner, passphrase should be available only to the owner, change backend -->