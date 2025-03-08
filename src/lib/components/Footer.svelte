<script lang="ts">
    import {SvelteDate} from 'svelte/reactivity'
    let date = new SvelteDate();
    
    $effect(() => {
		const interval = setInterval(() => {
			date.setTime(Date.now());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="flex flex-row w-full h-auto min-h-16 justify-center items-center border-t-2 border-primary px-4">
    <div class="font-light flex flex-col w-full justify-start">
        <span>
            Made with ❤️ and is still floating today.
        </span>
        <span>
            Current time: {date.toLocaleTimeString()}
        </span>
    </div>
</div>