<script>

	import NavItem from "./NavItem.svelte";

</script>
<div class="flex py-1 w-full items-center justify-center border-b-2 border-primary fixed z-10 backdrop-blur-md">
	<nav class="flex flex-row w-full">
        <a href="/">
            <div class="logo flex flex-row justify-center items-center h-full mx-3 mb-1 group transition-all">
                <img src="logo.png" alt="Logo" class="w-14 group-hover:opacity-80 transition-all duration-300"/> 
				<span class="font-serif font-bold text-3xl group-hover:opacity-80 transition-all duration-300">Quix</span>
            </div>
        </a>
		<ul class="flex-1 flex flex-row w-full gap-6 justify-end items-center mr-3">
			<NavItem path="/" title="Main Page"/>
			<NavItem path="/postprocess-login" title="User data"/>
		</ul>
	</nav>
</div>
