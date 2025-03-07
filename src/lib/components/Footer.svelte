<script lang="ts">
    import dataTheme from '../../stores/data-theme';
    import { Moon, Sun } from '@lucide/svelte'
</script>

<div class="flex flex-col w-full h-16 justify-center items-center border-t-2 border-primary">
    <div class="font-bold flex flex-row w-full justify-end px-4">
        <button class="transition-all" onclick={()=>{
            if ($dataTheme=='cupcake') $dataTheme = 'dracula';
            else $dataTheme = 'cupcake';
        }}>
            {#if $dataTheme=='cupcake'}
            <Sun/>
            {:else}
            <Moon/>
            {/if}
        </button>
    </div>
</div>