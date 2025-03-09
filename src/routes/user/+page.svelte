<script lang="ts">
	import { invalidate, goto } from '$app/navigation';
	import { Github } from '@lucide/svelte';
	import { redirect } from '@sveltejs/kit';
  // import {}

  interface User {
    id: string,
    username: string,
    avatarUrl: string,
    githubId: string|null,
    role: string
  }

	let { data }: {data: {user: User|null, githubProfile?: {login: string, html_url: string}}} = $props();
  let user = $derived(data.user)
  let githubProfile = $derived(data.githubProfile)

	const logout = async () => {
		const res = await fetch('api/auth/logout', {
			method: 'POST',
			credentials: 'include'
		});
		if (res.ok) {
			const resData = await res.json();
			await invalidate('user:auth-state');
			message = resData['message'];
      redirect(302, '/') // Redirects to homepage
		} else {
			message = 'error';
		}
	};
</script>


<div class="flex flex-col m-4 gap-6 justify-center max-sm:items-center">
  <h1 class="text-3xl font-bold">Profile Page</h1>
  {#if user}
  <div class="w-fit max-w-[720px] flex md:flex-row max-md:flex-col gap-4 border-3 p-5 border-primary rounded-lg">
    <div class="w-32 h-32 avatar">
      <!-- svelte-ignore a11y_missing_attribute -->
      <img src={user.avatarUrl ?? "https://www.gravatar.com/avatar"} class="rounded-lg"/>
    </div>
    <div class="flex flex-col w-max justify-between">
      <h2 class="text-2xl font-bold">{user?.username} <span class="text-lg font-bold text-wrap">({user?.role})</span></h2>
      {#if user?.githubId}
      <div>
        <h2 class="text-lg font-bold">Connected Account(s): </h2>
        <a class="flex flex-row gap-2 hover:cursor-pointer hover:brightness-75 group" href={githubProfile?.html_url} target="_blank ">
          <Github class="w-7 h-7 group-hover:opacity-70"/> <span class="text-lg font-bold group-hover:opacity-70">{githubProfile?.login}</span> <!-- temporary -->
        </a>
      </div>
      {/if}
    </div>
  </div>
  <button class="btn btn-error btn-md w-max" onclick={logout}>LOG OUT</button>
  {:else}
  <div class="card glass">
    Not logged in
  </div>
  {/if}
</div>

