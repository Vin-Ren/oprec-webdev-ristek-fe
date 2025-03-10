<script lang="ts">
  import { PUBLIC_BASE_API_URL } from "$env/static/public";
  import DateInput from "$lib/components/DateInput.svelte";
	import { goto } from "$app/navigation";
	import type { CreateTryoutParams } from "$lib/types/tryout";
	import toast from "@natoune/svelte-daisyui-toast";

  let {
    name,
    description,
    opensAt,
    closesAt,
    duration,
    visibility,
    passphrase
  }: CreateTryoutParams = $state({
    name: "",
    description: "",
    opensAt: new Date(Date.now()),
    closesAt: new Date(Date.now()),
    duration: 3600,
    visibility: "PRIVATE",
    passphrase: ""
  });

  const create = async (e) => {
    e.preventDefault()
    const res = await fetch(`${PUBLIC_BASE_API_URL}/tryout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name,
        description,
        opensAt,
        closesAt,
        duration,
        visibility,
        passphrase
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Error:', errorData);
      toast.error(`Something went wrong when trying to create a tryout!\nError: ${errorData?.error?.[0].message || "No Error Message."}`)
    } else {
      // handle success (optional)
      const responseData = await res.json();
      toast.success("Successfully created a tryout!")
      goto(`/tryout/${responseData.tryout.id}`)
    }
  }

</script>
<div class="max-w-lg mx-auto min-w-[80%] mt-10">
  <div class="border-2 p-4 mb-8 border-primary">
    <h2 class="text-2xl font-bold text-start mb-4">Create a Tryout</h2>
    
    <form onsubmit={create} class="">
      <div class="grid max-sm:grid-cols-1 md:grid-cols-2 gap-4 ">
  
        <fieldset class="fieldset mb-4">
          <legend class="fieldset-legend">What is the tryout's name?</legend>
          <input type="text" bind:value={name} class="input input-bordered w-full rounded-[0]" required />
          <p class="fieldset-label">Required</p>
        </fieldset>
    
        <fieldset class="fieldset mb-4">
          <legend class="fieldset-legend">Description:</legend>
          <textarea bind:value={description} class="textarea textarea-bordered w-full rounded-[0]" required></textarea>
          <p class="fieldset-label">Optional</p>
        </fieldset>
    
        <fieldset class="fieldset mb-4">
          <legend class="fieldset-legend">Opens At:</legend>
          <DateInput bindedValue={opensAt} class="input w-full rounded-[0]" />
          <p class="fieldset-label">Required, local time</p>
        </fieldset>
    
        <fieldset class="fieldset mb-4">
          <legend class="fieldset-legend">Closes At:</legend>
          <DateInput bindedValue={closesAt} class="input w-full rounded-[0]" />
          <p class="fieldset-label">Required, local time</p>
        </fieldset>
    
        <fieldset class="fieldset mb-4">
          <legend class="fieldset-legend">Duration (seconds):</legend>
          <input type="number" bind:value={duration} min="1" class="input input-bordered w-full rounded-[0]" required />
          <p class="fieldset-label">Must be greater than 0</p>
        </fieldset>
    
        <fieldset class="fieldset mb-4">
          <legend class="fieldset-legend">Visibility:</legend>
          <select bind:value={visibility} class="select select-bordered w-full rounded-[0]">
            <option value="PUBLIC">Public</option>
            <option value="UNLISTED">Unlisted</option>
            <option value="PRIVATE">Private</option>
          </select>
          <p class="fieldset-label">Select who can see this tryout.</p>
        </fieldset>
    
        <fieldset class="fieldset mb-6">
          <legend class="fieldset-legend">Passphrase:</legend>
          <input type="text" bind:value={passphrase} class="input input-bordered w-full rounded-[0]" />
          <p class="fieldset-label">Optional</p>
        </fieldset>
      </div>
      
      <div class="form-control">
        <button type="submit" class="btn btn-primary w-full rounded-[0]">Create Tryout</button>
      </div>
    </form>
  </div>
</div>
