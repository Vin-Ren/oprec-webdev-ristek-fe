<script lang="ts">
    import {dataTheme} from '$lib/data-theme';
</script>

<div class="flex flex-col w-full h-24 justify-center items-center">
    <div class="font-bold">
        Select Theme
        <select bind:value={$dataTheme} class="select select-primary w-[120px]">
                <option value="system">Auto</option>
                <option value="emerald">Light Mode</option>
                <option value="dracula">Dark Mode</option>
        </select>
    </div>
</div>