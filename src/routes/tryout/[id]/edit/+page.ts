import { type Load, redirect } from "@sveltejs/kit"
import { get } from "svelte/store"
import auth from "../../../../stores/auth"
import { PUBLIC_BASE_API_URL } from "$env/static/public";

export const load: Load = async ({ params }) => {
  if (get(auth)?.loggedId === false) return redirect(302, '/login')

  let res = await fetch(`${PUBLIC_BASE_API_URL}/tryout/${params.id}/details`, {
    method: 'GET',
    credentials: 'include'
  });

  if (res.ok) {
    const data = await res.json();
    console.log(data)
    return { tryout: data.tryout };
  } else {
    return { tryout: null };
  }
}
