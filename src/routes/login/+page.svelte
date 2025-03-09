<script lang="ts">
	import GithubLoginButton from './GithubLoginButton.svelte';
</script>

<div class="flex h-full w-screen flex-1 items-center justify-center">
	<div class="border-3 border-primary px-8 py-6 flex flex-col">
		<h2 class="text-3xl font-bold mb-6">Login</h2>
    <GithubLoginButton/>
    <div class="divider">Or</div>
		<GithubLoginButton/>
	</div>
</div>
