<script>
	import { Github } from '@lucide/svelte';
	import toast from '@natoune/svelte-daisyui-toast';
  let { text, url } = $props()

  const onclick = async () => {
    toast.info("Logging you in...")
  }
</script>

<a
	href={url} {onclick}
	class="btn btn-neutral flex flex-row items-center justify-start gap-4 py-6 text-xl font-semibold transition-all rounded-[0]"
>
	<Github class="h-9 w-9" /> {text}
</a>
