<script>
	import { PUBLIC_BASE_API_URL } from "$env/static/public";
	import { Github } from "@lucide/svelte";
</script>

<div class="border-2 shadow-md rounded-md px-4 py-2 hover:shadow-lg transition-all hover:brightness-75">
  <a href={`${PUBLIC_BASE_API_URL}/auth/github`} class="flex flex-row gap-4 items-center justify-center text-xl font-semibold">
    <Github class="w-9 h-9"/> Continue with Github
  </a>
</div>