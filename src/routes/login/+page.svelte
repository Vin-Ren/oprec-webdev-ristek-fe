<script lang="ts">
	import { PUBLIC_BASE_API_URL } from '$env/static/public';
	import GithubLoginButton from './GithubLoginButton.svelte';
</script>

<div class="flex h-full w-screen flex-1 items-center justify-center">
	<div class="border-3 border-primary px-8 py-6 flex flex-col">
		<h2 class="text-3xl font-bold mb-6">Login</h2>
    <GithubLoginButton url={`${PUBLIC_BASE_API_URL}/auth/github`} text={"Continue with Github"}/>
    <div class="divider">Or</div>
		<GithubLoginButton url={`${PUBLIC_BASE_API_URL}/auth/github`} text={"Continue with another account"}/>
	</div>
</div>
