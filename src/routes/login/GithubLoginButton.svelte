<script>
	import { Github } from '@lucide/svelte';
  let { text, url } = $props()
</script>

<a
	href={url}
	class="btn btn-neutral flex flex-row items-center justify-start gap-4 py-6 text-xl font-semibold transition-all rounded-[0]"
>
	<Github class="h-9 w-9" /> {text}
</a>
