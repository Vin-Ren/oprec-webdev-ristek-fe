<script>
	import NavItem from "./NavItem.svelte";
    import dataTheme from '../../stores/data-theme';
    import { Moon, Sun } from '@lucide/svelte'
</script>
<div class="flex py-1 w-full items-center justify-center border-b-2 border-primary fixed z-10 backdrop-blur-md">
	<div class="flex flex-row w-full mx-4 gap-4">
        <a href="/">
            <div class="logo flex flex-row justify-center items-center h-full mb-1 group transition-all">
                <img src="logo.png" alt="Logo" class="w-14 group-hover:opacity-80 transition-all duration-300"/> 
				<span class="font-serif font-bold text-3xl group-hover:opacity-80 transition-all duration-300 max-sm:hidden">Quix</span>
            </div>
        </a>
		<div class="flex w-fit justify-center items-center">
			<button 
				class="transition-all w-8 h-8 flex justify-center items-center" 
				onclick={()=>{
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
		<ul class="flex-1 flex flex-row w-full gap-6 justify-end items-center mr-3">
			<NavItem path="/" title="Home"/>
			<NavItem path="/user" title="Dashboard"/>
			<!-- <NavItem path="/postprocess-login" title="User data"/> -->
		</ul>
		
	</div>
</div>
