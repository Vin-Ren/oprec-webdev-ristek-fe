<script>
	import { PUBLIC_BASE_API_URL } from '$env/static/public';
	import { Github } from '@lucide/svelte';
</script>

<a
	href={`${PUBLIC_BASE_API_URL}/auth/github`}
	class="btn btn-neutral flex flex-row items-center justify-center gap-4 py-6 text-xl font-semibold transition-all rounded-[0]"
>
	<Github class="h-9 w-9" /> Continue with Github
</a>
