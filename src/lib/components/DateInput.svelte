<script lang="ts">
  let {bindedValue = $bindable(new Date()), ...props} = $props()
  let dateString = $state((new Date(bindedValue)).toISOString().slice(0, 16))
  let x = $derived(new Date(dateString) || new Date())

  $effect(()=>{
    bindedValue = x
  })
</script>
<input type="datetime-local" bind:value={dateString} {...props}>
