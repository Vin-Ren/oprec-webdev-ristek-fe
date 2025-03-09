<script lang="ts">
	import GithubLoginButton from './GithubLoginButton.svelte';
</script>

<div class="flex h-full w-screen flex-1 items-center justify-center">
	<div class="rounded-lg border-3 border-primary p-8 flex flex-col">
		<h2 class="decoration-accent text-3xl font-bold underline underline-offset-4 mb-6">Login</h2>
    <GithubLoginButton/>
    <div class="divider">Or</div>
		<GithubLoginButton/>
	</div>
</div>
