<script lang="ts">
    import { page } from '$app/stores';  
    let {path, title} = $props()
</script>

<li>
    <a class="text-lg font-medium hover:opacity-80 transition group" href={path}>
        {title}
        {#if $page.url.pathname == path}
        <span class="block mx-[-5%] max-w-[110%] transition-all duration-500 h-[3px] bg-accent"></span>
        {:else}
        <span class="block mx-[-5%] max-w-0 group-hover:max-w-[110%] transition-all duration-500 h-[3px] bg-accent"></span>
        {/if}
    </a>
</li>