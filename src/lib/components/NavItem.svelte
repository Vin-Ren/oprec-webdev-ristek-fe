<script lang="ts">
    import { page } from '$app/state';
    let {path, title} = $props()
</script>

<li>
    <a class="text-lg font-medium hover:opacity-80 transition-all duration-300 group {page.url.pathname==path? 'text-accent' : ''} hover:text-accent" href={path}>
        {title}
    </a>
</li>