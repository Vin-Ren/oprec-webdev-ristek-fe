<script lang="ts">
	import { invalidate } from '$app/navigation';

	let { data } = $props();
	let message = $state('');

	$effect(()=>{
		console.log(data)
	})

	const logout = async () => {
		const res = await fetch('api/auth/logout', {
			method: 'POST',
			credentials: 'include'
		})
		if (res.ok) {
			const resData = await res.json()
			await invalidate('user:auth-state')
			message = resData['message']
			data = {...data, user:null}
		} else {
			message = 'error'
		}
	}
</script>

<div>
	{#if data}
	{JSON.stringify(data)}
	<button class="btn btn-error" onclick={logout}>LOG OUT</button>
	{:else}
	...loading
	{/if}

	{#if message}
	Message: {message}
	{/if}
</div>